const { center } = require("./db.js")
module.exports = class MyselfMongo {
  constructor(url) {
    this.url = url;
    if (!this.url) throw new Error("url is required");
    const dbh = center(url)
    this.db = dbh
  }  
  async set(name, value) {
    await this.db.set(name, value)
  }
  async get(n) {
    return await this.db.get(n) ? await this.db.get(n) : null
  }
  
};
