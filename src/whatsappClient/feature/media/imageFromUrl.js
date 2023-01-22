import tai from "whatsapp-web.js";
const { MessageMedia } = tai;

export const sendImgUrl = (client) => {
  client.on("message", async (msg) => {
    if (msg.body === "!media") {
      const media = await MessageMedia.fromUrl(
        "https://i.pinimg.com/736x/4b/e3/24/4be324470fe55e6d458b6553286a8ad5.jpg"
      );
      msg.reply(media);
    }
  });
};
