import classNames from "classnames";
import styles from "./Image.module.scss";
import { useState, forwardRef } from "react";
import { images } from "~/assets/images";

const Image = forwardRef(
  (
    {
      src,
      alt,
      className,
      fallback: customFallback = images.noImage,
      ...props
    },
    ref
  ) => {
    const [fallBack, setFallback] = useState("");

    const handleError = () => {
      setFallback(customFallback);
    };

    return (
      <img
        className={classNames(styles.wrapper, className)}
        src={fallBack || src}
        alt={alt}
        ref={ref}
        {...props}
        onError={handleError}
      />
    );
  }
);

export default Image;
