import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Actions pour l'authentification
const AUTH_ACTIONS = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  SET_LOADING: 'SET_LOADING',
  SET_USER: 'SET_USER'
};

// État initial
const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
  isLoading: true
};

// Reducer pour gérer les changements d'état
function authReducer(state, action) {
  switch (action.type) {
    case AUTH_ACTIONS.LOGIN:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isAuthenticated: true,
        isLoading: false
      };
    case AUTH_ACTIONS.LOGOUT:
      return {
        ...state,
        user: null,
        token: null,
        isAuthenticated: false,
        isLoading: false
      };
    case AUTH_ACTIONS.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload
      };
    case AUTH_ACTIONS.SET_USER:
      return {
        ...state,
        user: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
}

// Création du contexte
const AuthContext = createContext();

// Hook personnalisé pour utiliser le contexte
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

// Provider du contexte d'authentification
export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Vérification du token au chargement
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    const userData = localStorage.getItem('userData');
    
    if (token && userData) {
      try {
        const user = JSON.parse(userData);
        dispatch({
          type: AUTH_ACTIONS.LOGIN,
          payload: { user, token }
        });
      } catch (error) {
        console.error('Erreur lors de la récupération des données utilisateur:', error);
        localStorage.removeItem('authToken');
        localStorage.removeItem('userData');
      }
    }
    
    dispatch({ type: AUTH_ACTIONS.SET_LOADING, payload: false });
  }, []);

  // Fonction de connexion
  const login = async (email, password) => {
    try {
      dispatch({ type: AUTH_ACTIONS.SET_LOADING, payload: true });
      
      // Simulation d'une connexion automatique réussie
      console.log('Connexion automatique en cours...');
      
      // Simulation d'un délai réseau
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Création d'un utilisateur factice
      const mockUser = {
        id: 'user_123',
        name: 'Utilisateur Demo',
        email: email,
        avatar: null
      };
      
      const mockToken = 'demo_token_' + Date.now();
      
      // Stockage du token et des données utilisateur
      localStorage.setItem('authToken', mockToken);
      localStorage.setItem('userData', JSON.stringify(mockUser));
      
      dispatch({
        type: AUTH_ACTIONS.LOGIN,
        payload: { user: mockUser, token: mockToken }
      });
      
      return { success: true };
    } catch (error) {
      dispatch({ type: AUTH_ACTIONS.SET_LOADING, payload: false });
      return { success: false, error: error.message };
    }
  };

  // Fonction de déconnexion
  const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
    dispatch({ type: AUTH_ACTIONS.LOGOUT });
  };

  // Fonction de connexion avec Google (placeholder)
  const loginWithGoogle = async () => {
    try {
      dispatch({ type: AUTH_ACTIONS.SET_LOADING, payload: true });
      
      // Simulation - en réalité, vous utiliseriez l'API Google OAuth
      console.log('Connexion avec Google...');
      
      // Pour la démo, on simule une connexion réussie
      const mockUser = {
        id: 'google_123',
        name: 'Utilisateur Google',
        email: 'user@gmail.com',
        avatar: 'https://via.placeholder.com/40'
      };
      
      const mockToken = 'mock_google_token_123';
      
      localStorage.setItem('authToken', mockToken);
      localStorage.setItem('userData', JSON.stringify(mockUser));
      
      dispatch({
        type: AUTH_ACTIONS.LOGIN,
        payload: { user: mockUser, token: mockToken }
      });
      
      return { success: true };
    } catch (error) {
      dispatch({ type: AUTH_ACTIONS.SET_LOADING, payload: false });
      return { success: false, error: error.message };
    }
  };

  const value = {
    ...state,
    login,
    logout,
    loginWithGoogle
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}