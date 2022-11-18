
import { useEffect } from 'react';
import { Container } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import theme from './styles/theme';
import Appbar from './components/appbar';

import { UIProvider } from "./context/ui";
import { HOME_BANNER_DATA, PROMO_SLIDER_MSGS, VISION_STATEMENT, MENU_ITEMS } from "./data";
import Footer from './components/footer';
import AppDrawer from './components/drawer';
import { containerdata } from './data/dummydata';
import SearchBox from './components/search';
import Cart from './components/cart';
import WhishList from './components/whishlist';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Dashboard from './pages/dashboard';
import Events from './pages/events';
import Clubs from './pages/clubs';
import Store from './pages/store';
import ViewCart from './pages/viewcart';


function App() {


  // Similar to componentDidMount and componentDidUpdate:  
  useEffect(() => {
    // Update the document title using the browser API    
    document.title = `WellTech UI - Home`;
  },[]);

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
           Products{size}
           footer
           searchbox
           appdrawer
           */
          <>
            <UIProvider>
              <BrowserRouter>
                <Appbar menuitems={MENU_ITEMS} />
                <Routes>

                  {/* home page link */}
                  <Route path='/' exact element={
                    <Home banners={HOME_BANNER_DATA} slidermessage={PROMO_SLIDER_MSGS} containerdata={containerdata} />
                  }
                  />

                  {/* dashboard page link */}
                  <Route path='/dashboard' exact element={
                    <Dashboard />
                  }
                  />

                  {/* Store page link */}
                  <Route path='/store' exact element={
                    <Store />
                  }
                  />

                  {/* Clubs page link */}
                  <Route path='/clubs' exact element={
                    <Clubs />
                  }
                  />

                  {/* event page link */}
                  <Route path='/events' exact element={
                    <Events />
                  }
                  />


                  {/* cart-view page link */}
                  <Route path='/viewcart' exact element={
                    <ViewCart />
                  }
                  />
                </Routes>
                <Footer statement={VISION_STATEMENT} />
                <AppDrawer menuitems={MENU_ITEMS} />
                <Cart />
                <WhishList />
                <SearchBox />
              </BrowserRouter>
            </UIProvider>
          </>
        }

      </Container>
    </ThemeProvider >
  );
}

export default App;
