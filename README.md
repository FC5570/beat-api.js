# beat.js

A wrapper for https://beat-api.herokuapp.com/

### Installation

NPM -

```
npm i beat.js
```

Yarn -

```
yarn add beat.js
```

### Basic Usage

```
const API = require("beat.js")
const api = new API()
```

### Functions

| Functions     | Paramters | Description                                                                                      |
| ------------- | --------- | ------------------------------------------------------------------------------------------------ |
| `emergency()` | text      | Generates an emergency meeting image. Text is the text you want. Example: https://prnt.sc/zeqasq |
| `weather()`   | city      | Get the weather for a city.                                                                      |
| `shorten()`   | url       | Shorten a url.                                                                                   |
| `cat()`       | none      | Get a random cat image or gif.                                                                   |
| `dog()`       | none      | Get a random dog image                                                                           |
| `roast()`     | none      | Get a random roast                                                                               |

### Examples

Cat endpoint:

```
const API = require("beat.js")
const api = new API()

api.cat().then(m => console.log(m)) // {url: 'https://cdn2.thecatapi.com/images/8oufxfuHp.png'}
```

### All functions return a promise, make sure to resolve them. If you need any help, contact Beatzoid#8010 or FC#5104 on Discord.
