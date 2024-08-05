import apiClient from './apiClient';
import axios from 'axios';

export const login = async (formData) => {
  try {
    const response = await apiClient.post(`/api/auth/login`, formData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const signUp = async (formData) => {
  try {
    const response = await apiClient.post(`/api/auth/sign-up`, formData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const logout = async (accessToken) => {
  try {
    const tempClient = axios.create({
      baseURL: process.env.REACT_APP_API_BASE_URL,
    });

    const response = await tempClient.post(`/api/auth/logout`, {
      accessToken,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const findMember = async (formData) => {
  try {
    const response = await apiClient.post(`/api/auth/pw/findMember`, formData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updatePassword = async (newPassword, accessToken) => {
  try {
    const response = await apiClient.post(
      `/api/auth/pw/update`,
      { newPassword },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const refreshToken = async (refreshToken) => {
  try {
    const response = await apiClient.post(`/api/auth/refresh`, {
      refreshToken,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
