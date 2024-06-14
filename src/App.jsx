import React from 'react'
import Navbar from './Components/Shared/Navbar'
import Body from './Components/Shared/Body';
import Mails from './Components/Shared/Mails';
import Mail_Read from './Components/Shared/Mail_Read';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ComposeMail from './Components/Shared/ComposeMail';


const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <Mails />,
        },
        {
          path: "/mail/:id",
          element: <Mail_Read/>
        },
      ],
    },
  ]);
  return (
    <div>
      <Navbar />
      <RouterProvider router={router} />
      <ComposeMail/>
    </div>
  );
}

export default App