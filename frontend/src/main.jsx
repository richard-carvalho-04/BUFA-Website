import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import Enroll from './Components/Enroll/Enroll.jsx'
import Contact from './Components/Contact/Contact.jsx'
import User from './Components/User/User.jsx'
import News from './Components/News/News.jsx'
import App  from './App.jsx'
import AdminDashboard from './Components/Admin/AdminDashboard.jsx'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>  {/* so here we do not add any / in the path because anything that is happening is after / which we have metion in above line 11 */}
      <Route path='home' element={<Home/>}/>
      <Route path='news' element={<News/>}/>{/*we use this about path with using the /about int he webpage the actual use of this is to not use <a> tag as it reloads the page and the html dom will get the control of the page there will be no sense of using react which is single page component method*/}
      <Route path='contact' element={<Contact/>} />
      <Route path='enroll' element={<Enroll/>}/>
      <Route path='app' element={<App/>}/>
      <Route path='user' element={<User/>}>
      <Route path=':userid' element={<User/>}/>
      <Route path='admin' element={<AdminDashboard/>}/>
      </Route>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Toaster toastOptions={{style:{
      backgroundColor: '#383085', color: '#fff'
      }}} />
    <RouterProvider router={router}/>
  </StrictMode>,
)
