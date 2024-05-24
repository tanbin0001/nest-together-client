import React, { useState } from 'react';
import { Modal, Box, Button, Select, MenuItem, Typography } from '@mui/material';

const RoleChangeModal = ({ open, onClose, user, onSubmit }:any) => {
    const [role, setRole] = useState(user?.role || 'USER');

    const handleChange = (event:any) => {
        setRole(event.target.value);
    };

    const handleSubmit = () => {
        onSubmit(user, role);
        onClose();
    };

    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={{ 
                position: 'absolute', 
                top: '50%', 
                left: '50%', 
                transform: 'translate(-50%, -50%)', 
                width: 400, 
                bgcolor: 'background.paper', 
                border: '2px solid #000', 
                boxShadow: 24, 
                p: 4 
            }}>
                <Typography variant="h6" component="h2">
                    Change Role for {user?.name}
                </Typography>
                <Select
                    value={role}
                    onChange={handleChange}
                    fullWidth
                    sx={{ my: 2 }}
                >
                    <MenuItem value="USER">USER</MenuItem>
                    <MenuItem value="ADMIN">ADMIN</MenuItem>
                </Select>
                <Button variant="contained" color="primary" onClick={handleSubmit}>
                    Submit
                </Button>
            </Box>
        </Modal>
    );
};

export default RoleChangeModal;

 