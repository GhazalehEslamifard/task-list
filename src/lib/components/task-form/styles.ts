import styled from "@emotion/styled";

export const StyledButton = styled.button`
  all: unset;
  width: 88px;
  height: 36px;
  text-align: center;
  box-sizing: border-box;
  border-radius: 4px;
  color: white;
  background: rgba(255, 255, 255, 0.2);

  :focus {
    border: 1px solid cornflowerblue;
  }
`;

export const StyledTextarea = styled.textarea`
  all: unset;
  display: block;
  resize: vertical;
  width: calc(700px - 48px);
  margin-top: 16px;
  max-height: 350px;
  min-height: 200px;
  white-space: break-spaces;
  word-wrap: break-word;
  color: black;
  border: 1px solid #dbdbdb;
  background: rgba(255, 255, 255, 0.5);

  :focus {
    border: 1px solid cornflowerblue;
  }

  @media (max-width: 768px) {
    width: calc(600px - 48px);
  }

  @media (max-width: 600px) {
    width: calc(500px - 48px);
  }

  @media (max-width: 480px) {
    width: calc(400px - 48px);
  }
`;
export const StyledLabel = styled.label`
  display: inline-block;
  color: #7a7a7a;
  margin: 24px;
`;

export const Wrapper = styled.div`
  border-radius: 5px 5px 0 0;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #765df0;

  h1 {
    color: white;
  }
`;

export const Container = styled.div`
  width: 700px;
  height: 500px;
  background: #f5f7ff;

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
