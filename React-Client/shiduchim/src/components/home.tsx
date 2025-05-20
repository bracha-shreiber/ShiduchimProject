// import { Button, Box } from "@mui/material";
// // import UpdateUser from "./user/updateUser";
// import { useNavigate } from "react-router-dom";
// // import Avatar from "./user/avatar";
// import { IsLoggedIn, userContext } from "../App";
// import { User } from "../types/user";
// import { useContext, useState } from "react";
// import Login from "./user/login";
// import UpdateUser from "./user/updateUser";

// const Home = () => {
//     const { LoggedIn, setLoggedIn } = useContext(IsLoggedIn);
//     const [mode, setMode] = useState<'signIn' | 'signUp'>('signIn');
//     const [update, setUpdate] = useState<boolean>(false);
//     const { userDispatch } = useContext(userContext);
//     const navigate = useNavigate();
//     const [sign, setSign] = useState<boolean>(false);

//     return (
//         <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: 2, marginTop: 8 }}>
//             <Box sx={{ display: 'flex', justifyContent: 'flex-start', left: '3%', position: 'fixed', top: 60 }}>
//                 {!LoggedIn && (
//                     <>
//                         <Button variant="contained" onClick={() => { setSign(true); setMode('signIn') }} sx={{ backgroundColor: '#FF0000', color: '#FFFFFF' }}>Sign In</Button>
//                         <Button variant="contained" onClick={() => { setSign(true); setMode('signUp') }} sx={{ backgroundColor: '#FF0000', color: '#FFFFFF', marginLeft: 1 }}>Sign Up</Button>
//                     </>
//                 )}
//                 {LoggedIn && (
//                     <Box>
//                         <Button variant="contained" onClick={() => setUpdate(true)} sx={{ backgroundColor: '#FF0000', color: '#FFFFFF', marginLeft: 1 }}>Update</Button>
//                         <Button variant="contained" onClick={() => {
//                             navigate("/"); setLoggedIn(false); userDispatch({ type: "LOGOUT", data: {} as User });
//                         }} sx={{ backgroundColor: '#FF0000', color: '#FFFFFF', marginLeft: 1 }}>Sign Out</Button>
//                     </Box>
//                 )}
//             </Box>
//             {sign && <Login state={mode === "signIn"} setClose={setSign}></Login>}
//             {update && <UpdateUser update={update} closeForm={() => setUpdate(false)} />}
//             {/* {LoggedIn && <Avatar />} */}
//         </Box>
//     );
// }
// export default Home;
