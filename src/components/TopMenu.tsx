import { images } from "../constants/images";

const CustomLink = ({ link }: { link: string }) => {
  return (
    <p className="text-gray-500 text-lg  cursor-pointer hover:text-primary transition-all duration-300 ease-in-out hover:scale-105">
      {link}
    </p>
  );
};

const TopMenu = () => {
  const menu = ["Home", "How it Works", "Support", "Intergration", "Contact"];
  return (
    <div className="w-full flex items-center justify-between">
      {/* logo */}
      <img src={images.LOGO} alt={images.LOGO} className="w-[150px]" />
      <div className="flex gap-12 items-center">
        <div className="gap-6 flex items-center justify-center">
          {menu.map((m, ind) => (
            <CustomLink link={m} key={m + ind} />
          ))}
        </div>
        <button className="p-4 rounded-full bg-white text-primary w-[180px] border border-gray-300 font-bold cursor-pointer">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default TopMenu;
