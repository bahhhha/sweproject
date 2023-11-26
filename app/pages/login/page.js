"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
export default function LoginForm() {
  // State for form inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Function to handle the form submission
  async function handleSubmit(event) {
    event.preventDefault();
    console.log({ email, password });
    // Here you would send the data to your API endpoint
    // const response = await fetch("/api/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ email, password }),
    // });

    // const data = await response.json();
    // // Handle response data
  }

  return (
    <div className="flex standardbg flex-col justify-center h-screen space-y-4 items-center">
      <Image src="/logos/NURound.png" width={128} height={128} />
      <form
        onSubmit={handleSubmit}
        className="space-y-12 flex flex-col justify-center "
      >
        <div className="flex flex-col  space-y-3 justify-center ">
          <div>
            <label
              htmlFor="email"
              className=" text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-md placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className=" text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="appearance-none  w-full px-3 py-2 border border-gray-300 rounded-md shadow-md placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-1/2 m-auto flex justify-center py-2 px-4 border hover:bg-primary-500 duration-150 border-transparent rounded-md shadow-md text-sm font-medium text-white bg-primary  focus:outline-none focus:ring-2 focus:ring-offset-2 "
        >
          Sign in
        </button>
      </form>
      <Link
        href="./register"
        className="text-xs  text-primary hover:text-primary-500 duration-150"
      >
        I don't have an account
      </Link>
    </div>
  );
}
