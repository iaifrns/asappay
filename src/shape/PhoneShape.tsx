import type React from "react";

const PhoneShape = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="rounded-xl bg-gray-700 p-2 w-[350px]">
      <div className="flex w-full items-center justify-center pb-2">
        <div className="rounded-full p-1 bg-gray-400"></div>
      </div>
      <div className="bg-white rounded-xl">{children}</div>
    </div>
  );
};

export default PhoneShape;
