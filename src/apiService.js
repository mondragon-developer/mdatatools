import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3000/api";

export const createUser = async (fullName) => {
  try {
    const response = await axios.post(`${API_URL}/users`, {
      full_name: fullName,
    });
    return response.data;
  } catch (error) {
    console.error("Error creating user", error);
    throw error;
  }
};

export const createInteraction = async (interactionData) => {
  try {
    const response = await axios.post(
      `${API_URL}/interactions`,
      interactionData
    );
    return response.data;
  } catch (error) {
    console.error("Error creating interaction", error);
    throw error;
  }
};
