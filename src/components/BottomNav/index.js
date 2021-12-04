import * as React from 'react';
import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TheatersIcon from '@mui/icons-material/Theaters';

export default function BottomNav() {
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
      <BottomNavigation showLabels>
        <BottomNavigationAction label='Movies' icon={<TheatersIcon />} />
        <BottomNavigationAction label='Favorites' icon={<FavoriteIcon />} />
      </BottomNavigation>
    </Paper>
  );
}
