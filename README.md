# ✨ Beautify Logs
This library provides to your app a set of pretty and colorful log formats with different importance levels (debug, info, warn, error, and fatal). It even gives you the opportunity to use markdown in your logs.

## 📥 Installation
#### npm
```bash
npm install beautify-logs
```
#### yarn
```bash
yarn add beautify-logs
```
#### pnpm
```bash
pnpm add beautify-logs
```

## 🖐️ Getting Started
#### Import the main class
```js
const { Logger } = require('beautify-logs');
```
#### Instantiate the imported class with your own options [(check their description further below)](#⚙️-logger-options)
```js
const logger = new Logger({ ... });
```
#### Start logging
```js
logger.debug('Lorem Ipsum dolor sit amet.');

logger.info('Lorem Ipsum dolor sit amet.');

logger.warn('Lorem Ipsum dolor sit amet.');

logger.error('Lorem Ipsum dolor sit amet.');

logger.fatal('Lorem Ipsum dolor sit amet.');
```
#### Bonus: how to use the Logger class instance in any of your app file
To do so, simply assign the logger property to the `process` in your index file.
```js
Object.assign(process, {
   logger: logger
});

process.logger.debug('The logger is now usable from anywhere!');
```

## ⚙️ Logger options
You can personalize your logger by providing your own options.

#### 1. The format
You can choose one of the many available formats [(check further below)](#🦋-log-formats-preview). Default value is: 0
```js
const logger = new Logger({
   format: 3
});

logger.debug('This is the third format!');
```
##### Result :
![Third Format Preview](https://media.discordapp.net/attachments/737366213813862521/1106257165230026793/4oApYrir.png?width=548&height=67)

#### 2. The message splitting
You can provide as many messages as you want at once in a single log. This option allows you to wether split those or not. Default value is: false
```js
const logger = new Logger({
   splitMessages: true
});

logger.debug('Hello, World!', 'How is your day going?');
```
##### Result :
![Message Splitting Preview](https://media.discordapp.net/attachments/737366213813862521/1106258869447045202/bbpJ4pbu.png?width=303&height=68)
---
```js
const logger = new Logger({
   splitMessages: false
});

logger.debug('Hello, World!', 'How is your day going?');
```
##### Result :
![Message Splitting Preview](https://media.discordapp.net/attachments/737366213813862521/1106259062619897937/HKKtRMrM.png?width=425&height=57)

#### 3. The message formatting
You can choose to wether format the messages with some Markdown (bold, italic, underline, and URL coloring) or not. Default value is: true
```js
const logger = new Logger({
   formatMessages: true
});

logger.debug('Here is some **bold**, *italic*, __underline__, and https://example.com/');
```
##### Result :
![Message Formatting Preview](https://media.discordapp.net/attachments/737366213813862521/1106261475061936218/mus6989V.png?width=656&height=62)
---
```js
const logger = new Logger({
   formatMessages: false
});

logger.debug('Here is some **bold**, *italic*, __underline__, and https://example.com/');
```
##### Result :
![Message Splitting Preview](https://media.discordapp.net/attachments/737366213813862521/1106261615801798706/QGYtxZaZ.png?width=750&height=66)

## 🦋 Log Formats Preview
#### Format No. 0
![Format No. 0 Preview](https://media.discordapp.net/attachments/737366213813862521/1106264692869058590/CFnfMkva.png?width=334&height=269)
#### Format No. 1
![Format No. 1 Preview](https://media.discordapp.net/attachments/737366213813862521/1106264699739312269/UOZEDnwg.png?width=559&height=271)
#### Format No. 2
![Format No. 2 Preview](https://media.discordapp.net/attachments/737366213813862521/1106264739773939772/x9WD7iNA.png?width=325&height=267)
#### Format No. 3
![Format No. 3 Preview](https://media.discordapp.net/attachments/737366213813862521/1106264841058009098/cK48m0ND.png?width=545&height=270)
#### Format No. 4
![Format No. 4 Preview](https://media.discordapp.net/attachments/737366213813862521/1106264879674953819/U7fT2dfB.png?width=332&height=275)
#### Format No. 5
![Format No. 5 Preview](https://media.discordapp.net/attachments/737366213813862521/1106264922016464956/yjUINxe0.png?width=562&height=269)
#### Format No. 6
![Format No. 6 Preview](https://media.discordapp.net/attachments/737366213813862521/1106265016287637704/AfrGJCTj.png?width=316&height=358)
#### Format No. 7
![Format No. 7 Preview](https://media.discordapp.net/attachments/737366213813862521/1106265181555785768/FzffnRl6.png?width=291&height=266)

* Note: The colors may slightly vary according to your terminal colors.
* More formats will come soon!

## 🔎 Object Inspecting
If an object is given as a message instead of a string, the library will display its whole content using `util.inspect(...)` method.
#### Example
```js
const user = {
   fullName: 'John Doe',
   birthDate: new Date(1989, 8, 22),
   hobbies: [
      'programming',
      'sport'
   ],
   familyMembers: {
      parents: {
         mother: 'Coralie Clark',
         father: 'William Doe'
      }
   }
};

logger.info('A user was created:', user);
```
##### Result :
![Object Inspecting Example](https://media.discordapp.net/attachments/737366213813862521/1106274038256509029/heIpHmJV.png?width=738&height=144)