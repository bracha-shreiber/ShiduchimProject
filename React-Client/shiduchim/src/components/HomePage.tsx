// import { Button, Box } from "@mui/material";
// import Login from "./user/login";
// import UpdateUser from "./user/updateUser";
// import { useNavigate } from "react-router-dom";
// // import Avatar from "./user/avatar";
// import { IsLoggedIn, userContext } from "../App";
// import { User } from "../types/user";
// import { useContext, useState } from "react";
// import Register from "./user/register";
// import FileUploader from "./uploadFile";

// const HomePage = () => {
//     const { LoggedIn, setLoggedIn } = useContext(IsLoggedIn);
//     const [mode, setMode] = useState<'signIn' | 'signUp'>('signIn');
//     const [update, setUpdate] = useState<boolean>(false);
//     const { userDispatch } = useContext(userContext);
//     const navigate = useNavigate();
//     const [sign, setSign] = useState<boolean>(false);
//     const [showUploader, setShowUploader] = useState<boolean>(false);

//     return (
//         <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: 2, marginTop: 8 }}>
//             <Box sx={{ display: 'flex', justifyContent: 'flex-start', left: '3%', position: 'fixed', top: 60 }}>
//                 {!LoggedIn && (
//                     <>
//                         <Button variant="contained" onClick={() => { setSign(true); setMode('signIn') }} sx={{ backgroundColor: '#722F37', color: '#FFFFFF' }}>Sign In</Button>
//                         <Button variant="contained" onClick={() => { setSign(true); setMode('signUp') }} sx={{ backgroundColor: '#722F37', color: '#FFFFFF', marginLeft: 1 }}>Sign Up</Button>
//                     </>
//                 )}
//                 {LoggedIn && (
//                     <Box>
//                         <Button variant="contained" onClick={() => setUpdate(true)} sx={{ backgroundColor: '#722F37', color: '#FFFFFF', marginLeft: 1 }}>Update</Button>
//                         <Button variant="contained" onClick={() => {
//                             navigate("/"); setLoggedIn(false); userDispatch({ type: "LOGOUT", data: {} as User });
//                         }} sx={{ backgroundColor: '#722F37', color: '#FFFFFF', marginLeft: 1 }}>Sign Out</Button>
//                     </Box>
//                 )}
//                {LoggedIn && 
//                 <Button 
//                     variant="contained" 
//                     onClick={() => setShowUploader(true)} 
//                     sx={{ backgroundColor: '#722F37', color: '#FFFFFF', marginLeft: 1 }}
//                 >
//                     Upload Resume File
//                 </Button>
//             }
//             {showUploader && <FileUploader />}
//             </Box>
//             {sign && mode==="signIn"&&<Login setClose={setSign}></Login>}
//             {sign && mode==="signUp"&&<Register setClose={setSign}></Register>}
//             {update && <UpdateUser update={update} closeForm={() => setUpdate(false)} />}
//             {/* {LoggedIn && <Avatar />} */}
//         </Box>
//     );
// }
// export default HomePage;
"use client"

import { Button, Box, Typography, Container, Paper } from "@mui/material"
// import Login from "./user/login"
import UpdateUser from "./user/updateUser"
import { useNavigate } from "react-router-dom"
// import Avatar from "./user/avatar";
import { IsLoggedIn } from "../App"
// import type { User } from "../types/user"
import { useContext, useState, useEffect } from "react"
// import Register from "./user/register"
import FileUploader from "./uploadFile"
import Header from "./header"
import Sidebar from "./sideBar"

