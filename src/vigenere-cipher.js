class VigenereCipheringMachine {
  constructor(type = true) {
    this.type = type;
    this.abc = "abcdefghijklmnopqrstuvwxyz";
  }

  encrypt(message, key) {
    if (!message || !key) throw Error("no args");

    message = this.vigenereCipher(message, key, 1);
    return this.type ? message : this.reversedMessage(message);
  }

  decrypt(message, key) {
    if (!message || !key) throw Error("no args");

    message = this.vigenereCipher(message, key, -1);
    return this.type ? message : this.reversedMessage(message);
  }

  transform(value) {
    return value
      .toLowerCase()
      .split("")
      .map((el) => (/^[a-z]/.test(el) ? this.abc.indexOf(el) : el));
  }

  codingDecoding(message) {
    return message
      .map((item) =>
        typeof item === "number" && /^[0-9]/.test(item) ? this.abc[item] : item
      )
      .join("")
      .toUpperCase();
  }

  vigenereCipher(message, key, n) {
    message = this.transform(message);
    key = this.transform(key);

    for (let i = 0, j = 0; i < message.length; i++) {
      if (/^[0-9]/.test(message[i]) && typeof message[i] !== "string") {
        message[i] += key[j] * n;
        j + 1 === key.length ? (j = 0) : j++;
        if (message[i] < 0 || message[i] > 25) message[i] -= 26 * n;
      }
    }
    return this.codingDecoding(message);
  }

  reversedMessage(message) {
    return message.split("").reverse().join("");
  }
}

module.exports = VigenereCipheringMachine;
