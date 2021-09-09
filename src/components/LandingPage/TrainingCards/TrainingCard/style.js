import styled from 'styled-components';

export const Card = styled.div`
    width: auto;
    height: 353px;
    margin: 47px 5px;
    background: rgba(196, 196, 196, 0.15);
    @media screen and (max-width: 750px) {
        padding:13px 0px 13px 0px;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: right;
    }

`;
export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    margin: 26px;
`;

export const Title = styled.div`
    text-align: center;
    font-size:20px;
    border-radius: 6px;
    background: #c4c4c4;
    text-align: center;
    width: 216px;
    height: 32px;
`;

export const Wrapper2 = styled.div`
background-color:red;
height:auto;
display:flex;
justify-content:space-around;
flex-direction: column;


`;

export const Wrapper3 = styled.div`
background-color:blue;
height:auto;
width:auto;
display:flex;
justify-content:space-around;
flex-direction: column;
align-items: center;


`;

export const Headshot = styled.div`
    margin-top:20px;
    width: 107px;
    height: 107px;
    border-radius: 50%;
    background: #c4c4c4;
    margin-bottom: 12px;
    display: flex;
    justify-content: center;
    align-items: left;
`;

export const Presenter = styled.div`
   
    text-align: center;
    font-size:20px;
    border-radius: 6px;
    text-align: center;
    width: 270px;
    height: 32px;
    background: #c4c4c4;
`;

export const Role = styled.div`
   
    text-align: center;
    font-size:20px;
    border-radius: 6px;
    text-align: center;
    width: 270px;
    height: 32px;
    background: #c4c4c4;
    display:flex;
justify-content:space-around;
`;

export const Img = styled.div`
    width:50%;
    border-radius:50%;
`;

export const Text = styled.div`
    padding:10px;
    border-radius: 6px;
    background: #c4c4c4;
    width: 100%;
    height: 100%;
    margin:20px 10px 0px 0px;
    text-align: left;
`;

export const FirstInitial = styled.div`
    font-size: 65px;
    font-weight: 900px;
`;





