# Catopia  BOT


## Table Of Contents
- [Catopia  BOT](#catopia--bot)
  - [Table Of Contents](#table-of-contents)
  - [Catopia Airdrop](#catopia-airdrop)
  - [BOT FEATURE](#bot-feature)
  - [Prerequisite](#prerequisite)
  - [Setup \& Configure BOT](#setup--configure-bot)
  - [Update Bot](#update-bot)
  - [Setup Session](#setup-session)
  - [Note](#note)
  - [CONTRIBUTE](#contribute)
  - [SUPPORT](#support)

## Catopia Airdrop
New Airdrops : Catopia
🪂 Register : https://t.me/catopia_game_bot/catopia?startapp=CatRefIdCD81AFA2
🐱🌱Plant trees, upgrade pets, complete quests, invite friends and become the best

## BOT FEATURE

- Auto Plant Seed
- Auto Buy Seed
- Auto Harvest
- Auto Claim Mission
- Auto Buy Chest
- Auto Buy Lands
- Auto Upgrade Pet 
- Auto Claim Gold
- Multi Account With Proxy Support

## Prerequisite

- Git
- Node JS
- TELEGRAM_APP_ID & TELEGRAM_APP_HASH Get it from [Here](https://my.telegram.org/auth?to=apps)
- Catopia Account , Create [Here](https://t.me/catopia_game_bot/catopia?startapp=CatRefIdCD81AFA2) ,join and claim join reward, also don't forget to complete mandatory missions some completable mission.

## Setup & Configure BOT

1. clone project repo `git clone https://github.com/Widiskel/catopia-bot.git` and cd to project dir `cd catopia-bot`
2. run `npm install`
3. run `npm i telegram@2.22.2`
4. run `npm run setup`.
5. To configure the app, run `nano src/config/config.js` and add your telegram app id and hash there.
6. To configure the Proxy, run `nano src/config/proxy_list.js` and add your proxy list there, it currently only support https proxy.
7. to start the app run `npm run start`.

## Update Bot

To update bot follow this step :
1. run `git pull` or `git pull --rebase` , if error run `git stash && git pull`
2. run `npm update`
3. start the bot

## Setup Session

1. run bot `npm run start`
2. choose option 1 create session
3. enter session name
4. enter your phone number starting with countrycode ex : `+628xxxxxxxx`
5. after creating sessions, choose 3 start bot
6. if something wrong with your sessions, reset sessions first, to cancel running bot press `ctrl+c` twice, and start again [from No 1.](#setup-session).

## Note

This bot using telegram sessions. if you ever use one of my bot that use telegram sessions, you can just copy the sessions folder to this bot. Also for the telegram APP ID and Hash you can use it on another bot.

if you got error `Invalid ConstructorId` try to run this ```npm i telegram@2.22.2```

## CONTRIBUTE

Feel free to fork and contribute adding more feature thanks.

## SUPPORT

want to support me for creating another bot ?
**star** my repo or buy me a coffee on

EVM : `0x1f0ea6e0b3590e1ab6c12ea0a24d3d0d9bf7707d`

SOLANA : `3tE3Hs7P2wuRyVxyMD7JSf8JTAmEekdNsQWqAnayE1CN`
