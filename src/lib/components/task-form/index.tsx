import { observer } from "mobx-react-lite";
import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

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
  defaultValue?: string;
}

function TaskFormComponent({
  onSubmit,
  isEditing,
  defaultValue,
}: Props): React.ReactElement {
  const navigate = useNavigate();
  const [description, setDescription] = useState(
    defaultValue ? defaultValue : ""
  );

  const handleTextareaChange = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setDescription(event.target.value);
    },
    []
  );

  const saveTask = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      onSubmit(description);
    },
    [description, onSubmit]
  );

  const discardChanges = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  return (
    <Container>
      <form onSubmit={saveTask}>
        <Wrapper>
          <StyledButton type="submit">Save</StyledButton>
          <h1>{isEditing ? "Edit Task" : "Add Task"}</h1>
          <StyledButton type="button" onClick={discardChanges}>
            Cancel
          </StyledButton>
        </Wrapper>
        <StyledLabel>
          Description:
          <StyledTextarea
            name="task"
            placeholder="Enter text here ..."
            onChange={handleTextareaChange}
            value={description}
          />
        </StyledLabel>
      </form>
    </Container>
  );
}

export const TaskForm = observer(TaskFormComponent);
