import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { routeConfig } from "shared/config/routeConfig/routeConfig";

export function AppRouter() {
  return ( 
    <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {Object.values(routeConfig).map(({element, path}) => (
            <Route
              key={path}
              element={element}
              path={path}
            />
          ))}
        </Routes>
      </Suspense>
   );
}

export default AppRouter;