import { getOrder } from "../../services/apiRestaurant";

export async function loaderOrder({ params }) {
    const order = await getOrder(params.orderId);
    return order;
  }

