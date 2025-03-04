import { Table, Spin, Button } from "antd";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const fetchUsers = async () => {
  const { data } = await axios.get("https://reqres.in/api/users");
  return data.data;
};

const Dashboard = () => {
  const navigate = useNavigate();
  
  const { data: users, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  if (isLoading) return <Spin size="large" />;
  if (error) return <p>Error fetching users: {error.message}</p>;

  return (
    <div>
      <h2>User Management</h2>
      <Button onClick={() => navigate("/create-user")}>Create User</Button>
      <Table
        dataSource={users}
        columns={[
          { title: "ID", dataIndex: "id" },
          { title: "Name", dataIndex: "first_name" },
          { title: "Email", dataIndex: "email" },
        ]}
      />
    </div>
  );
};

export default Dashboard;
