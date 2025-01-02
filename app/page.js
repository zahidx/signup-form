import React from "react";
import Link from "next/link";


export default function Home() {
  return (
    <main className=" bg-gray-100 flex flex-col items-center justify-center">
      {/* Navbar */}


      {/* Main Content */}
      <div className="min-h-64 text-center mt-10">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to My Website</h1>
        <p className="mt-4 text-lg text-gray-600">A place to learn and grow</p>
      </div>
    </main>
  );
}
