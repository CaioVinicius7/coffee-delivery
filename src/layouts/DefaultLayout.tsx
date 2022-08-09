import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import { Header } from "../components/Header";

function DefaultLayout() {
  const [changeColor, setChangeColor] = useState(false);

  useEffect(() => {
    function verifyScrollPosition() {
      window.scrollY > 1 ? setChangeColor(true) : setChangeColor(false);
    }

    window.addEventListener("scroll", verifyScrollPosition);
  });

  return (
    <>
      <Header changeColor={changeColor} />
      <Outlet />
    </>
  );
}

export { DefaultLayout };
