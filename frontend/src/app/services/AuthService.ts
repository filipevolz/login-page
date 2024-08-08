import axios from 'axios';

const API_URL = 'http://localhost:8080/auth';

export const AuthService = {
  login: async (email: string, password: string) => {
    try {
      const response = await axios.post(`${API_URL}/login`, { email, password });
      sessionStorage.setItem('auth-token', response.data.token);
      sessionStorage.setItem('username', response.data.name);
      return response.data;
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      throw error;
    }
  },

  signup: async (name: string, email: string, password: string) => {
    try {
      const response = await axios.post(`${API_URL}/register`, { name, email, password });
      sessionStorage.setItem('auth-token', response.data.token);
      sessionStorage.setItem('username', response.data.name);
      return response.data;
    } catch (error) {
      console.error('Erro ao fazer cadastro:', error);
      throw error;
    }
  },

  isAuthenticated: () => {
    return !!sessionStorage.getItem('auth-token');
  },

  logout: () => {
    sessionStorage.removeItem('auth-token');
    sessionStorage.removeItem('username');
  }
};
