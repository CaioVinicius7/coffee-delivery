import { Outlet } from "react-router-dom";

function DefaultLayout() {
  return (
    <>
      <Outlet />
    </>
  );
}

export { DefaultLayout };
