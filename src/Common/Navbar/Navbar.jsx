import { Link } from "react-router-dom";

const Navbar = ()=>{
    return(

<div className="px-[15px] fixed w-full bg-black">
<div className="navbar flex justify-between items-center py-[40px] bg-[#f9f9f9] px-[35px] shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a href="#" className="text-[16px] font-regular leading-[18px] text-[#000000]">Home</a></li>
        <li><a href="#" className="text-[16px] font-regular leading-[18px] text-[#000000]">About</a></li>
        <li><a href="#" className="text-[16px] font-regular leading-[18px] text-[#000000]">Portfolio</a></li>
        <li><a href="#" className="text-[16px] font-regular leading-[18px] text-[#000000]">Blog</a></li>
        
      </ul>
     
    </div>
    <Link className="text-black uppercase text-[34px] font-extrabold leading-[34px]">Develop.me</Link>
  </div>
  <div className="navbar-center flex gap-[67px] hidden lg:flex">
    <ul className="menu menu-horizontal flex gap-[37px]">
        <li><a href="#" className="text-[16px] font-regular leading-[18px] text-[#000000]">Home</a></li>
        <li><a href="#" className="text-[16px] font-regular leading-[18px] text-[#000000]">About</a></li>
        <li><a href="#" className="text-[16px] font-regular leading-[18px] text-[#000000]">Portfolio</a></li>
        <li><a href="#" className="text-[16px] font-regular leading-[18px] text-[#000000]">Blog</a></li>
        
    </ul>
    <Link className="py-[10px] flex gap-[9px] border-2 border-black items-center pr-[12px] rounded-[29px]">
        <div className="w-[38px] h-[38px]">
            <img src="https://i.ibb.co/tMj08mx4/Group-15.png" className="w-full h-full"
            alt="" />
        </div>
        <div>
            <span className="text-[#000000] text-[16px] leading-[18px]">Start Project</span>
        </div>
    </Link>
  </div>
  
</div>
        </div>
    )
}

export default Navbar;