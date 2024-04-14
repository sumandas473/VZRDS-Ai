import React from "react";
import image1 from '../../assets/images (2).jpeg'
import image2 from '../../assets/images (3).jpeg'
import image3 from '../../assets/images (6).jpeg'
import image4 from '../../assets/images (7).jpeg'
import image5 from '../../assets/images (10).jpeg'

function CardSec() {
  return (
    <div  className="bg-black text-white h-screen w-full pt-20  ">
      <div className="h-40 w-full flex">
        <div className="w-1/3 h-full  pl-16">
          <h1 className=" font-zenKaku text-7xl uppercase text-[#4b4b4b7a] leading-tight  ">
            //13.04
          </h1>
        </div>
        <div className="w-2/3 h-full  flex flex-col pr-16 text-[#ffffffb2]">
          <h1 className=" font-zenKaku text-7xl uppercase text-right ">
            unlock the power
          </h1>
          <h1 className=" font-zenKaku text-7xl uppercase text-right ">
            of ai with vzrds
          </h1>
        </div>
      </div>
      <div className="h-80 w-full  flex ">
        <div className="h-full w-[50%]  px-14  py-10 flex flex-col justify-around pl-20">
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
            asperiores, neque aliquid obcaecati maiores perferendis totam quidem
            debitis. Atque nesciunt quae blanditiis saepe quos natus, eos
         
          </h1>
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
            asperiores, neque aliquid obcaecati maiores perferendis totam quidem
            debitis. Atque nesciunt quae blanditiis saepe quos natus, eos
            maiores eius reiciendis eum suscipit ipsa dolor sequi dignissimos
            odit! Iusto ipsa necessitatibus vitae.
          </h1>
        </div>
        <div className="h-full w-[50%]  flex items-center justify-center gap-4">
          <div className="h-[70%] w-[30%] bg-[#27262677] rounded-[50px] border relative ">
           
            <div className="h-full w-full bg-[#3c303077] rounded-[50px] border absolute  overflow-hidden">
                <img src={image1} alt="" className="h-full w-full object-cover" />
            </div>
          </div>
          <div className="h-[70%] w-[30%] bg-[#27262677] rounded-[50px] border overflow-hidden">
            <img src={image2} alt="" className="h-full w-full object-cover"  />
          </div>
        </div>
      </div>
      <div className="h-60 w-full  flex pl-20 items-center gap-2">
     
          <div className="h-[95%] w-[17%] bg-[#27262677] rounded-[50px] border  overflow-hidden">
            <img src={image3} alt=""  className="h-full w-full object-cover" />
           
          </div>
          <div className="h-[95%] w-[17%] bg-[#27262677] rounded-[50px] border overflow-hidden">
            <img src={image5} alt=""  className="h-full w-full object-cover" />
          </div>
          <div className="h-[95%] w-[17%] bg-[#27262677] rounded-[50px] border overflow-hidden">
            <img src={image4} alt="" className="h-full w-full object-cover"  />
          </div>
       
      </div>
    </div>
  );
}

export default CardSec;
