import { MdDarkMode, MdLightMode } from "react-icons/md";
const Darkmode = ({darkModeToggle,darkMode}) => {
  return (
    //   <div className={`${darkMode && "dark"}`}>
      <div
        className="group fixed right-4 z-50 mx-auto mt-10 w-20 cursor-pointer rounded-3xl bg-dark1 dark:bg-dark2"
        onClick={darkModeToggle}
      >
        <div
          className={`${darkMode && "translate-x-10"} flex h-10 w-10 scale-75 items-center justify-center rounded-3xl bg-dark2 text-2xl transition-transform dark:bg-dark1`}
        >
          {darkMode ? (
            <MdDarkMode className="text-dark1" />
          ) : (
            <MdLightMode className="text-dark2" />
          )}
        </div>
      </div>
    // </div>
  );
};

export default Darkmode;
