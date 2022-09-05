import * as React from "react";
import { TextInput, TextInputProps } from "@stenajs-webui/forms";
import { FlatButton, stenaSearch } from "@stenajs-webui/elements";
import cx from "classnames";
import styles from "./NavBarSearchField.module.css";
import { Box } from "@stenajs-webui/core";

interface NavBarSearchFieldProps extends TextInputProps {}

export const NavBarSearchField: React.FC<NavBarSearchFieldProps> = ({
  placeholder = "Search",
  className,
  wrapperClassName,
  ...textInputProps
}) => {
  return (
    <Box width={368}>
      <TextInput
        wrapperClassName={cx(styles.navBarSearchField, wrapperClassName)}
        className={cx(styles.navBarSearchFieldInput, className)}
        placeholder={placeholder}
        contentRight={
          <FlatButton leftIcon={stenaSearch} className={styles.searchButton} />
        }
        {...textInputProps}
      />
    </Box>
  );
};
