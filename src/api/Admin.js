import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const deleteNotice = async (accessToken, noticeId) => {
  try {
    const response = await axios.delete(
      `${BASE_URL}/api/admin/notice/delete/${noticeId}`,
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

export const getAllNotices = async (accessToken, pageNum) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/admin/notice`, {
      params: {
        pageNum,
      },
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getNotice = async (accessToken, noticeId) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/api/admin/notice/${noticeId}`,
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

export const confirmRecruit = async (recruitIdData) => {
  try {
    const response = await axios.patch(
      `${BASE_URL}/api/admin/recruit/confirm`,
      recruitIdData,
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createNorice = async (accessToken, formData) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/api/admin/notice/create`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
