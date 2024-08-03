/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import useGet from "../../hooks/useGet";
import { User } from "../../utils/types/user";
import Table from "../../components/core/table";
import Button from "../../components/core/button";
import { useModal } from "../../hooks/useModal";
import ChangeRole from "../../components/users/ChangeUserRole";

const Users: React.FC = () => {
  const { data, loading, error, refetch } = useGet<User[]>("/users");
  const { openModal, closeModal } = useModal();

  const columns = [
    {
      header: "Name",
      accessor: (user: User) => user.name,
      sortable: true,
    },
    {
      header: "Email",
      accessor: (user: User) => user.email,
      sortable: true,
    },
    {
      header: "Role",
      accessor: (user: User) => user.role,
    },
    {
      header: "Actions",
      accessor: (user: User) => (
        <Button
          variant="primary"
          onClick={() =>
            openModal(
              <ChangeRole
                userId={user.id}
                currentRole={user.role as any}
                onClose={() => {
                  closeModal();
                  refetch();
                }}
              />
            )
          }
        >
          Change Role
        </Button>
      ),
    },
  ];

  return (
    <div className="px-[5vw] py-24">
      <h1 className="text-2xl font-bold mb-4 text-primary">User List</h1>
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="h-16 w-16 border-t-4 border-primary border-solid rounded-full animate-spin"></div>
        </div>
      ) : error ? (
        <div className="py-4 text-center text-red-600">
          <p>Error loading users: {error.message}</p>
        </div>
      ) : data?.length === 0 ? (
        <div className="py-4 text-center text-gray-600">
          <p>No users found.</p>
        </div>
      ) : (
        data && (
          <Table<User>
            data={data}
            columns={columns}
            loading={loading}
            noDataComponent={
              <div className="py-2 text-center">No data available.</div>
            }
          />
        )
      )}
    </div>
  );
};

export default Users;
