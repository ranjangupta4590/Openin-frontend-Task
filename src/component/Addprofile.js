
import React, { useState } from "react";
import { GrFormAdd } from "react-icons/gr";
import UserAdd from "./UserAdd";
import useUser from "../store/useUser";
import AddedUser from "./AddedUser";


const Addprofile = () => {

  const [click, setClick] = useState(false);

  const user = useUser();
 
  const handleClickEvent = () => {
    setClick((prev) => !prev);
  };

  return (
    <>
      {user.isOpen ? (
        <AddedUser />
      ) : (
        <>
          <div className="mt-5 mx-9 min-h-[200px] lg:min-h-[87%] rounded-2xl flex flex-col items-center justify-center border-2 drop-shadow">
            <div
              className="bg-zinc-200 w-16 h-16 flex items-center justify-center rounded-full cursor-pointer"
              onClick={handleClickEvent}
            >
              <GrFormAdd className="w-[60%] h-[50%] " />
            </div>
            <h1 className="text-xl text-gray-500 mt-2">Add Profile</h1>
          </div>
          {click && <UserAdd handleClick={handleClickEvent} />}
        </>
      )}
    </>
  );
};

export default Addprofile;
