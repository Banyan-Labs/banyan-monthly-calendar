import styled from 'styled-components';

export const Card = styled.div`
margin-top: 10px;
background-color:pink;
width:30%;
height:100%;
@media screen and (max-width: 750px) {
    padding:13px 0px 13px 0px;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: right;
}

`;


export const Presenter = styled.div`
    margin:0% 0% 0% 5%;
    color:blue;

    `;


export const Img = styled.div`
    width:50%;
    border-radius:50%;
`;

export const Text = styled.div`
    margin:5% 2% 4% 0%;
    width: 100%;
    height: 100%;
    display: inline-flex !important;
`;



export const FirstInitial = styled.div`
font-size: 65px;
font-weight: 900px;
`;


export const Title = styled.div`
    margin:5% 2% 4% 0%;
    width: 40px;
    height: 35px;
    display: inline-flex !important;
`;



