import {extendTheme} from "@chakra-ui/react";
import {config} from "./config";
import {styles} from "./styles"
import {Sidebar} from "./components/sidebar";

export const theme = extendTheme({
  config,
  styles,
  components: {
    Sidebar
  }
});
