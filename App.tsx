import React, { useState } from 'react';
import { StudentDashboard } from './components/StudentDashboard';
import { AdminDashboard } from './components/AdminDashboard';
import { ChefHat, User, Lock, LogOut, ArrowRight, ShieldCheck, UtensilsCrossed } from 'lucide-react';

const App: React.FC = () => {
  const [role, setRole] = useState<'student' | 'admin' | null>(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loginMode, setLoginMode] = useState<'selection' | 'admin_form'>('selection');

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'Admin' && password === 'Helloewu123') {
      setRole('admin');
      setError('');
      setLoginMode('selection');
    } else {
      setError('Invalid Username or Password');
    }
  };

  const handleStudentLogin = () => {
    setRole('student');
  };

  const handleLogout = () => {
    setRole(null);
    setUsername('');
    setPassword('');
    setError('');
    setLoginMode('selection');
  };

  // --- LOGIN SCREEN RENDER ---
  if (!role) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center p-4 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-orange-500 to-orange-400 -z-10 rounded-b-[50px] shadow-lg"></div>
        <div className="absolute top-10 right-10 opacity-10 text-white">
          <UtensilsCrossed size={120} />
        </div>

        <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden relative z-10">
          <div className="p-8 text-center border-b border-gray-100">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 text-orange-600 rounded-full mb-4 shadow-inner">
              <ChefHat size={32} />
            </div>
            <h1 className="text-2xl font-bold text-gray-800">EWU Canteen</h1>
            <p className="text-gray-500 text-sm mt-1">Management System</p>
          </div>

          <div className="p-8">
            {loginMode === 'selection' ? (
              <div className="space-y-4">
                <button
                  onClick={handleStudentLogin}
                  className="w-full group relative flex items-center p-4 border-2 border-orange-100 rounded-xl hover:border-orange-500 hover:bg-orange-50 transition-all duration-300"
                >
                  <div className="bg-orange-100 p-3 rounded-lg text-orange-600 mr-4 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                    <User size={24} />
                  </div>
                  <div className="text-left flex-1">
                    <h3 className="font-bold text-gray-800">Student Access</h3>
                    <p className="text-xs text-gray-500">Order food & view menu</p>
                  </div>
                  <ArrowRight className="text-gray-300 group-hover:text-orange-500 transition-colors" />
                </button>

                <button
                  onClick={() => setLoginMode('admin_form')}
                  className="w-full group relative flex items-center p-4 border-2 border-gray-100 rounded-xl hover:border-gray-400 hover:bg-gray-50 transition-all duration-300"
                >
                  <div className="bg-gray-100 p-3 rounded-lg text-gray-600 mr-4 group-hover:bg-gray-700 group-hover:text-white transition-colors">
                    <ShieldCheck size={24} />
                  </div>
                  <div className="text-left flex-1">
                    <h3 className="font-bold text-gray-800">Admin Login</h3>
                    <p className="text-xs text-gray-500">Manage stock & orders</p>
                  </div>
                  <ArrowRight className="text-gray-300 group-hover:text-gray-600 transition-colors" />
                </button>
              </div>
            ) : (
              <form onSubmit={handleAdminLogin} className="space-y-4 animate-in fade-in slide-in-from-right-8 duration-300">
                <div className="text-center mb-6">
                  <h3 className="text-lg font-bold text-gray-800">Admin Authentication</h3>
                  <p className="text-xs text-gray-500">Please enter your credentials</p>
                </div>

                {error && (
                  <div className="bg-red-50 text-red-600 text-sm p-3 rounded-lg flex items-center gap-2">
                    <ShieldCheck size={16} /> {error}
                  </div>
                )}

                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Username</label>
                  <div className="relative">
                    <User className="absolute left-3 top-2.5 text-gray-400" size={18} />
                    <input
                      type="text"
                      className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="Enter username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-2.5 text-gray-400" size={18} />
                    <input
                      type="password"
                      className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>

                <div className="pt-2 flex flex-col gap-2">
                  <button
                    type="submit"
                    className="w-full bg-gray-800 text-white py-2.5 rounded-lg font-semibold hover:bg-gray-900 transition-colors shadow-lg shadow-gray-200"
                  >
                    Login
                  </button>
                  <button
                    type="button"
                    onClick={() => { setLoginMode('selection'); setError(''); }}
                    className="w-full text-gray-500 text-sm hover:text-gray-800 py-2"
                  >
                    Back to selection
                  </button>
                </div>
              </form>
            )}
          </div>
          
          <div className="bg-gray-50 p-4 text-center border-t border-gray-100">
            <p className="text-xs text-gray-400">© 2024 East West University Canteen</p>
          </div>
        </div>
      </div>
    );
  }

  // --- MAIN APP RENDER ---
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="bg-orange-600 p-2 rounded-lg text-white">
                <ChefHat size={24} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 tracking-tight">EWU Canteen</h1>
                <p className="text-xs text-gray-500 -mt-1 flex items-center gap-1">
                  {role === 'admin' ? (
                    <span className="text-orange-600 font-semibold">Admin Panel</span>
                  ) : (
                    <span className="text-green-600 font-semibold">Student View</span>
                  )}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
               {role === 'admin' && (
                 <div className="hidden md:flex items-center px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-600">
                    <ShieldCheck size={14} className="mr-1"/> Administrator
                 </div>
               )}
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 border border-transparent hover:border-red-100 transition-all"
              >
                <LogOut size={16} /> 
                <span className="hidden sm:inline">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 animate-in fade-in duration-500">
        {role === 'student' ? <StudentDashboard /> : <AdminDashboard />}
      </main>
    </div>
  );
};

export default App;