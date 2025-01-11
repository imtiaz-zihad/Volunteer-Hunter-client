import React from "react";

const VolunteerStory = () => {
  return (
    <div className=" bg-gray-50">
      {/* Header Section */}
      <div className="bg-sky-400 container mx-auto text-white py-12">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Our Volunteer Stories</h1>
          <p className="mt-3 text-lg">
            Discover inspiring stories of people making a positive impact.
          </p>
        </div>
      </div>

      {/* Stories Grid Section */}
      <div className="container mx-auto py-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Story Card 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://img.jakpost.net/c/2020/08/04/2020_08_04_101650_1596516790._medium.jpg"
              alt="Volunteer Story"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-sky-600">Building Education for Rural Kids</h2>
              <p className="mt-3 text-gray-600">
                A volunteer shares their journey of helping underprivileged children gain access to education.
              </p>
              
            </div>
          </div>

          {/* Story Card 2 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://www.faithinnature.co.uk/cdn/shop/articles/mbunga_uganda.png?v=1731680121"
              alt="Volunteer Story"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-sky-600">Restoring Nature Through Tree Planting</h2>
              <p className="mt-3 text-gray-600">
                Volunteers come together to make a greener future by planting thousands of trees.
              </p>
            
            </div>
          </div>

          {/* Story Card 3 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://williamlambers.com/wp-content/uploads/2012/03/happygroup1.jpg"
              alt="Volunteer Story"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-sky-600">Feeding the Hungry in the Community</h2>
              <p className="mt-3 text-gray-600">
                Volunteers team up to provide meals and care packages to those in need.
              </p>
             
            </div>
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default VolunteerStory;
