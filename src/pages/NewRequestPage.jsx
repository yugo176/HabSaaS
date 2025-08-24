import React from 'react';

function NewRequestPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Nouvelle Demande
        </h1>
        
        <div className="text-center py-12">
          <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          <h2 className="text-lg font-medium text-gray-900 mb-2">
            Formulaire de demande
          </h2>
          <p className="text-gray-600 mb-6">
            Cette page contiendra le formulaire multi-étapes pour soumettre de nouvelles demandes avec upload de fichiers.
          </p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Commencer une nouvelle demande
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewRequestPage;