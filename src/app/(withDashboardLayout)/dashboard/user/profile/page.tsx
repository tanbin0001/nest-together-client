

'use client';

import React, { useState } from 'react';
import { Container, Card, CardContent, Typography, Box, CircularProgress, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { useGetMYProfileQuery, useUpdateMYProfileMutation } from "@/redux/api/myProfile";
import Spinner from '@/components/UI/Spinner/Spinner';
import { toast } from 'sonner';

const MyProfilePage = () => {
    const { data, isLoading } = useGetMYProfileQuery({});
    const [updateMYProfile] = useUpdateMYProfileMutation();

    const [open, setOpen] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleClickOpen = () => {
        if (data?.data) {
            setName(data.data.name);
            setEmail(data.data.email);
        }
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = async () => {
        try {
            const res = await updateMYProfile({ name, email }).unwrap();
            if (res?.success === true) {
                toast.success(res?.message)
            }
            console.log(res);
            setOpen(false);
        } catch (error) {
            console.error('Failed to update profile:', error);
        }
    };

    if (isLoading) {
        return <Spinner />
    }

    const { status, role } = data?.data || {};

    return (
        <Container maxWidth="sm" sx={{ mt: 4 }}>
            <Card variant="outlined">
                <CardContent>
                    <Typography variant="h5" component="div" gutterBottom>
                        User Profile
                    </Typography>
                    <Typography variant="body1">
                        <strong>Name:</strong> {data?.data.name}
                    </Typography>
                    <Typography variant="body1">
                        <strong>Email:</strong> {data?.data.email}
                    </Typography>
                    <Typography variant="body1">
                        <strong>Status:</strong> {status}
                    </Typography>
                    <Typography variant="body1">
                        <strong>Role:</strong> {role}
                    </Typography>
                </CardContent>
            </Card>
            <Button sx={{ mt: 3 }} variant="contained" color="primary" onClick={handleClickOpen}>
                Update Profile
            </Button>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Update Profile</DialogTitle>
                <DialogContent>
                    <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <TextField
                            autoFocus
                            margin="dense"
                            label="Name"
                            type="text"
                            fullWidth
                            variant="outlined"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <TextField
                            margin="dense"
                            label="Email"
                            type="email"
                            fullWidth
                            variant="outlined"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="secondary">
                        Cancel
                    </Button>
                    <Button onClick={handleSubmit} color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
};

export default MyProfilePage;
