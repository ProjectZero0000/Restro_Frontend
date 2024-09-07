import React, { useState } from 'react';
import { Button, TextField, Typography, Paper } from '@mui/material';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [emailError, setEmailError] = useState<boolean>(false);
  const [pwdError, setPwdError] = useState<boolean>(false);

  const handleLogin = () => {
    setEmailError(true);
    setPwdError(true);
    console.log(email, password, 'Login');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Paper elevation={16} square={true} className="p-8 max-w-sm w-full rounded-xl ">
        <Typography variant="h4" align="center" gutterBottom>
          Login
        </Typography>
        <TextField
          label="Email Address"
          type="email"
          fullWidth
          margin="normal"
          value={email}
          autoFocus
          error={emailError}
          onClick={() => setEmailError(false)}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          error={pwdError}
          onClick={() => setPwdError(false)}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className='mt-4'>
          <Button
            onClick={handleLogin}
            variant="contained"
            color="primary"
            fullWidth
          >
            Login
          </Button>
        </div>
        <div className='mt-4'>
          <Typography variant="body2" align="center">
            Don't have an account?{' '}
            <a href="/register" style={{ color: '#1976d2' }}>
              Register
            </a>
          </Typography>
        </div>      
      </Paper>
    </div>
  );
};

export default Login;
