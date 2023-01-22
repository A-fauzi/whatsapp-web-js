import { prefix } from "../prefix.js";

// Callbot
export default async function callBot(client) {
  client.on("message", async (message) => {
    if (!prefix.includes(message.body)) {
      const chat = await message.getChat();
      const contact = await message.getContact();

      await chat.sendMessage(
        `Hello @${contact.id.user} | Gunakan command *!zi*`,
        {
          mentions: [contact],
        }
      );
    }
    if (message.body === "!zi") {
      const feature = listFeature();
      message.reply(feature);
    } else {
    }
  });
}

// list feature
function listFeature() {
  const message = `List Feature Comming Soon🚀 \n\n${commandFeature()}\n\nInput angka nya aja ya`;
  return message;
}

function commandFeature() {
  const f1 = "*1*. Daftar perintah";
  const f2 = "*2*. ChatGPT";
  const f3 = "*3*. Download Media";
  const msg = `${f1}\n${f2}\n${f3}`;
  return msg;
}

function f2(params) {}
function f3(params) {}
