import axios from "axios";

const BASE_URL = "https://task-management-mern-app-jwt-backend.onrender.com/api";

export const callRegisterUserApi = async (formData) => {
  const response = await axios.post(
    `${BASE_URL}/user/register`,
    formData,
    { withCredentials: true }
  );
  return response?.data;
};

export const callLoginUserApi = async (formData) => {
  const response = await axios.post(
    `${BASE_URL}/user/login`,
    formData,
    { withCredentials: true }
  );
  return response?.data;
};

export const callUserAuthApi = async () => {
  const response = await axios.post(
    `${BASE_URL}/user/auth`,
    {},
    { withCredentials: true }
  );
  return response?.data;
};

export const callLogoutApi = async () => {
  const response = await axios.post(
    `${BASE_URL}/user/logout`,
    {},
    { withCredentials: true }
  );
  return response?.data;
};

export const addNewTaskApi = async (formData) => {
  const response = await axios.post(
    `${BASE_URL}/task/add-new-task`,
    formData
  );
  return response?.data;
};

export const getAllTasksApi = async (getCurrentUserId) => {
  const response = await axios.get(
    `${BASE_URL}/task/get-all-tasks-by-userid/${getCurrentUserId}`
  );
  return response?.data;
};

export const updateTaskApi = async (formData) => {
  const response = await axios.put(
    `${BASE_URL}/task/update-task`,
    formData
  );
  console.log(response);
  return response?.data;
};

export const deleteTaskApi = async (getCurrentTaskId) => {
  const response = await axios.delete(
    `${BASE_URL}/task/delete-task/${getCurrentTaskId}`
  );
  return response?.data;
};
