const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (
      typeof position === "number" &&
      position > 0 &&
      position <= this.chain.length
    ) {
      this.chain.splice(position - 1, 1);
      return this;
    } else {
      this.chain.length = 0;
      throw Error;
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const res = this.chain;
    this.chain = [];
    return res.join("~~");
  },
};

module.exports = chainMaker;
