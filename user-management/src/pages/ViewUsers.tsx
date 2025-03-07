import { useEffect, useState } from "react";
import { Table, Button, message, Pagination } from "antd";
import { useUserStore } from "../store/userStore";
import EditUser from "../pages/EditUser"; 

const ViewUsers = () => {
  const { users: storedUsers, fetchUsers, deleteUser } = useUserStore(); 
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;
  const [editingUserId, setEditingUserId] = useState<number | null>(null);
  const [isEditModalVisible, setEditModalVisible] = useState(false);

  useEffect(() => {
    fetchUsers(); 
  }, []);

  const handleDelete = (id: number) => {
    deleteUser(id);
    message.success("User deleted successfully!");
  };

  const handleEdit = (id: number) => {
    setEditingUserId(id);
    setEditModalVisible(true);
  };

  const paginatedUsers = storedUsers.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <div>
      <h2>Users</h2>
      <Table
        dataSource={paginatedUsers.map((user) => ({
          ...user,
          key: user.id,
        }))}
        pagination={false}
        columns={[
          { title: "ID", dataIndex: "id", key: "id" },
          { title: "First Name", dataIndex: "first_name", key: "first_name" },
          { title: "Last Name", dataIndex: "last_name", key: "last_name" },
          { title: "Email", dataIndex: "email", key: "email" },
          { title: "Avatar", dataIndex: "avatar", key: "avatar", render: (avatar) => <img src={avatar} alt="Avatar" width="40" /> },
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

      <Pagination
        current={currentPage}
        pageSize={pageSize}
        total={storedUsers.length}
        onChange={(page) => setCurrentPage(page)}
        style={{ marginTop: 20, textAlign: "center" }}
      />

      <EditUser
        visible={isEditModalVisible}
        onClose={() => setEditModalVisible(false)}
        userId={editingUserId}
      />
    </div>
  );
};

export default ViewUsers;
