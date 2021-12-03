import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Navbar from '@components/Navbar';

export default function Layout({ children }) {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Container maxWidth='xl'>{children}</Container>
    </>
  );
}
