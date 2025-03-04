import { useForm } from "react-hook-form";
import axios from "axios";
import { Input, Button, message } from "antd";
import { useUserStore } from "../store/userStore";
import { useNavigate } from "react-router-dom";

interface UserForm {
  first_name: string;
  email: string;
}

const AddUser = () => {
  const { register, handleSubmit, reset } = useForm<UserForm>();
  const addUser = useUserStore((state) => state.addUser);
  const navigate = useNavigate();

  const onSubmit = async (data: UserForm) => {
    try {
      const res = await axios.post("https://reqres.in/api/users", data);

      // ✅ Ensure Zustand state is updated immediately
      addUser({ id: res.data.id || Math.floor(Math.random() * 1000), ...data });

      message.success("User added successfully!");
      reset(); // ✅ Clears the form after submission
      navigate("/"); // ✅ Redirects to View Users page
    } catch (error) {
      console.error("Error adding user:", error);
      message.error("Failed to add user!");
    }
  };

  return (
    <div>
      <h2>Add New User</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input placeholder="Name" {...register("first_name", { required: true })} />
        <Input placeholder="Email" {...register("email", { required: true })} style={{ marginTop: 10 }} />
        <Button type="primary" htmlType="submit" style={{ marginTop: 10 }}>Add User</Button>
      </form>
    </div>
  );
};

export default AddUser;
