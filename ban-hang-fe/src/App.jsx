import { Routes, Route } from "react-router-dom";
import { Fragment } from "react";

import {
  publicRouter,
  // privateRouter
} from "~/routes";
import DefaultLayout from "~/layouts";

function App() {

  return (
    <>

      <Routes>

        {publicRouter.map((route, index) => {
          let Layout = DefaultLayout;
          if (route.layout) {
            Layout = route.layout;
          } else if (route.layout === null) {
            Layout = Fragment;
          }

          const Page = route.component;
          return <Route key={index} path={route.path} element={<Layout><Page /></Layout>} />
        })}
      </Routes>
    </>
  );
}

export default App
