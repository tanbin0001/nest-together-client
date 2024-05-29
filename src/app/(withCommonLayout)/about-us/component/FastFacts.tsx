// 'use client';

// import { Box, Container, Grid, Typography, Card, CardContent, CardMedia } from '@mui/material';
// import { styled } from '@mui/system';

// const facts = [
//     { title: "Active Listings Worldwide", value: "7.7M+", description: "as of December 31, 2023" },
//     { title: "Cities and Towns with Active Listings", value: "100K+", description: "as of December 31, 2023" },
//     { title: "Countries and Regions with Listings", value: "220+", description: "as of December 31, 2023" },
//     { title: "Airbnb Guest Arrivals All-Time", value: "1.5B+", description: "as of December 31, 2023" },
//     { title: "Hosts on Airbnb", value: "5M+", description: "as of December 31, 2023" },
//     { title: "Earned by Hosts All-Time", value: "$250B+", description: "as of December 31, 2023" },
//     { title: "Earned by the Typical US Host in 2023", value: "$14K", description: "as of December 31, 2023" },
//     { title: "Total Taxes Collected and Remitted Globally", value: "$10B+", description: "as of December 31, 2023" },
// ];

// const Section = styled(Box)(({ theme }) => ({
//     padding: theme.spacing(6, 0),
//     backgroundColor: theme.palette.background.default,
// }));

// const SectionTitle = styled(Typography)(({ theme }) => ({
//     fontWeight: 700,
//     color: theme.palette.primary.main,
//     marginBottom: theme.spacing(4),
//     textAlign: 'center',
// }));

// const FastFactsCard = styled(Card)(({ theme }) => ({
//     maxWidth: 345,
//     margin: 'auto',
//     backgroundColor: theme.palette.background.paper,
// }));

// const FastFacts = () => {
//     return (
//         <Container>
//             <Section>
//                 <SectionTitle variant="h4">Fast Facts</SectionTitle>
//                 <Grid container spacing={4}>
//                     {facts.map((fact, index) => (
//                         <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
//                             <FastFactsCard>
//                                 <CardContent>
//                                     <Typography variant="h5" component="div" gutterBottom>
//                                         {fact.value}
//                                     </Typography>
//                                     <Typography variant="body1" color="textSecondary">
//                                         {fact.title}
//                                     </Typography>
//                                     <Typography variant="body2" color="textSecondary">
//                                         {fact.description}
//                                     </Typography>
//                                 </CardContent>
//                             </FastFactsCard>
//                         </Grid>
//                     ))}
//                 </Grid>
//             </Section>
//         </Container>
//     );
// };

// export default FastFacts;