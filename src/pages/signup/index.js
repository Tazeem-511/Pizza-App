import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const SignUp = () => {
  const router = useRouter();
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    location: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/userSignUp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
        location: credentials.location,
      }),
    });

    const res = await response.json();
    console.log(res); // Log the response

    if (res.success) {
      localStorage.setItem("token", res.authToken);
      localStorage.setItem("userEmail", credentials.email);
      localStorage.setItem("isAdmin", false);

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
        height: "90vh",
        backgroundColor: "#000618",
      }}
      className="flex justify-center items-center"
    >
      <div className="container signup-con w-full max-w-md rounded-lg shadow-2xl p-7">
        <h1 className="text-center text-2xl font-bold text-gray-800 mb-6">
          Sign Up
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-800 text-sm font-bold mb-2"
            >
              Name
            </label>
            <input
              placeholder="Enter your name"
              name="name"
              onChange={handleChange}
              type="text"
              required
              className="shadow border border-gray-400 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:border-gray-600"
              value={credentials.name}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-800 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              placeholder="Enter your email"
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
          <div className="mb-4">
            <label
              htmlFor="location"
              className="block text-gray-800 text-sm font-bold mb-2"
            >
              Address
            </label>
            <input
              placeholder="Enter your address"
              onChange={handleChange}
              name="location"
              required
              type="text"
              className="shadow border border-gray-400 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:border-gray-600"
              value={credentials.location}
            />
          </div>
          <button
            type="submit"
            className="bg-gray-800 text-white font-bold rounded w-full p-2 hover:bg-gray-700"
          >
            Signup
          </button>
          <Link href="/login" style={{ all: "unset" }}>
            <button className="border border-gray-800 text-gray-800 font-bold rounded w-full mt-2 p-2 hover:bg-gray-800 hover:text-white">
              Already a user?
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
