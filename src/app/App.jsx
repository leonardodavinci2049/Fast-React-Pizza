import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../pages/Home';
import Menu from '../features/menu/Menu';
import Cart from '../features/cart/Cart';
import Order from '../features/order/Order';

import CreateOrder from '../features/order/CreateOrder';
import { action as createOrderAction } from '../features/order/createOrderAction';

import AppLayout from '../ui/AppLayout';
import Error from '../ui/Error';
import { loaderMenu } from '../features/menu/loaderMenu';
import { loaderOrder } from '../features/order/loaderOrder';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },

      {
        path: '/menu',
        element: <Menu />,
        loader: loaderMenu,
        errorElement: <Error />,
      },
      { path: '/cart', element: <Cart /> },
      {
        path: '/order/new',
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: '/order/:orderId',
        element: <Order />,
        loader: loaderOrder,
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
