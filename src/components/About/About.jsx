const About = () => {
    return (
        <div className="mx-[15px] bg-[url('https://i.ibb.co/twYys5qz/gradient.png')] bg-no-repeat bg-cover">
            <div className="py-[40px] md:py-[60px] lg:py-[80px]">
                <div className="max-w-[1410px] w-full mx-auto px-4">
                    <div className="flex flex-col gap-[20px] md:gap-[30px] lg:gap-[34px]">
                        <div className="flex justify-end">
                            <div className="flex justify-end w-[100px] md:w-[120px] lg:w-[144px] h-[36px] md:h-[40px] lg:h-[44px]">
                                <img
                                    src="https://i.ibb.co/8nkjYWCT/Group-25-1.png"
                                    className="w-full h-full"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="max-w-full md:max-w-[90%] lg:max-w-[1053px] w-full mx-auto">
                            <h3 className="text-[36px] sm:text-[48px] md:text-[60px] lg:text-[78px] text-center text-black font-bold leading-[46px] sm:leading-[60px] md:leading-[80px] lg:leading-[126px]">
                                I’ve been{" "}
                                <span className="bg-black px-[8px] py-[6px] sm:px-[10px] sm:py-[8px] rounded-lg text-white">
                                    Developing
                                </span>{" "}
                                Websites since{" "}
                                <span className="bg-black px-[8px] py-[6px] sm:px-[10px] sm:py-[8px] rounded-lg text-white">
                                    2013
                                </span>
                            </h3>
                        </div>
                        <div className="max-w-full md:max-w-[90%] lg:max-w-[921px] w-full mx-auto">
                            <p className="text-[16px] sm:text-[17px] md:text-[18px] leading-[28px] md:leading-[33px] text-center text-black">
                                We start every new client interaction with an in-depth discovery call where we get
                                to know each other and recommend the best course of action.
                            </p>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-[20px] lg:gap-[30px] items-center">
                            <div className="w-full lg:w-[244px] text-center">
                                <h3 className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] font-bold text-black">
                                    PREVIOUSLY WORKED ON
                                </h3>
                            </div>
                            <div className="w-full lg:w-[1068px]">
                                <img
                                    src="https://i.ibb.co/d0B5CjG2/Group-32.png"
                                    className="w-full"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default About;
