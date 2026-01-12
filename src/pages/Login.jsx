import React from 'react';
import { Mail, Lock, ArrowRight, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-black text-[#0E2931]">Welcome Back</h2>
          <p className="mt-2 text-sm text-gray-500">
            Don't have an account?{' '}
            <Link to="/signup" className="font-bold text-[#0E2931] hover:underline">
              Create an account
            </Link>
          </p>
        </div>

        <form className="mt-8 space-y-6 ">
          <div className="space-y-4">
            <div className="relative ">
              <Mail className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="email"
                required
                className="block w-full pl-10 pr-4 py-4 border border-gray-100 bg-gray-50 rounded-2xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0E2931]/10 focus:bg-white transition-all sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div className="relative">
              <Lock className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="password"
                required
                className="block w-full pl-10 pr-4 py-4 border border-gray-100 bg-gray-50 rounded-2xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0E2931]/10 focus:bg-white transition-all sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-[#0E2931] border-gray-300 rounded"
              />
              <label className="ml-2 block text-sm text-gray-900 font-medium">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-bold text-[#0E2931] hover:underline">
                Forgot password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-4 px-4 border border-transparent text-lg font-black rounded-2xl text-white bg-[#0E2931] hover:bg-[#1a4a58] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0E2931] transition-all shadow-lg shadow-[#0E2931]/20"
            >
              Sign in
            </button>
          </div>

          <div className="relative mt-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-100"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500 font-medium uppercase tracking-widest text-[10px]">Or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 py-3 border border-gray-100 rounded-2xl hover:bg-gray-50 transition-all font-bold text-gray-700">
              <Github size={20} /> Github
            </button>
            <button className="flex items-center justify-center gap-2 py-3 border border-gray-100 rounded-2xl hover:bg-gray-50 transition-all font-bold text-gray-700">
              <span className="text-xl">G</span> Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
