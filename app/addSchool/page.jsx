"use client";

import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";

export default function AddSchool() {
  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
  const [fileName, setFileName] = useState("");

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("address", data.address);
    formData.append("city", data.city);
    formData.append("state", data.state);
    formData.append("contact", data.contact);
    formData.append("email_id", data.email_id);
    formData.append("image", data.image[0]);

    try {
      await axios.post("/api/schools", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("School added successfully!");
      setFileName(""); 
      reset();
    } catch (error) {
      console.error(error);
      alert("Error adding school. Check console for details.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-xl border border-gray-100">
        
        {/* HEADER SECTION (New Addition) */}
        <div className="flex items-center gap-4 mb-8">
          {/* Gradient Icon Box */}
          <div className="bg-gradient-to-br from-blue-500 to-cyan-400 p-3 rounded-2xl shadow-lg flex items-center justify-center">
            {/* School SVG Icon */}
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
            </svg>
          </div>
          
          {/* Title & Subtitle */}
          <div>
            <h1 className="text-2xl font-bold text-sky-600">Add New School</h1>
            <p className="text-slate-500 text-sm font-medium">Fill in the details to register a school</p>
          </div>
        </div>

        {/* Name Input */}
        <div className="mb-5">
          <label className="block text-gray-700 font-semibold mb-2 text-sm">School Name*</label>
          <input 
            {...register("name", { required: true })} 
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all" 
            placeholder="e.g. Delhi Public School"
          />
          {errors.name && <span className="text-red-500 text-xs mt-1 block">School name is required</span>}
        </div>

        {/* Email Input */}
        <div className="mb-5">
          <label className="block text-gray-700 font-semibold mb-2 text-sm">Email*</label>
          <input 
            type="email" 
            {...register("email_id", { 
              required: "Email is required", 
              pattern: { value: /^\S+@\S+$/i, message: "Please enter a valid email" }
            })} 
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all" 
            placeholder="contact@school.com"
          />
          {errors.email_id && <span className="text-red-500 text-xs mt-1 block">{errors.email_id.message}</span>}
        </div>

        {/* Address & City Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          <div>
            <label className="block text-gray-700 font-semibold mb-2 text-sm">Address*</label>
            <input {...register("address", { required: true })} className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500" />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2 text-sm">City*</label>
            <input {...register("city", { required: true })} className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500" />
          </div>
        </div>

        {/* State & Contact Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          <div>
            <label className="block text-gray-700 font-semibold mb-2 text-sm">State*</label>
            <input {...register("state", { required: true })} className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500" />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2 text-sm">Contact No.*</label>
            <input 
              type="number" 
              {...register("contact", { required: true, minLength: 10 })} 
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500" 
            />
          </div>
        </div>

        {/* IMAGE UPLOAD SECTION (Dashed Box) */}
        <div className="mb-8">
          <label className="block text-gray-700 font-semibold mb-2 text-sm">School Image</label>
          
          <div className="flex items-center justify-center w-full">
            <label 
              htmlFor="dropzone-file" 
              className="flex flex-col items-center justify-center w-full h-40 border-2 border-slate-300 border-dashed rounded-xl cursor-pointer bg-slate-50 hover:bg-slate-100 transition-colors"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg className="w-10 h-10 mb-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                </svg>
                <p className="mb-2 text-sm text-slate-500 font-bold">Click to upload school image</p>
                <p className="text-xs text-slate-400">PNG, JPG up to 10MB</p>
              </div>
              <input 
                id="dropzone-file" 
                type="file" 
                accept="image/*"
                className="hidden" 
                {...register("image", { 
                  required: true,
                  onChange: (e) => {
                    if (e.target.files[0]) {
                      setFileName(e.target.files[0].name);
                    }
                  }
                })} 
              />
            </label>
          </div>

          {fileName && (
            <div className="mt-3 flex items-center justify-center text-sm text-green-600 bg-green-50 p-2 rounded border border-green-200">
               ✅ Selected: {fileName}
            </div>
          )}

          {errors.image && <span className="text-red-500 text-xs mt-1 block">Image is required</span>}
        </div>

        <button type="submit" className="w-full bg-sky-600 text-white p-4 rounded-xl font-bold hover:bg-sky-700 transition shadow-lg shadow-sky-200">
          Submit School
        </button>
      </form>
    </div>
  );
}