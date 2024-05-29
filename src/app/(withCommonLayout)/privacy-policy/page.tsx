"use client"

import React, { useEffect, useState } from 'react';
import { Container, Box, Typography, Link } from '@mui/material';

const PrivacyPolicy = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <Container>
            <Box my={4}>
                <Typography variant="h4" gutterBottom>
                    Privacy Policy
                </Typography>

                <Typography variant="body1" paragraph>
                    Welcome to Nest Together. We respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, and disclose your personal information.
                </Typography>

                <Typography variant="h6" gutterBottom>
                    Information We Collect
                </Typography>

                <Typography variant="body1" paragraph>
                    We may collect and process the following information about you:
                </Typography>

                <ul>
                    <li><Typography variant="body1">Contact information (e.g., name, email address, phone number)</Typography></li>
                    <li><Typography variant="body1">Demographic information (e.g., age, gender, location)</Typography></li>
                    <li><Typography variant="body1">Usage data (e.g., pages visited, time spent on the site)</Typography></li>
                    <li><Typography variant="body1">Financial information (e.g., payment details)</Typography></li>
                </ul>

                <Typography variant="h6" gutterBottom>
                    How We Use Your Information
                </Typography>

                <Typography variant="body1" paragraph>
                    We use the information we collect to:
                </Typography>

                <ul>
                    <li><Typography variant="body1">Provide and improve our services</Typography></li>
                    <li><Typography variant="body1">Process your transactions</Typography></li>
                    <li><Typography variant="body1">Send you updates, promotions, and marketing communications</Typography></li>
                    <li><Typography variant="body1">Respond to your inquiries and provide customer support</Typography></li>
                    <li><Typography variant="body1">Analyze usage and trends to improve our website</Typography></li>
                </ul>

                <Typography variant="h6" gutterBottom>
                    Sharing Your Information
                </Typography>

                <Typography variant="body1" paragraph>
                    We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties except as described below:
                </Typography>

                <ul>
                    <li><Typography variant="body1">To trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.</Typography></li>
                    <li><Typography variant="body1">When we believe release is appropriate to comply with the law, enforce our site policies, or protect ours or others&apos; rights, property, or safety.</Typography></li>
                </ul>

                <Typography variant="h6" gutterBottom>
                    Security of Your Information
                </Typography>

                <Typography variant="body1" paragraph>
                    We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the Internet or method of electronic storage is 100% secure. Therefore, we cannot guarantee its absolute security.
                </Typography>

                <Typography variant="h6" gutterBottom>
                    Your Consent
                </Typography>

                <Typography variant="body1" paragraph>
                    By using our site, you consent to our Privacy Policy.
                </Typography>

                <Typography variant="h6" gutterBottom>
                    Changes to Our Privacy Policy
                </Typography>

                <Typography variant="body1" paragraph>
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
                </Typography>

                <Typography variant="h6" gutterBottom>
                    Contact Us
                </Typography>

                <Typography variant="body1" paragraph>
                    If you have any questions about this Privacy Policy, please contact us at:
                </Typography>

                <Typography variant="body1" paragraph>
                    Email: <Link href="mailto:info@nesttogether.com">info@nesttogether.com</Link>
                </Typography>

                <Typography variant="body1" paragraph>
                    Phone: +1 (123) 456-7890
                </Typography>

                <Typography variant="body1" paragraph>
                    Address: 1234 Nest Together Ave, Suite 100, City, State, 12345
                </Typography>
            </Box>
        </Container>
    );
};

export default PrivacyPolicy;
