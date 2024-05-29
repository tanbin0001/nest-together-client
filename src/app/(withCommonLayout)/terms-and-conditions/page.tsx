'use client';

import React, { useEffect, useState } from 'react';
import { Container, Box, Typography, Link } from '@mui/material';

const TermsAndConditions = () => {
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
                    Terms and Conditions
                </Typography>

                <Typography variant="body1" paragraph>
                    Welcome to Nest Together. These terms and conditions outline the rules and regulations for the use of our flat sharing application.
                </Typography>

                <Typography variant="h6" gutterBottom>
                    Acceptance of Terms
                </Typography>

                <Typography variant="body1" paragraph>
                    By accessing and using our application, you accept and agree to be bound by these terms and conditions. If you do not agree with any part of the terms, you must not use our application.
                </Typography>

                <Typography variant="h6" gutterBottom>
                    Changes to Terms
                </Typography>

                <Typography variant="body1" paragraph>
                    We reserve the right to modify or replace these terms at any time. Any changes will be posted on this page and, where appropriate, notified to you by email. Your continued use of the application after any changes signifies your acceptance of the new terms.
                </Typography>

                <Typography variant="h6" gutterBottom>
                    User Accounts
                </Typography>

                <Typography variant="body1" paragraph>
                    To use certain features of the application, you may be required to create an account and provide information about yourself. You must ensure that the information you provide is accurate, complete, and up-to-date.
                </Typography>

                <Typography variant="h6" gutterBottom>
                    User Responsibilities
                </Typography>

                <Typography variant="body1" paragraph>
                    As a user, you agree to use our application responsibly and to comply with all applicable laws and regulations. You must not use the application to:
                </Typography>
                <ul>
                    <li>Post or transmit any content that is unlawful, harmful, threatening, abusive, defamatory, or otherwise objectionable</li>
                    <li>Engage in any activity that would constitute a criminal offense or give rise to civil liability</li>
                    <li>Impersonate any person or entity or falsely state or otherwise misrepresent your affiliation with a person or entity</li>
                    <li>Disrupt or interfere with the operation of the application or servers or networks connected to the application</li>
                </ul>

                <Typography variant="h6" gutterBottom>
                    Listing Properties
                </Typography>

                <Typography variant="body1" paragraph>
                    If you choose to list a property on our platform, you must provide accurate and detailed information about the property, including its availability, price, and any rules or conditions that apply. You are responsible for ensuring that your listing complies with all local laws and regulations.
                </Typography>

                <Typography variant="h6" gutterBottom>
                    Booking and Payments
                </Typography>

                <Typography variant="body1" paragraph>
                    Our application facilitates the booking and payment process between users and hosts. All payments are processed securely, and users are required to pay the agreed amount at the time of booking. Hosts must honor all confirmed bookings and provide the accommodation as described in their listing.
                </Typography>

                <Typography variant="h6" gutterBottom>
                    Cancellations and Refunds
                </Typography>

                <Typography variant="body1" paragraph>
                    Cancellation and refund policies vary depending on the specific listing and host. Users are encouraged to review the cancellation policy of each listing before making a booking. In the event of a dispute, we will do our best to mediate and resolve the issue fairly.
                </Typography>

                <Typography variant="h6" gutterBottom>
                    Limitation of Liability
                </Typography>

                <Typography variant="body1" paragraph>
                    Nest Together is not responsible for any damages, losses, or injuries resulting from the use of our application or from interactions between users and hosts. We do not guarantee the accuracy or completeness of any listings or user content on our platform.
                </Typography>

                <Typography variant="h6" gutterBottom>
                    Privacy
                </Typography>

                <Typography variant="body1" paragraph>
                    We are committed to protecting your privacy. Please review our Privacy Policy to understand how we collect, use, and disclose information about you.
                </Typography>

                <Typography variant="h6" gutterBottom>
                    Governing Law
                </Typography>

                <Typography variant="body1" paragraph>
                    These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which Nest Together operates, without regard to its conflict of law provisions.
                </Typography>

                <Typography variant="h6" gutterBottom>
                    Contact Us
                </Typography>

                <Typography variant="body1" paragraph>
                    If you have any questions or concerns about these terms and conditions, please contact us at <Link href="mailto:info@nesttogether.com">info@nesttogether.com</Link>.
                </Typography>
            </Box>
        </Container>
    );
};

export default TermsAndConditions;
