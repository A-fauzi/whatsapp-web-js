import data from "./data.js";

async function downloadMedia(client) {
  client.on("message", (message) => {
    if (message.body === "3") {
      message.reply(data);
    }
  });
}

export default downloadMedia;
