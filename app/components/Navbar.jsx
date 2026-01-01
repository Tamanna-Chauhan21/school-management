"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname(); // This allows us to check which page is active

  return (
    <nav className="bg-white border-b border-gray-200 px-8 py-4 flex justify-between items-center sticky top-0 z-50 shadow-sm">
      
      {/* LEFT: LOGO SECTION */}
      <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
        <div className="bg-gradient-to-br from-blue-500 to-cyan-400 p-2 rounded-lg shadow-md">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
          </svg>
        </div>
        <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
          SchoolHub
        </span>
      </Link>

      {/* RIGHT: NAVIGATION LINKS */}
      <div className="flex items-center gap-6">
        
        {/* Add School Link */}
        <Link 
          href="/addSchool" 
          className={`flex items-center gap-2 font-semibold transition-all duration-300 ${
            pathname === "/addSchool" 
              ? "bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-5 py-2.5 rounded-full shadow-lg hover:shadow-cyan-200/50" 
              : "text-gray-500 hover:text-blue-500"
          }`}
        >
          {pathname === "/addSchool" ? (
             // Active Icon (White)
             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
          ) : (
             // Inactive Icon (Gray)
             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
          )}
          Add School
        </Link>

        {/* View Schools Link */}
        <Link 
          href="/showSchools" 
          className={`flex items-center gap-2 font-semibold transition-all duration-300 ${
            pathname === "/showSchools" 
              ? "bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-5 py-2.5 rounded-full shadow-lg hover:shadow-cyan-200/50" 
              : "text-gray-500 hover:text-blue-500"
          }`}
        >
          {pathname === "/showSchools" ? (
            // Active Icon (White)
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path></svg>
          ) : (
            // Inactive Icon (Gray)
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path></svg>
          )}
          View Schools
        </Link>

      </div>
    </nav>
  );
}