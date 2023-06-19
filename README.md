# is-stop-words

is-stop-words is a lightweight npm package that allows you to check whether a word is a stop word or not. Stop words are common words that are often filtered out or ignored in natural language processing tasks such as text analysis, search engines, and machine learning algorithms.

## Installation

You can install the package using npm:

```
npm install is-stop-words
```

## Usage

```
const isStopWord = require('is-stop-words');

console.log(isStopWord('the')); // Output: true
console.log(isStopWord('apple')); // Output: false
```

The `isStopWord` function takes a word as input and returns `true` if it is a stop word, and `false` otherwise.

## Word Formatting

The `isStopWord` function performs the following formatting operations on the input word:

* Trims leading and trailing whitespace.
* Converts the word to lowercase.
* Ignores special characters other than the single quote '.

These formatting operations ensure that the word comparison is case-insensitive and ignores leading/trailing spaces and special characters (except the single quote).