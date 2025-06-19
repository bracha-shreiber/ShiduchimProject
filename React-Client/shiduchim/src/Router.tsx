import {  createBrowserRouter} from "react-router-dom";
import HomePage from "./components/HomePage";
import UserFiles from "./components/user/userFiles";
import Login from "./components/user/login";
import Register from "./components/user/register";
import AboutComponent from "./components/about";
import Concat from "./components/concat";
import FileUploader from "./components/uploadFile";

export const RouterApp = createBrowserRouter([
    
    {path:"/",element:<HomePage></HomePage>},
    {path:"/userFiles",element:<UserFiles></UserFiles>},
    {path:"/signin",element:<Login></Login>},
    {path:"/signup",element:<Register/>},
    {path:"/about",element:<AboutComponent/>},
    {path:"/contact",element:<Concat/>},
    {path:"/uploadfile",element:<FileUploader/>},
    

]
)

