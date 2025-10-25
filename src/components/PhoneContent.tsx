import Back from "../assets/icon/back";
import Batery from "../assets/icon/Batery";
import Favorite from "../assets/icon/Favorite";
import Network from "../assets/icon/network";
import Wifi from "../assets/icon/Wifi";
import { bgImage } from "../constants/images";
import PhoneShape from "../shape/PhoneShape";

export const PhoneHeaderContent = () => {
  return (
    <PhoneShape>
      <div className="flex flex-col">
        <div
          className="bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${bgImage.BG1})` }}
        >
          <div className="bg-primary w-full h-full flex flex-col gap-4 p-2">
            <div className="flex justify-between items-center">
              <p className="text-sm text-white font-semibold">9:05</p>
              <div className="flex gap-2 items-center">
                <Network h={18} w={18} style="text-white" />
                <Wifi style="text-white" h={18} w={18} />
                <Batery style="text-white" h={18} w={18} />
              </div>
            </div>
            <div className="flex flex-col gap-8">
                <div className="flex items-center justify-between">
                    <Back style="text-white" w={12} h={24} />
                    <Favorite style="text-white" />
                </div>
                <div className="p-3 bg-primary hover:bg-black"></div>
            </div>
          </div>
        </div>
      </div>
    </PhoneShape>
  );
};
