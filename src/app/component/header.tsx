import Link from "next/link";


export default function Header() {
  return (
    <div>
      
      {/* parent start */}
      <div className="flex mt-[47px]">
        {/* 1st child */}
        <div className="w-[187px] h-[58px] ml-[136px] gap-[10px]">
          <h3 className="font-montserrat font-bold  w-[152px] h-[32px] top-[13px] text-white">
            BrandName
          </h3>
        </div>
        {/* 1st child end */}

        {/* 2nd child */}
        <div>
          <div className="font-montserrat text-white flex gap-[21px]">
            <Link href="#" className=" w-[43px] h-[24px] font-montserrat text-[14px] font-bold leading-[24px] tracking-[0.2px] text-center hover:text-red-400">Home</Link>
            <Link href="##" className=" w-[59px] h-[24px] font-montserrat text-[14px] font-bold leading-[24px] tracking-[0.2px] text-center hover:text-red-400">Product</Link>
            <Link href="###" className=" w-[52px] h-[24px] font-montserrat text-[14px] font-bold leading-[24px] tracking-[0.2px] text-center hover:text-red-400">Pricing</Link>
            <Link href="####" className=" w-[58px] h-[24px] font-montserrat text-[14px] font-bold leading-[24px] tracking-[0.2px] text-center hover:text-red-400">Contact</Link>
          </div>
        </div>
        {/* 2nd child end */}

        {/* 3rd child */}
        <div className="flex w-[189px] h-auto relative top-[3px] left-[400px]">
          <div className="w-[41px] h-[22px] text-white hover:text-red-400">
            <Link
              href="####"
              className="font-montserrat font-bold leading-[22px]  tracking-[0.2px] text-right"
            >
              Login
            </Link>
          </div>
          <div className="w-[214px] h-[52px] p-[0px_104px_0px_0px]">
            <div className="w-[110px] h-auto ml-6 mt-[-10px]  p-[10px_3px_10px_20px] rounded-tl-[5px] rounded-tr-none rounded-br-none rounded-bl-none bg-customBlue hover:bg-red-900 ">
              <button className="w-[60px] h-[22px] font-montserrat text-[14px] font-bold leading-[22px] tracking-[0.2px] text-left text-white hover:text-white" >JOIN US</button>
            </div>
          </div>
        </div>
        {/* 3rd child end */}
      </div>
      {/* parent end */}
    </div>
  );
}