const HomePage = () => {
  
  const { LoggedIn } = useContext(IsLoggedIn)
  // const [mode, setMode] = useState<"signIn" | "signUp">("signIn")
  const [update, setUpdate] = useState<boolean>(false)
  // const { userDispatch } = useContext(userContext)
  const navigate = useNavigate()
  // const [sign, setSign] = useState<boolean>(false)
  const [showUploader] = useState<boolean>(false)
  // const [loaded, setLoaded] = useState<boolean>(false)

  // Add effect to ensure images are properly loaded
  useEffect(() => {
    const preloadImages = async () => {
      const imageUrls = ['/images/cups2.png'];
      
      try {
        const promises = imageUrls.map(url => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = url;
            img.onload = resolve;
            img.onerror = reject;
          });
        });
        
        await Promise.all(promises);
        // setLoaded(true);
      } catch (error) {
        console.error("Failed to load images:", error);
        // Fallback to show the UI even if images fail to load
        // setLoaded(true);
      }
    };
    
    preloadImages();
  }, []);

  return (
    <Box sx={{ display: "flex", flexDirection: "row", minHeight: "100vh", width: "100vw" }}>
  {LoggedIn && <Sidebar />}
  <Box sx={{ flexGrow: 1 }}>
    {/* כאן ייכנס כל התוכן של העמוד שלך (כל מה שכתבת עד עכשיו) */}
  
   <>
   {!LoggedIn && <Header />}
   <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: 0,
        margin: 0,
        minHeight: "100vh",
        width: !LoggedIn ? "100vw" : "calc(100vw - 280px)",
        backgroundColor: "#f5f5f5",
        overflow: "hidden",
        backgroundImage: "url('/images/cups2.png')",
        backgroundSize: "cover",
        // backgroundSize: LoggedIn ? "contain" : "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          zIndex: 0,
        }
      }}
    >
      <Box
        sx={{
          // display: "flex",
          // justifyContent: "flex-start",
          // position: "fixed",
          // top: 20,
          // left: "3%",
          // zIndex: 1000,
          // gap: 1,
          // padding: "16px 24px",
          // borderRadius: 2,
          // // backgroundColor:",
          // boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
          // backdropFilter: "blur(10px)",
          // transition: "all 0.3s ease",
          // "&:hover": {
          //   boxShadow: "0 6px 25px rgba(0, 0, 0, 0.2)",
          // }
        }}
      >
        {/* {!LoggedIn && (
          <>
            <Button
              variant="contained"
              onClick={() => {
                setSign(true)
                setMode("signIn")
              } }
              sx={{
                backgroundColor: "#722F37",
                color: "#FFFFFF",
                borderRadius: 2,
                textTransform: "none",
                fontWeight: "bold",
                padding: "10px 20px",
                "&:hover": {
                  backgroundColor: "#cc0000",
                  transform: "translateY(-2px)",
                },
                boxShadow: "0 4px 12px rgba(255, 0, 0, 0.3)",
                transition: "all 0.3s ease",
              }}
            >
              Sign In
            </Button>
            <Button
              variant="contained"
              onClick={() => {
                setSign(true)
                setMode("signUp")
              } }
              sx={{
                backgroundColor: "#722F37",
                color: "#FFFFFF",
                marginLeft: 1,
                borderRadius: 2,
                textTransform: "none",
                fontWeight: "bold",
                padding: "10px 20px",
                "&:hover": {
                  backgroundColor: "#cc0000",
                  transform: "translateY(-2px)",
                },
                boxShadow: "0 4px 12px rgba(255, 0, 0, 0.3)",
                transition: "all 0.3s ease",
              }}
            >
              Sign Up
            </Button>
          </> */}
        {/* )} */}
        {LoggedIn && (
          <Box sx={{ display: "flex", gap: 2 }}>
            {/* <Button
              variant="contained"
              onClick={() => setUpdate(true)}
              sx={{
                backgroundColor: "#722F37",
                color: "#FFFFFF",
                borderRadius: 2,
                textTransform: "none",
                fontWeight: "bold",
                padding: "10px 20px",
                zIndex: "1000",
                "&:hover": {
                  backgroundColor: "#cc0000",
                  transform: "translateY(-2px)",
                },
                boxShadow: "0 4px 12px rgba(255, 0, 0, 0.3)",
                transition: "all 0.3s ease",
              }}
            >
              Update Profile
            </Button>
            <Button
              variant="contained"
              onClick={() => {
                navigate("/")
                setLoggedIn(false)
                userDispatch({ type: "LOGOUT", data: {} as User })
              } }
              sx={{
                backgroundColor: "#722F37",
                color: "#FFFFFF",
                borderRadius: 2,
                textTransform: "none",
                fontWeight: "bold",
                padding: "10px 20px",
                "&:hover": {
                  backgroundColor: "#cc0000",
                  transform: "translateY(-2px)",
                },
                boxShadow: "0 4px 12px rgba(255, 0, 0, 0.3)",
                transition: "all 0.3s ease",
              }}
            >
              Sign Out
            </Button>
            <Button
              variant="contained"
              onClick={() => setShowUploader(true)}
              sx={{
                backgroundColor: "#722F37",
                color: "#FFFFFF",
                borderRadius: 2,
                textTransform: "none",
                fontWeight: "bold",
                padding: "10px 20px",
                "&:hover": {
                  backgroundColor: "#cc0000",
                  transform: "translateY(-2px)",
                },
                boxShadow: "0 4px 12px rgba(255, 0, 0, 0.3)",
                transition: "all 0.3s ease",
              }}
            >
              Upload Resume
            </Button> */}
          </Box>
        )}
        {showUploader && (
          <Box sx={{ position: "absolute", top: "100%", left: 0, mt: 2, zIndex: 1001 }}>
            <Paper elevation={6} sx={{ p: 2, borderRadius: 2 }}>
              <FileUploader />
            </Paper>
          </Box>
        )}
      </Box>

      {/* Hero Section with Wedding Glasses Background */}
      <Container
        disableGutters
        maxWidth={false}
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* <Box
          sx={{
            width: "100%",
            position: "relative",
            height: "70vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: { xs: 0, md: 4 },
            overflow: "hidden",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
            mx: { xs: 2, sm: 4, md: 8 },
            maxWidth: "1400px",
          }}
        > */}
          {/* <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              // backgroundImage: "url('/images/wedding-glasses.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "brightness(0.5)",
              zIndex: 1,
              transition: "transform 8s ease",
              animation: "zoomEffect 20s infinite alternate",
              "@keyframes zoomEffect": {
                "0%": {
                  transform: "scale(1)",
                },
                "100%": {
                  transform: "scale(1.1)",
                }
              },
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.4) 100%)",
              },
            }} /> */}

          <Paper
            elevation={6}
            sx={{
              position: "relative",
              zIndex: 2,
              backgroundColor: "rgba(255, 255, 255, 0.95)",
              padding: { xs: 3, sm: 4, md: 5 },
              borderRadius: 3,
              maxWidth: { xs: "90%", sm: "80%", md: "70%" },
              backdropFilter: "blur(10px)",
              boxShadow: "0 15px 35px rgba(0, 0, 0, 0.2)",
              transform: "translateY(0)",
              transition: "transform 0.5s ease, box-shadow 0.5s ease",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
              }
            }}
          >
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              sx={{
                fontWeight: 900,
                color: "#722F37",
                textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
                fontSize: { xs: "2.5rem", sm: "3rem", md: "3.5rem" },
                textAlign: "center",
                letterSpacing: "-0.5px",
                mb: 2,
              }}
            >
              Matchmaker Pro
            </Typography>

            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{
                fontWeight: 600,
                color: "#333",
                mb: 3,
                textAlign: "center",
                fontSize: { xs: "1.2rem", sm: "1.4rem", md: "1.6rem" },
              }}
            >
              The Ultimate Resume Management System for Professional Matchmakers
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "1rem", md: "1.1rem" },
                maxWidth: "800px",
                margin: "0 auto",
                color: "#555",
                textAlign: "center",
                lineHeight: 1.7,
              }}
            >
              Streamline your matchmaking business with our comprehensive resume management system. Organize, search,
              and match client profiles with ease. The perfect solution for matchmakers who want to focus on creating
              perfect matches, not paperwork.
            </Typography>

            {!LoggedIn && (
              <Box sx={{ textAlign: "center", mt: 4 }}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => {
                    navigate("/signin"); 
                  } }
                  sx={{
                    backgroundColor: "#722F37",
                    color: "#FFFFFF",
                    borderRadius: 2,
                    textTransform: "none",
                    fontWeight: "bold",
                    padding: "14px 36px",
                    fontSize: "1.1rem",
                    "&:hover": {
                      backgroundColor: "#cc0000",
                      transform: "translateY(-3px)",
                      boxShadow: "0 6px 15px rgba(255, 0, 0, 0.4)",
                    },
                    "&:active": {
                      transform: "translateY(-1px)",
                    },
                    boxShadow: "0 4px 15px rgba(255, 0, 0, 0.3)",
                    transition: "all 0.3s ease",
                  }}
                >
                  Get Started Now
                </Button>
              </Box>
            )}
          </Paper>
        {/* </Box> */}
      </Container>

      {/* Features Section */}
      <Container
        maxWidth="lg"
        sx={{
          py: 8,
          position: "relative",
          zIndex: 2,
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          backdropFilter: "blur(10px)",
          borderRadius: { xs: 0, md: 4 },
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
          mx: { xs: 2, sm: 4, md: "auto" },
          my: 8,
          maxWidth: { xs: "95%", md: "90%" },
        }}
      >
        <Typography
          variant="h3"
          component="h2"
          sx={{
            textAlign: "center",
            mb: 6,
            color: "#333",
            fontWeight: 800,
            position: "relative",
            "&::after": {
              content: '""',
              display: "block",
              width: "60px",
              height: "4px",
              backgroundColor: "#722F37",
              margin: "16px auto",
              borderRadius: "2px",
            }
          }}
        >
          Our Features
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: { xs: 3, md: 4 },
          }}
        >
          <Paper
            elevation={3}
            sx={{
              p: 4,
              borderRadius: 3,
              flex: "1 1 300px",
              maxWidth: "350px",
              transition: "all 0.4s ease",
              position: "relative",
              overflow: "hidden",
              "&:hover": {
                transform: "translateY(-8px)",
                boxShadow: "0 15px 30px rgba(0, 0, 0, 0.15)",
              },
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                width: "5px",
                height: "100%",
                backgroundColor: "#722F37",
              }
            }}
          >
            <Typography variant="h5" component="h3" gutterBottom sx={{
              color: "#722F37",
              fontWeight: 700,
              mb: 2,
              display: "flex",
              alignItems: "center",
              "&::before": {
                content: '"01"',
                fontSize: "0.9rem",
                fontWeight: 900,
                backgroundColor: "#722F37",
                color: "white",
                borderRadius: "50%",
                width: "28px",
                height: "28px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight: "12px",
              }
            }}>
              Organize Resumes
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.7, color: "#555" }}>
              Easily upload, categorize, and search through client resumes. Find the perfect match with our advanced
              filtering system that processes key information automatically. Save hours of manual work with our intelligent document handling.
            </Typography>
          </Paper>

          <Paper
            elevation={3}
            sx={{
              p: 4,
              borderRadius: 3,
              flex: "1 1 300px",
              maxWidth: "350px",
              transition: "all 0.4s ease",
              position: "relative",
              overflow: "hidden",
              "&:hover": {
                transform: "translateY(-8px)",
                boxShadow: "0 15px 30px rgba(0, 0, 0, 0.15)",
              },
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                width: "5px",
                height: "100%",
                backgroundColor: "#722F37",
              }
            }}
          >
            <Typography variant="h5" component="h3" gutterBottom sx={{
              color: "#722F37",
              fontWeight: 700,
              mb: 2,
              display: "flex",
              alignItems: "center",
              "&::before": {
                content: '"02"',
                fontSize: "0.9rem",
                fontWeight: 900,
                backgroundColor: "#722F37",
                color: "white",
                borderRadius: "50%",
                width: "28px",
                height: "28px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight: "12px",
              }
            }}>
              Match Profiles
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.7, color: "#555" }}>
              Our intelligent matching algorithm helps you find compatible profiles based on preferences, interests, and
              background. Create perfect matches with our sophisticated compatibility scoring system backed by years of research.
            </Typography>
          </Paper>

          <Paper
            elevation={3}
            sx={{
              p: 4,
              borderRadius: 3,
              flex: "1 1 300px",
              maxWidth: "350px",
              transition: "all 0.4s ease",
              position: "relative",
              overflow: "hidden",
              "&:hover": {
                transform: "translateY(-8px)",
                boxShadow: "0 15px 30px rgba(0, 0, 0, 0.15)",
              },
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                width: "5px",
                height: "100%",
                backgroundColor: "#722F37",
              }
            }}
          >
            <Typography variant="h5" component="h3" gutterBottom sx={{
              color: "#722F37",
              fontWeight: 700,
              mb: 2,
              display: "flex",
              alignItems: "center",
              "&::before": {
                content: '"03"',
                fontSize: "0.9rem",
                fontWeight: 900,
                backgroundColor: "#722F37",
                color: "white",
                borderRadius: "50%",
                width: "28px",
                height: "28px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight: "12px",
              }
            }}>
              Secure Storage
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.7, color: "#555" }}>
              Keep all your client information safe and secure with our encrypted storage system. Access files anywhere,
              anytime with enterprise-grade security that ensures your clients' sensitive information remains protected.
            </Typography>
          </Paper>
        </Box>
      </Container>

      {/* Testimonials Section */}
      <Container
        maxWidth="lg"
        sx={{
          py: 8,
          position: "relative",
          zIndex: 2,
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          backdropFilter: "blur(10px)",
          borderRadius: { xs: 0, md: 4 },
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
          mx: { xs: 2, sm: 4, md: "auto" },
          mb: 8,
          maxWidth: { xs: "95%", md: "90%" },
        }}
      >
        <Typography
          variant="h3"
          component="h2"
          sx={{
            textAlign: "center",
            mb: 6,
            color: "#333",
            fontWeight: 800,
            position: "relative",
            "&::after": {
              content: '""',
              display: "block",
              width: "60px",
              height: "4px",
              backgroundColor: "#722F37",
              margin: "16px auto",
              borderRadius: "2px",
            }
          }}
        >
          Success Stories
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 4,
          }}
        >
          <Paper
            elevation={2}
            sx={{
              p: 4,
              borderRadius: 3,
              flex: "1 1 300px",
              maxWidth: "500px",
              transition: "all 0.3s ease",
              position: "relative",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0 12px 25px rgba(0, 0, 0, 0.1)",
              },
              "&::before": {
                content: '"❝"',
                position: "absolute",
                top: "20px",
                left: "20px",
                fontSize: "3rem",
                color: "rgba(255, 0, 0, 0.1)",
                fontFamily: "serif",
              }
            }}
          >
            <Typography variant="body1" sx={{ pt: 4, pb: 3, fontStyle: "italic", lineHeight: 1.8 }}>
              "Since implementing Matchmaker Pro, my matchmaking business has increased efficiency by 300%.
              I can now manage twice as many clients with better results. The automatic matching feature
              has led to a 40% increase in successful pairings."
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box
                sx={{
                  width: 50,
                  height: 50,
                  borderRadius: "50%",
                  backgroundColor: "#722F37",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontWeight: "bold",
                  mr: 2
                }}
              >
                SR
              </Box>
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                  Sarah Reynolds
                </Typography>
                <Typography variant="body2" sx={{ color: "#666" }}>
                  Elite Matchmaking Services
                </Typography>
              </Box>
            </Box>
          </Paper>

          <Paper
            elevation={2}
            sx={{
              p: 4,
              borderRadius: 3,
              flex: "1 1 300px",
              maxWidth: "500px",
              transition: "all 0.3s ease",
              position: "relative",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0 12px 25px rgba(0, 0, 0, 0.1)",
              },
              "&::before": {
                content: '"❝"',
                position: "absolute",
                top: "20px",
                left: "20px",
                fontSize: "3rem",
                color: "rgba(255, 0, 0, 0.1)",
                fontFamily: "serif",
              }
            }}
          >
            <Typography variant="body1" sx={{ pt: 4, pb: 3, fontStyle: "italic", lineHeight: 1.8 }}>
              "The secure storage feature gives my clients peace of mind knowing their personal information
              is protected. The intuitive interface made adoption easy for my entire team, and we've seen
              immediate improvements in our workflow."
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box
                sx={{
                  width: 50,
                  height: 50,
                  borderRadius: "50%",
                  backgroundColor: "#722F37",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontWeight: "bold",
                  mr: 2
                }}
              >
                DK
              </Box>
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                  David Kim
                </Typography>
                <Typography variant="body2" sx={{ color: "#666" }}>
                  Perfect Match Consultancy
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Box>
      </Container>

      {/* Call to Action */}
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          position: "relative",
          zIndex: 2,
          mb: 8,
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            backgroundImage: "linear-gradient(135deg, #722F37 0%, #cc0000 100%)",
            padding: { xs: 4, md: 8 },
            borderRadius: { xs: 0, md: 4 },
            textAlign: "center",
            color: "white",
            boxShadow: "0 10px 30px rgba(255, 0, 0, 0.3)",
            mx: { xs: 2, sm: 4, md: 8 },
            maxWidth: "1400px",
            position: "relative",
            overflow: "hidden",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              backgroundImage: "radial-gradient(circle at 20% 150%, rgba(255, 255, 255, 0.15) 0%, rgba(255, 0, 0, 0) 60%)",
            }
          }}
        >
          <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: "bold" }}>
            Ready to Transform Your Matchmaking Business?
          </Typography>
          <Typography variant="h6" component="p" sx={{ maxWidth: "800px", margin: "0 auto", mb: 4, opacity: 0.9 }}>
            Join thousands of professional matchmakers who have revolutionized their business with Matchmaker Pro.
          </Typography>
          {!LoggedIn && (
            <Button
              variant="contained"
              size="large"
              onClick={() => {
                navigate("/signup")
              } }
              sx={{
                backgroundColor: "white",
                color: "#722F37",
                borderRadius: 2,
                textTransform: "none",
                fontWeight: "bold",
                padding: "14px 36px",
                fontSize: "1.1rem",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  transform: "translateY(-3px)",
                },
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
                transition: "all 0.3s ease",
              }}
            >
              Start Your Free Trial
            </Button>
          )}
        </Box>
      </Container>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          color: "white",
          padding: { xs: 4, md: 6 },
          width: "100%",
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          mt: "auto",
        }}
      >
        <Typography variant="body2" sx={{ opacity: 0.7 }}>
          © {new Date().getFullYear()} Matchmaker Pro. All rights reserved.
        </Typography>
      </Box>

      {/* Modal components */}
      {/* {sign && mode === "signIn" && <Login></Login>} */}
      {/* {sign && mode === "signUp" && <Register setClose={setSign}></Register>} */}
      {update && <UpdateUser update={update} closeForm={() => setUpdate(false)} />}
        {/* {LoggedIn && <Sidebar />} */}
    </Box></>
    </Box>
</Box>
  )
}

export default HomePage