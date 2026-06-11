import Link from 'next/link';

export default function WebsiteOperasional() {
  // Data aplikasi / divisi Irmala
  // Gue biarin tetep pakai ikon dan link yang semalem biar langsung jalan
  const apps = [
    {
      name: "Sekretaris",
      href: "https://sekretaris-app.vercel.app",
      iconColor: "text-emerald-500",
      bgColor: "bg-emerald-50",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
        </svg>
      ),
    },
    {
      name: "Bendahara",
      href: "https://keuangan-irmala.vercel.app/",
      iconColor: "text-amber-500",
      bgColor: "bg-amber-50",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      ),
    },
    {
      name: "Creative",
      href: "/creative",
      iconColor: "text-fuchsia-500",
      bgColor: "bg-fuchsia-50",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
        </svg>
      ),
    },
    {
      name: "Marketing Com",
      href: "/marcomm",
      iconColor: "text-blue-500",
      bgColor: "bg-blue-50",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"></path>
        </svg>
      ),
    },
    {
      name: "Keislaman",
      href: "/keislaman",
      iconColor: "text-indigo-500",
      bgColor: "bg-indigo-50",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
        </svg>
      ),
    },
    {
      name: "Logistik",
      href: "https://logistik-app-theta.vercel.app/",
      iconColor: "text-orange-500",
      bgColor: "bg-orange-50",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
        </svg>
      ),
    },
  ];

  return (
    <main className="min-h-screen bg-[#ECFDF5] flex flex-col items-center pt-20 pb-12 px-4 font-sans relative">
      
      {/* Elemen dekoratif super tipis biar gak plain banget */}
      <div className="absolute inset-0 z-0 opacity-40">
        <svg width="100%" height="100%">
          <pattern id="pattern-circles" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" className="fill-emerald-200" />
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)" />
        </svg>
      </div>

      <div className="w-full max-w-5xl mx-auto flex flex-col items-center relative z-10">
        
        {/* Header Title */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-800 tracking-tight leading-tight">
            Website Operasional <span className="text-emerald-700">Irmala</span>
          </h1>
          <p className="text-slate-600 mt-4 text-sm md:text-base max-w-lg mx-auto font-medium">
            Portal integrasi divisi organisasi Irmala. Pilih aplikasi untuk mulai bekerja.
          </p>
        </div>

        {/* Odoo Style Grid Container - Diperbaiki biar kotaknya gede tapi gaknya pas */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-8 md:gap-8 w-full max-w-sm sm:max-w-md md:max-w-5xl mx-auto">
          {apps.map((app, index) => (
            <Link 
              key={index} 
              href={app.href}
              target={app.href.startsWith("http") ? "_blank" : "_self"}
              className="group flex flex-col items-center cursor-pointer"
            >
              {/* Box Icon - Diperbesar di HP (w-28 h-28), Laptop tetep (w-32) */}
              <div className="w-28 h-28 md:w-32 md:h-32 bg-white rounded-3xl shadow-[0_2px_12px_rgba(0,0,0,0.05)] flex items-center justify-center transition-all duration-300 transform group-hover:-translate-y-2 group-hover:shadow-[0_15px_30px_rgba(16,185,129,0.2)] border border-emerald-100">
                {/* Ikon maksimal di dalem kotak (scale-100) */}
                <div className={`transform transition-transform duration-300 group-hover:scale-110 scale-100 ${app.iconColor}`}>
                  {app.icon}
                </div>
              </div>
              
              {/* Text Title - Teks lebih gede dan proporsional */}
              <span className="mt-4 md:mt-5 text-sm md:text-base font-bold text-slate-700 group-hover:text-emerald-700 transition-colors text-center w-full">
                {app.name}
              </span>
            </Link>
          ))}
        </div>

        {/* Footer info tipis-tipis */}
        <div className="mt-24 text-center">
          <p className="text-xs text-emerald-900/50 font-medium leading-relaxed">© 2026 Ikatan Remaja Masjid Jami'atul Amaliyah.<br />All rights reserved.</p>
        </div>
      </div>

    </main>
  );
}