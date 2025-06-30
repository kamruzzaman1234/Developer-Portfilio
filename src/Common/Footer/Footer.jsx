const Footer = ()=>{
    return(
        <div className="mx-[15px] my-[15px]">
            <div className="py-[80px] bg-black rounded-r-[30px] rounded-l-[30px] rounded-b-[30px]">
                <div className="max-w-[1410px] mx-auto w-full">
                    <div className="flex flex-col gap-[70px] px-[20px]">
                        <div className="flex flex-col lg:flex-row gap-[20px] lg:gap-[338px]">
                            <div className="">
                                <h3 className="uppercase text-[34px] font-extrabold leading-[34px] text-[#C5FF41]">devlop.me</h3>
                            </div>
                            <div>
                                <h3 className="text-[64px] leading-[64px] font-bold">As You Can</h3>
                                <div className="mt-[100px] grid grid-cols-1 lg:grid-cols-3  gap-[85px]">
                                    <div className="flex flex-col gap-[20px]">
                                       <div className="flex flex-col gap-[12px]">
                                             <h3 className="text-[16px] leading-[24px] text-[#757575]">Say hello</h3>
                                          <ul className="list-none flex flex-col gap-[9px]">
                                            <li className="uppercase text-[16px] leading-[24px]">HELLO@DEVLOP.ME.COM</li>
                                            <li className="uppercase text-[16px] leading-[24px]">MAHBUBUL@ME.COM</li>
                                        </ul>
                                       </div>
                                    <div className="flex flex-col gap-[12px]">
                                             <h3 className="text-[16px] leading-[24px] text-[#757575]">Call</h3>
                                          <ul className="list-none flex flex-col gap-[9px]">
                                            <li className="uppercase text-[16px] leading-[24px]">+784549 4981 00</li>
                                            <li className="uppercase text-[16px] leading-[24px]">+8845 0100 211</li>
                                        </ul>
                                       </div>

                                    </div>

                                    <div className="flex flex-col gap-[20px]">
                                        <h3 className="text-[16px] leading-[24px] text-[#757575]">Menu</h3>
                                        <ul className="list-none flex flex-col gap-[9px]">
                                            <li className="uppercase text-[16px] leading-[24px]">Home</li>
                                            <li className="uppercase text-[16px] leading-[24px]">About</li>
                                            <li className="uppercase text-[16px] leading-[24px]">portfolio</li>
                                            <li className="uppercase text-[16px] leading-[24px]">blog</li>
                                        </ul>
                                    </div>

                                    <div className="flex flex-col gap-[20px]">
                                        <h3 className="text-[16px] leading-[24px] text-[#757575]">Social</h3>
                                        <ul className="list-none flex flex-col gap-[9px]">
                                            <li className="uppercase text-[16px] leading-[24px]">twitter</li>
                                            <li className="uppercase text-[16px] leading-[24px]">instragram</li>
                                            <li className="uppercase text-[16px] leading-[24px]">facebook</li>
                                            <li className="uppercase text-[16px] leading-[24px]">BEHANCE</li>
                                            <li className="uppercase text-[16px] leading-[24px]">dribbble</li>
                                        </ul>
                                    </div>
                                        
                                </div>
                            </div>
                        </div>
                       <div className="flex justify-between items-center">
                            <h3 className="text-[24px] leading-[34px] font-extrafold">BESNIK</h3>
                            <h4 className="text-[16px] text-[#757575] leading-[24px]">© devlop.me 2022</h4>
                            <h4 className="text-[16px] text-[#757575] leading-[24px]">PRIVACY - TERMS</h4>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;