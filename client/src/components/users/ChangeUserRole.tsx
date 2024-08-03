/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { useModal } from "../../hooks/useModal";
import Button from "../../components/core/button";
import { updateUser } from "../../utils/funcs/user";

interface ChangeRoleModalProps {
  userId: number;
  currentRole: "Author" | "User";
  onClose: () => void;
}

const ChangeRole: React.FC<ChangeRoleModalProps> = ({
  userId,
  currentRole,
  onClose,
}) => {
  const [selectedRole, setSelectedRole] = useState<"Author" | "User">(
    currentRole
  );
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    await updateUser({ role: selectedRole }, userId, onClose);
    setLoading(false);
  };
  const { closeModal } = useModal();

  return (
    <div className="bg-white p-6 ">
      <h2 className="text-lg font-semibold mb-4">Change Role</h2>
      <select
        value={selectedRole}
        onChange={(e) => setSelectedRole(e.target.value as any)}
        className="mb-4 p-2 border rounded w-full"
      >
        <option value="User">User</option>
        <option value="Author">Author</option>
      </select>
      <div className="flex justify-end space-x-4">
        <Button variant="secondary" onClick={closeModal}>
          Cancel
        </Button>
        <Button variant="primary" loading={loading} onClick={handleSubmit}>
          Save
        </Button>
      </div>
    </div>
  );
};

export default ChangeRole;
