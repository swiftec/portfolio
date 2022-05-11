import React, {ReactNode} from 'react';
import {Box, Drawer, DrawerContent, useColorModeValue, useDisclosure, useStyleConfig,} from '@chakra-ui/react';
import SidebarContent from "./SidebarContent";
import MobileNav from "./MobileNav";

function Sidebar({children}: { children?: ReactNode }) {
    const styles = useStyleConfig('Sidebar')
    const {isOpen, onOpen, onClose} = useDisclosure();
    return (
        <Box __css={styles} minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
            <SidebarContent onClose={() => onClose} display={{base: 'none', md: 'block'}}/>
            <Drawer
                autoFocus={false}
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                returnFocusOnClose={false}
                onOverlayClick={onClose}
                size="full">
                <DrawerContent>
                    <SidebarContent onClose={onClose}/>
                </DrawerContent>
            </Drawer>
            <MobileNav display={{base: 'flex', md: 'none'}} onOpen={onOpen}/>
            <Box ml={{base: 0, md: 60}} p="4">
                {children}
            </Box>
        </Box>
    );
}

export default Sidebar