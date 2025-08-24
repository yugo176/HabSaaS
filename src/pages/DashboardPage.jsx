import React from 'react';
import { useAuth } from '../context/AuthContext';
import { NavLink } from 'react-router-dom';

function DashboardPage() {
  const { user } = useAuth();

  // Statistiques pour le domaine foncier
  const stats = [
    {
      title: 'Propriétés en gestion',
      value: '24',
      change: '+2',
      icon: (
        <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      bgColor: 'bg-primary-50'
    },
    {
      title: 'Valeur du portefeuille',
      value: '2.4M€',
      change: '+12%',
      icon: (
        <svg className="w-8 h-8 text-success-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      bgColor: 'bg-success-50'
    },
    {
      title: 'Revenus mensuels',
      value: '18.5K€',
      change: '+8%',
      icon: (
        <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      bgColor: 'bg-accent-50'
    },
    {
      title: 'Taux d\'occupation',
      value: '94.2%',
      change: '+2.1%',
      icon: (
        <svg className="w-8 h-8 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      bgColor: 'bg-secondary-50'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Message de bienvenue */}
      <div className="card animate-fade-in">
        <div className="card-body">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-primary-600 rounded-2xl flex items-center justify-center shadow-medium">
              {user?.avatar ? (
                <img 
                  src={user.avatar} 
                  alt={user.name}
                  className="w-16 h-16 rounded-2xl object-cover"
                />
              ) : (
                <span className="text-white font-bold text-xl">
                  {user?.name?.charAt(0)?.toUpperCase() || 'U'}
                </span>
              )}
            </div>
            <div>
              <h1 className="text-3xl font-bold text-neutral-900 font-serif">
                Bonjour, {user?.name || 'Utilisateur'} !
              </h1>
              <p className="text-neutral-600 mt-1">
                Voici un aperçu de votre portefeuille immobilier.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="flex items-center justify-between">
              <div className={`${stat.bgColor} p-3 rounded-xl`}>
                {stat.icon}
              </div>
              <div className="text-success-600 text-sm font-medium">
                {stat.change}
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-sm font-medium text-neutral-600">
                {stat.title}
              </h3>
              <p className="text-3xl font-bold text-neutral-900 mt-1">
                {stat.value}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Actions rapides */}
      <div className="card">
        <div className="card-header">
          <h2 className="text-xl font-semibold text-neutral-900 font-serif">
            Actions rapides
          </h2>
        </div>
        <div className="card-body">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <NavLink to="/new-request" className="group block">
              <div className="flex items-center justify-center p-6 border-2 border-dashed border-primary-300 rounded-xl hover:border-primary-400 hover:bg-primary-50 transition-all duration-200 group-hover:scale-105">
                <div className="text-center">
                  <svg className="w-8 h-8 text-primary-600 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  <span className="text-sm font-medium text-primary-600">
                    Nouvelle demande
                  </span>
                </div>
              </div>
            </NavLink>
            
            <NavLink to="/properties" className="group block">
              <div className="flex items-center justify-center p-6 border-2 border-dashed border-success-300 rounded-xl hover:border-success-400 hover:bg-success-50 transition-all duration-200 group-hover:scale-105">
                <div className="text-center">
                  <svg className="w-8 h-8 text-success-600 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <span className="text-sm font-medium text-success-600">
                    Propriétés
                  </span>
                </div>
              </div>
            </NavLink>
            
            <NavLink to="/calculator" className="group block">
              <div className="flex items-center justify-center p-6 border-2 border-dashed border-accent-300 rounded-xl hover:border-accent-400 hover:bg-accent-50 transition-all duration-200 group-hover:scale-105">
                <div className="text-center">
                  <svg className="w-8 h-8 text-accent-600 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm font-medium text-accent-600">
                    Calculateur
                  </span>
                </div>
              </div>
            </NavLink>
            
            <NavLink to="/reports" className="group block">
              <div className="flex items-center justify-center p-6 border-2 border-dashed border-secondary-300 rounded-xl hover:border-secondary-400 hover:bg-secondary-50 transition-all duration-200 group-hover:scale-105">
                <div className="text-center">
                  <svg className="w-8 h-8 text-secondary-600 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2-2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <span className="text-sm font-medium text-secondary-600">
                    Rapports
                  </span>
                </div>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;