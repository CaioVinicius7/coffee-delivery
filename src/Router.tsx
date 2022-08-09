import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";

import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { ConfirmedRequest } from "./pages/ConfirmedRequest";

function Router() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/success" element={<ConfirmedRequest />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}

export { Router };
