import { IoMailOutline } from "react-icons/io5";

export const Email = ({enabled}) => {
  return (
    <div className={`flex items-center text-sm ${enabled ? "text-amber-400" : "text-amber-100"}`}>
      <IoMailOutline className="mr-2" /> kavyaagar0@gmail.com
    </div>
  )
};