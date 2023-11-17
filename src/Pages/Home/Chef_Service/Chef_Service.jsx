import React from 'react';
import chef_image from '../../../assets/home/chef-service.jpg'

const Chef_Service = () => {
  return (
    <div className='mb-20'>
      <div className='p-10' style={{ backgroundImage: `url(${chef_image})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', width: '80%', margin: 'auto' }}>
        <div className='text-center lg:w-2/3 lg:p-10 p-5 mx-auto bg-white'>
          <h2>Bistro Boss</h2>
          <h5 className='text-left leading-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</h5>
        </div>
      </div>
    </div>
  );
};

export default Chef_Service;