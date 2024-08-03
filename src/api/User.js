import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const getAllNotices = async (accessToken) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/user/notice`, {
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
      `${BASE_URL}/api/user/notice/${noticeId}`,
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

export const recruitNotice = async (accessToken, noticeId, formData) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/api/user/recruit/${noticeId}`,
      formData,
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
