import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const Login = () => {
  const router = useRouter();
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/userLogin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });

    const res = await response.json();
    console.log(res); // Log the response

    if (res.success) {
      localStorage.setItem("token", res.authToken);
      localStorage.setItem("userEmail", credentials.email);
      localStorage.setItem("isAdmin", res.isAdmin);

      router.push("/");
    } else {
      alert(res.error || "There was an error. Please try again.");
    }
  };

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#000618",
      }}
      className="flex justify-center items-center"
    >
      <div className="container w-full max-w-md login-con rounded-lg shadow-2xl p-6">
        <h1 className="text-center text-2xl font-bold text-gray-800 mb-6">
          Login
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-800 text-sm font-bold mb-2"
            >
              Username
            </label>
            <input
              placeholder="Enter your email/username"
              name="email"
              onChange={handleChange}
              type="email"
              required
              className="shadow border border-gray-400 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:border-gray-600"
              value={credentials.email}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-800 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              placeholder="*******"
              onChange={handleChange}
              name="password"
              required
              type="password"
              className="shadow border border-gray-400 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:border-gray-600"
              value={credentials.password}
            />
          </div>
          <button
            type="submit"
            className="bg-gray-800 text-white font-bold rounded w-full p-2 hover:bg-gray-700"
          >
            Log in
          </button>
          <Link href={"/signup"} style={{ all: "unset" }}>
            <button className="border border-gray-800 text-gray-800 font-bold rounded w-full mt-2 p-2 hover:bg-gray-800 hover:text-white">
              New User?
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
