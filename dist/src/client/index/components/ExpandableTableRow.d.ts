import React from "react";
import "./ExpandableTableRow.css";
type ExpandableTableRowProps = {
    label: string | JSX.Element;
    value: string | JSX.Element;
    description: string | JSX.Element;
};
type ExpandableTableRowState = {
    expanded: boolean;
};
export declare class ExpandableTableRow extends React.Component<ExpandableTableRowProps, ExpandableTableRowState> {
    state: {
        expanded: boolean;
    };
    render(): React.JSX.Element;
}
export {};
