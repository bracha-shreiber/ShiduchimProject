import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { IsLoggedIn } from '../App';
// import UserFiles from './user/userFiles';
// import DownloadFile from './download';
import Avatar from './user/avatar';
// import FileUploader from './uploadFile';

const Header = () => {
  const { LoggedIn } = useContext(IsLoggedIn);
  // const { user } = useContext(userContext);

  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <a style={styles.logo} href="/">Matchmaker Pro</a>
        {/* <div style={styles.logo}>Matchmaker Pro</div> */}
        <nav style={styles.nav}>
          {/* <DownloadFile /> */}
          <Link to="/" style={styles.link}>Home</Link>
          <Link to="/about" style={styles.link}>About</Link>
          <Link to="/contact" style={styles.link}>Contact</Link>
          <Link to="/openResumes" style={styles.link}>Open Resumes</Link>

          {!LoggedIn ? (
            <>
              <Link to="/signin" style={styles.link}>Sign In</Link>
              <Link to="/signup" style={{ ...styles.link, ...styles.signup }}>Sign Up</Link>
            </>
          ) : (
            <>
              <Link to="/dashboard" style={styles.link}>Dashboard</Link>
              <Link to="/userFiles" style={styles.link}>My Resumes</Link>
              {/* <FileUploader/> */}
              {/* <Link to="/logout" style={styles.link}>Logout</Link> */}
              
              <Avatar/>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};


const styles = {
  header: {
    position: 'fixed' as 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
    backdropFilter: 'blur(10px)',
    transition: 'all 0.3s ease',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 3%',
    maxWidth: '1400px',
    margin: '0 auto',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#722F37',
    textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    letterSpacing: '-0.5px',
  },
  nav: {
    display: 'flex',
    gap: '1.5rem',
    alignItems: 'center',
  },
  link: {
    textDecoration: 'none',
    color: '#333',
    fontWeight: 500,
    fontSize: '1rem',
    padding: '0.5rem 0',
  },
  signup: {
    backgroundColor: '#722F37',
    color: '#FFFFFF',
    padding: '0.5rem 1.2rem',
    borderRadius: '2rem',
    fontWeight: 600,
    boxShadow: '0 4px 12px rgba(255, 0, 0, 0.3)',
    transition: 'all 0.3s ease',
  },
};

export default Header;
