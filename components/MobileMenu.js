import {FaCompressAlt, FaExpandAlt} from "react-icons/all";
import {useReducer} from "react";

export default function MobileMenu() {
  const [menu, toggleMenu] = useReducer(open => !open, false)
  return (
    <div className='sm:hidden fixed bottom-4 right-4 rounded-full p-4 bg-purple-700 text-white cursor-pointer'
         onClick={toggleMenu}
    >
      {menu ? <FaCompressAlt size={20}/> : <FaExpandAlt size={20}/>}
    </div>
  );
}