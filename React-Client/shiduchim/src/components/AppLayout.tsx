import Navbar from "./navbar";
import { Outlet } from "react-router-dom";
// import HomePage from "./homePage";
import { Grid } from "@mui/material";
export default () => {
    return (
        <>
            <Navbar />
            {/* <HomePage /> */}
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <Outlet />
                </Grid>
            </Grid>
        </>
    );
}
