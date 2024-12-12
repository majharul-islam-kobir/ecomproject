import { useNavigate } from "react-router";

function Error() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); 
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-500">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mt-4">
          Page Not Found
        </h2>
        <p className="text-gray-500 mt-2">
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </p>
        <div className="mt-6 flex justify-center space-x-4">
          <button
            onClick={handleGoBack}
            className="px-6 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none"
          >
            Go Back
          </button>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-2 text-white bg-gray-700 rounded hover:bg-gray-800 focus:outline-none"
          >
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default Error