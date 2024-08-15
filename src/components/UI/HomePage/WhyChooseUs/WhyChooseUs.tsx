import Image from 'next/image';
import whyChooseUs from '../../../../assets/whychooseus.jpg';

import mobile from '../../../../assets/landing_page/smartphone.png';
import clock from '../../../../assets/landing_page/clock.png';
import friends from '../../../../assets/landing_page/friends.png';

const WhyChooseUs = () => {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between p-8 bg-background my-20">
            <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-[#6db784]">Why Choose Us for Your Stay</h2>
                <p className="text-muted-foreground mb-6">Explore our unique properties and see why travelers love staying with us.</p>

                <div className="space-y-6">
                    <div className="flex items-start">
                        <div className="bg-primary text-white p-4 rounded-lg mr-4">
                            <Image 
                                src={clock}
                                alt="support-icon" 
                                width={40} 
                                height={40} 
                            />
                        </div>
                        <div>
                            <h3 className="font-semibold">24/7 Guest Support</h3>
                            <p className="text-muted-foreground">We are here for you around the clock to ensure your stay is as smooth and enjoyable as possible.</p>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <div className="bg-primary text-white p-4 rounded-lg mr-4">
                            <Image 
                                src={friends} 
                                alt="admin-panel-icon" 
                                width={40} 
                                height={40} 
                            />
                        </div>
                        <div>
                            <h3 className="font-semibold">User-Friendly Booking</h3>
                            <p className="text-muted-foreground">Easily manage your reservations, communicate with hosts, and plan your trip from one convenient place.</p>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <div className="bg-primary text-white p-4 rounded-lg mr-4">
                            <Image 
                                src={mobile}
                                alt="mobile-friendly-icon" 
                                width={40} 
                                height={40} 
                            />
                        </div>
                        <div>
                            <h3 className="font-semibold">Mobile Ready</h3>
                            <p className="text-muted-foreground">Book and manage your stay on the go with our mobile-friendly platform, designed for modern travelers.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="md:w-1/2 mt-8 md:mt-0  flex flex-col items-center">
    <Image 
        src={whyChooseUs}
        alt="Luxury Stay" 
        width={400} 
        height={400} 
        className="rounded-lg shadow-lg" 
    />
    <blockquote className="bg-secondary text-secondary-foreground p-4 rounded-lg mt-6">
        <p>“The best booking experience I ever had! The place was stunning and the process was seamless.”</p>
        <footer className="mt-2">— John Doe, Happy Traveler</footer>
    </blockquote>
</div>

        </section>
    );
};

export default WhyChooseUs;
