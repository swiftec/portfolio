import React from "react";
import {Flex, FlexProps, Icon, Link} from "@chakra-ui/react";
import {IconType} from "react-icons";
import {usePageContext} from "../renderer/usePageContext";

interface NavItemProps extends FlexProps {
  href: string
  className?: string
  name: string
  icon: IconType
}

const NavItem = ({href, className, name, icon, ...rest}: NavItemProps) => {
  const pageContext = usePageContext();
  const isActive = [
    className,
    pageContext.urlPathname === href && "is-active",
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <Link
      href={href}
      className={isActive}
      style={{textDecoration: 'none'}}
      _focus={{boxShadow: 'none'}}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{bg: 'cyan.400', color: 'white'}}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{color: 'white'}}
            as={icon}
          />
        )}
        {name}
      </Flex>
    </Link>
  );
};

export default NavItem