// import React, { useContext } from 'react'
// import Header from './header'
// // import { Directions } from '@mui/icons-material'
// import { IsLoggedIn } from '../App'
// import Sidebar from './sideBar'

// const AboutComponent: React.FC = () => {
//   const { LoggedIn } = useContext(IsLoggedIn)
//   return (
//     <>
//     {!LoggedIn && <Header/>}
//     {LoggedIn && <Sidebar/>}
//     {/* <Header/> */}
//     <div style={styles.container}>
//       <h1 style={styles.title}>About the Site</h1>
//       <p style={styles.text}>
//         This site is designed to assist matchmakers in managing the matchmaking process intelligently, orderly, and efficiently.
//         You can upload candidate resume files, perform searches by criteria, create connections, share information with other matchmakers, and track the status of your proposals.
//       </p>
//       <p style={styles.text}>
// The site is specifically tailored to the needs of the matchmaking community, featuring a simple and user-friendly interface, while maintaining information privacy and adhering to standards of modesty and personalized matching.      </p>
//       <p style={styles.text}>
// We invite you to use this smart tool to streamline your work and increase the chances of success!      </p>
//     </div>
//     </>
//   )
// }

// const styles = {
//   container: {
//     maxWidth: '80%',
//     margin: 'auto',
//     padding: '1rem',
//     direction: 'rtl',
//     textAlign: 'center',
//     backgroundColor: '#f9f9f9',
//     borderRadius: '10px',
//     boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
//   } as React.CSSProperties,
//   title: {
//     fontSize: '2rem',
//     color: '#722F37',
//     marginBottom: '1rem',
//   },
//   text: {
//     fontSize: '1.1rem',
//     lineHeight: '1.8',
//     color: '#333',
//     marginBottom: '1rem',
//     // direction removed to fix type error
//   },
// }

// export default AboutComponent
import React, { useContext } from 'react';
import Header from './header';
import Sidebar from './sideBar';
import { Box, Grid } from '@mui/material';
import { IsLoggedIn } from '../App';

const AboutComponent: React.FC = () => {
  const { LoggedIn } = useContext(IsLoggedIn);

  return (
    <>
      {!LoggedIn && <Header />}
      <Box sx={{ display: 'flex', width: '100vw', height: '100vh', backgroundColor: '#ffffff' }}>
        {LoggedIn && <Sidebar />}

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            width: '100%',
            height: '100%',
            overflow: 'auto',
          }}
        >
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            sx={{ height: '100%', padding: 2 }}
          >
            {/* <Grid item xs={12} sm={10} md={8} lg={6}> */}
              <Grid item xs={12} sm={11} md={9} lg={8} xl={8}>

              <Box
                sx={{
                  padding: '2rem',
                  direction: 'rtl',
                  textAlign: 'center',
                  backgroundColor: '#f9f9f9',
                  borderRadius: '10px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                }}
              >
                <h1 style={{ fontSize: '2rem', color: '#722F37', marginBottom: '1rem' }}>
                  About the Site
                </h1>
                <p style={styles.text}>
                  This site is designed to assist matchmakers in managing the matchmaking process intelligently, orderly, and efficiently.
                  You can upload candidate resume files, perform searches by criteria, create connections, share information with other matchmakers, and track the status of your proposals.
                </p>
                <p style={styles.text}>
                  The site is specifically tailored to the needs of the matchmaking community, featuring a simple and user-friendly interface, while maintaining information privacy and adhering to standards of modesty and personalized matching.
                </p>
                <p style={styles.text}>
                  We invite you to use this smart tool to streamline your work and increase the chances of success!
                </p>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

const styles = {
  text: {
    fontSize: '1.1rem',
    lineHeight: '1.8',
    color: '#333',
    marginBottom: '1rem',
  },
};

export default AboutComponent;
