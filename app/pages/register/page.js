"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function RegisterForm() {
  // State for form inputs
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  // Function to handle the form submission
  async function handleSubmit(event) {
    event.preventDefault();
    console.log({ firstName, surname, email, phoneNumber, password });
    // Here you would send the data to your API endpoint
    // This is commented out because it's not part of the form functionality demonstration.
    // const response = await fetch("/api/register", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ firstName, surname, email, phoneNumber, password }),
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
        <div className="grid grid-cols-2 items-start gap-x-8 gap-y-2">
          {/* Input for First Name */}
          <div>
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-gray-700"
            >
              First Name
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              required
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-md placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          {/* Input for Surname */}
          <div>
            <label
              htmlFor="surname"
              className="text-sm font-medium text-gray-700"
            >
              Surname
            </label>
            <input
              id="surname"
              name="surname"
              type="text"
              required
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-md placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />
          </div>

          {/* Input for Email */}
          <div>
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700"
            >
              Email Address
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

          {/* Input for Phone Number */}
          <div>
            <label
              htmlFor="phoneNumber"
              className="text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              id="phoneNumber"
              name="phoneNumber"
              type="tel"
              required
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-md placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>

          {/* Input for Password */}
          <div>
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-md placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-1/2 m-auto flex justify-center py-2 px-4 border hover:bg-primary-500 duration-150 border-transparent rounded-md shadow-md text-sm font-medium text-white bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2"
        >
          Register
        </button>
      </form>

      {/* Link to Login */}
      <Link
        href="./login"
        className="text-xs text-primary hover:text-primary-500 duration-150"
      >
        I already have an account
      </Link>
    </div>
  );
}
