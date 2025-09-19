import{createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom"
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Movie } from "./pages/Movie";
import { Contact } from "./pages/Contact";
import AppLayout from "./components/layout/AppLayout";
import { Errorpage } from "./pages/ErrorPage";
import { GetApiData } from "./api/GetApiData";
const App=()=>{

  const router = createBrowserRouter([
    {
      path: "/",
      element:<AppLayout/>,
      errorElement:<Errorpage/>,
      children:
      [
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/about",
          element:<About/>
        },
        {
          path:"/movie",
          element:<Movie/>,
          loader: GetApiData,
        },
        {
          path:"/contact",
          element:<Contact/>
        },
      ]
    }
    
  ]);

  //Another way to create above is using object and below is using jsx

  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route>
  //       <Route path="/" element={<Home/>}/>
  //       <Route path="/about" element={<About/>}/>
  //       <Route path="/contact" element={<Contact/>}/>
  //       <Route path="/movie" element={<Movie/>}/>
  //     </Route>

  //   )
  // );


  return <RouterProvider router={router}/>
};
export default App;