import React from 'react';

const WhyVolunteer = () => {
    return (
        <div className="container mx-auto p-4 text-center">
            <h2 className="text-2xl font-bold mb-4">Why Volunteer?</h2>
            <p className="mb-4 text-gray-600">
                Volunteering allows you to connect to your community and make it a better place. It also benefits you, both mentally and physically.
            </p>
            <div className="aspect-w-16 aspect-h-9">
                <iframe
                    width="100%"
                    height="500"
                    src="https://www.youtube.com/embed/Htm5tgOrubg"
                    title="Why Volunteer"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};

export default WhyVolunteer;
