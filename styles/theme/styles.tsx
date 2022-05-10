import {extendTheme} from '@chakra-ui/react'
import {StyleFunctionProps} from '@chakra-ui/theme-tools'

export const styles = extendTheme({
    styles: {
        global: (props: StyleFunctionProps) => ({
            html: {
                fontSize: '62.5%',
            },
            body: {
                fontFamily: '300 11px/1.4 "Helvetica Neue"',
                color: "#444",
                background: "#022c43",
                overflow: "hidden",
                display: "block",
                "-webkit-font-smoothing": "antialiased",
                "moz-osx-font-smoothing": "grayscale"
            }
        }),
    },
})