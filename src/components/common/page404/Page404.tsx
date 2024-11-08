import React from "react";
import { useNavigate } from "react-router-dom";

const Page404 = () => {

  const navigate = useNavigate();

  return (
    <React.Fragment>
      <div className="flex justify-center items-center h-screen bg-[#F5F7FA]">
        <div className="grid grid-cols-10 ">
          <div className="col-span-3 sm:p-4 p-1 flex justify-center flex-col">
            <h2 className="sm:text-[21px] text-[19px] mb-4 sm:mb-2 font-extrabold mr-4 sm:mr-0">
              صفحه‌ی مورد نظر پیدا نشد
            </h2>
            <span >
                <button className="bg-config-green hover:bg-config-hover-green text-white rounded-lg p-2">
                  <p className="text-[10px] p-1  lg:text-[14px]" onClick={() => navigate(-1)}>
                    {" "}
                    بازگشت
                  </p>
                </button>
              </span>
          </div>
          <div className="col-span-7 sm:p-4 p-1 mb-[6vh]">
            <img
              className=""
              width={700}
              alt="404 page not found"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Page404;
