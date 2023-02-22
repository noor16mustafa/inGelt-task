import React from 'react';
import img1 from '../asset/image 1.png'
import vector from '../asset/Vector.png'
import vector1 from '../asset/Vector (1).png'
import vector2 from '../asset/Vector (2).png'
import vector3 from '../asset/Vector (3).png'
import vector4 from '../asset/Vector (4).png'

const Sidebar = () => {
    return (
        <div className='h-screen w-1/5 text-center border-r-4 border-gray-500'>
            <div className=''>
                <img src={img1} alt="" className='h-20 w-20 mx-auto my-12' />
                <ul>
                    <li className='flex mb-7'>

                        <img src={vector} alt="" className='w-7 h-7 ml-10 mr-2
                        ' />
                        <h2 className='text-2xl font-semibold text-gray-500'>Home</h2>

                    </li>
                    <li className='flex mb-7'>

                        <img src={vector1} alt="" className='w-7 h-7 ml-10 mr-2
                        ' />
                        <h2 className='text-2xl font-semibold text-gray-500'>Teachers</h2>

                    </li>
                    <li className='flex mb-7'>

                        <img src={vector2} alt="" className='w-7 h-7 ml-10 mr-2
                        ' />
                        <h2 className='text-2xl font-semibold text-gray-500'>Students</h2>

                    </li>
                    <li className='flex mb-7'>

                        <img src={vector3} alt="" className='w-7 h-7 ml-10 mr-2
                        ' />
                        <h2 className='text-2xl font-semibold text-gray-500'>Batches</h2>

                    </li>
                    <li className='flex mb-7'>

                        <img src={vector4} alt="" className='w-7 h-7 ml-10 mr-2
                        ' />
                        <h2 className='text-2xl font-semibold text-gray-500'>Documents</h2>

                    </li>
                </ul>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Sidebar;