import styled from "@emotion/styled";

// Form, Label, Input, Button

export const Form = styled.form`
display: flex;
  flex-direction: column;
  gap: 10px;
  border: 2px solid #000;
  border-radius: 3px;
  padding: 15px;
  width: 250px;
`;

export const Label = styled.label`
display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 16px;
  font-weight: 700;
`;

export const Input = styled.input`
min-width: 250px;
  min-height: 26px;
  padding: 1px 5px;
  font-size: 16px;
  outline: none;
  border-radius: 5px;
  border-width: 0;
`;

export const Button = styled.button`
display: flex;
  justify-content: center;
  align-items: center;

  min-width: 100px;
  min-height: 30px;
  margin: 0;

  background-color: white;
  border: 2px black solid;
  border-radius: 5px;
  font-size: 16px;
  `;