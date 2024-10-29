export default function Content() {
  return (
    <div>
      {/* Grandparent */}
      <div>
        {/* 1st parent */}
        <div className="w-[1046px] h-[1028px] absolute top-[104px] left-[197px] p-y-[80px] space-y-[80px]">
          {/* container 1 */}
          <div className="w-[1046px] h-[1028px] absolute top-[104px] left-[197px] py-[80px] space-y-[80px]">
            {/* row 1 */}
            <div className="w-[701px] h-[496px]">
              {/* main content */}
              <div className="w-[699px] h-[496px] py-[0px] space-y-[40px] flex flex-col">
                <h5 className="text-customBlue w-[77px] h-[24px] font-montserrat text-[16px] font-bold leading-[24px] tracking-[0.1px] text-center ml-[230px] ">
                  Welcome
                </h5>
                <h1 className="text-white w-[542px] h-[160px] font-montserrat text-[58px] font-bold leading-[80px] tracking-[0.2px] text-center">
                  Selling on the internet like a pro
                </h1>
                <h4 className="text-white w-[536px] h-[60px] font-montserrat text-[20px] font-normal leading-[30px] tracking-[0.2px] text-center">
                  We know how large objects will act, but things on a <br />
                  small scale just do not act that way.
                </h4>
                {/* buttons */}
                <div className="w-[365px] h-[52px] space-x-[10px] flex ml-[100px]">
                  {/* btn 1 */}
                  <div className="bg-customBlue w-[193px] h-[52px] p-[15px] px-[40px] gap-[10px] rounded hover:bg-red-800">
                    <button className="text-white w-[113px] h-[22px] font-montserrat text-[14px] font-bold leading-[22px] tracking-[0.2px] text-center">
                      Get Quote Now
                    </button>
                  </div>
                  {/* btn 2 */}
                  <div className="w-[162px] h-[52px] p-[15px] px-[40px] gap-[10px] rounded border border-solid border-customBlue hover:border-red-800">
                    <button className="text-white w-[82px] h-[22px] font-montserrat text-[14px] font-bold leading-[22px] tracking-[0.2px] text-center">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
              {/* main content end */}
            </div>
            {/* row 1 end */}
            {/* row 2 */}
            <div></div>
            {/* row 2 end */}
          </div>
          {/* container 2 end */}
        </div>
        {/* 1st parent end */}

        {/* 2nd parent */}
        <div className=" w-[1046px] h-[292px] mt-[700px] ml-[180px] flex gap-[30px]">
          {/* 1st child */}
          <div className="w-[328px] h-[292px]">
            <div className="bg-white w-[328px] h-[292px] p-[35px] px-[40px] gap-[20px] shadow-[0px_13px_19px_#00000012]">
              <div className="w-[70px] h-[76px] mb-3 p-[22px_19px] gap-[10px] rounded bg-[#FFDCD1]"></div>
              <h5 className="w-[135px] h-[24px] mb-3 font-montserrat text-[16px] font-bold leading-[24px] tracking-[0.1px] text-left text-[#252B42]">
                training Courses
              </h5>
              <div className="w-[50px] h-[2px] mb-3 bg-[#E74040]"></div>
              <p className="w-[222px] h-[60px] mb-3 font-montserrat text-[14px] font-normal leading-[20px] tracking-[0.2px] text-left text-[#737373]">
                The gradual accumulation of information about atomic and
                small-scale behaviour...
              </p>
            </div>
          </div>
          {/* 1st child end */}

          {/* 2nd child */}
          <div className="w-[329px] h-[292px]">
            <div className="bg-white w-[328px] h-[292px] p-[35px_40px] gap-[20px] shadow-[0px_13px_19px_0px_#00000012]">
              <div className="w-[70px] h-[76px] mb-3 p-[22px_19px] gap-[10px] rounded bg-[#B9EAA8]"></div>
              <h5 className="w-[168px] h-[24px] mb-3 font-montserrat text-[16px] font-bold leading-[24px] tracking-[0.1px] text-left text-[#252B42]">
                2,769 online courses
              </h5>
              <div className="w-[50px] h-[2px] mb-3 bg-[#E74040]"></div>
              <p className="w-[222px] h-[60px] mb-3 font-montserrat text-[14px] font-normal leading-[20px] tracking-[0.2px] text-left text-[#737373]">
                The gradual accumulation of information about atomic and
                small-scale behaviour...
              </p>
            </div>
          </div>
          {/* 2nd child end */}

          {/* 3rd child */}
          <div className="w-[329px] h-[292px]">
            <div className="w-[328px] h-[292px] p-[35px_40px] gap-[20px] bg-[#23A6F0] shadow-[0px_13px_19px_0px_#00000012] ">
              <div className="w-[70px] h-[76px] mb-3 p-[22px_19px] gap-[10px] rounded bg-white "></div>
              <h5 className="w-[135px] h-[24px] mb-3 font-montserrat text-[16px] font-bold leading-[24px] tracking-[0.1px] text-left text-white">
                training Courses
              </h5>
              <div className="w-[50px] h-[2px] mb-3 bg-white"></div>
              <p className="w-[222px] h-[60px] mb-3 font-montserrat text-[14px] font-normal leading-[20px] tracking-[0.2px] text-left text-white">
                The gradual accumulation of information about atomic and
                small-scale behaviour...
              </p>
            </div>
          </div>
          {/* 3rd child end */}
        </div>
        {/* 2nd parent end */}
      </div>
      {/* grandparent end */}
    </div>
  );
}
