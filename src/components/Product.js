import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Product = () => {
  return (
    <>
        <div>Product</div>
        <nav>
            <Link to="/product/newproduct">
               New Product
            </Link>&nbsp;
            <Link to="/product/featureproduct">
               Feature Product
            </Link>
            {/* In below outlet newproduct and featureproduct  rendering will happened */}
            <Outlet />
        </nav>
    </>
  )
}
