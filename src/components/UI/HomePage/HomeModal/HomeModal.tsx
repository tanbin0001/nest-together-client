"use client"
import React from 'react';
import { Modal, Box, Typography, Button, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';
import Link from 'next/link';
import { getUserInfo } from '@/services/auth.services';

export default function Widget() {
    const [open, setOpen] = React.useState(true);
    const userInfo = getUserInfo();

    const handleClose = () => {
        setOpen(false);
    }

    return (
        !userInfo && (
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <Box
                    sx={{
                        bgcolor: 'background.paper',
                        borderRadius: 2,
                        boxShadow: 24,
                        p: 4,
                        maxWidth: 400,
                        mx: 'auto',
                        mt: '10%',
                        textAlign: 'center'
                    }}
                >
                    <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                        <Box display="flex" alignItems="center">
                            <Image
                                src="/assets/logo.png"
                                width={30}
                                height={30}
                                alt='logo'
                            />
                            <Typography
                                id="modal-title"
                                variant="h6"
                                component="h1"
                                color="primary"
                                sx={{ ml: 1 }}
                            >
                                Nest Together
                            </Typography>
                        </Box>
                        <IconButton onClick={handleClose} color="inherit">
                            <CloseIcon />
                        </IconButton>
                    </Box>
                    <Typography id="modal-description" variant="h6" component="h2" mb={2}>
                        Sign in, save money
                    </Typography>
                    <Typography mb={4}>
                        Sign in to <strong>save 10% or more</strong> with a free membership
                    </Typography>
                    <Button variant="contained" color="primary" fullWidth onClick={handleClose}>
                        <Link href='/login'>
                            Sign in or register
                        </Link>
                    </Button>
                </Box>
            </Modal>
        )
    );
}
