// Callbot
async function callBot(client) {
  client.on("message", (message) => {
    if (message.body === "!zi") {
      const feature = listFeature();
      message.reply(feature);
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

module.exports = callBot;
