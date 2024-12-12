import { Route, Routes } from 'react-router'
import DashboardLayout from './layout/DashboardLayout'
import HomeDashboard from './pages/HomeDashbord'
import CreatProduct from './pages/CreatProduct'
import Error from './Error'
import CreateCategory from './pages/CreateCategory'

function App() {
  return (
    
    <Routes>
         <Route path='/' element={<DashboardLayout />}>
             <Route index element={<HomeDashboard />}/>
             <Route path='/creatProduct' element={<CreatProduct />}/>
             <Route path='/createCategory' element={<CreateCategory />}/>


             {/* error route */}
            <Route path='/*' element={<Error />} />

         </Route>
    </Routes>
    
  )
}

export default App