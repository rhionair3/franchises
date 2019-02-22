import React, {Component} from 'react';
import update from 'immutability-helper';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import MenuOrderListItem from './MenuOrderListItem';
import List from '@material-ui/core/List';

class MenuOrderList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: props.items && props.items.map(item => ({id: item.id, text: item.text})),
    };

    this.handleOnClick = this.handleOnClick.bind(this);
    this.moveListItem = this.moveListItem.bind(this);
  }

  handleOnClick(item) {
    // You may pass handle on click event to props
    console.log(item);
  }

  moveListItem(dragIndex, hoverIndex) {
    const {items} = this.state;
    const dragitem = items[dragIndex];

    this.setState(
      update(this.state, {
        items: {
          $splice: [[dragIndex, 1], [hoverIndex, 0, dragitem]],
        },
      }),
    );
    // You may pass the state to props
    console.log(this.state.items);
  }

  render() {
    const {items} = this.state;

    return (
      <div>
        <List>
          {items.map((item, i) => (
            <MenuOrderListItem
              key={item.id}
              handleOnClick={() => this.handleOnClick(item)}
              index={i}
              id={item.id}
              text={item.text}
              moveListItem={this.moveListItem}
            />
          ))}
        </List>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(MenuOrderList);
