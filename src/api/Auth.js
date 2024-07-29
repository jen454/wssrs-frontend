import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const login = async (formData) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/auth/login`, formData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const signUp = async (formData) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/auth/sign-up`, formData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const logout = async (accessToken, refreshToken) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/auth/logout`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'x-refresh-token': refreshToken,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const findMember = async (formData) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/api/auth/pw/findMember`,
      formData,
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updatePassword = async (newPassword, accessToken) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/api/auth/pw/update`,
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
