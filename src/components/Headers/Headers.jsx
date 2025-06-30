import { Link } from "react-router-dom";

const Headers = ()=>{
    return(
        <div className="bg-[url('https://i.ibb.co/Dg9K2cDt/636b9280b520dffc095f62ef-home-gradient-p-1600-png.png')]
         bg-cover bg-no-repeat py-[191px] w-full">
            <div className="max-w-[1410px] w-full mx-auto">
                <div className="px-[35px] mx-[15px] flex flex-col gap-[50px]">
                    <div className="w-[300px] lg:w-[1128px]">
                        <h2 className="text-black 
                        text-[50px] lg:text-[78px] md:text-[56px] font-bold 
                        leading-[60px]  md:leading-[65px] lg:leading-[126px]">Trusted <span className="text-white 
                        bg-[black] px-[10px] rounded-lg">Partner</span> for Your Website <span className="bg-[black] 
                        text-white px-[10px] rounded-lg">Developer.</span></h2>
                    </div>
                    <div className='flex gap-[30px] lg:gap-[253px] flex-col lg:flex-row  items-center'>
                        <div className="w-[50px] h-[120px] lg:w-[82px] lg:h-[185px]">
                            <img src="https://i.ibb.co/mVvHTth3/Group-16.png" 
                            alt="" className="w-full h-full object-cover" />
                        
                        </div>
                        <div className="w-[400px] lg:w-[703px] flex flex-col gap-[42px]">
                            <p className="text-black text-[18px] font-regular">Building the worlds best marketing websites for over a decade. 
                            Your trusted partner for strategy, design, and dev.</p>
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
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Headers;