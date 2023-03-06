import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";

const cx = classNames.bind(styles);

function AccountItem({ username }) {
  return (
    <div className={cx("wrapper")}>
      <img
        className={cx("avatar")}
        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/cf69e440bad13927d1ec8480d57a1b66~c5_300x300.webp?x-expires=1678197600&x-signature=o%2BeM6VCvzXvjzsy3sdN1IuFBqgI%3D"
        alt="phanphong"
      />
      <div className={cx("info")}>
        <h4 className={cx("username")}>
          <span>{username}</span>
          <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
        </h4>
        <span className={cx("name")}>Phan Phong</span>
      </div>
    </div>
  );
}

export default AccountItem;
