import { useForm } from "react-hook-form";
import { Input, Button, message } from "antd";
import { useUserStore } from "../store/userStore";
import { useNavigate } from "react-router-dom";

interface UserForm {
  first_name: string;
  last_name: string;
  email: string;
}

const AddUser = () => {
  const { register, handleSubmit, reset, formState: { errors, isValid } } = useForm<UserForm>({
    mode: "onChange",
  });

  const { addUser, users } = useUserStore(); // ✅ Extract addUser from Zustand
  const navigate = useNavigate();

  const onSubmit = (data: UserForm) => {
    const newUser = {
      id: users.length + 1, // ✅ Ensure unique ID
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      avatar: "🧑",
    };

    console.log("✅ Zustand - Adding User:", newUser);
    addUser(newUser); // ✅ Add user to Zustand
    message.success("User added successfully!");

    reset();

    setTimeout(() => {
      navigate("/");
    }, 500);
  };

  return (
    <div>
      <h2>Add New User</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>First Name:</label>
          <Input
            {...register("first_name", {
              required: "First name is required",
              pattern: { value: /^[A-Za-z\s]+$/, message: "Only letters allowed" },
            })}
          />
          {errors.first_name && <p style={{ color: "red" }}>{errors.first_name.message}</p>}
        </div>

        <div>
          <label>Last Name:</label>
          <Input
            {...register("last_name", {
              required: "Last name is required",
              pattern: { value: /^[A-Za-z\s]+$/, message: "Only letters allowed" },
            })}
          />
          {errors.last_name && <p style={{ color: "red" }}>{errors.last_name.message}</p>}
        </div>

        <div>
          <label>Email:</label>
          <Input
            {...register("email", {
              required: "Email is required",
              pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "Invalid email" },
            })}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
        </div>

        <Button type="primary" htmlType="submit" disabled={!isValid} style={{ marginTop: 10 }}>
          Add User
        </Button>
      </form>
    </div>
  );
};

export default AddUser;
