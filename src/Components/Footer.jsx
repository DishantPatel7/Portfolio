import { FOOTER } from "../constants";

const Footer = () => {
  return (
    <footer className="flex w-screen items-center justify-center bg-[#e4e4e4] dark:bg-neutral-800 text-sm lg:text-base">
      <p className="text-wrap text-center p-2">{FOOTER}</p>
    </footer>
  );
};
export default Footer;
