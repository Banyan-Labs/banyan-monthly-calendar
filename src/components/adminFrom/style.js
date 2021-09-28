import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem 2rem;
`;
export const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  font-size: 20px;
  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
`;
export const Select = styled.select`
  padding: 3px;
`;
export const PersonPhoto = styled.div`
  width: 107px;
  height: 107px;
  border-radius: 50%;
  background: #c4c4c4;
  margin: 0% 0% 1% 46%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const AddPhotoButton = styled.button`
  margin-left: 46.5%;
  padding: 16px;
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 1rem;
  box-shadow: 0 5px 7px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);
`;
export const Input = styled.input`
  padding: 3px;
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);
`;
export const SubmitButton = styled.button`
  padding: 16px;
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
`;
