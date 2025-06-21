// src/pages/Login.jsx
export default function Login() {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            id="email" 
            type="email" 
            placeholder="Email" 
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
            id="password" 
            type="password" 
            placeholder="******" 
          />
        </div>
        <div className="flex items-center justify-between">
          <button 
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
            type="button"
          >
            Sign In
          </button>
          <a className="inline-block align-baseline font-bold text-sm text-green-600 hover:text-green-800" href="#">
            Forgot Password?
          </a>
        </div>
      </form>
    </div>
  );
}