import data from "./data.js";

async function command(client) {
  client.on("message", (message) => {
    if (message.body === "1") {
      message.reply(data);
    }
  });
}

export default command;
