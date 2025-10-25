import TopMenu from "../../../components/TopMenu";
import { shapes } from "../../../constants/images";

const HeaderBackgound = () => {
  return (
    <div className="w-full h-full absolute z-0 border">
      <div className="relative w-full h-full">
        <img
          src={shapes.SHAPE1}
          alt={shapes.SHAPE1}
          className="absolute -top-[560px] -right-[110px] w-[780px]"
        />
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div className="flex flex-col relative overflow-hidden h-screen items-center">
      <HeaderBackgound />
      <div className="container z-10 py-8">
        <TopMenu />
      </div>
    </div>
  );
};

export default Header;
