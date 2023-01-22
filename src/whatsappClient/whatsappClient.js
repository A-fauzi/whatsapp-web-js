// Feature
import callBot from "./feature/callBot.js";
import mentionAllGroup from "./feature/mentionAllGroup.js";
import command from "./feature/command/command.js";
import gpt from "./feature/chatgpt/gpt.js";
import downloadMedia from "./feature/media/downloadMedia.js";

import qrcode from "qrcode-terminal";
import whatsappweb from "whatsapp-web.js";
import { sendImgUrl } from "./feature/media/ImageFromUrl.js";
import { AnonChat } from "./feature/anon-message/index.js";

const { Client, LocalAuth } = whatsappweb;

const client = new Client({
  authStrategy: new LocalAuth(),
});

export default async function whatsappClient() {
  // Client
  client.on("qr", (qr) => {
    qrcode.generate(qr, { small: true });
  });

  client.on("ready", (msg) => {
    console.log("Client is ready!");
  });

  // Feature
  callBot(client);
  mentionAllGroup(client);
  command(client);
  gpt(client);
  downloadMedia(client);
  sendImgUrl(client);
  AnonChat(client);

  client.initialize();
}
