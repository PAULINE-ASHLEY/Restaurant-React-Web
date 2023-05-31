import React from 'react';
// import { ProtectedRoutes } from 'components/guards';
import { Home, AboutUs, Menu, Contact, Food, Drink } from 'pages';
import { Route, Routes } from 'react-router-dom';
import {
  HOME,
  ABOUTUS,
  MENU,
  CONTACT,
  FOOD,
  DRINK,
} from 'navigation/constants';

function RouterConfig() {
  return (
    <Routes>
      {/*************************PUBLIC ROUTES************************************** */}

      {/* List all public routes here */}
      <Route exact path={HOME} element={<Home />} />
      <Route exact path={ABOUTUS} element={<AboutUs />} />
      <Route exact path={MENU} element={<Menu />} />
      <Route exact path={CONTACT} element={<Contact />} />
      <Route exact path={FOOD} element={<Food />} />
      <Route exact path={DRINK} element={<Drink />} />

      {/*************************PROTECTED ROUTES************************************** */}
      {/*************************PROTECTED ROUTES************************************** */}
      {/* <Route element={<ProtectedRoutes redirectPath={LOGIN} />}>
        LIST ALL PROTECTED ROUTES HERE
      </Route> */}

      {/*************************404************************************** */}

      {/* List All 404 routes here */}
      <Route path="*" element={<div>404 PAGE NOT FOUND</div>} />
    </Routes>
  );
}

export default RouterConfig;
