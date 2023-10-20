import React from 'react';
import users from '../images/users.png';
import revenue from '../images/revenue.png';
import transaction from '../images/transaction.png';
import likes from '../images/likes.png';

const DataBar = () => {
    return (
        <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-3'>

            <div id="rev-box" className="data ">
                <img src={revenue} width={35} height={35} id="card-icon" alt="revenue" />
                <div className="mt-2 ">
                    <p className="text-sm">Total Revenues</p>
                    <div className="flex justify-between mt-1">
                        <h2 className="text-xl font-bold">$ 2,129,430</h2>
                        <button className="bg-[#E9F9EB] rounded-md p-1 text-xs font-semibold text-[#3CC952]">
                            +2.5%
                        </button>
                    </div>
                </div>
            </div>
            
            
            <div id="trans-box" className="data ">
                <img src={transaction} width={35} height={35} id="card-icon" alt="trans" />
                <div className="mt-2 ">
                    <p className="text-sm">Total Transaction</p>
                    <div className="flex justify-between mt-1">
                        <h2 className="text-xl font-bold">1,520</h2>
                        <button className="bg-[#E9F9EB] rounded-md p-1 text-xs font-semibold text-[#3CC952]">
                            +1.7%
                        </button>
                    </div>
                </div>
            </div>
            
            
            <div id="like-box" className="data ">
                <img src={likes} width={35} height={35} id="card-icon" alt="like" />
                <div className="mt-2 ">
                    <p className="text-sm">Total Likes</p>
                    <div className="flex justify-between mt-1">
                        <h2 className="text-xl font-bold">9,721</h2>
                        <button className="bg-[#E9F9EB] rounded-md p-1 text-xs font-semibold text-[#3CC952]">
                            +1.4%
                        </button>
                    </div>
                </div>
            </div>
            
            
            <div id="user-box" className="data ">
                <img src={users} width={35} height={35} id="card-icon" alt="user" />
                <div className="mt-2 ">
                    <p className="text-sm">Total Users</p>
                    <div className="flex justify-between mt-1">
                        <h2 className="text-xl font-bold">9,721</h2>
                        <button className="bg-[#E9F9EB] rounded-md p-1 text-xs font-semibold text-[#3CC952]">
                            +4.2%
                        </button>
                    </div>
                </div>
            </div>

            
        </div>
    )
}

export default DataBar;