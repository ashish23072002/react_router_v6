import {
  createBrowserRouter,
  // createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Movies from "./pages/Movies";
import AppLayout from "./components/Layout/AppLayout";
import './App.css'
import ErrorPage from "./pages/ErrorPage";

const App = () => {
  //Two way to use Route
  //  Traditional way of using  createRoutesFromElements
  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route>
  //       <Route path="/" element={<Home />} />
  //       <Route path="/about" element={<About />} />
  //       <Route path="/movies" element={<Movies />} />
  //       <Route path="/contact" element={<Contact />} />
  //     </Route>
  //   )
  // );

  //  Lates way of using  createBrowserRouter

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement:<ErrorPage/>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/movies",
          element: <Movies />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
