import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from 'next/link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useForm } from 'react-hook-form';
import { useAuth } from '@context/auth';
import { useRouter } from 'next/router';

const theme = createTheme();

export default function SignIn() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();
  const { signin } = useAuth();

  const onSubmit = async ({ email, password }) => {
    try {
      const response = await signin(email, password);
      router.push('/');
    } catch (err) {
      if (
        err?.code === 'auth/invalid-email' ||
        err?.code === 'auth/user-not-found'
      ) {
        setError('email', { message: 'User not found' });
      } else if (err?.code === 'auth/wrong-password') {
        setError('password', { message: 'Check username or password' });
      }
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }/> */}
          <Typography component='h1' variant='h5'>
            Login
          </Typography>
          <Box
            component='form'
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              error={errors.email}
              margin='normal'
              required
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              autoComplete='email'
              autoFocus
              helperText={errors.email && errors.email.message}
              {...register('email', { required: true })}
            />
            <TextField
              error={errors.password}
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              autoComplete='current-password'
              helperText={errors.password && errors.password.message}
              {...register('password', { required: true })}
            />
            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Box display='flex' justifyContent='center'>
              <Link href='/signup'>{"Don't have an account?"}</Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
