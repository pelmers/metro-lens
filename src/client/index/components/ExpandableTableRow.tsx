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

// Defines a 2-column table row class that can be expanded when the user clicks the label
// Expanding a row adds a second row that shows the description for the label and takes the whole width of the table
export class ExpandableTableRow extends React.Component<
  ExpandableTableRowProps,
  ExpandableTableRowState
> {
  state = { expanded: false };

  render() {
    const { label, value, description } = this.props;
    const { expanded } = this.state;
    return (
      <React.Fragment>
        <tr className="expandable-table-row row-label">
          <td onClick={() => this.setState({ expanded: !expanded })}>
            <span>{label}</span>
          </td>
          <td>{value}</td>
        </tr>
        {expanded && (
          <tr className="expandable-table-row row-description">
            <td colSpan={2}>
              <span>{description}</span>
            </td>
          </tr>
        )}
      </React.Fragment>
    );
  }
}
