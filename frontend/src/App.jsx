import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'
import { lazy } from 'react';

import Layout from './structure/Layout'
import LandingPage from './Pages/Landing.page';

const SignUpPage = lazy(() => import('./Pages/SignUp.page'))
const ErrorPage = lazy(() => import('./Pages/ErrorPage'))
const HomePage = lazy(() => import('./Pages/HomePage/Home.page'));
const LoginPage = lazy(() => import('./Pages/LoginPage/Login.Page'));

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route errorElement={<ErrorPage/>}>
          <Route  element={<Layout/>}>
                <Route index element={<LandingPage/>}/>
                <Route path='/signup' element={<SignUpPage/>}/>
                <Route path='/home' element={<HomePage/>}/>
                <Route path='/login' element={<LoginPage/>}/>
                {/* <Route path='*' element={<ErrorPage/>}/> */}
          </Route>
        </Route>
    )
)

const App = () => {
  return (
      <RouterProvider router={router}/>
  )
};

export default App;