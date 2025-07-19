import {
  createBrowserRouter,
  // createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import About from "./pages/About";
import Movies from "./pages/Movies";
import AppLayout from "./components/Layout/AppLayout";
import "./App.css";
import ErrorPage from "./pages/ErrorPage";
import { getMoviesData } from "./api/GetApiData";
import { MoviesDetails } from "./components/UI/MoviesDetails";
import { getMoviesDetails } from "./api/GetMoviesDetails";
import Contact, { contactData } from "./pages/Contact";
import { Home } from "./pages/Home";

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
      errorElement: <ErrorPage />,
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
          loader: getMoviesData,
        },
        {
          path: "/movies/:movieID",
          element: <MoviesDetails />,
          loader: getMoviesDetails,
        },
        {
          path: "/contact",
          element: <Contact/>, 
          action:contactData,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
