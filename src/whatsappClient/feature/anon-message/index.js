export const AnonChat = (client) => {
  client.on("message", async (msg) => {
    if (msg.body.startsWith("!sendto ")) {
      // Direct send a new message to specific id
      let number = msg.body.split(" ")[1];
      let messageIndex = msg.body.indexOf(number) + number.length;
      let message = msg.body.slice(messageIndex, msg.body.length);
      number = number.includes("@c.us") ? number : `${number}@c.us`;
      let chat = await msg.getChat();
      chat.sendSeen();

      client.sendMessage(number, message);
    }
  });
};
