import { memo, useCallback, useState } from "react";

import {
  StyledTextarea,
  StyledButton,
  StyledLabel,
  Wrapper,
  Container,
} from "./styles";

interface Props {
  onSubmit: (description: string) => void;
  isEditing: boolean;
}

function TaskFormComponent({ onSubmit, isEditing }: Props): React.ReactElement {
  const [description, setDescription] = useState("");

  const handleTextareaChange = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setDescription(event.target.value);
    },
    []
  );

  const saveTask = useCallback(() => {
    onSubmit(description);
  }, [description]);

  return (
    <Container>
      <form onSubmit={saveTask}>
        <Wrapper>
          <StyledButton type="submit">Save</StyledButton>
          <h1>{isEditing ? "Edit Task" : "Add Task"}</h1>
          <StyledButton type="button">Cancel</StyledButton>
        </Wrapper>
        <StyledLabel>
          Description:
          <StyledTextarea
            name="task"
            placeholder="Enter text here ..."
            onChange={handleTextareaChange}
          />
        </StyledLabel>
      </form>
    </Container>
  );
}

export const TaskForm = memo(TaskFormComponent);
