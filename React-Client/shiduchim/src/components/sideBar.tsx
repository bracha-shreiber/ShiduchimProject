"use client"

import type React from "react"
import { useState, useContext } from "react"
import { Link, useLocation } from "react-router-dom"
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Typography,
  Divider,
  useMediaQuery,
  useTheme,
  Collapse,
} from "@mui/material"
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  Dashboard as DashboardIcon,
  Description as DescriptionIcon,
  Upload as UploadIcon,
  Person as PersonIcon,
  Info as InfoIcon,
  ContactMail as ContactMailIcon,
  ChevronLeft as ChevronLeftIcon,
  ExpandLess,
  ExpandMore,
  Logout as LogoutIcon,
  Settings as SettingsIcon,
} from "@mui/icons-material"
import { IsLoggedIn, userContext } from "../App"
import type { User } from "../types/user"
// import SearchComponent from "./search-component"
import FileUploader from "./uploadFile"
import { useNavigate } from "react-router-dom"
import SearchComponent from "./files/search"

// Drawer width
const drawerWidth = 280

const Sidebar: React.FC = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))
  const [open, setOpen] = useState(!isMobile)
  const [uploadOpen, setUploadOpen] = useState(false)
  const { LoggedIn, setLoggedIn } = useContext(IsLoggedIn)
  const { userDispatch } = useContext(userContext)
  const navigate = useNavigate()
  const location = useLocation()

  const handleDrawerToggle = () => {
    setOpen(!open)
  }

  const handleLogout = () => {
    navigate("/")
    setLoggedIn(false)
    userDispatch({ type: "LOGOUT", data: {} as User })
  }

  const handleUploadToggle = () => {
    setUploadOpen(!uploadOpen)
  }

  // Check if the current route matches the given path
  const isActive = (path: string) => {
    return location.pathname === path
  }

  // If not logged in, don't render the sidebar
  if (!LoggedIn) return null

  return (
    <>
    <Box
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        bgcolor: '#722F37',
        color: 'white',
        height: '100vh',
        position: 'relative', // או relative, לפי איך אתה רוצה שיתנהג
        // אם fixed, אז תוודא שה-Box של התוכן שלך יש לו פדינג מתאים
      }}
    >
      {/* תכולת הסיידבר */}
    
      {/* Mobile menu button */}
      {isMobile && (
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{
            position: "relative",
            top: 10,
            right: 10,
            zIndex: 1300,
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 1)",
            },
          }}
        >
          <MenuIcon sx={{ color: "#722F37" }} />
        </IconButton>
      )}

      {/* Sidebar */}
      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        open={open}
        onClose={isMobile ? handleDrawerToggle : undefined}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            borderRight: "1px solid rgba(0, 0, 0, 0.08)",
            boxShadow: "4px 0 10px rgba(0, 0, 0, 0.05)",
            backgroundColor: "white",
            direction: "rtl", // RTL support
          },
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
          {/* Header */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: 2,
              backgroundColor: "rgba(255, 0, 0, 0.03)",
            }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontWeight: "bold",
                color: "#722F37",
                textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                letterSpacing: "-0.5px",
              }}
            >
              Matchmaker Pro
            </Typography>
            {isMobile && (
              <IconButton onClick={handleDrawerToggle}>
                <ChevronLeftIcon />
              </IconButton>
            )}
          </Box>

          <Divider />

          {/* Search Component */}
          {/* <Box sx={{ padding: 2 }}>
            <SearchComponent />
          </Box> */}

          <Divider />

          {/* Navigation */}
          <List sx={{ flexGrow: 1, padding: 1 }}>
            <ListItem disablePadding>
              <ListItemButton
                component={Link}
                to="/"
                selected={isActive("/")}
                sx={{
                  borderRadius: 1,
                  mb: 0.5,
                  "&.Mui-selected": {
                    backgroundColor: "rgba(255, 0, 0, 0.08)",
                    "&:hover": {
                      backgroundColor: "rgba(255, 0, 0, 0.12)",
                    },
                  },
                  "&:hover": {
                    backgroundColor: "rgba(255, 0, 0, 0.04)",
                  },
                }}
              >
                <ListItemIcon sx={{ minWidth: 40 }}>
                  <HomeIcon sx={{ color: isActive("/") ? "#722F37" : "inherit" }} />
                </ListItemIcon>
                <ListItemText primary="home page" />
              </ListItemButton>
            </ListItem>

            {/* <ListItem disablePadding>
              <ListItemButton
                component={Link}
                to="/dashboard"
                selected={isActive("/dashboard")}
                sx={{
                  borderRadius: 1,
                  mb: 0.5,
                  "&.Mui-selected": {
                    backgroundColor: "rgba(255, 0, 0, 0.08)",
                    "&:hover": {
                      backgroundColor: "rgba(255, 0, 0, 0.12)",
                    },
                  },
                  "&:hover": {
                    backgroundColor: "rgba(255, 0, 0, 0.04)",
                  },
                }}
              >
                <ListItemIcon sx={{ minWidth: 40 }}>
                  <DashboardIcon sx={{ color: isActive("/dashboard") ? "#722F37" : "inherit" }} />
                </ListItemIcon>
                <ListItemText primary="לוח בקרה" />
              </ListItemButton>
            </ListItem> */}

            <ListItem disablePadding>
              <ListItemButton
                component={Link}
                to="/userFiles"
                selected={isActive("/userFiles")}
                sx={{
                  borderRadius: 1,
                  mb: 0.5,
                  "&.Mui-selected": {
                    backgroundColor: "rgba(255, 0, 0, 0.08)",
                    "&:hover": {
                      backgroundColor: "rgba(255, 0, 0, 0.12)",
                    },
                  },
                  "&:hover": {
                    backgroundColor: "rgba(255, 0, 0, 0.04)",
                  },
                }}
              >
                <ListItemIcon sx={{ minWidth: 40 }}>
                  <DescriptionIcon sx={{ color: isActive("/userFiles") ? "#722F37" : "inherit" }} />
                </ListItemIcon>
                <ListItemText primary="resumes" />
              </ListItemButton>
            </ListItem>
{/* 
            <ListItem disablePadding>
              <ListItemButton
                onClick={handleUploadToggle}
                sx={{
                  borderRadius: 1,
                  mb: 0.5,
                  "&:hover": {
                    backgroundColor: "rgba(255, 0, 0, 0.04)",
                  },
                }}
              >
                <ListItemIcon sx={{ minWidth: 40 }}>
                  <UploadIcon />
                </ListItemIcon>
                <ListItemText primary="upload file" />
                {uploadOpen ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </ListItem>

            <Collapse in={uploadOpen} timeout="auto" unmountOnExit>
              <Box sx={{ padding: 2, backgroundColor: "rgba(0, 0, 0, 0.02)", borderRadius: 1, margin: 1 }}>
                <FileUploader />
              </Box>
            </Collapse> */}

            <ListItem disablePadding>
  <ListItemButton
    component={Link}
    to="/uploadfile"
    selected={isActive("/uploadfile")}
    sx={{
      borderRadius: 1,
      mb: 0.5,
      "&.Mui-selected": {
        backgroundColor: "rgba(255, 0, 0, 0.08)",
        "&:hover": {
          backgroundColor: "rgba(255, 0, 0, 0.12)",
        },
      },
      "&:hover": {
        backgroundColor: "rgba(255, 0, 0, 0.04)",
      },
    }}
  >
    <ListItemIcon sx={{ minWidth: 40 }}>
      <UploadIcon sx={{ color: isActive("/uploadfile") ? "#722F37" : "inherit" }} />
    </ListItemIcon>
    <ListItemText primary="upload file" />
  </ListItemButton>
