import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Send } from "lucide-react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0E2931] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">

          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <img src={logo} alt="Snapit Logo" className="w-10 h-10 object-contain brightness-0 invert" />
              <h2 className="text-2xl font-black tracking-tight uppercase">SNAPIT</h2>
            </div>
            <p className="text-white/60 leading-relaxed max-w-xs text-sm font-medium">
              We bring the farm to your doorstep. Experience the finest quality organic produce and premium daily essentials, handpicked and delivered with care.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-11 h-11 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-white/10 transition-all border border-white/10 group">
                <Facebook size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-11 h-11 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-white/10 transition-all border border-white/10 group">
                <Instagram size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-11 h-11 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-white/10 transition-all border border-white/10 group">
                <Twitter size={20} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:pl-8">
            <h3 className="text-lg font-black mb-8 uppercase tracking-widest text-sm text-green-400">Shop</h3>
            <ul className="space-y-4 text-white/70 font-bold text-sm">
              <li><Link to="/" className="hover:text-green-400 transition-colors">Home Listing</Link></li>
              <li><Link to="/shop" className="hover:text-green-400 transition-colors">Our Products</Link></li>
              <li><Link to="/category" className="hover:text-green-400 transition-colors">All Categories</Link></li>
              <li><Link to="/cart" className="hover:text-green-400 transition-colors">My Cart</Link></li>
            </ul>
          </div>

          {/* Support Section */}
          <div className="lg:pl-8">
            <h3 className="text-lg font-black mb-8 uppercase tracking-widest text-sm text-green-400">Account</h3>
            <ul className="space-y-4 text-white/70 font-bold text-sm">
              <li><Link to="/orders" className="hover:text-green-400 transition-colors">My Orders</Link></li>
              <li><Link to="/track" className="hover:text-green-400 transition-colors">Track Order</Link></li>
              <li><Link to="/login" className="hover:text-green-400 transition-colors">Sign In</Link></li>
              <li><Link to="/signup" className="hover:text-green-400 transition-colors">Create Account</Link></li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="space-y-6">
            <h3 className="text-lg font-black mb-8 uppercase tracking-widest text-sm text-green-400">Newsletter</h3>
            <p className="text-white/60 text-xs font-bold leading-loose">
              Subscribe to get notified about product launches, special offers and organic farming tips.
            </p>
            <div className="relative group">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-5 pr-14 text-sm focus:outline-none focus:bg-white/10 focus:border-green-400/50 transition-all font-medium"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-green-400 text-[#0E2931] w-10 rounded-xl flex items-center justify-center hover:scale-105 transition-all shadow-lg shadow-green-400/20 active:scale-95">
                <Send size={18} />
              </button>
            </div>
          </div>

        </div>

        {/* Contact Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 bg-white/5 rounded-3xl border border-white/10 mb-12">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-green-400/10 flex items-center justify-center text-green-400">
              <Phone size={22} />
            </div>
            <div>
              <p className="text-[10px] uppercase font-black text-white/40 tracking-widest">Call Us 24/7</p>
              <p className="font-bold">+91 98765 43210</p>
            </div>
          </div>
          <div className="flex items-center gap-4 border-y md:border-y-0 md:border-x border-white/10 py-6 md:py-0 md:px-8">
            <div className="w-12 h-12 rounded-2xl bg-green-400/10 flex items-center justify-center text-green-400">
              <Mail size={22} />
            </div>
            <div>
              <p className="text-[10px] uppercase font-black text-white/40 tracking-widest">Email Support</p>
              <p className="font-bold">help@snapit.com</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-green-400/10 flex items-center justify-center text-green-400">
              <MapPin size={22} />
            </div>
            <div>
              <p className="text-[10px] uppercase font-black text-white/40 tracking-widest">Store Location</p>
              <p className="font-bold">Green Valley, Delhi</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 text-[11px] font-black uppercase tracking-widest">
            © 2026 SNAPIT PVT LTD. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8 text-[11px] font-black uppercase tracking-widest text-white/40">
            <a href="#" className="hover:text-green-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-green-400 transition-colors">Terms</a>
            <a href="#" className="hover:text-green-400 transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
