// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
    /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
      str
    );

export async function createOrderAction({ request }) {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
  
    const order = {
      ...data,
      cart: JSON.parse(data.cart),
      priority: data.priority === 'on',
    };
  
    const errors = {};
    if (!isValidPhone(order.phone))
      errors.phone =
        'Please give us your correct phone number. We might need it to contact you.';
  
    if (Object.keys(errors).length > 0) return errors;
  
    // If everything is okay, create new order and redirect
  
    // const newOrder = await createOrder(order);
  
    // return redirect(`/order/${newOrder.id}`);
  
    return null;
  }
  