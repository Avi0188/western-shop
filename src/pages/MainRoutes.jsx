import { Route, Routes } from "react-router-dom";
import { Homepage } from "../components/Homepage/Homepage";
import { MensProduct } from "./MensProduct";

import Signup from "./Signup";
import { Bag } from "./Bag";
import Cartpage from "./Cartpage";

import { WomensProduct } from "./WomensProduct";
import { SingleProductWomen } from "./SingleProductWomen";
import { SingleProductMen } from "./SingleProductMen";
import { PrivateRoute } from "./PrivateRoute";
import { NotFound } from "./Notfound";
import { Login } from "./Login";


export const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />

     

        {/* user routes */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products-men" element={<MensProduct />} />
        <Route path="/products-women" element={<WomensProduct />} />
        <Route path="/singleproduct-men/:id" element={<SingleProductMen />} />
        <Route
          path="/singleproduct-women/:id"
          element={<SingleProductWomen />}
        />
        <Route
          path="/bag"
          element={
            <PrivateRoute>
              <Bag />
            </PrivateRoute>
          }
        />
        <Route
          path="/wishlist"
          element={
            <PrivateRoute>
              <Cartpage />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  );
};
