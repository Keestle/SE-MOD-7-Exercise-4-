import React from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/system';
import { Button, TextField } from '@mui/material';

const styles = {
  color: 'darkslategray',
  backgroundColor: 'aliceblue',
  padding: '2em',
  borderRadius: '1em',
  border: '1px solid darkslategray',
  margin: '1em 0'
}

const StyledDiv = styled('div')(styles);
  
function Login() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Go back one step in the history
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Implement your login logic here
  };

  return (
    <div>
      <h1>Please Login or Sign up below!</h1>
      
      <form onSubmit={handleLogin}>
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          margin="normal"
          required
        />
        <TextField
          type="password"
          label="Password"
          variant="outlined"
          fullWidth
          margin="normal"
          required
        />
        <StyledDiv>
          <Button type="submit" variant="contained" color="primary">
            Login
          </Button>
        </StyledDiv>
      </form>

      <button onClick={handleGoBack}>
        <StyledDiv>Go Back</StyledDiv>
      </button>

      {/* Add more Login content as needed */}
    </div>
  );
}

export default Login;
