import {Flex, FlexProps, Icon, Link, LinkBox} from "@chakra-ui/react";
import {IconType} from "react-icons";
import React, {ReactNode} from "react";
import {usePageContext} from "../renderer/usePageContext";

interface NavItemProps extends FlexProps {
    href: string
    className?: string
    name: string
    icon: IconType
    children?: ReactNode
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
        <LinkBox style={{textDecoration: 'none'}} _focus={{boxShadow: 'none'}}>
            <Link className={isActive} href={href}/>
            <Flex
                align="center"
                p="4"
                mx="4"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                _hover={{
                    bg: 'cyan.400',
                    color: 'white',
                }}
                {...rest}>
                {icon && (
                    <Icon
                        mr="4"
                        fontSize="16"
                        _groupHover={{
                            color: 'white',
                        }}
                        as={icon}
                    />
                )}
                {name}
            </Flex>
        </LinkBox>
    );
};

export default NavItem