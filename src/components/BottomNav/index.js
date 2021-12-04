import { useState } from 'react';
import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TheatersIcon from '@mui/icons-material/Theaters';
import Link from 'next/link';

export default function BottomNav() {
  const [value, setValue] = useState(0);
  return (
    <Paper
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        display: { xs: 'block', sm: 'none' },
      }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          console.log(newValue);
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label='Movies'
          icon={
            <Link href='/'>
              <TheatersIcon />
            </Link>
          }
        />

        <BottomNavigationAction
          label='Favorites'
          icon={
            <Link href='/favorites'>
              <FavoriteIcon />
            </Link>
          }
        />
      </BottomNavigation>
    </Paper>
  );
}
