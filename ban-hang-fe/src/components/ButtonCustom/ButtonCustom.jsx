import classNames from "classnames/bind";

import styles from "./ButtonCustom.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function ButtonCustom({
  children,
  to,
  href,
  primary,
  outline,
  text,
  disabled,
  leftIcon,
  rightIcon,
  size = "medium",
  onClick,
  className,
  ...passProps
}) {
  let Component = "button";

  const classes = cx("wrapper", {
    primary,
    outline,
    text,
    disabled,
    [size]: size
  }, className);


  const props = {
    onClick,
    ...passProps
  };

  if (to) {
    props.to = to;
    Component = Link;
  } else if (href) {
    props.href = href;
    Component = "a";
  }

  if (disabled) {
    Object.keys(props).forEach(prop => {
      if (prop.startsWith("on") && typeof props[prop] === "function") {
        delete props[prop];
      }
    })
  }


  return (
    <Component className={classes} {...props}>
      {leftIcon && <span className={cx("icon")}>{leftIcon}</span>}

      <span>{children}</span>

      {rightIcon && <span className={cx("icon")}>{rightIcon}</span>}
    </Component>
  );

}

export default ButtonCustom;