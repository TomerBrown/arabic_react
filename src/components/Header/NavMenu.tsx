import {
  Button,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
  Icon,
  VStack,
} from "@chakra-ui/react";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { HOMEPATH, YOUTUBEPATH } from "../../router/routes";
import { IoHomeOutline } from "react-icons/io5";
import { BsYoutube } from "react-icons/bs";


interface PageNavLinkProps {
  text: string;
  to: string;
  icon?: JSX.Element;
}
const PageNavLink = ({ text, to, icon }: PageNavLinkProps) => {
  return (
    <Button
      as={NavLink}
      to={to}
      dir="rtl"
      width={"100%"}
      justifyContent={"flex-start"}
      background={"none"}
      gap={"20px"}
    >
      {icon}
      {text}
    </Button>
  );
};

const NavMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>
        <IoMenu />
      </Button>
      <Drawer placement="right" onClose={onClose} isOpen={isOpen} size={"xs"}>
        <DrawerOverlay />
        <DrawerContent borderLeftRadius={"40px"}>
          <Button onClick={onClose} background={"none"} alignSelf={"flex-end"}>
            <IoMdClose />
          </Button>
          <VStack gap={2}>
            <PageNavLink
              text={"דף הבית"}
              to={HOMEPATH}
              icon={<Icon color="cyan.600" w={6} h={6} as={IoHomeOutline}/>}
            />
            <PageNavLink
              text={"סרטון יוטיוב"}
              to={YOUTUBEPATH}
              icon={<Icon color="red.600" w={6} h={6} as={BsYoutube}/>}
            />
          </VStack>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default NavMenu;
