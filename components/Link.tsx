import React from "react";
import {usePageContext} from "../renderer/usePageContext";

interface LinkProps {
  href?: string;
  className?: string;
}

function Link(props: LinkProps) {
  const pageContext = usePageContext();
  const className = [
    props.className,
    pageContext.urlPathname === props.href && "is-active",
  ]
      .filter(Boolean)
      .join(" ");
  return <a {...props} className={className}/>;
}

export default Link