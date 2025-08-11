import ApiService from './api';

import { useStoreSession } from '@/store/session';

class AuthServiceClass {
  setToken(token: string) {
    const { setToken } = useStoreSession.getState();
    setToken(token);
  }

  getToken() {
    return useStoreSession.getState().token;
  }

  clearToken() {
    const { clearToken } = useStoreSession.getState();
    clearToken();
  }

  async authenticate() {
    const response = await ApiService.post<{ access_token: string }>('http://localhost:3001/auth');
    return response;
  }
}

const AuthService = new AuthServiceClass();

export default AuthService;
