import { IconButton } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import React from "react";
import styles from "./Header.module.css";
import image from "./image.png";

export const Header = () => {
  return (
    <div className={styles.header}>
      <IconButton>
        <PersonIcon className={(styles.header_icon_person, styles.left)} />
      </IconButton>
      <div className={styles.header_logo}>
        <img className={styles.image} src={image} alt="CORONA VIRUS" />
      </div>
      <IconButton>
        <ForumIcon className={(styles.header_icon_forum, styles.right)} />
      </IconButton>
    </div>
  );
};

export default Header;
