import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Pricing from './pages/Pricing/Pricing';
import About from './pages/About/About';
import Contacts from './pages/Contacts/Contacts';


const App = (props) => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <div className='content__wrapper'>
          <Route path='/home' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/pricing' component={Pricing} />
          <Route path='/contacts' component={Contacts} />
        </div>
        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;