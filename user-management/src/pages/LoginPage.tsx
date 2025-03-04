import { useForm } from "react-hook-form";
import { useAuthStore } from "../store/authStore";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface LoginForm {
  email: string;
  password: string;
}

const LoginPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>();
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const onSubmit = async (data: LoginForm) => {
    try {
      const res = await axios.post("https://reqres.in/api/login", data);
      login(res.data.token);
      navigate("/dashboard");
    } catch (error) {
      alert("Login failed. Check credentials!");
    }
  };

  return (
    <div className="flex flex-col items-center mt-20">
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        <input {...register("email", { required: "Email is required" })} placeholder="Email" />
        {errors.email && <p>{errors.email.message}</p>}

        <input {...register("password", { required: "Password is required" })} type="password" placeholder="Password" />
        {errors.password && <p>{errors.password.message}</p>}

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
