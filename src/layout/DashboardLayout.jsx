import { Link, Outlet } from 'react-router'

function DashboardLayout() {
  return (
    <>
        <header className="flex justify-between items-center px-6 py-3 bg-white border-b shadow-sm">
      {/* Left Section */}
      <div>
        <Link to="/" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Home</Link>
      </div>

      {/* Right Section */}
      <div className="flex gap-3">
        <Link to="/creatProduct" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Create new Product</Link>
        <Link to="/createCategory" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Create new Category</Link>
      </div>
    </header>
       <div className='py-5'><Outlet /></div>
    </>
  )
}

export default DashboardLayout