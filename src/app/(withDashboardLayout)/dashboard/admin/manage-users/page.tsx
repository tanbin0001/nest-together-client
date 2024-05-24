 
"use client"
import React, { useState } from 'react';
import Spinner from '@/components/UI/Spinner/Spinner';
import {  useChangeUserRoleOrStatusMutation, useGetAllUsersQuery } from '@/redux/api/userApi';
import { Box, Button, Typography } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import RoleChangeModal from './components/RoleChangeModal/RoleChangeModal';
import StatusChangeModal from './components/StatusChangeModal/StatusChangeModal';
import { toast } from 'sonner';

const ManageUsers = () => {
    const [changeUserRoleOrStatus,{isLoading:updateLoading}] = useChangeUserRoleOrStatusMutation();
    const { data, isLoading } = useGetAllUsersQuery({});
    const allUsers = data?.data;
 
    const [openRoleModal, setOpenRoleModal] = useState(false);
    const [openStatusModal, setOpenStatusModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const handleOpenRoleModal = (user: any) => {
        setSelectedUser(user);
        setOpenRoleModal(true);
    };

    const handleCloseRoleModal = () => {
        setOpenRoleModal(false);
        setSelectedUser(null);
    };

    const handleRoleChangeSubmit = async (user: any, newRole: any) => {

        const data = {
            id: user?.id,
            role: newRole
        }
try {
    const res = await changeUserRoleOrStatus(data);
    if (res?.data?.success === true) {
        toast.success(res?.data?.message)
    } 
} catch (error:any) {
    toast.error('Failed to change the role!')
}
      
    };

    const handleOpenStatusModal = (user: any) => {
        setSelectedUser(user);
        setOpenStatusModal(true);
    };

    const handleCloseStatusModal = () => {
        setOpenStatusModal(false);
        setSelectedUser(null);
    };

    const handleStatusChangeSubmit = async(user: any, newStatus: any) => {
        const data = {
            id: user?.id,
            status: newStatus
        }
        try {
            const res = await changeUserRoleOrStatus(data);
            if (res?.data?.success === true) {
                toast.success(res?.data?.message)
            } 
        } catch (error:any) {
            toast.error('Failed to change the user status!')
        }
       

    };

    const columns: GridColDef[] = [
        { field: 'name', headerName: 'User Name', flex: 1 },
        { field: 'role', headerName: 'Role', flex: 1 },
        {
            field: 'status',
            headerName: 'Status',
            flex: 1,
            renderCell: (params) => (
                <Box>{params.value}</Box>
            ),
        },
        {
            field: "change role",
            headerName: "Change Role",
            flex: 1,
            headerAlign: "center",
            align: "center",
            renderCell: ({ row }) => (
                <Button
                    sx={{ color: "white", fontSize: '10px' }}
                    onClick={() => handleOpenRoleModal(row)}
                >
                    Change Role
                </Button>
            ),
        },
        {
            field: "change status",
            headerName: "Change Status",
            flex: 1,
            headerAlign: "center",
            align: "center",
            renderCell: ({ row }) => (
                <Button
                    sx={{ color: "white", fontSize: '10px' }}
                    onClick={() => handleOpenStatusModal(row)}
                >
                    Change Status
                </Button>
            ),
        },
    ];

    if (isLoading || updateLoading) {
        return <Spinner />;
    }

    return (
        <Box>
            <Box my={2}>
                <DataGrid hideFooterPagination rows={allUsers} columns={columns} />
            </Box>
            {selectedUser && (
                <>
                    <RoleChangeModal
                        open={openRoleModal}
                        onClose={handleCloseRoleModal}
                        user={selectedUser}
                        onSubmit={handleRoleChangeSubmit}
                    />
                    <StatusChangeModal
                        open={openStatusModal}
                        onClose={handleCloseStatusModal}
                        user={selectedUser}
                        onSubmit={handleStatusChangeSubmit}
                    />
                </>
            )}
        </Box>
    );
};

export default ManageUsers;
