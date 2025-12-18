import axios from "axios";

export const bookPickup = async (order) => {
  return axios.post(
    "https://track.delhivery.com/api/cmu/create.json",
    {
      shipments: [{
        name: order.name,
        add: order.address,
        phone: order.phone
      }]
    },
    {
      headers: {
        Authorization: `Token ${process.env.DELHIVERY_TOKEN}`
      }
    }
  );
};
