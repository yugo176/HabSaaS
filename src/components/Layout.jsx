import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';

function Layout() {
  const location = useLocation();
  
  // Déterminer le titre de la page selon la route
  const getPageTitle = () => {
    switch (location.pathname) {
      case '/dashboard':
        return 'Tableau de bord';
      case '/new-request':
        return 'Nouvelle demande';
      case '/my-requests':
        return 'Mes demandes';
      case '/properties':
        return 'Propriétés';
      case '/calculator':
        return 'Calculateur';
      case '/reports':
        return 'Rapports';
      default:
        return 'Tableau de bord';
    }
  };

  return (
    <div className="flex min-h-screen bg-neutral-50">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Zone de contenu principal */}
      <div className="flex-1 flex flex-col">
        {/* Header principal */}
        <header className="bg-white shadow-soft border-b border-neutral-200">
          <div className="px-8 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-neutral-900 font-serif">
                  {getPageTitle()}
                </h1>
                <p className="text-neutral-600 mt-1">
                  Gestion de vos biens en toute simplicité
                </p>
              </div>
              
              <div className="flex items-center space-x-4">
                {/* Barre de recherche */}
                <div className="relative hidden md:block">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder="Rechercher..."
                    className="pl-10 pr-4 py-2 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 w-80 bg-neutral-50"
                  />
                </div>
                
                {/* Notifications */}
                <button className="p-2 text-neutral-400 hover:text-primary-600 transition-colors rounded-xl hover:bg-neutral-100">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5z" />
                  </svg>
                </button>
                
                {/* Messages */}
                <button className="p-2 text-neutral-400 hover:text-primary-600 transition-colors rounded-xl hover:bg-neutral-100 relative">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span className="absolute -top-1 -right-1 h-3 w-3 bg-danger-500 rounded-full"></span>
                </button>
                
                {/* Paramètres */}
                <button className="p-2 text-neutral-400 hover:text-primary-600 transition-colors rounded-xl hover:bg-neutral-100">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Contenu principal */}
        <main className="flex-1 p-8 animate-fade-in">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
        
        {/* Footer */}
        <footer className="bg-white border-t border-neutral-200 py-4 px-8">
          <div className="flex items-center justify-between text-sm text-neutral-500">
            <p>© 2024 HabSaaS. Tous droits réservés.</p>
            <div className="flex items-center space-x-6">
              <a href="#" className="hover:text-primary-600 transition-colors">Aide</a>
              <a href="#" className="hover:text-primary-600 transition-colors">Support</a>
              <a href="#" className="hover:text-primary-600 transition-colors">Confidentialité</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Layout;