import * as React from "react";
import { TextInput, TextInputProps } from "@stenajs-webui/forms";
import { FlatButton, stenaSearch, stenaTimes } from "@stenajs-webui/elements";
import cx from "classnames";
import styles from "./NavBarSearchField.module.css";
import { Box } from "@stenajs-webui/core";
import { MouseEventHandler } from "react";

interface NavBarSearchFieldProps extends TextInputProps {
  onClickSearch?: MouseEventHandler<HTMLButtonElement> | undefined;
  onClickClear?: MouseEventHandler<HTMLButtonElement> | undefined;
}

export const NavBarSearchField: React.FC<NavBarSearchFieldProps> = ({
  placeholder = "Search",
  className,
  width = 368,
  wrapperClassName,
  onClickSearch,
  onClickClear,
  ...textInputProps
}) => {
  return (
    <Box width={width}>
      <TextInput
        wrapperClassName={cx(styles.navBarSearchField, wrapperClassName)}
        className={cx(styles.navBarSearchFieldInput, className)}
        placeholder={placeholder}
        contentRight={
          <>
            <FlatButton
              leftIcon={stenaSearch}
              className={styles.searchButtonOne}
              onClick={onClickSearch}
            />
            <FlatButton
              leftIcon={stenaTimes}
              className={styles.searchButtonTwo}
              onClick={onClickClear}
            />
          </>
        }
        {...textInputProps}
      />
    </Box>
  );
};
