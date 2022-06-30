import { observer } from "mobx-react-lite";
import { useCallback } from "react";

import { CloseIcon, EditIcon, StarIcon } from "../../../lib/assets/icons";
import { TaskType } from "../../../stores/task";
import {
  Checkbox,
  ListItem,
  StarButton,
  StyledLabel,
  StyledSpan,
  Wrapper,
} from "../../styles";

interface Props {
  task: TaskType;
  onToggleStarTag: (task: TaskType) => void;
}

function TaskItemComponent({
  task,
  onToggleStarTag,
}: Props): React.ReactElement {
  const handleToggleStarTag = useCallback(() => onToggleStarTag(task), [task]);

  return (
    <ListItem>
      <StyledLabel htmlFor="checkbox">Multi-select checkbox</StyledLabel>
      <Checkbox type="checkbox" id="checkbox" />
      <StyledSpan>{task.description}</StyledSpan>
      <StarButton onClick={handleToggleStarTag} isActivated={task.hasStarTag}>
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
  );
}

export const TaskItem = observer(TaskItemComponent);
