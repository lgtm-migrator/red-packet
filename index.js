
class WholePacket {
  /**
   * Creates an instance of WholePacket.
   * 
   * @param {any} totalMoney 总钱数
   * @param {any} totalPacketNumber 总红包数
   * 
   * @memberOf WholePacket
   */
  constructor(totalMoney, totalPacketNumber) {
    this._totalMoney = totalMoney;
    this._remainMoney = totalMoney;
    this._totalNumber = totalPacketNumber;
    this._remainNumber = totalPacketNumber;
  }
}

const MIN_PACKET_MONEY = 0.01;

function getRandomMoney(wholePacket) {
  const remainNumber = wholePacket._remainNumber;
  const remainMoney = wholePacket._remainMoney;
  const minPacket = 0.01;
  const maxPacket = remainMoney / remainNumber * 2;
  if (remainNumber == 1) {
    wholePacket._remainNumber = 0;
    return Math.round(remainMoney * 100) / 100;
  }
  let randomMoney = Math.random() * maxPacket;
  randomMoney = randomMoney <= minPacket ? 0.01 : randomMoney;
  randomMoney = Math.floor(randomMoney * 100) / 100;
  wholePacket._remainMoney -= randomMoney;
  wholePacket._remainNumber -= 1;
  return randomMoney;
}

module.exports = {
  getRandomMoney,
  WholePacket,
  MIN_PACKET_MONEY
}