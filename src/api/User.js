import apiClient from './apiClient';
import axios from 'axios';

export const getAllNotices = async () => {
  try {
    const tempClient = axios.create({
      baseURL: process.env.REACT_APP_API_BASE_URL,
    });

    const response = await tempClient.get(`/api/user/notice`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getNotice = async (noticeId) => {
  try {
    const response = await apiClient.get(`/api/user/notice/${noticeId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const recruitNotice = async (noticeId, formData) => {
  try {
    const response = await apiClient.post(
      `/api/user/recruit/${noticeId}`,
      formData,
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
