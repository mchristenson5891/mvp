import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Link from 'next/link';
import { useAuth } from '@hooks/useAuth';
import Drawer from '@components/Drawer';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

export default function Navbar() {
  const { user, signout } = useAuth();
  const [show, setShow] = useState(false);
  const [showAccount, setShowAccount] = useState(false);

  const doSignOut = async () => {
    await signout();
    setShowAccount(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='fixed'>
        <Toolbar>
          {user && (
            <IconButton
              size='large'
              edge='start'
              color='inherit'
              aria-label='menu'
              onClick={() => setShow(true)}
            >
              <MenuIcon />
            </IconButton>
          )}

          <Link href='/'>
            <Box display='flex' alignItems='center' sx={{ cursor: 'pointer' }}>
              <Typography variant='h6' component='div'>
                I
              </Typography>
              <FavoriteIcon sx={{ marginX: 0.5 }} />
              <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                MOVIES
              </Typography>
            </Box>
          </Link>
          <Box ml='auto'>
            {user ? (
              <>
                <IconButton
                  size='large'
                  aria-label='account of current user'
                  aria-controls='menu-appbar'
                  aria-haspopup='true'
                  onClick={(e) => setShowAccount(e.target)}
                  color='inherit'
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id='menu-appbar'
                  anchorEl={showAccount}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  onClose={() => setShowAccount(false)}
                  open={showAccount}
                >
                  <MenuItem>Account</MenuItem>
                  <MenuItem onClick={doSignOut}>Logout</MenuItem>
                </Menu>
              </>
            ) : (
              <Link href='/login'>
                <Button color='inherit'>Login</Button>
              </Link>
            )}
          </Box>
        </Toolbar>
        <Drawer show={show} setShow={setShow} />
      </AppBar>
    </Box>
  );
}
