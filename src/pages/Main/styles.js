import styled from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto;

  h1 {
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
      margin-right: 10px;
    }
  }
`;

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;

    transition: border 0.15s, box-shadow 0.15s;

    &:focus,
    &:active {
      border: 1px solid #7159c1;
      box-shadow: 0 0 6px rgba(113, 89, 193, 0.3);
    }
  }
`;

export const SubmitButton = styled.button.attrs({
  type: 'submit',
})`
  background-color: #7159c1;
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: filter 0.2s, box-shadow 0.2s;

  svg {
    transition: transform 0.6s;
  }

  &:hover {
    filter: brightness(0.93);

    svg {
      transform: rotate(360deg);
    }
  }

  &:active {
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.4);
  }
`;
