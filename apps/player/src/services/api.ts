import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

import AuthService from './auth';

import { API_ENDPOINT } from '@/envs';
import ErrorResponse from '@/interfaces/errors';
import { useStoreSession } from '@/store/session';

class ApiServiceClass {
  private axiosInstance = axios.create({
    baseURL: API_ENDPOINT,
    timeout: 10000,
    headers: { 'Content-Type': 'application/json' }
  });

  constructor() {
    this.setupInterceptors();
  }

  public get<T = unknown>(url: string, params?: Record<string, unknown>): Promise<T> {
    return this.request<T>({ method: 'GET', url, params });
  }

  public post<T = unknown>(url: string, data?: unknown): Promise<T> {
    return this.request<T>({ method: 'POST', url, data });
  }

  public put<T = unknown>(url: string, data?: unknown): Promise<T> {
    return this.request<T>({ method: 'PUT', url, data });
  }

  public delete<T = unknown>(url: string, params?: Record<string, unknown>): Promise<T> {
    return this.request<T>({ method: 'DELETE', url, params });
  }

  private async request<T = unknown>(options: AxiosRequestConfig): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.axiosInstance.request({
        ...options,
        headers: {
          ...this.axiosInstance.defaults.headers.common,
          ...options.headers,
          'Authorization': `Bearer ${useStoreSession.getState().token}`,
          'Content-Type': options.data instanceof FormData ? 'multipart/form-data' : 'application/json'
        }
      });

      return response.data;
    } catch (err) {
      return this.handleError(err as AxiosError<ErrorResponse>);
    }
  }

  private handleError(err: AxiosError<ErrorResponse>): never {
    const validationErrors = err.response?.data?.message;

    if (validationErrors) {
      throw new Error(validationErrors);
    }

    throw new Error(err.message || 'An unexpected error occurred');
  }

  private setupInterceptors() {
    this.axiosInstance.interceptors.response.use(
      response => response,
      async error => {
        const isAuthRoute = error.config?.url?.includes('/auth');

        if (error.response?.status === 401 && !isAuthRoute) {
          const { access_token } = await AuthService.authenticate();

          AuthService.clearToken();
          AuthService.setToken(access_token);

          const response = await this.request(error.config);

          return { data: response };
        }

        return Promise.reject(error);
      }
    );
  }
}

const ApiService = new ApiServiceClass();

export default ApiService;
