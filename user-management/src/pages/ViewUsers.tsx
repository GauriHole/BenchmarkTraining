import { Table, Input, Button, message, Pagination } from "antd";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState, useEffect } from "react";
import { useUserStore } from "../store/userStore";
import EditUser from "../pages/EditUser"; // Import the modal

const fetchUsers = async (page: number) => {
  const { data } = await axios.get("https://reqres.in/api/users", {
    params: { page, per_page: 6 },
  });
  return data.data;
};

const ViewUsers = () => {
  const [page, setPage] = useState(1);
  const { data: users, isLoading, error } = useQuery({
    queryKey: ["users", page],
    queryFn: () => fetchUsers(page),
  });

  const { users: storedUsers, setUsers, deleteUser } = useUserStore();
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

  useEffect(() => {
    if (users) {
      setUsers(users);
    }
  }, [users, setUsers]);

  const handleDelete = (id: number) => {
    deleteUser(id);
    message.success("User deleted successfully!");
  };

  const handleEdit = (id: number) => {
    setSelectedUserId(id);
    setEditModalVisible(true);
  };

  if (error) return <p>Error fetching users</p>;

  return (
    <div>
      <h2>Users</h2>
      <Input.Search
        placeholder="Search by Name or Email"
        onChange={(e) =>
          setUsers(
            users?.filter(
              (user) =>
                user.first_name
                  .toLowerCase()
                  .includes(e.target.value.toLowerCase()) ||
                user.email.toLowerCase().includes(e.target.value.toLowerCase())
            ) || []
          )
        }
        style={{ marginBottom: 10 }}
      />
      <Table
        loading={isLoading}
        dataSource={storedUsers.map((user) => ({ ...user, key: user.id }))}
        columns={[
          { title: "ID", dataIndex: "id", key: "id" },
          { title: "Name", dataIndex: "first_name", key: "name" },
          { title: "Email", dataIndex: "email", key: "email" },
          {
            title: "Actions",
            key: "actions",
            render: (record) => (
              <>
                <Button type="link" onClick={() => handleEdit(record.id)}>Edit</Button>
                <Button danger type="link" onClick={() => handleDelete(record.id)}>Delete</Button>
              </>
            ),
          },
        ]}
      />
      <Pagination current={page} onChange={setPage} total={12} pageSize={6} />

      {/* Edit User Modal */}
      <EditUser
        visible={editModalVisible}
        onClose={() => setEditModalVisible(false)}
        userId={selectedUserId}
      />
    </div>
  );
};

export default ViewUsers;
