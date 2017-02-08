# red-packet

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