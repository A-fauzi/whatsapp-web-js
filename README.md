# Code message whatsapp

```javascript
client.on("message", (message) => {
  if (message.body === "!ping") {
    message.reply("pong");
  }
});
```

```javascript
client.on("message", (message) => {
  if (message.body === "!ping") {
    client.sendMessage(message.from, "pong");
  }
});
```

```javascript
client.on("message", async (msg) => {
  const mentions = await msg.getMentions();

  for (let contact of mentions) {
    console.log(`${contact.pushname} was mentioned`);
  }
});
```

######Mention contacts that send you a message

```javascript
client.on("message", async (msg) => {
  const chat = await msg.getChat();
  const contact = await msg.getContact();

  await chat.sendMessage(`Hello @${contact.id.user}`, {
    mentions: [contact],
  });
});
```

###### Mention everyone

```javascript
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

    await chat.sendMessage(text, { mentions });
  }
});
```

# Command

> - `!zi` : Menggunakan bot
> - `!everyone` : Tag all member group
