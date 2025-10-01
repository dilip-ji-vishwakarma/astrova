import { FaUserAstronaut, FaBorderAll, FaRegHeart } from "react-icons/fa";
import { MdOutlineHealthAndSafety } from "react-icons/md";

export const fakeCategories = [
  {
    id: 1,
    name: "All",
    icon: <FaBorderAll />,
  },
  {
    id: 2,
    name: "Love and Relationship",
    icon: <FaRegHeart />,
  },
  {
    id: 3,
    name: "Education",
    icon: <FaUserAstronaut />,
  },
  {
    id: 4, 
    name: "Health",
    icon: <MdOutlineHealthAndSafety />,
  },
];
