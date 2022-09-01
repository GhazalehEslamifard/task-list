import styled from "@emotion/styled";

import { Filter } from "../../stores/store";

export const List = styled.ul`
  width: 700px;
  height: 500px;
  overflow: auto;
  padding: 0;
  background: ${({ theme }) => theme.colors.background};

  @media (max-width: 768px) {
    width: 600px;
  }

  @media (max-width: 600px) {
    width: 500px;
  }

  @media (max-width: 480px) {
    width: 400px;
  }
`;

const Button = styled.button`
  all: unset;
  height: 32px;
  color: ${({ theme }) => theme.simple.white};
  border-radius: 4px;
  text-align: center;
  box-sizing: border-box;
  margin-left: 8px;

  :focus {
    outline: ${({ theme }) => `2px solid ${theme.colors.focused}`};
  }
`;

export const DeleteButton = styled(Button)`
  width: 104px;
  background: ${({ theme }) => theme.button.delete};

  :disabled {
    background: ${({ theme }) => theme.button.delete};
  }
`;

export const FilterButton = styled(Button)<{ filter: Filter }>`
  width: 128px;
  background: ${({ filter, theme }) =>
    filter === Filter.All
      ? theme.button.filter.all
      : theme.button.filter.important};
`;

export const ActionsWrapper = styled.div`
  width: fit-content;
  padding: 2px;

  a {
    all: unset;
    color: ${({ theme }) => theme.colors.focused};
    margin-right: 16px;
    padding: 4px;
    border-radius: 4px;

    :focus {
      outline: ${({ theme }) => `2px solid ${theme.colors.focused}`};
    }
  }
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-around;
  list-style-type: none;
  line-height: 32px;
  background: ${({ theme }) => theme.simple.white};
  box-shadow: ${({ theme }) => `1px 1px 8px 1px ${theme.colors.shadow}`};
  border-radius: 5px;
  margin: 4px 16px;

  button {
    all: unset;
    width: 24px;
    height: 24px;
    padding: 2px;
    display: flex;
    align-items: center;
    justify-content: center;

    :focus {
      outline: ${({ theme }) => `2px solid ${theme.colors.focused}`};
    }
  }
`;

export const StyledLabel = styled.label`
  display: none;
`;

export const Checkbox = styled.input`
  -webkit-appearance: none;
  background-color: ${({ theme }) => theme.checkbox.unchecked};
  border: ${({ theme }) => `1px solid ${theme.checkbox.border}`};
  padding: 9px;
  border-radius: 50%;
  display: inline-block;
  position: relative;

  :checked {
    background-color: ${({ theme }) => theme.checkbox.checked};
    border: ${({ theme }) => `1px solid ${theme.checkbox.border}`};
  }

  :checked:after {
    content: "\\2714";
    font-size: 14px;
    position: absolute;
    top: 0;
    left: 3px;
    color: ${({ theme }) => theme.simple.white};
  }

  :focus {
    outline: ${({ theme }) => `2px solid ${theme.colors.focused}`};
  }
`;

export const StyledSpan = styled.p`
  width: 376px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const StarButton = styled.button<{ isActivated: boolean }>`
  svg {
    fill: ${({ isActivated, theme }): string =>
      isActivated
        ? `${theme.colors.activated_star}`
        : `${theme.colors.deactivated_star}`};
  }
`;

export const Wrapper = styled.div`
  width: 64px;
  display: flex;
  justify-content: space-between;
`;
