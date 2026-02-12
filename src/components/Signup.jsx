import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Target, Mail, Lock, User, ArrowLeft } from 'lucide-react';
import { useState } from 'react';
const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setFullName] = useState('');
  const navigate = useNavigate();

  const registerUser = async (name, email, password) => {
    try {
      const response = await fetch('http://localhost:8000/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Registration failed');
      }

      console.log('Registration successful:', data);
      navigate('/login'); // Redirect to login after successful registration

    } catch (error) {
      console.error('Error during registration:', error);
    } finally {
      // Any cleanup if needed
    } 
    };

    const handleRegister = async (e) => {
      e.preventDefault();
      await registerUser(name, email, password);
    };
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <button 
        onClick={() => navigate('/')}
        className="absolute top-8 left-8 flex items-center gap-2 text-gray-500 hover:text-blue-600 transition"
      >
        <ArrowLeft size={20} />
        <span>Back to Home</span>
      </button>

      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <Target className="text-blue-600" size={48} />
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Create an account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <button onClick={() => navigate('/login')} className="font-medium text-blue-600 hover:text-blue-500">
            Sign in
          </button>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-xl rounded-2xl sm:px-10 border border-gray-100">
          <form className="space-y-5" onSubmit={handleRegister}>
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setFullName(e.target.value)}
                  className="appearance-none block w-full pl-10 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="John Doe"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full pl-10 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full pl-10 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Minimum 8 characters"
                />
              </div>
            </div>

            <div className="text-xs text-gray-500">
              By signing up, you agree to our <a href="#" className="underline">Terms</a> and <a href="#" className="underline">Privacy Policy</a>.
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 transition-all"
            >
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;