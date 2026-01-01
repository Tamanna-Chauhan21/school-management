"use client";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ShowSchools() {
  const [schools, setSchools] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch data when the page loads
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("/api/schools");
        setSchools(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  // Filter schools based on search query
  const filteredSchools = schools.filter((school) => 
    school.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    school.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
    school.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-8 font-sans">
      
      {/* HEADER SECTION */}
      <div className="flex flex-col items-center justify-center mb-10">
        {/* Icon */}
        <div className="bg-gradient-to-br from-blue-500 to-cyan-400 p-3 rounded-2xl shadow-lg mb-4">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-slate-800 mb-2">Our Schools</h1>
        <p className="text-slate-500 text-sm font-medium">Browse through our collection of registered schools</p>
      </div>

      {/* SEARCH BAR */}
      <div className="flex justify-center mb-12">
        <div className="relative w-full max-w-lg">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
          <input 
            type="text"
            className="w-full pl-12 pr-4 py-4 rounded-xl border-none shadow-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white placeholder-gray-400" 
            placeholder="Search by name, city, or address..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      
      {/* SCHOOLS GRID */}
      {loading ? (
        <p className="text-center text-gray-500">Loading schools...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {filteredSchools.length > 0 ? (
            filteredSchools.map((school) => (
              <div key={school.id} className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full">
                
                {/* Image Section */}
                <div className="relative h-48 w-full bg-gray-200">
                   <img 
                      src={school.image} 
                      alt={school.name} 
                      className="w-full h-full object-cover"
                   />
                </div>
                
                {/* Content Section */}
                <div className="p-5 flex-grow flex flex-col">
                  {/* Name */}
                  <h2 className="text-lg font-bold text-slate-800 mb-2 capitalize">{school.name}</h2>
                  
                  {/* Location with Icon */}
                  <div className="flex items-start mb-4">
                    <svg className="w-4 h-4 text-green-500 mt-0.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    <p className="text-slate-500 text-sm">{school.city}</p>
                  </div>

                  {/* Badge */}
                  <div className="mt-auto pt-2">
                    <span className="inline-block bg-blue-50 text-blue-600 text-xs px-3 py-1 rounded-full font-semibold">
                      {school.city}
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
               <p className="text-gray-400 text-lg">No schools found matching your search.</p>
            </div>
          )}
        </div>
      )}

      {/* FOOTER COUNT */}
      {!loading && (
         <div className="mt-12 text-center text-slate-400 text-sm">
            Showing {filteredSchools.length} {filteredSchools.length === 1 ? 'school' : 'schools'}
         </div>
      )}
    </div>
  );
}