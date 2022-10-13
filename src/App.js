
import { useEffect } from 'react';
import { Button, Container } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import theme from './styles/theme';
import Appbar from './components/appbar';


function App() {


  // Similar to componentDidMount and componentDidUpdate:  
  useEffect(() => {
    // Update the document title using the browser API    
    document.title = `WellTech UI - Home`;
  });

  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth='xl'
        sx={{
          background: '#fff'
        }}
      >
        {
          /*
           Appbar
           Banner
           Promotions
           title
           Products
           footer
           searchbox
           appdrawer
           */
          <Appbar />
        }
        <Button variant='contained'>         Test        </Button>
      </Container>
    </ThemeProvider>
  );
}

export default App;
