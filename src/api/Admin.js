import apiClient from './apiClient';

export const deleteNotice = async (noticeId) => {
  try {
    const response = await apiClient.delete(
      `/api/admin/notice/delete/${noticeId}`,
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAllNotices = async (pageNum) => {
  try {
    const response = await apiClient.get(`/api/admin/notice`, {
      params: {
        pageNum,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getNotice = async (noticeId) => {
  try {
    const response = await apiClient.get(`/api/admin/notice/${noticeId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const confirmRecruit = async (recruitIds) => {
  try {
    const response = await apiClient.patch(`/api/admin/recruit/confirm`, {
      recruitIds,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createNotice = async (formData) => {
  try {
    const response = await apiClient.post(
      `/api/admin/notice/create`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
