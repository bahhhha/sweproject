"use client";
import { useState } from "react";
import Image from "next/image";

const ClientRequestForm = () => {
  // State for form fields
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [dateTime, setDateTime] = useState("");

  // Function to handle the form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submit behavior
    console.log({ source, destination, dateTime }); // Log the form values to the console
    // Here you would send the data to your API endpoint
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-12 bg-white drop-shadow-xl border-2 rounded-xl p-6 flex flex-col w-[300px] justify-center "
    >
      <div className="flex flex-col space-y-3 justify-center">
        {/* Source Input */}
        <div>
          <label htmlFor="source" className="text-sm font-medium text-gray-700">
            Source
          </label>
          <input
            id="source"
            name="source"
            type="text"
            autoComplete="off"
            required
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md  placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={source}
            onChange={(e) => setSource(e.target.value)}
          />
        </div>

        {/* Destination Input */}
        <div>
          <label
            htmlFor="destination"
            className="text-sm font-medium text-gray-700"
          >
            Destination
          </label>
          <input
            id="destination"
            name="destination"
            type="text"
            autoComplete="off"
            required
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md  placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </div>

        {/* Date and Time Input */}
        <div>
          <label
            htmlFor="date-time"
            className="text-sm font-medium text-gray-700"
          >
            Date and Time
          </label>
          <input
            id="date-time"
            name="date-time"
            type="datetime-local"
            required
            className="appearance-none block w-full px-3 py-2 border  border-gray-300 rounded-md placeholder-gray-400 focus:outline-none sm:text-sm"
            value={dateTime}
            onChange={(e) => setDateTime(e.target.value)}
          />
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-1/2 m-auto flex justify-center py-2 px-4 border hover:bg-primary-500 duration-150 border-transparent rounded-md shadow-md text-sm font-medium text-white bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2"
      >
        Request
      </button>
    </form>
  );
};

const ClientPage = () => {
  return (
    <div className="h-screen standardbg flex p-5 flex-col items-center space-y-4 justify-center  ">
      <Image src="/icons/car.svg" width={100} height={100} />
      <h1 className="font-semibold text-xl ">Request a ride</h1>
      <ClientRequestForm />
    </div>
  );
};

export default ClientPage;
