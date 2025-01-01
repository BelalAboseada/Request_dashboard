import axiosInstance from "./axiosInstance";

// Sign up
export const signUp = async (userData) => {
  try {
    const response = await axiosInstance.post(`auth/signup`, userData);
    console.log("Response => ", response.data);

    return response.data;
  } catch (error) {
    console.error("Sign-up error: ", error);
    throw error;
  }
};
// Sign in

export const signIn = async (userData, lang) => {
  try {
    const response = await axiosInstance.post(
      `auth/admin/signin?lang=${lang}`,
      userData
    );
    console.log("Response => ", response);
    return response.data;
  } catch (error) {
    console.error(
      "Sign-in error:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

// get most models
export const getMostModels = async () => {
  try {
    const response = await axiosInstance.get(`dashboard/models`);
    console.log("Most Models => ", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "Error getting most models:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

// get new users

export const getNewUsers = async () => {
  try {
    const response = await axiosInstance.get(`users/new`);
    console.log("New Users => ", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "Error getting new users:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

// get counters

export const getCounters = async () => {
  try {
    const response = await axiosInstance.get(`dashboard/counters`);
    console.log("Counters => ", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "Error getting counters:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

//  get all users
export const getAllUsers = async () => {
  try {
    const response = await axiosInstance.get(`users`);
    console.log("All Users => ", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "Error getting all users:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

//  delete user
export const deleteUser = async (userId) => {
  try {
    const response = await axiosInstance.delete(`users/${userId}`);
    console.log("User deleted successfully => ", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "Error deleting user:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

// get user data
export const getUserDetails = async (userId, token) => {
  try {
    const response = await axiosInstance.get(`users/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("User details successfully => ", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "Error deleting user:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

// get projects
export const getProjects = async (status) => {
  try {
    const response = await axiosInstance.get(`project?status=${status}`);
    console.log("Projects => ", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "Error getting projects:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

//  get Active Projects By User

export const getActiveProjectsByUser = async (userId) => {
  try {
    const response = await axiosInstance.get(`dashboard/user/${userId}`);
    console.log("Active Projects By User => ", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "Error getting active projects by user:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

//  get project performance by user

export const getProjectPerformanceByUser = async (userId) => {
  try {
    const response = await axiosInstance.get(
      `dashboard/performance/user/${userId}`
    );
    console.log("Project Performance By User => ", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "Error getting project performance by user:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

//  get project by id

export const getProjectById = async (projectId) => {
  try {
    const response = await axiosInstance.get(`project/${projectId}`);
    console.log("Project By Id => ", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "Error getting project by id:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};
