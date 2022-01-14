import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Default from './components/Default';
import Cart from './components/Cart/Cart';
import Details from './components/Product/Details';
import ProductList from './components/Category/ProductList';
import Modal from './components/Layout/Modal';
import SignInOutContainer from './components/containers';
import './App.css';


function App() {
  
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/signUp" component={SignInOutContainer} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />


        <Route path="/electonic" component={ProductList} />
        <Route path="/clothes" component={ProductList} />
        <Route path="/sport" component={ProductList} />
        <Route path="/book" component={ProductList} />
        <Route path="/homeStuff" component={ProductList} />

        <Route path="/" component={ProductList} />
        
        
        <Route component={Default} />
      </Switch>
      <Modal />
    </>
  );
}

export default App;
