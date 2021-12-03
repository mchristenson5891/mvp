import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Link from 'next/link';

import AccountBoxIcon from '@mui/icons-material/AccountBox';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function TemporaryDrawer({ show, setShow }) {
  const list = () => (
    <Box sx={{ width: 250 }} role='presentation'>
      <List>
        <ListItem button>
          <ListItemIcon>
            <FavoriteIcon />
          </ListItemIcon>
          <ListItemText primary={'Favorite Movies'} />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Drawer anchor={'left'} open={show} onClose={() => setShow(false)}>
      {list()}
    </Drawer>
  );
}
