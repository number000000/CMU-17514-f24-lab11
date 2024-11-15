import React from 'react';
import { Cell } from './game';

interface Props {
  cell: Cell
}

class BoardCell extends React.Component<Props> {
  render(): React.ReactNode {
    const playable = this.props.cell.playable ? 'playable' : '';
    return (
      <div id="cellText" className={`cell ${playable}`}><p>{this.props.cell.text}</p></div>
    )
  }
}

export default BoardCell;