import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black/90 border-t border-yellow-500/20 text-gray-400 py-12 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h3 className="text-yellow-400 text-lg font-semibold mb-3 flex items-center gap-2">
            🧠 Neuricorn Syndicate
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Transforming education through neural intelligence, blockchain
            innovation, and next-generation automation.
          </p>
        </div>

        {/* Products */}
        <div>
          <h4 className="text-yellow-400 font-semibold mb-3">Products</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/products" className="hover:text-yellow-400">WebChain</Link></li>
            <li><Link to="/products" className="hover:text-yellow-400">NeuraGrade</Link></li>
            <li><Link to="/products" className="hover:text-yellow-400">NeuraScan</Link></li>
            <li><Link to="/products" className="hover:text-yellow-400">Training Hub</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-yellow-400 font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-yellow-400">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-400">Contact</Link></li>
            <li><Link to="/careers" className="hover:text-yellow-400">Careers</Link></li>
            {/* <li><a href="#" className="hover:text-yellow-400">Blog</a></li> */}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-yellow-400 font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>📧 business@neuricornsyndicate.com</li>
            <li>📧 ceo.neuricornsyndicate@gmail.com</li>
            <li>📧 hr.neuricornsyndicate@gmail.com</li>
            <li>📞 +91 7625011737</li>
            {/* <li>📍 Bangalore, India</li> */}
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center border-t border-yellow-500/20 mt-10 pt-6 text-xs text-gray-500">
        © 2025 Neuricorn Syndicate Pvt. Ltd. All rights reserved.
      </div>
    </footer>
  );
}
