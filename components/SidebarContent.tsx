import React from "react";
import {Box, BoxProps, CloseButton, Flex, Image, Link, useColorModeValue} from "@chakra-ui/react";
import NavItem from "./NavItem";
import {FiHome, FiUser} from "react-icons/fi";
import Logo from "../assets/images/km-diam-logo.png"

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({onClose, ...rest}: SidebarProps) => {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{base: 'full', md: 60}}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex
        h="20"
        alignItems="center"
        mx="8"
        justifyContent="space-between">
        <Link
          href="/"
          className="logo">
          <Image
            src={Logo}
            alt="KM"/>
        </Link>
        <CloseButton
          display={{base: 'flex', md: 'none'}}
          onClick={onClose}/>
      </Flex>
      <NavItem
        href="/"
        name="Home"
        icon={FiHome}/>
      <NavItem
        href="/about"
        name="About"
        icon={FiUser}/>
    </Box>
  );
};

export default SidebarContent