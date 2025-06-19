// import { Button, CardContent, Input } from "@mui/material";
// import Card from "@mui/material/Card";
// import React, {  useContext, useState } from "react";
// import Textarea from "@mui/material/TextareaAutosize";
// import { IsLoggedIn } from "../App";
// import Header from "./header";
// import Sidebar from "./sideBar";
// // import { Card, CardContent } from "@/components/ui/card";
// // import { Button } from "@/components/ui/button";
// // import { Input } from "@/components/ui/input";
// // import { Textarea } from "@/components/ui/textarea";

// const Contact = () => {
//   const { LoggedIn } = useContext(IsLoggedIn)
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//   setForm({ ...form, [e.target.name]: e.target.value });
// };


//  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//   e.preventDefault();
//   console.log("Form submitted:", form);

// };


//   return (
//     <>
//      {!LoggedIn && <Header/>}
//     {LoggedIn && <Sidebar/>}
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
//       <Card className="w-full max-w-xl p-6 shadow-2xl rounded-2xl bg-white">
//         <CardContent>
//           <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <Input
//               name="name"
//               type="text"
//               placeholder="Your Name"
//               value={form.name}
//               onChange={handleChange}
//               required
//             />
//             <Input
//               name="email"
//               type="email"
//               placeholder="Your Email"
//               value={form.email}
//               onChange={handleChange}
//               required
//             />
//             <Textarea
//               name="message"
//               placeholder="Your Message"
//               minRows={5}
//               value={form.message}
//               onChange={handleChange}
//               required
//             />
//             <Button type="submit" className="w-full">
//               Send Message
//             </Button>
//           </form>
//         </CardContent>
//       </Card>
//     </div>
//     </>
//   );
// };

// export default Contact;

import { Button, CardContent, Box, TextField } from "@mui/material";
import Card from "@mui/material/Card";
import React, { useContext, useState } from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { IsLoggedIn } from "../App";
import Header from "./header";
import Sidebar from "./sideBar";

const Contact = () => {
  const { LoggedIn } = useContext(IsLoggedIn);
  const [messageSent, setMessageSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessageSent(true);
  };

  return (
    <>
      <Box sx={{ display: 'flex', minHeight: '100vh', maxWidth: '100vw' }}>
        {LoggedIn && <Sidebar />}
        {!LoggedIn && <Header />}
        {messageSent && <h1>the message was sending successfully</h1>}
        {!messageSent &&


          <Box
            component="main"
            sx={{
              width: '100%',
              flexGrow: 1,
              marginLeft: LoggedIn ? '280px' : '0',
              minHeight: '100vh',
              backgroundColor: '#f5f5f5',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 2,
              transition: 'margin-left 0.3s ease',
              '@media (max-width: 960px)': {
                marginLeft: '0',
              },
            }}
          >
            <Card
              sx={{
                width: '100%',
                maxWidth: 2000,
                margin: '0 auto',
                padding: 3,
                boxShadow: '0 8px 32px rgba(114, 47, 55, 0.1)',
                borderRadius: 3,
                backgroundColor: 'white',
                border: '1px solid rgba(114, 47, 55, 0.05)',
              }}
            >

              <CardContent sx={{ padding: 0, width: '100%' }}>
                <Box sx={{ textAlign: 'center', mb: 4 }}>
                  <h2 style={{
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    color: '#722F37',
                    margin: 0,
                    marginBottom: '8px'
                  }}>
                    Contact Us
                  </h2>
                  <Box sx={{
                    width: '60px',
                    height: '3px',
                    backgroundColor: '#722F37',
                    margin: '0 auto'
                  }} />
                </Box>

                <form onSubmit={handleSubmit}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                    <TextField
                      name="name"
                      type="text"
                      placeholder="Your Name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      fullWidth
                      variant="outlined"
                      InputProps={{
                        sx: {
                          borderRadius: 2,
                          '&:hover .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#722F37',
                          },
                          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#722F37',
                            boxShadow: '0 0 0 3px rgba(114, 47, 55, 0.1)',
                          },
                        },
                      }}
                    />

                    <TextField
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      fullWidth
                      variant="outlined"
                      InputProps={{
                        sx: {
                          borderRadius: 2,
                          '&:hover .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#722F37',
                          },
                          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#722F37',
                            boxShadow: '0 0 0 3px rgba(114, 47, 55, 0.1)',
                          },
                        },
                      }}
                    />

                    <TextareaAutosize
                      name="message"
                      placeholder="Your Message"
                      minRows={6}
                      value={form.message}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '8px',
                        border: '2px solid #e0e0e0',
                        fontSize: '16px',
                        fontFamily: 'inherit',
                        resize: 'vertical',
                        transition: 'all 0.3s ease',
                        outline: 'none',
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#722F37';
                        e.target.style.boxShadow = '0 0 0 3px rgba(114, 47, 55, 0.1)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#e0e0e0';
                        e.target.style.boxShadow = 'none';
                      }}
                      onMouseEnter={(e) => {
                        const target = e.target as HTMLTextAreaElement;
                        if (target !== document.activeElement) {
                          target.style.borderColor = '#722F37';
                        }
                      }}
                      onMouseLeave={(e) => {
                        const target = e.target as HTMLTextAreaElement;
                        if (target !== document.activeElement) {
                          target.style.borderColor = '#e0e0e0';
                        }
                      }}
                    />

                    <Button
                      type="submit"
                      variant="contained"
                      sx={{
                        backgroundColor: '#722F37',
                        color: 'white',
                        padding: '14px 32px',
                        borderRadius: 2,
                        fontSize: '16px',
                        fontWeight: 'bold',
                        textTransform: 'none',
                        boxShadow: '0 4px 16px rgba(114, 47, 55, 0.3)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          backgroundColor: '#8B3A42',
                          boxShadow: '0 6px 20px rgba(114, 47, 55, 0.4)',
                          transform: 'translateY(-2px)',
                        },
                        '&:active': {
                          transform: 'translateY(0)',
                        },
                      }}
                    >
                      Send Message
                    </Button>
                  </Box>
                </form>
              </CardContent>
            </Card>
          </Box>
        }
      </Box>
    </>
  );
};

export default Contact;
