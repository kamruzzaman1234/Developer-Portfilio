import { Link } from "react-router-dom";

const Navbar = ()=>{
    return(

        <div className="fixed w-full mx-auto lg:mx-[15px]">
            <div className="max-w-[1410px] w-full mx-auto">
                <div className="navbar flex justify-between
 items-center py-[40px] px-[35px] bg-[#f9f9f9] opacity-80 rounded-b-[40px]
  ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-warning text-black lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-black text-white rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a href="#" className="text-[16px] font-regular leading-[18px] text-white font-sporting lg:text-[#000000]">Home</a></li>
        <li><a href="#" className="text-[16px] font-regular leading-[18px] text-white lg:text-[#000000]">About</a></li>
        <li><a href="#" className="text-[16px] font-regular leading-[18px] text-white lg:text-[#000000]">Portfolio</a></li>
        <li><a href="#" className="text-[16px] font-regular leading-[18px] text-white lg:text-[#000000]">Blog</a></li>
        
      </ul>
     
    </div>
    <Link className="text-black uppercase text-[34px] font-extrabold leading-[34px]">Develop.me</Link>
  </div>
  <div className="navbar-center flex gap-[67px] hidden lg:flex">
    <ul className="menu menu-horizontal flex gap-[37px]">
        <li><a href="#" className="text-[16px] font-regular leading-[18px] font-sporting text-[#000000]">Home</a></li>
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
        </div>
    )
}

export default Navbar;