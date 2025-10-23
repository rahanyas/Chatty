import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'
import { lazy } from 'react';

import Layout from './structure/Layout'
import Home from './Pages/Home.page';

const SignUpPage = lazy(() => import('./Pages/SignUp.page'))
const ErrorPage = lazy(() => import('./Pages/ErrorPage'))

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
          <Route  element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path='/signup' element={<SignUpPage/>}/>
                <Route path='*' element={<ErrorPage/>}/>
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