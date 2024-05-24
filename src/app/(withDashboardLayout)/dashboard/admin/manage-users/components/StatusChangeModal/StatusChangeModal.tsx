'use client'

import React, { useState, useEffect } from 'react';
import { Modal, Box, Button, Select, MenuItem, Typography } from '@mui/material';

const StatusChangeModal = ({ open, onClose, user, onSubmit }:any) => {
    const [status, setStatus] = useState(user?.status || 'active');

    useEffect(() => {
        setStatus(user?.status || 'active');
    }, [user]);

    const handleChange = (event:any) => {
        setStatus(event.target.value);
    };

    const handleSubmit = () => {
        onSubmit(user, status);
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
                    Change Status for {user?.name}
                </Typography>
                <Select
                    value={status}
                    onChange={handleChange}
                    fullWidth
                    sx={{ my: 2 }}
                >
                    <MenuItem value="active">Activate</MenuItem>
                    <MenuItem value="inactive">Deactivate</MenuItem>
                </Select>
                <Button variant="contained" color="primary" onClick={handleSubmit}>
                    Submit
                </Button>
            </Box>
        </Modal>
    );
};

export default StatusChangeModal;
