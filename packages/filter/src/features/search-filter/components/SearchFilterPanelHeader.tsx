import * as React from "react";
import { Heading, Indent, Row } from "@stenajs-webui/core";
import {
  Icon,
  SecondaryButton,
  stenaSliders,
  stenaTimes,
} from "@stenajs-webui/elements";
import { cssColor } from "@stenajs-webui/theme";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

interface SearchFilterPanelHeaderProps {
  onRequestClose: () => void;
  header?: string;
  headerIcon?: IconDefinition;
}

export const SearchFilterPanelHeader: React.FC<
  SearchFilterPanelHeaderProps
> = ({ onRequestClose, header = "Filters", headerIcon = stenaSliders }) => {
  return (
    <Row
      height={"56px"}
      justifyContent={"space-between"}
      alignItems={"center"}
      indent={2}
    >
      <Row alignItems={"center"}>
        <Icon
          icon={headerIcon}
          color={cssColor("--lhds-color-ui-800")}
          size={24}
        />
        <Indent />
        <Heading variant={"h4"}>{header}</Heading>
      </Row>
      <SecondaryButton leftIcon={stenaTimes} onClick={onRequestClose} />
    </Row>
  );
};
