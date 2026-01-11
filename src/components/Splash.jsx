import logo from "../assets/logo.png";

const Splash = () => {
  return (
    <div className="fixed inset-0 bg-[#0E2931] flex flex-col items-center justify-center z-[9999]">
      <div className="relative">
        {/* Animated Rings */}
        <div className="absolute inset-0 bg-white/10 rounded-full animate-ping scale-150"></div>
        <div className="absolute inset-0 bg-white/5 rounded-full animate-ping scale-125 animation-delay-500"></div>

        {/* Logo */}
        <div className="relative bg-white p-8 rounded-[2.5rem] shadow-2xl animate-bounce">
          <img src={logo} alt="Snapit Logo" className="w-24 h-24 object-contain" />
        </div>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-4xl font-black text-white tracking-[0.2em] animate-pulse">SNAPIT</h2>
        <div className="mt-4 flex gap-1 justify-center">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce animation-delay-200"></div>
          <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce animation-delay-400"></div>
        </div>
        <p className="mt-8 text-white/40 font-bold uppercase tracking-widest text-xs">Freshness incoming</p>
      </div>
    </div>
  );
};

export default Splash;
