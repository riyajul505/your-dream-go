import {
    createBrowserRouter
} from "react-router-dom";
import Error from "../Components/Error";
import PrivateRoute from "../Components/PrivateRoute";
import Root from "../Layout/Root";
import AddTouristSpot from "../Pages/AddTouristSpot/AddTouristSpot";
import AllSpot from "../Pages/AllSpot/AllSpot";
import ViewDetails from "../Pages/AllSpot/ViewDetails";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MyList from "../Pages/MyList/MyList";
import Update from "../Pages/MyList/Update";
import Register from "../Pages/Register/Register";
import DynamicCountry from "../SpecificCountry/DynamicCountry";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement: <Error/>,
      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/login',
          element: <Login/>,
        },
        {
          path: '/register',
          element: <Register/>
        },
        {
          path: '/addTouristSpot',
          element: <PrivateRoute><AddTouristSpot/></PrivateRoute>
        },
        {
          path: '/mylist',
          element: <PrivateRoute><MyList/></PrivateRoute>
        },
        {
          path: '/allSpot',
          element: <AllSpot/>,
          loader : ()=> fetch('http://localhost:5000/allspot')
        },
        {
          path: '/youchoose/:id',
          element: <PrivateRoute><ViewDetails/></PrivateRoute>,
          loader : ({params}) => fetch(`http://localhost:5000/youchoose/${params.id}`)
        },
        {
          path: '/mylist/update/:id',
          element: <Update/>,
          loader: ({params})=> fetch(`http://localhost:5000/youchoose/${params.id}`)
        },
        {
          path:'/selectedCountry/:name',
          element: <PrivateRoute><DynamicCountry/></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/selectedCountry/${params.name}`)
        }
      ]
    },
  ]);


export default router;