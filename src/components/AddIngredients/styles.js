import styled from "styled-components";

export const Container = styled.div`
  width: fit-content;
  height: 2rem;
  padding: 0.625rem 1rem;
  border-radius: 8px;

  display: flex;
  align-items: center;

  gap: 0.5rem;

  background-color: ${({ theme, isNew }) =>
    isNew ? "transparent" : `${theme.COLORS.LIGHT[500]}`};

  outline: none;

  border: ${({ theme, isNew }) =>
    isNew ? `1px dashed ${theme.COLORS.LIGHT[500]}` : "none"};

  > input {
    color: ${({ theme }) => theme.COLORS.LIGHT[100]};
    background-color: transparent;
    border: none;
    outline: none;

    &::placeholder {
      color: ${({ theme, isNew }) =>
        !isNew ? `${theme.COLORS.LIGHT[100]}` : `${theme.COLORS.LIGHT[500]}`};
    }
  }

  > button {
    background: none;
    border: none;

    line-height: 0;
    
    > svg {
      width: 100%;
      height: 100%;
      color: ${({ theme, isNew }) =>
        !isNew ? `${theme.COLORS.LIGHT[100]}` : `${theme.COLORS.LIGHT[500]}`};
      &:hover {
        color: ${({ theme }) => theme.COLORS.TINTS.CAKE_200};
      }
    }
  }
`;
