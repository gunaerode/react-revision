import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
// import About from './components/About';
import { Admin } from './components/Admin';
import { FeaturedProduct } from './components/FeaturedProduct';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { NewProduct } from './components/NewProduct';
import NoMatch from './components/NoMatch';
import OrderSummary from './components/OrderSummary';
import { Product } from './components/Product';
import { Profile } from './components/Profile';
import { UserDetails } from './components/UserDetails';
import { Users } from './components/Users';
const LazyAbout = lazy(() => import ('./components/About'));

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Suspense fallback=<span style={{fontSize: '100px'}}>&#9203;</span>><LazyAbout /></Suspense>} />
        <Route path="/order-summary" element={<OrderSummary />} />
        <Route path="/product" element={<Product />}>
          <Route index element={<FeaturedProduct/>} /> {/* Default view will be FeaturedProduct If we dont specify nothing will show and parent compoent level render */}
          <Route path='/product/newproduct' element={<NewProduct/ >} />
          <Route path='/product/featureproduct' element={<FeaturedProduct/ >} />
        </Route>
        <Route path="/users" element={<Users />}>
          <Route path=':id' element={<UserDetails/ >} />
          <Route path='admin' element={<Admin/ >} />
        </Route>
        <Route path='/profile' element={<Profile />}></Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
