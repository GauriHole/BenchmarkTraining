import axios from "axios";

export const fetchUsers = async (page: number) => {
  const { data } = await axios.get("https://reqres.in/api/users", {
    params: { page, per_page: 6 },
  });
  return data.data;
};

export const registerUser = async (email: string, password: string) => {
  const res = await axios.post("https://reqres.in/api/register", {
    email,
    password,
  });
  return res.data; 
};
