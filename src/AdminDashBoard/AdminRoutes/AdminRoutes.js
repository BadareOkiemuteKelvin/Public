import React from 'react'
import Users from "../../users/users"
import AllProduct from '../../Products/AllProducts';
import Dashboard from "../AdminDashboard/DashBoard";
import Underconstruction from '../UnderConstruction/underconstruction';
import Order from '../../OrderRoute/Order';
import EdithUser from '../../users/editUsers';

export const AdminRoutes = [
    {
      path: "/",
      exact: true,
      sidebar: () => <div></div>,
      main: () => <Dashboard />
    },
    {
      path: "/products",
      sidebar: () => <div></div>,
      main: () => <AllProduct />
    },
    {
      path: "/orders",
      sidebar: () => <div></div>,
      main: () => <Order />
    },
    {
      path: "/users",
      sidebar: () => <div></div>,
      main: () => <Users />
    },
    {
      path: "/edithusers",
      sidebar: () => <div></div>,
      main: () => <EdithUser />
    },
    {
      path: "/underconstruction",
      sidebar: () => <div></div>,
      main: () => <Underconstruction />
    }
  ];
  
  
  