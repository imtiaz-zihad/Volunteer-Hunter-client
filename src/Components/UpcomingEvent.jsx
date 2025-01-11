import React from 'react';

const UpcomingEvent = () => {
    // Sample data for events
    const events = [
        {
            id: 1,
            title: "Community Clean-Up Drive",
            date: "January 20, 2025",
            location: "Central Park, Dhaka",
            description: "Join us to clean and beautify our community park."
        },
        {
            id: 2,
            title: "Blood Donation Camp",
            date: "January 25, 2025",
            location: "Sher-E-Bangla Nagar Hospital",
            description: "Donate blood and save lives. Every drop counts!"
        },
        {
            id: 3,
            title: "Tree Plantation Event",
            date: "February 5, 2025",
            location: "Laxmipur Eco Park",
            description: "Help us plant trees and contribute to a greener future."
        },
        {
            id: 4,
            title: "Food Distribution Drive",
            date: "February 10, 2025",
            location: "Old Dhaka Community Center",
            description: "Help distribute food to underprivileged families."
        },
        {
            id: 5,
            title: "Beach Clean-Up Campaign",
            date: "March 1, 2025",
            location: "Cox's Bazar Beach",
            description: "Join us to clean up the world’s longest beach and protect marine life."
        },
        {
            id: 6,
            title: "Education for All Seminar",
            date: "March 15, 2025",
            location: "Daffodil International University",
            description: "Raise awareness about education accessibility and equity."
        }
    ];

    return (
        <div className="p-6 font-sans mx-auto container px-3">
            <h1 className=" text-3xl font-bold text-sky-400 mb-8">Upcoming Events</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {events.map(event => (
                    <div
                        key={event.id}
                        className="border border-blue-600 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow bg-white"
                    >
                        <h2 className="text-2xl font-semibold text-blue-600 mb-2">{event.title}</h2>
                        <p className="mb-1"><span className="font-bold">Date:</span> {event.date}</p>
                        <p className="mb-1"><span className="font-bold">Location:</span> {event.location}</p>
                        <p className="mb-4 text-gray-700">{event.description}</p>
                        
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UpcomingEvent;