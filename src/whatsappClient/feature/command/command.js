const data = require("./data");

async function command(client) {
  client.on("message", (message) => {
    if (message.body === "1") {
      message.reply(data);
    }
  });
}

module.exports = command;
