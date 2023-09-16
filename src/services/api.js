import axios from "axios";

const url = "http://127.0.0.1:3003/hotels";
// const url2 = "http://127.0.0.1:3003/seconduser";

export const getAllHotels = async () => {
  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {
    console.error("Error fetching hotels:", error);
    return [];
  }
};

// export const addUser = async (user) => {
//   return await axios.post(url, user);
// };

// export const editUser = async (id, user) => {
//   return await axios.put(`${url}/${id}`, user);
// };

// export const deleteUser = async (id) => {
//   return await axios.delete(`${url}/${id}`);
// };
