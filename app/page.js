import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      
      {/* HERO SECTION */}
      <section className="px-6 py-20 md:py-32 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 font-semibold text-sm rounded-full mb-2 border border-blue-100">
             🚀 The Future of School Management
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight">
            Manage Schools with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Confidence & Ease
            </span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-lg mx-auto md:mx-0">
            A comprehensive platform to register, track, and discover schools. 
            Streamline your administrative database with our modern, intuitive interface.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4">
            <Link href="/addSchool">
              <button className="px-8 py-4 bg-blue-600 text-white font-bold rounded-full shadow-lg hover:bg-blue-700 hover:shadow-blue-500/30 transition-all transform hover:-translate-y-1">
                Get Started Now
              </button>
            </Link>
            <Link href="/showSchools">
              <button className="px-8 py-4 bg-white text-slate-700 font-bold rounded-full border border-slate-200 shadow-sm hover:bg-slate-50 hover:border-slate-300 transition-all">
                Explore Directory
              </button>
            </Link>
          </div>
        </div>

        {/* Right Illustration / Visual */}
        <div className="md:w-1/2 relative">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
          
          <div className="relative bg-white p-6 rounded-2xl shadow-2xl border border-slate-100 rotate-2 hover:rotate-0 transition-transform duration-500">
             {/* Mock Dashboard UI */}
             <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
               <div className="w-3 h-3 rounded-full bg-red-400"></div>
               <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
               <div className="w-3 h-3 rounded-full bg-green-400"></div>
               <div className="ml-auto text-xs text-slate-400 font-mono">dashboard.js</div>
             </div>
             <div className="space-y-4">
               <div className="h-8 bg-slate-100 rounded w-3/4"></div>
               <div className="grid grid-cols-3 gap-4">
                  <div className="h-24 bg-blue-50 rounded-lg border border-blue-100"></div>
                  <div className="h-24 bg-purple-50 rounded-lg border border-purple-100"></div>
                  <div className="h-24 bg-emerald-50 rounded-lg border border-emerald-100"></div>
               </div>
               <div className="h-32 bg-slate-50 rounded-lg border border-slate-100"></div>
             </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="bg-white py-20 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose SchoolHub?</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Built with the latest technology to ensure your data is secure, accessible, and easy to manage.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6 text-blue-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Easy Registration</h3>
              <p className="text-slate-600">Add new schools to the database in seconds with our optimized, user-friendly forms.</p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6 text-purple-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Instant Search</h3>
              <p className="text-slate-600">Find any school instantly by filtering through names, cities, or addresses.</p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6 text-emerald-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Reliable Data</h3>
              <p className="text-slate-600">Securely store school images and contact details with our robust database architecture.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 py-12 text-center">
        <p className="text-slate-400">© 2025 SchoolHub Management System. All rights reserved.</p>
      </footer>

    </div>
  );
}