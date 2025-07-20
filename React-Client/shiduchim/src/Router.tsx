import {  createBrowserRouter} from "react-router-dom";
import HomePage from "./components/HomePage";
import UserFiles from "./components/files/userFiles";
import Login from "./components/user/login";
import Register from "./components/user/register";
import AboutComponent from "./components/about";
import Concat from "./components/concat";
import FileUploader from "./components/uploadFile";
import SharedFiles from "./components/files/sharedFiles";
import OpenResumes from "./components/files/openFiles";
// import DeleteResumeFile from "./components/files/deleteResumeFile";

export const RouterApp = createBrowserRouter([
    
    {path:"/",element:<HomePage></HomePage>},
    {path:"/userFiles",element:<UserFiles></UserFiles>},
    {path:"/signin",element:<Login></Login>},
    {path:"/signup",element:<Register/>},
    {path:"/about",element:<AboutComponent/>},
    {path:"/contact",element:<Concat/>},
    {path:"/uploadfile",element:<FileUploader/>},
    {path:"/sharedFiles",element:<SharedFiles/>},
    {path:"/openResumes",element:<OpenResumes/>},
    // {path:"/deleteResumeFile",element:<DeleteResumeFile/>}
    

]
)
