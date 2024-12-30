import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const RecentOrganizer = () => {
    return (
        <div className='container mx-auto p-4 '>
          <h1 className="text-2xl text-sky-500 mt-10 font-bold px-5 lg:px-0">Top Volunteer Organization In Bangladesh</h1>
          <Marquee gradient='true' direction="right" className="mt-10  flex ">
           <Link   >
           <img className="h-28 w-28 mx-28" src="https://www.bdclean.org/wp-content/uploads/2019/05/bd-clean.png" alt="" />
           </Link>
           <Link >
           <img className="h-28 w-28 mx-28" src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRKvtYbasX4w55YHpEIP8FQdm4mHTM36XqG9bOVOB0P7xc-V_7D" alt="" />
           </Link>
           <Link >
           <img className="h-28 w-28 mx-28" src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTvxQHNw5ULndsmXAPSw5eDxYFUt_AsqGKhEb9W_slYbF7JGAEr" alt="" />
           </Link>
           <Link >
           <img className="h-28 w-28 mx-28" src="https://images.prothomalo.com/prothomalo-english%2F2024-04%2F736aca19-4107-40d1-b35e-d59138450681%2FUNICEF.jpg?rect=63%2C0%2C810%2C540&auto=format%2Ccompress&fmt=webp&dpr=1.0&format=webp&w=480" alt="" />
           </Link>
           <Link >
           <img className="h-28 w-28 mx-28" src="https://vf-org-media.s3.us-east-2.amazonaws.com/9f2c11d0-36ec-11ec-bf2e-dd4c4124da8b.jpg" alt="" />
           </Link>
          </Marquee>
        </div>
      );
};

export default RecentOrganizer;