import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 flex items-center justify-center p-5">
      <div className="w-full max-w-md mx-auto">
        {/* Main Container */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/10 transition-all duration-300 hover:bg-white/10">
          {/* Character Image */}
          <div className="relative mb-6 overflow-hidden rounded-xl">
            <img 
              src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/12/a-split-image-showing-kaneki-ken-from-tokyo-ghoul.jpg?q=70&fit=crop&w=1100&h=618&dpr=1" 
              alt="كانيكي - طوكيو غول"
              className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* Arabic Content */}
          <div className="text-center mb-6" dir="rtl">
            <p className="text-white text-lg leading-relaxed mb-4 font-medium">
              أهلا وسهلا قروب انمي واتس نقاشات وفعاليات نتشرف بدخولكم قروبنا
            </p>
            <p className="text-gray-300 text-base">
              قول لهم من طرف كانيكي كن
            </p>
          </div>

          {/* WhatsApp Join Button */}
          <div className="flex justify-center">
            <a 
              href="https://chat.whatsapp.com/DNpg2s1FDbyKFpllzA6Ny4?mode=ac_t" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/25 active:scale-95"
            >
              {/* WhatsApp Icon */}
              <svg 
                className="w-6 h-6" 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.484 3.297"/>
              </svg>
              <span dir="rtl">انضم الآن</span>
            </a>
          </div>

          {/* Decorative Elements */}
          <div className="flex justify-center mt-6 space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-4 text-gray-400 text-sm" dir="rtl">
          <p>انضم إلى مجتمع الأنمي</p>
        </div>
      </div>
    </div>
  );
}

export default App;