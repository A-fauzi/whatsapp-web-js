import whatsappClient from "./whatsappClient/whatsappClient.js";

export default function main() {
  try {
    whatsappClient();
  } catch (error) {
    console.error(error);
  }
}
