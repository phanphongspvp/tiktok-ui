import classNames from "classnames/bind";
import styles from "./DefaultLayout.module.scss";
import Header from "~/components/Layout/components/Header";
import Sidebar from "~/components/Layout/components/Sidebar";

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div className={cx("wrapper")}>
        <div className={cx("container")}>
          <Sidebar />
          <div className={cx("content")}>{children}</div>
        </div>
      </div>
    </div>
  );
}

export default DefaultLayout;
