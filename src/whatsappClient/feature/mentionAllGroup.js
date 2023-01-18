async function mentionAllGroup(client) {
  // Mention everyone
  client.on("message", async (msg) => {
    if (msg.body === "!everyone") {
      const chat = await msg.getChat();

      let text = "";
      let mentions = [];

      for (let participant of chat.participants) {
        const contact = await client.getContactById(participant.id._serialized);

        mentions.push(contact);
        text += `@${participant.id.user} `;
      }

      await chat.sendMessage(`Halo All 👋 \n${text}`, { mentions });
    }
  });
}

module.exports = mentionAllGroup;
