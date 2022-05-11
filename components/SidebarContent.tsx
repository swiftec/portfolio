import {Box, BoxProps, CloseButton, Flex, Text, useColorModeValue} from "@chakra-ui/react";
import React, {ReactNode} from "react";

interface SidebarProps extends BoxProps {
    onClose: () => void;
    children: ReactNode
}

const SidebarContent = ({onClose, children, ...rest}: SidebarProps) => {
    return (
        <Box
            bg={useColorModeValue('white', 'gray.900')}
            borderRight="1px"
            borderRightColor={useColorModeValue('gray.200', 'gray.700')}
            w={{base: 'full', md: 60}}
            pos="fixed"
            h="full"
            {...rest}>
            <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
                <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
                    Logo
                </Text>
                <CloseButton display={{base: 'flex', md: 'none'}} onClick={onClose}/>
            </Flex>
            {children}
        </Box>
    );
};

export default SidebarContent