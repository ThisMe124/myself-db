const { Database } = require("quickmongo");
function center(u) {
const db = new Database(u);
db.on("ready", async () => { 
console.log("QuickMongo Connected.")
});
db.connect();
return db
}
module.exports = { center }
