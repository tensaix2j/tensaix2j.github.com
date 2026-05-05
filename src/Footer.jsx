

import { FaGithub, FaTwitter, FaItchIo } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 bg-white text-gray-600">

      {/* Main footer content */}
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Identity */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            TensaiStudio
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Full stack web and game dev based in Singapore. 
           </p> 
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-3">
            Navigate
          </h3>
          
          <ul className="space-y-2 text-sm">
            
            <li>
              <a href="/" className="hover:text-gray-900 transition">
                Home
              </a>
            </li>
            
            <li>
              <a href="/about" className="hover:text-gray-900 transition">
                About
              </a>
            </li>
            
            <li>
              <a href="/projects" className="hover:text-gray-900 transition">
                Projects
              </a>
            </li>

          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-3">
            Connect
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
                <a href="https://github.com/tensaix2j" className="hover:text-gray-900 transition">
                <FaGithub className="w-4 h-4 inline translate-y-[-2px]"/>
                <span className="mx-2">Github</span>
                </a>
            </li>
            
            <li className="flex">
                <a href="https://tensaix2j.itch.io" className="hover:text-gray-900 transition">
                <FaItchIo className="w-4 h-4  inline translate-y-[-2px] " />
                <span className="mx-2">ItchIo</span>
              </a>
            </li>


          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between text-xs text-gray-500">
          <p>© {new Date().getFullYear()} TensaiStudio</p>
          <p className="whitespace-nowrap">Built with React</p>
        </div>
      </div>

    </footer>
  );
}