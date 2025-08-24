import React from 'react';

function MyRequestsPage() {
  // Données fictives pour la démo
  const mockRequests = [
    {
      id: 1,
      title: 'Demande de congé été 2024',
      type: 'Congé',
      status: 'approved',
      date: '2024-08-15',
      description: 'Demande de congé du 1er au 15 septembre 2024'
    },
    {
      id: 2,
      title: 'Formation React avancée',
      type: 'Formation',
      status: 'pending',
      date: '2024-08-20',
      description: 'Inscription à la formation React avancée prévue en octobre'
    },
    {
      id: 3,
      title: 'Remboursement frais de transport',
      type: 'Remboursement',
      status: 'processing',
      date: '2024-08-18',
      description: 'Remboursement des frais de transport pour la mission client'
    },
    {
      id: 4,
      title: 'Matériel informatique',
      type: 'Matériel',
      status: 'rejected',
      date: '2024-08-10',
      description: 'Demande d\'un nouvel ordinateur portable'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'approved':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'processing':
        return 'bg-blue-100 text-blue-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'approved':
        return 'Approuvée';
      case 'pending':
        return 'En attente';
      case 'processing':
        return 'En cours';
      case 'rejected':
        return 'Rejetée';
      default:
        return 'Inconnu';
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'Congé':
        return 'bg-purple-100 text-purple-800';
      case 'Formation':
        return 'bg-indigo-100 text-indigo-800';
      case 'Remboursement':
        return 'bg-orange-100 text-orange-800';
      case 'Matériel':
        return 'bg-cyan-100 text-cyan-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-white rounded-lg shadow-sm">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">
              Suivi de mes demandes
            </h1>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Nouvelle demande
            </button>
          </div>
          <p className="mt-2 text-gray-600">
            Consultez le statut et l'historique de toutes vos demandes.
          </p>
        </div>

        {/* Filtres */}
        <div className="p-6 border-b border-gray-200 bg-gray-50">
          <div className="flex flex-wrap gap-4">
            <select className="px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
              <option>Tous les statuts</option>
              <option>En attente</option>
              <option>En cours</option>
              <option>Approuvée</option>
              <option>Rejetée</option>
            </select>
            <select className="px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
              <option>Tous les types</option>
              <option>Congé</option>
              <option>Formation</option>
              <option>Remboursement</option>
              <option>Matériel</option>
            </select>
            <input
              type="date"
              className="px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        {/* Liste des demandes */}
        <div className="divide-y divide-gray-200">
          {mockRequests.map((request) => (
            <div key={request.id} className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-2">
                    <h3 className="text-lg font-medium text-gray-900">
                      {request.title}
                    </h3>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getTypeColor(request.type)}`}>
                      {request.type}
                    </span>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(request.status)}`}>
                      {getStatusText(request.status)}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-2">
                    {request.description}
                  </p>
                  <p className="text-sm text-gray-500">
                    Soumis le {new Date(request.date).toLocaleDateString('fr-FR')}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                    Voir détails
                  </button>
                  {request.status === 'pending' && (
                    <button className="text-red-600 hover:text-red-800 text-sm font-medium">
                      Annuler
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-700">
              Affichage de <span className="font-medium">1</span> à <span className="font-medium">4</span> sur <span className="font-medium">4</span> demandes
            </p>
            <div className="flex space-x-2">
              <button className="px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-100 disabled:opacity-50" disabled>
                Précédent
              </button>
              <button className="px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-100 disabled:opacity-50" disabled>
                Suivant
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyRequestsPage;