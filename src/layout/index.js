import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Navbar from '@components/Navbar';
import { Box } from '@mui/system';

export default function Layout({ children }) {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Box mt={10} />
      <Container maxWidth='xl'>{children}</Container>
    </>
  );
}
