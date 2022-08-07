import React from "react";
import './Styles.css'
import ProductList from "./ProductList";
import BloomzonProductList from "./BloomzonProducts/BloomzonProduct";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";


const AllProducts = () => {


function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}


  return(

   <Router>
      <div>
        <ul className="menu-ul">
          <li>
            <Link className="allproducts" to="/">AllProducts</Link>
          </li>
          <li>
            <Link className="bloomzonproducts" to="/about">Bloomzon Products</Link>
          </li>
          <li>
            <Link className="manufacturersproducts" to="/dashboard">Manufactures Products</Link>
          </li>
          <li>
            <Link className="sellersproducts" to="/sellersProduct">Sellers Products</Link>
          </li>
        </ul>

        <hr />
        <Switch>
          <Route exact  path="/">
            <ProductList />
          </Route>
          <Route  path="/about">
            <BloomzonProductList />
          </Route>
          <Route   path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  )
};

export default AllProducts;