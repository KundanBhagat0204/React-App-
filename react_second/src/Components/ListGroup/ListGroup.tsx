/**
 * The ListGroup component in TypeScript React displays a list of items with a heading and allows
 * selecting an item with a callback function.
 * @param {Props}  - The `ListGroup` component takes the following props:
 * @returns The `ListGroup` component is being returned. It renders a list of items with a heading and
 * allows the user to select an item by clicking on it. The selected item is highlighted with a
 * different style. If there are no items in the list, a message "No item Found" is displayed.
 */
import { useState } from "react";
import "./ListGroup.css";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li<ListItemProps>`
  padding: 5px 0;
  background: ${(props) => (props.active ? "blue" : "none")};
`;

interface ListItemProps {
  active: boolean;
}

interface Props {
  items: string[];
  heading: string;
  onSelectedItem: (item: string) => void;
}
function ListGroup({ items, heading, onSelectedItem }: Props) {
  //Hook
  const [selectedIdx, setSelectedIdx] = useState(0);

  //updater function
  //Event Handler & Managing State

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item Found</p>}
      <List>
        {items.map((item, index) => (
          <ListItem
            active={index === selectedIdx}
            key={item}
            onClick={() => {
              setSelectedIdx(index);
              onSelectedItem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
