import { memo } from "react";

import { StarIcon, EditIcon, CloseIcon } from "../../lib/assets/icons";
import { taskList } from "../../mockData";

import {
  List,
  ListItem,
  StyledSpan,
  BookmarkButton,
  Wrapper,
  Checkbox,
  StyledLabel,
} from "./styles";

function TaskListComponent(): React.ReactElement {
  return (
    <List>
      {taskList.map((task) => (
        <ListItem key={task.id}>
          <StyledLabel htmlFor="checkbox">Multi-select checkbox</StyledLabel>
          <Checkbox type="checkbox" id="checkbox" />
          <StyledSpan>{task.description}</StyledSpan>
          <BookmarkButton>
            <StarIcon />
          </BookmarkButton>
          <Wrapper>
            <button>
              <EditIcon />
            </button>
            <button>
              <CloseIcon />
            </button>
          </Wrapper>
        </ListItem>
      ))}
    </List>
  );
}

export const TaskList = memo(TaskListComponent);
