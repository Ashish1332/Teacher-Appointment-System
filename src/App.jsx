import React, { useContext } from 'react'
import { teachersContext } from './context/teachersContext';
import { AdminContext } from './context/AdminContext';
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Admin/Dashboard';
import AllAppointments from './pages/Admin/AllAppointments';
import Addteachers from './pages/Admin/Addteachers';
import teachersList from './pages/Admin/teachersList';
import Login from './pages/Login';
import teachersAppointments from './pages/teachers/teachersAppointments';
import teachersDashboard from './pages/teachers/teachersDashboard';
import teachersProfile from './pages/teachers/teachersProfile';

const App = () => {

  const { dToken } = useContext(teachersContext)
  const { aToken } = useContext(AdminContext)

  return dToken || aToken ? (
    <div className='bg-[#F8F9FD]'>
      <ToastContainer />
      <Navbar />
      <div className='flex items-start'>
        <Sidebar />
        <Routes>
          <Route path='/' element={<></>} />
          <Route path='/admin-dashboard' element={<Dashboard />} />
          <Route path='/all-appointments' element={<AllAppointments />} />
          <Route path='/add-teachers' element={<Addteachers />} />
          <Route path='/teachers-list' element={<teachersList />} />
          <Route path='/teachers-dashboard' element={<teachersDashboard />} />
          <Route path='/teachers-appointments' element={<teachersAppointments />} />
          <Route path='/teachers-profile' element={<teachersProfile />} />
        </Routes>
      </div>
    </div>
  ) : (
    <>
      <ToastContainer />
      <Login />
    </>
  )
}

export default App