import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Button.module.scss";
const cx = classNames.bind(styles);

function Button({
  className,
  to,
  href,
  children,
  leftIcon,
  rightIcon,
  primary = false,
  disable = false,
  outline = false,
  text = false,
  rounded = false,
  small = false,
  large = false,
  onClick,
  ...passProps
}) {
  let Component = "button";
  const props = {
    onClick,
    ...passProps,
  };

  if (disable) delete props.onClick;

  if (to) {
    props.to = to;
    Component = Link;
  } else if (href) {
    props.href = href;
    Component = "a";
  }

  const classes = cx("wrapper", {
    [className]: className,
    primary,
    disable,
    outline,
    text,
    rounded,
    small,
    large,
  });

  return (
    <Component className={classes} {...props}>
      {leftIcon && <span className={cx("icon")}>{leftIcon}</span>}
      <span className={cx("title")}>{children}</span>
      {rightIcon && <span className={cx("icon")}>{rightIcon}</span>}
    </Component>
  );
}

export default Button;
