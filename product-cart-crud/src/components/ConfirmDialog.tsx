import { Modal } from "antd";

const ConfirmDialog = ({ visible, onConfirm, onCancel }) => {
  return (
    <Modal
      title="Are you sure?"
      visible={visible}
      onOk={onConfirm}
      onCancel={onCancel}
    >
      Do you really want to delete this item?
    </Modal>
  );
};

export default ConfirmDialog;
