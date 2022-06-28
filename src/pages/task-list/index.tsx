import { observer } from "mobx-react-lite";
import { useCallback } from "react";

import { StarIcon, EditIcon, CloseIcon } from "../../lib/assets/icons";
import { useStore } from "../../stores/store";
import { TaskType } from "../../stores/task";

import {
  List,
  ListItem,
  StyledSpan,
  StarButton,
  Wrapper,
  Checkbox,
  StyledLabel,
} from "./styles";

function TaskListComponent(): React.ReactElement {
  const store = useStore();

  const handleToggleStarTag = useCallback(
    (task: TaskType) => task.toggleStarTag(),
    []
  );

  return (
    <List>
      {store.tasks.map((task) => (
        <ListItem key={task.id}>
          <StyledLabel htmlFor="checkbox">Multi-select checkbox</StyledLabel>
          <Checkbox type="checkbox" id="checkbox" />
          <StyledSpan>{task.description}</StyledSpan>
          <StarButton
            onClick={() => handleToggleStarTag(task)}
            isActivated={task.hasStarTag}
          >
            <StarIcon />
          </StarButton>
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

export const TaskList = observer(TaskListComponent);
