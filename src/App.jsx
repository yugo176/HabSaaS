import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Layout from './components/Layout';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import NewRequestPage from './pages/NewRequestPage';
import MyRequestsPage from './pages/MyRequestsPage';
import './index.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Route publique de connexion */}
          <Route path="/login" element={<LoginPage />} />
          
          {/* Routes protégées avec layout */}
          <Route path="/" element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }>
            {/* Pages internes */}
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="new-request" element={<NewRequestPage />} />
            <Route path="my-requests" element={<MyRequestsPage />} />
          </Route>
          
          {/* Redirection par défaut vers le dashboard */}
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          
          {/* Route 404 - Page non trouvée */}
          <Route path="*" element={
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
              <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
                <p className="text-gray-600 mb-4">Page non trouvée</p>
                <a 
                  href="/dashboard" 
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Retour au tableau de bord
                </a>
              </div>
            </div>
          } />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
