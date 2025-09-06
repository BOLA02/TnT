import { Calendar, MapPin, Users, FileText, Eye } from "lucide-react";
import "./App.css";

export default function App() {
  const eventDocuments = [
    {
      id: 1,
      name: "ACS Side Event agenda",
      url: "/ACS Side Event agenda.pdf",
    
      
      
    },
    {
      id: 2,
      name: "ACS Summit Info",
      url: "/TinT-Ftaxes - ACS Summit Info.pdf",
      
      
      
    },
    {
      id: 3,
      name: "Annunal Report 2024",
      url: "/TinT-Follow Taxes - Annunal Report 2024.pdf",
      
      
      
    },
    {
      id: 4,
      name: "Research Oxfam",
      url: "/Research Oxfam - Ftaxes  20250821.pdf",
      
      
      
    },
    {
      id: 5,
      name: "Policy Brief August 2025",
      url: "/Policy Brief August 2025.pdf",
      
      
      
    },
    {
      id: 6,
      name: "LAPA",
      url: "/LAPA_023824.pdf",
      
      
      
    },
  ];

  const openDocument = (document) => {
    window.open(document.url, "_blank");
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-4 border w-full">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <img
          src="/bg.jpg"
          alt="Care Work Climate Action Background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/80 via-green-800/70 to-emerald-700/80"></div>
      </div>

      {/* Hero Section */}
      <div className=" z-10 flex justify-center  mx-auto">
        <div className="w-full mx-auto px-4 py-16 text-center justify-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-green-800 mb-8 shadow-sm">
            <Calendar className="w-4 h-4 mr-2" />
            Africa Climate Summit 2 - 8th-10th September, 2025 Addis Ababa, Ethiopia
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight drop-shadow-lg">
            Elevating
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              {" "}
              Care Work
            </span>
            <br />
            in Climate Action
          </h1>
          <p className="text-lg sm:text-xl text-green-100 max-w-2xl mx-auto mb-12 leading-relaxed drop-shadow">
            The Unseen and Unpaid - Access all event materials, schedules, and
            important documents for this crucial side event at the Africa
            Climate Summit.
          </p>
        </div>
      </div>

      <div className="flex justify-center">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
    {eventDocuments.map((document) => {
     
      return (
        <div
          key={document.id}
          className="w-full max-w-sm mx-auto group bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-white/20"
        >
          <div className="flex items-center justify-between mb-4">
            
          </div>

          <h3 className="font-semibold text-gray-900 mb-2 text-lg">
            {document.name}
          </h3>
    

          <button
            onClick={() => openDocument(document)}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-lg transition-all duration-200 font-medium shadow-sm hover:shadow-md"
          >
            <Eye className="w-4 h-4" />
            View Document
          </button>
        </div>
      );
    })}
  </div>
</div>


    

      {/* Event Info Section */}
      <div className="relative z-10   ">
        <div className="max-w-6xl mx-auto px-4 py-16 text-center">
          <div className="grid gap-8 md:grid-cols-3 justify-items-center">
            <div className="group max-w-xs">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-white mb-2 drop-shadow">
                September 8-10, 2025
              </h3>
              <p className="text-green-100 drop-shadow">
                Three days of climate action focus
              </p>
            </div>

            <div className="group max-w-xs">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-400 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-white mb-2 drop-shadow">
                Addis Ababa, Ethiopia
              </h3>
              <p className="text-green-100 drop-shadow">
                Africa Climate Summit venue
              </p>
            </div>

            <div className="group max-w-xs">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-white mb-2 drop-shadow">
                Climate & Care Leaders
              </h3>
              <p className="text-green-100 drop-shadow">
                Policy makers and advocates
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10  text-white py-8 sm:py-12  ">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
            Need Help?
          </h3>
          <p className="text-green-100 mb-4 sm:mb-6 text-sm sm:text-base">
            Contact our event coordinators for assistance with documents or
            event information
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 text-xs sm:text-sm">
            <span>📧 info@followtaxes.com</span>
            <span>🌐 www.followtaxes.org</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
