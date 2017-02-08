const assert = require('assert');
const lib = require('../');
const BigDecimal = require('big.js');
const WholePacket = lib.WholePacket;
const getRandomMoney = lib.getRandomMoney;
const MIN_MONEY = lib.MIN_PACKET_MONEY;
const fs = require('fs');

describe('#10 ramdom packets', function () {
  const TOTAL_MONEY = 100;
  const TOTAL_NUMBER = 10;
  const wholePacket = new WholePacket(TOTAL_MONEY, TOTAL_NUMBER);
  const packets = [];
  while (wholePacket._remainNumber > 0) {
    packets.push(getRandomMoney(wholePacket));
  }
  it(`should have ${TOTAL_NUMBER} packet`, function () {
    // packets number should equal
    assert.equal(packets.length, TOTAL_NUMBER);
    // random money packet should > 0.01;
    assert.ok(packets[0] > MIN_MONEY);
  })
  it('sum should equal to total', function () {
    let sum = new BigDecimal(0);
    packets.forEach(function (packet) {
      sum = sum.plus(new BigDecimal(packet));
    }, this);
    // must not loss money
    assert.ok(sum.eq(new BigDecimal(TOTAL_MONEY)))
  })
})

describe('#10000 ramdom packets', function () {
  const TOTAL_MONEY = 10000;
  const TOTAL_NUMBER = 10000;
  const wholePacket = new WholePacket(TOTAL_MONEY, TOTAL_NUMBER);
  const packets = [];
  while (wholePacket._remainNumber > 0) {
    packets.push(getRandomMoney(wholePacket));
  }
  it(`should have ${TOTAL_NUMBER} packet`, function () {
    // packets number should equal
    assert.equal(packets.length, TOTAL_NUMBER);
    // random money packet should > 0.01;
    assert.ok(packets[0] > MIN_MONEY);
  })
  it('sum should equal to total', function () {
    let sum = new BigDecimal(0);
    packets.forEach(function (packet) {
      sum = sum.plus(new BigDecimal(packet));
    }, this);
    // must not loss money
    assert.ok(sum.eq(new BigDecimal(TOTAL_MONEY)))
  })
})

describe('#1 million ramdom packets', function () {
  const TOTAL_MONEY = 1000000;
  const TOTAL_NUMBER = 1000000;
  const wholePacket = new WholePacket(TOTAL_MONEY, TOTAL_NUMBER);
  const packets = [];
  while (wholePacket._remainNumber > 0) {
    packets.push(getRandomMoney(wholePacket));
  }
  it(`should have ${TOTAL_NUMBER} packet`, function () {
    // packets number should equal
    assert.equal(packets.length, TOTAL_NUMBER);
    // random money packet should > 0.01;
    assert.ok(packets[0] > MIN_MONEY);
  })
  it('sum should equal to total', function () {
    let sum = new BigDecimal(0);
    packets.forEach(function (packet) {
      sum = sum.plus(new BigDecimal(packet));
    }, this);
    // must not loss money
    assert.ok(sum.eq(new BigDecimal(TOTAL_MONEY)))
  })
})

