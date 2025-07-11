// src/components/ProfileCard/index.tsx
import { useIsMobile } from "../../hooks/useIsMobile";
import NavbarMobile from "./NavbarMobile";
import NavbarDesktop from "./NavbarDesktop";

const Navbar = (props: any) => {
  const isMobile = useIsMobile();
  return isMobile ? <NavbarMobile {...props} /> : <NavbarDesktop {...props} />;
};

export default Navbar;
