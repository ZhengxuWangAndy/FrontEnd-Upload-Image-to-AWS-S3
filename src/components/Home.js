import React, { useState } from 'react';
import { useGoogleLogin, googleLogout } from '@react-oauth/google';
// import Button from '@material-ui/core/Button';
// import Box from '@material-ui/core/Box';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Upload from './Upload';
import backgroundImage from '../assets/bg.jpg';

function Home() {
    const [disableUpload, setDisableUpload] = useState(true);

    const login = useGoogleLogin({
        onSuccess: tokenResponse => {
            console.log(tokenResponse)
            setDisableUpload(false)
        },
    });

    const signOut = googleLogout();
    const handleLogout = () => {
        googleLogout();
        setDisableUpload(true);
    };

    return (
        <div
            className="App"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh',
            }}
        >
            <Typography variant="h2" gutterBottom sx={{ color: '#ffffff' }}>
                HW5
            </Typography>
            <Box sx={{ mt: 2 }}>
                {disableUpload ? (
                    <Button variant="contained" onClick={login} disabled={!disableUpload}
                        sx={{
                            bgcolor: 'primary.main',
                            color: 'green',
                            bgcolor: 'black',
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            mt: 2,
                            mr: 2,
                            width: '200px',
                            height: '60px',
                            /* Add other styles for button */
                        }}>Sign in
                    </Button>) : (
                    <Button variant="contained" onClick={handleLogout}
                        sx={{
                            bgcolor: 'primary.main',
                            color: 'green',
                            bgcolor: 'black',
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            mt: 2,
                            mr: 2,
                            width: '200px',
                            height: '60px',
                            /* Add other styles for button */
                        }}>Sign out
                    </Button>)}


            </Box>
            <Box sx={{ mt: 2 }}>
                {Upload(disableUpload)}
            </Box>



        </div>
    );

}
export default Home;