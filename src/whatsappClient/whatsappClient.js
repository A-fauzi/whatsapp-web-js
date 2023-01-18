// Feature
const callBot = require("./feature/callBot");
const mentionAllGroup = require("./feature/mentionAllGroup");
const command = require("./feature/command/command");

const qrcode = require("qrcode-terminal");

const { Client, LocalAuth } = require("whatsapp-web.js");
const client = new Client({
  authStrategy: new LocalAuth(),
});

function whatsappClient() {
  // Client
  client.on("qr", (qr) => {
    qrcode.generate(qr, { small: true });
  });

  client.on("ready", () => {
    console.log("Client is ready!");
  });

  // Feature
  callBot(client);
  mentionAllGroup(client);
  command(client);

  client.initialize();
}

module.exports = whatsappClient();
