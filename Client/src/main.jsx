import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Home from './pages/Home';
// import Login from './pages/Login';
import Signup from './pages/Signup';
import Error from './pages/Error';
import Detail from './pages/Detail.jsx';
import Success from './pages/Success.jsx';
import OrderHistory from './pages/OrderHistory.jsx';
import SignIn from './pages/SignIn.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true, 
        element: <Home /> 
      }, {
        path: '/login',
        element: <SignIn />
      }, {
        path: '/signup',
        element: <Signup />
      }, {
        path: '/products/:id',
        element: <Detail />
      },{
        path: '/success',
        element: <Success />
      }, {
        path: '/orderHistory',
        element: <OrderHistory />
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)