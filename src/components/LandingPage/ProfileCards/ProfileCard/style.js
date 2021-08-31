import styled from "styled-components";

export const Card = styled.div`
  width: 296px;
  height: 353px;
  margin: 47px 5px;
  background: ${({toggle})=>!toggle?'rgba(196, 196, 196, 0.15)':'hotpink'};
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 26px;
`;
export const Headshot = styled.div`
  width: 107px;
  height: 107px;
  border-radius: 50%;
  background: #c4c4c4;
  margin-bottom: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const FirstInitial = styled.div`
  font-size: 65px;
  font-weight: 900px;
`;
export const Name = styled.div`
  width: 216px;
  height: 32px;
  border-radius: 6px;
  background: #c4c4c4;
  margin-bottom: 12px;
  text-align: center;
  font-size: 20px;
`;
export const Text = styled.div`
  width: 216px;
  height: 120px;
  padding: 8px;
  border-radius: 6px;
  background: #c4c4c4;
  scroll-behavior: auto;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }
`;