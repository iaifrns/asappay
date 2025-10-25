
const Back = ({h=24,w=24, style}: {h?:number, w?:number, style?: string}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={w}
      height={h}
      viewBox="0 0 12 24"
      className={style}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10 19.438L8.955 20.5l-7.666-7.79a1.02 1.02 0 0 1 0-1.42L8.955 3.5L10 4.563L2.682 12z"
      ></path>
    </svg>
  );
};

export default Back;
