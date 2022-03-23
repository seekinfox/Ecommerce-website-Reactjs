import React, {useEffect} from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom"
import Loading from "./components/features/Loading";
import { useMediaQuery } from 'react-responsive'
import "./stylesheets/main.scss";
import {ItemQuickViewProvider} from "./Context/ItemQuickViewProvider"


const Brand= React.lazy(() => import('./components/Pages/Brand'))
const Home = React.lazy(() => import('./components/Pages/Home'))
const Layout = React.lazy(() => import('./components/Pages/Layout'))
const Login = React.lazy(() => import('./components/Pages/Login'))
const Mens = React.lazy(() => import('./components/Pages/Mens'))
const Store = React.lazy(() => import('./components/Pages/Store'))
const Womens = React.lazy(() => import('./components/Pages/Womens'));
const ItemDetails = React.lazy(() => import('./components/Pages/ItemDetails'))



const SrollToTop = (props) => {
  const location = useLocation();

//resetting the scroll to the top when path has changed
  useEffect(() => {
    window.scrollTo(0,0);
  }, [location])
  return <>{props.children}</>
}

function App() {
  const isDesktop = useMediaQuery({
    query: '(min-width: 1224px)'
  })

  

  return (

    <>
    <ItemQuickViewProvider>
    <Router>
      <SrollToTop>
        <React.Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Layout isDesktop={isDesktop} />}>
              <Route index element={<Home />} />
              <Route path="store" element={<Store />} />
              <Route path="login" element={<Login />} />
              <Route path="brands" element={<Brand />} />
              <Route path="womens" element={<Womens />} />
              <Route path="mens" element={<Mens />} />
              <Route path="/:type/:id" element={<ItemDetails />} />
            </Route>
          </Routes>
        </React.Suspense>
      </SrollToTop>
    </Router>
    </ItemQuickViewProvider>
    </>
  );
}

export default App;
