

import Layout from './pages/layout';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { links } from "./utils/links";
import Page404 from './components/error/Page404';
import MainDashboard from './pages/Dashboard';
import RootPage from './pages/Root';
import SignIn from './pages/SignIn';

function App() {

  const router = createBrowserRouter([
    {
      // parent route component
      element: <RootPage />,
      // child route components
      errorElement: <Page404 />,
      children: [
        {
          path: links.dashboard,
          element: <Layout><MainDashboard/></Layout>,
        },
        {
          path: links.files,
          element: <Layout><MainDashboard/></Layout>,
        },

        {
          path: links.auth,
          element: <SignIn/>,
        },
      ],
    },
  ]);

  

  return <RouterProvider router={router} />;

}

export default App;
