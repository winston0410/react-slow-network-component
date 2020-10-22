module Helper where

import Prelude
import Data.String.Regex
import Data.String.Regex.Flags
import Data.Maybe
import Data.Array.NonEmpty
import Data.Either
import Data.Traversable

getMime :: String -> String
getMime str = str # getMime' # (fromMaybe "unknown") # addMimeCategory
  where
  addMimeCategory :: String -> String
  addMimeCategory str' = "image/" <> str'

  getMime' :: String -> Maybe (String)
  getMime' str' = do
    mimeRegex <- hush (regex "\\.(\\w*)(?!.*\\.)" noFlags)
    result <- match mimeRegex str'
    nonEmptyArr <- sequence result
    pure $ last $ nonEmptyArr
