import { Column } from "@stenajs-webui/core";
import * as React from "react";
import { stenaUser } from "@stenajs-webui/elements";
import { SeparatorLine } from "@stenajs-webui/core";
import { subHours } from "date-fns";
import { Notification } from "./Notification";

export default {
  title: "panels/Notification",
  component: Notification,
};

export const Standard = () => (
  <Column
    width={"350px"}
    borderStyle={"solid"}
    borderWidth={1}
    borderColor={"separator"}
  >
    <Notification
      title={"You have a friend request"}
      text={"Robert wants to be your friend."}
      dismissed
      date={new Date()}
    />
    <SeparatorLine />
    <Notification
      title={"You have a friend request"}
      text={"Markus wants to be your friend."}
      date={subHours(new Date(), 5)}
    />
    <SeparatorLine />
    <Notification
      title={"You have a friend request"}
      text={"Everyone wants to be your friend."}
      icon={stenaUser}
      date={subHours(new Date(), 48)}
    />
  </Column>
);
