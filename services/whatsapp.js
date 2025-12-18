import axios from "axios";

export const sendWhatsApp = async (order) => {
  await axios.post(
    "https://graph.facebook.com/v19.0/YOUR_PHONE_ID/messages",
    {
      messaging_product: "whatsapp",
      to: process.env.ADMIN_PHONE,
      type: "text",
      text: {
        body: `New Order 🔥
Name: ${order.name}
Product: ${order.product}
Amount: ₹${order.amount}`
      }
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.WHATSAPP_TOKEN}`
      }
    }
  );
};
