const Work = () => {
  return (
    <div className="mx-4 mt-[-85px]">
      <div className="py-20 bg-[#141414] rounded-lg">
        <div className="max-w-[1410px] w-full mx-auto">
          <div className="flex flex-col gap-12">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-24 items-center text-center md:text-left">
              <div className="w-[150px] md:w-[175px]">
                <img
                  src="https://i.ibb.co/2791L74s/Group-26.png"
                  className="w-full"
                  alt=""
                />
              </div>
              <div>
                <h2 className="text-[32px] md:text-[48px] lg:text-[58px] leading-[42px] md:leading-[56px] lg:leading-[86px] font-bold text-white">
                  My Work Process
                </h2>
              </div>
            </div>

            {/* Grid Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Item 1 */}
              <div className="p-5 md:p-8 flex flex-col gap-8 bg-black rounded-lg">
                <div className="flex justify-between items-center flex-wrap gap-2">
                  <div className="bg-[#C5FFEE] text-black rounded-full px-6 py-1">
                    <h4 className="text-lg md:text-xl">Discovery</h4>
                  </div>
                  <div className="text-sm flex items-center gap-1 text-white">
                    <span>→</span>
                    <a href="#" className="underline">
                      Read More
                    </a>
                  </div>
                </div>
                <p className="text-base md:text-[18px] text-white">
                  We start every new client interaction with an in-depth discovery call where we get to know each other, discuss your current and future objectives, and recommend the best course of action.
                </p>
              </div>

              {/* Item 2 */}
              <div className="p-5 md:p-8 flex flex-col gap-8 bg-black rounded-lg">
                <div className="flex justify-between items-center flex-wrap gap-2">
                  <div className="bg-[#C5FFEE] text-black rounded-full px-6 py-1">
                    <h4 className="text-lg md:text-xl">Strategy</h4>
                  </div>
                  <div className="text-sm flex items-center gap-1 text-white">
                    <span>→</span>
                    <a href="#" className="underline">
                      Read More
                    </a>
                  </div>
                </div>
                <p className="text-base md:text-[18px] text-white">
                  Every end-to-end project of ours begins with a bespoke pre-build strategy. From brand ID consultation to in-depth code reviews we're here to set the stage for success.
                </p>
              </div>

              {/* Item 3 */}
              <div className="p-5 md:p-8 flex flex-col gap-8 bg-black rounded-lg">
                <div className="flex justify-between items-center flex-wrap gap-2">
                  <div className="bg-[#C5FFEE] text-black rounded-full px-6 py-1">
                    <h4 className="text-lg md:text-xl">Design</h4>
                  </div>
                  <div className="text-sm flex items-center gap-1 text-white">
                    <span>→</span>
                    <a href="#" className="underline">
                      Read More
                    </a>
                  </div>
                </div>
                <p className="text-base md:text-[18px] text-white">
                  After we have a comprehensive understanding of your brand, we'll be ready to move onto design. Each page will be designed, reviewed, and given your stamp of approval.
                </p>
              </div>

              {/* Item 4 */}
              <div className="p-5 md:p-8 flex flex-col gap-8 bg-black rounded-lg">
                <div className="flex justify-between items-center flex-wrap gap-2">
                  <div className="bg-[#C5FFEE] text-black rounded-full px-6 py-1">
                    <h4 className="text-lg md:text-xl">Build</h4>
                  </div>
                  <div className="text-sm flex items-center gap-1 text-white">
                    <span>→</span>
                    <a href="#" className="underline">
                      Read More
                    </a>
                  </div>
                </div>
                <p className="text-base md:text-[18px] text-white">
                  Whether we've just finished designing your new site or you're handing off finished designs for us to develop in Webflow, we're here to apply our trusted development process to your project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