</ListItem>


            <Divider sx={{ my: 1.5 }} />

            <ListItem disablePadding>
              <ListItemButton
                component={Link}
                to="/about"
                selected={isActive("/about")}
                sx={{
                  borderRadius: 1,
                  mb: 0.5,
                  "&.Mui-selected": {
                    backgroundColor: "rgba(255, 0, 0, 0.08)",
                    "&:hover": {
                      backgroundColor: "rgba(255, 0, 0, 0.12)",
                    },
                  },
                  "&:hover": {
                    backgroundColor: "rgba(255, 0, 0, 0.04)",
                  },
                }}
              >
                <ListItemIcon sx={{ minWidth: 40 }}>
                  <InfoIcon sx={{ color: isActive("/about") ? "#722F37" : "inherit" }} />
                </ListItemIcon>
                <ListItemText primary="about" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton
                component={Link}
                to="/contact"
                selected={isActive("/contact")}
                sx={{
                  borderRadius: 1,
                  mb: 0.5,
                  "&.Mui-selected": {
                    backgroundColor: "rgba(255, 0, 0, 0.08)",
                    "&:hover": {
                      backgroundColor: "rgba(255, 0, 0, 0.12)",
                    },
                  },
                  "&:hover": {
                    backgroundColor: "rgba(255, 0, 0, 0.04)",
                  },
                }}
              >
                <ListItemIcon sx={{ minWidth: 40 }}>
                  <ContactMailIcon sx={{ color: isActive("/contact") ? "#722F37" : "inherit" }} />
                </ListItemIcon>
                <ListItemText primary="contact" />
              </ListItemButton>
            </ListItem>
          </List>

          {/* Footer */}
          <Box sx={{ padding: 2 }}>
            <Divider sx={{ mb: 2 }} />
            {/* <ListItem disablePadding>
              <ListItemButton
                component={Link}
                to="/profile"
                sx={{
                  borderRadius: 1,
                  mb: 0.5,
                  "&:hover": {
                    backgroundColor: "rgba(255, 0, 0, 0.04)",
                  },
                }}
              >
                <ListItemIcon sx={{ minWidth: 40 }}>
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText primary="פרופיל" />
              </ListItemButton>
            </ListItem> */}

            {/* <ListItem disablePadding>
              <ListItemButton
                component={Link}
                to="/settings"
                sx={{
                  borderRadius: 1,
                  mb: 0.5,
                  "&:hover": {
                    backgroundColor: "rgba(255, 0, 0, 0.04)",
                  },
                }}
              >
                <ListItemIcon sx={{ minWidth: 40 }}>
                  <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary="הגדרות" />
              </ListItemButton>
            </ListItem> */}

            <ListItem disablePadding>
              <ListItemButton
                onClick={handleLogout}
                sx={{
                  borderRadius: 1,
                  color: "#722F37",
                  "&:hover": {
                    backgroundColor: "rgba(255, 0, 0, 0.04)",
                  },
                }}
              >
                <ListItemIcon sx={{ minWidth: 40 }}>
                  <LogoutIcon sx={{ color: "#722F37" }} />
                </ListItemIcon>
                <ListItemText primary="sign out" />
              </ListItemButton>
            </ListItem>
          </Box>
        </Box>
      </Drawer>

      {/* Main content - add padding to account for the sidebar */}
      {/* <Box
        component="main"
        sx={{
          flexGrow: 1,
          paddingRight: isMobile || !open ? 0 : `${drawerWidth}px`,
          transition: theme.transitions.create("padding", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
        }}
      >
        {/* Your main content goes here */}
      {/* </Box> */}
      </Box>
    </>
  )
}

export default Sidebar
