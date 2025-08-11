import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

import { API_ENDPOINT } from '@/envs';
import ErrorResponse from '@/interfaces/errors';
import { useStoreSession } from '@/store/session';

class ApiServiceClass {
  private axiosInstance = axios.create({
    baseURL: API_ENDPOINT,
    headers: {
      'Content-Type': 'application/json'
    },
    timeout: 10000
  });

  constructor() {
    this.setupInterceptors();
  }

  public get<T = any>(url: string, params?: Record<string, any>): Promise<T> {
    return this.request<T>({ method: 'GET', url, params });
  }

  public post<T = any>(url: string, data?: any): Promise<T> {
    return this.request<T>({ method: 'POST', url, data });
  }

  public put<T = any>(url: string, data?: any): Promise<T> {
    return this.request<T>({ method: 'PUT', url, data });
  }

  public delete<T = any>(url: string, params?: Record<string, any>): Promise<T> {
    return this.request<T>({ method: 'DELETE', url, params });
  }

  private async request<T = any>(options: AxiosRequestConfig): Promise<T> {
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
        if (error.response?.status === 401) {
          // refresh token
        }

        return Promise.reject(error);
      }
    );
  }
}

const ApiService = new ApiServiceClass();

export default ApiService;
