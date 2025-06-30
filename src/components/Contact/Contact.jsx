import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Contact = ()=>{
    return(
        <div className="mx-[15px]">
            <div className="py-[80px] bg-[url('https://i.ibb.co/TM2LyDrs/br-grad.png')] bg-no-repeat bg-cover">
                <div className="max-w-[1410px] w-full mx-auto">
                    <div className="flex gap-[40px]">
                        <div className="w-[781px] flex flex-col gap-[34px]">
                            <div className="w-[163px] h-[44px]">
                                <img src="https://i.ibb.co/fw4c5ft/Group-35.png" className="w-full h-full" alt="" />
                            </div>
                            <div className="flex flex-col gap-[18px]">
                                <h3 className="text-[78px] font-bold leading-[113px] text-black">Interested in <span className="bg-black px-[12px] rounded-lg py-[8px] text-white">work</span> together?</h3>
                                <p className="text-[18px] leading-[28px] text-black">We start every new client interaction with an in-depth discovery call where we get to know each other</p>
                            </div>
                            <div className="w-[247px]">
                                 <Link className="py-[10px] flex gap-[9px] border-2 
                                border-black items-center pr-[12px] rounded-[50px]">
                                   <div className="border-1 border-black rounded-full p-[17px]">
                                     <div className="w-[19.7px] h-[20px]">
                                       <img src="https://i.ibb.co/BV2w2wKP/call.png" className="w-full h-full"
                                         alt="" />
                                     </div>
                                 </div>
                            <div>
                         <span className="text-[#000000] text-[16px] leading-[18px]">Schedule a Call</span>
                        </div>
                      </Link>
                            </div>
                        </div>
                        <div className="w-[529px] py-[45px] px-[35px]">
                    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact;