# red-packet

[![Build Status](https://travis-ci.org/Soontao/red-packet.svg?branch=master)](https://travis-ci.org/Soontao/red-packet) [![Coverage Status](https://coveralls.io/repos/github/Soontao/red-packet/badge.svg?branch=master)](https://coveralls.io/github/Soontao/red-packet?branch=master)

一个类似于微信红包的library，给定一个红包的大小，然后随机获取红包

usage

```javascript
const lib = require('red-packet');
const WholePacket = lib.WholePacket;
const getRandomMoney = lib.getRandomMoney;

const TOTAL_MONEY = 100;
const TOTAL_NUMBER = 10;
const wholePacket = new WholePacket(TOTAL_MONEY, TOTAL_NUMBER);
const packets = [];

while (wholePacket._remainNumber > 0) {
  // get a random money packet and push in a list
  packets.push(getRandomMoney(wholePacket));
}

```