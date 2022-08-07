import React from "react";
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import { AdminRoutes } from "./AdminDashBoard/AdminRoutes/AdminRoutes";
import { AdminLinkCss } from "./AdminDashBoard/AdminCSS/Admin.Links.css";
import { FaUsers,FaGifts,FaShippingFast,FaUserShield,FaBiking,FaMoneyCheckAlt,FaNetworkWired,FaEnvelopeOpenText,FaAutoprefixer} from "react-icons/fa";
import { RiHome3Line } from "react-icons/ri";


import "./App.css"
const App = () => {

   return(
        <div>
          <div style = {{padding:10,background: "rgba(0 , 0 , 2 , 0.7)", color:"white"}}>
              Admin
            
          </div>
      
            <Router>
      <div style={{ display: "flex" }}>
        <div
          style={{
            padding: "10px",
            width: "10%",
             height:"800px",
            background: "rgba(0 , 0 , 2 , 0.7)",
            listStyleType:"none"
          }}
        >
            <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>
              <Link to="/" style={AdminLinkCss}>
              <div style={{marginTop:0,paddingRight:5}}>
                  <RiHome3Line  color="white" size={18} />
                </div>
                DashBoard
                </Link>
            </li>
            <li>
              <Link to="/products" style={AdminLinkCss}>
                <div style={{marginTop:0,paddingRight:5}}>
                  <FaGifts  color="white" size={18} />
                </div>
                Products
                </Link>
            </li>
            <li>
              <Link to="/orders" style={AdminLinkCss}>
               <div style={{marginTop:0,paddingRight:5}}>
                  <FaShippingFast  color="white" size={18} />
               </div>
                Orders
                </Link>
            </li>
            <li>
              <Link to="/users" style={AdminLinkCss}>
              <div style={{marginTop:0,paddingRight:5}}>
                  <FaUsers  color="white" size={18} />
               </div>
                Users
              </Link>
            </li>
            <li>
              <Link to="/underconstruction" style={AdminLinkCss}>
              <div style={{marginTop:0,paddingRight:5}}>
                  <FaUserShield color="white" size={18} />
               </div>
                Buyers
              </Link>
            </li>
            <li>
              <Link to="/underconstruction" style={AdminLinkCss}>
              <div style={{marginTop:0,paddingRight:5}}>
                  <FaBiking  color="white" size={18} />
               </div>
                Riders
              </Link>
            </li>
            <li>
              <Link to="/underconstruction" style={AdminLinkCss}>             
              <div style={{marginTop:0,paddingRight:5}}>
                  <FaMoneyCheckAlt  color="white" size={18} />
               </div>
                Refund
                </Link>
            </li>
            <li>
              <Link to="/underconstruction" style={AdminLinkCss}>
               <div style={{marginTop:0,paddingRight:5}}>
                  <FaNetworkWired  color="white" size={18} />
               </div>
                Services
                </Link>
            </li>
            <li>
              <Link to="/underconstruction" style={AdminLinkCss}>
              <div style={{marginTop:0,paddingRight:5}}>
                  <FaNetworkWired  color="white" size={18} />
               </div>
                Reports</Link>
            </li>
            <li>
              <Link to="/underconstruction" style={AdminLinkCss}>
              <div style={{marginTop:0,paddingRight:5}}>
                  <FaNetworkWired  color="white" size={18} />
               </div>
                Supports</Link>
            </li>
            <li>
              <Link to="/underconstruction" style={AdminLinkCss}>
              <div style={{marginTop:0,paddingRight:5}}>
                  <FaNetworkWired  color="white" size={18} />
               </div>
                Riders Setup</Link>
            </li>
            <li>
              <Link to="/underconstruction" style={AdminLinkCss}>
              <div style={{marginTop:0,paddingRight:5}}>
                  <FaEnvelopeOpenText  color="white" size={18} />
               </div>
                Messages</Link>
            </li>
            <li>
              <Link to="/underconstruction" style={AdminLinkCss}>
              <div style={{marginTop:0,paddingRight:5}}>
                  <FaNetworkWired  color="white" size={18} />
               </div>
                Offline Payments</Link>
            </li>
            <li>
              <Link to="/underconstruction" style={AdminLinkCss}>
              <div style={{marginTop:0,paddingRight:5}}>
                  <FaNetworkWired  color="white" size={18} />
               </div>
                Riders Setup</Link>
            </li>
            <li>
              <Link to="/underconstruction" style={AdminLinkCss}>
              <div style={{marginTop:0,paddingRight:5}}>
                  <FaNetworkWired  color="white" size={18} />
               </div>
                Saffs</Link>
            </li>
            <li>
              <Link to="/underconstruction" style={AdminLinkCss}>
              <div style={{marginTop:0,paddingRight:5}}>
                  <FaAutoprefixer  color="white" size={18} />
               </div>
                 Website Setup
                </Link>
            </li>
          </ul>


          <Switch>
            {AdminRoutes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.sidebar />}
              />
            ))}
          </Switch>
        </div>

        <div style={{ flex: 1, padding: "10px" }}>
          <Switch>
            {AdminRoutes.map((route, index) => (
                <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>
        </div>
      </div>
    </Router>
    </div>
  );
};

export default App;