import { FlatButton, FlatButtonProps } from "@stenajs-webui/elements";
import * as React from "react";
import cx from "classnames";
import styles from "./NavBarNotificationButton.module.css";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { stenaBell } from "@stenajs-webui/elements";

export interface NavBarNotificationButtonProps
  extends Omit<FlatButtonProps, "leftIcon" | "rightIcon" | "label"> {
  count: number;
  unread: boolean;
  icon?: IconDefinition;
}

export const NavBarNotificationButton: React.FC<
  NavBarNotificationButtonProps
> = ({
  count,
  unread = false,
  className,
  labelClassName,
  iconClassName,
  icon = stenaBell,
  ...buttonProps
}) => {
  const hasCount = count > 0;

  return (
    <FlatButton
      {...buttonProps}
      leftIcon={icon}
      className={cx(
        { [styles.unread]: unread },
        { [styles.hasCount]: hasCount },
        styles.navBarNotificationButton,
        className
      )}
      label={hasCount ? String(count) : undefined}
      labelClassName={cx(labelClassName, styles.label)}
      iconClassName={cx(iconClassName, styles.icon)}
    />
  );
};
