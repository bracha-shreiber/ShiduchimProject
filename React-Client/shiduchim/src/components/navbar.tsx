import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button, Box } from "@mui/material";

export default () => {
    return (
        <AppBar position="fixed" sx={{ backgroundColor: '#000000' }}> {/* Black background */}
            <Toolbar>
                <Box sx={{ flexGrow: 1 }} />
                <Button
                    component={Link}
                    to="recipes"
                    sx={{
                        color: '#FFFFFF',
                        backgroundColor: 'transparent',
                        transition: 'color 0.3s',
                        '&:hover': {
                            color: '#FF0000' // Red on hover
                        }
                    }}
                >
                    Recipes
                </Button>

                <Button
                    component={Link}
                    to="home"
                    sx={{
                        color: '#FFFFFF',
                        backgroundColor: 'transparent',
                        transition: 'color 0.3s',
                        '&:hover': {
                            color: '#FF0000' // Red on hover
                        }
                    }}
                >
                    Home
                </Button>

                <Button
                    component={Link}
                    to="about"
                    sx={{
                        color: '#FFFFFF',
                        backgroundColor: 'transparent',
                        transition: 'color 0.3s',
                        '&:hover': {
                            color: '#FF0000' // Red on hover
                        }
                    }}
                >
                    About
                </Button>

            </Toolbar>
        </AppBar>
    );
}
