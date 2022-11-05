import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
// import About from './components/About';
import { Admin } from './components/Admin';
import { AuthProvider } from './components/auth';
import { Authenticate } from './components/Authenticate';
import { FeaturedProduct } from './components/FeaturedProduct';
import Home from './components/Home';
import { Login } from './components/Login';
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
    <AuthProvider>
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
        <Route path='/profile' element={<Authenticate><Profile /></Authenticate>}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path="*" element={<NoMatch />} ></Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
