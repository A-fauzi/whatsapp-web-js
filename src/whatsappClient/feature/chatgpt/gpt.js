import data from "./data.js";

async function gpt(client) {
  client.on("message", (message) => {
    if (message.body === "2") {
      message.reply(data);
    }
  });
}

export default gpt;
