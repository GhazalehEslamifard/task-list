import styled from "@emotion/styled";

export const List = styled.ul`
  width: 700px;
  height: 500px;
  overflow: auto;
  padding: 0;
  background: #f5f7ff;
`;

export const DeleteButton = styled.button`
  all: unset;
  width: 104px;
  height: 32px;
  color: white;
  border-radius: 4px;
  text-align: center;
  box-sizing: border-box;
  background: rgba(255, 116, 56, 0.8);

  :disabled {
    background: rgba(255, 116, 56, 0.3);
  }

  :focus {
    outline: 2px solid cornflowerblue;
  }
`;

export const ActionsWrapper = styled.div`
  width: fit-content;
  padding: 2px;

  a {
    all: unset;
    color: cornflowerblue;
    margin-right: 16px;
    padding: 4px;
    border-radius: 4px;

    :focus {
      outline: 2px solid cornflowerblue;
    }
  }
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-around;
  list-style-type: none;
  line-height: 32px;
  background: white;
  box-shadow: 1px 1px 8px 1px #dedede;
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
      outline: 2px solid cornflowerblue;
    }
  }
`;

export const StyledLabel = styled.label`
  display: none;
`;

export const Checkbox = styled.input`
  -webkit-appearance: none;
  background-color: #fafafa;
  border: 1px solid #cacece;
  padding: 9px;
  border-radius: 50%;
  display: inline-block;
  position: relative;

  :checked {
    background-color: #09b385;
    border: 1px solid #adb8c0;
    color: #99a1a7;
  }

  :checked:after {
    content: "\\2714";
    font-size: 14px;
    position: absolute;
    top: 0;
    left: 3px;
    color: white;
  }

  :focus {
    outline: 2px solid cornflowerblue;
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
    fill: ${({ isActivated }): string => (isActivated ? "#e8b923" : "#e6e6e6")};
  }
`;

export const Wrapper = styled.div`
  width: 64px;
  display: flex;
  justify-content: space-between;
`;
