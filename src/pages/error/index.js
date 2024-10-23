// pages/error.js
const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold text-red-600">Access Denied</h1>
      <p className="mt-2 text-gray-700">
        You do not have permission to access this page.
      </p>
    </div>
  );
};

export default ErrorPage;
