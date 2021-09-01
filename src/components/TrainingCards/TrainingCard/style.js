import styled from 'styled-components';

export const Card = styled.div`
position: fixed;
display:flex;
flex-direction: row wrap;
justify-content:space-between;
bottom:0;
width:100%;
height:7%;
@media screen and (max-width: 750px) {
    padding:13px 0px 13px 0px;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: right;
}

`;


export const Presenter = styled.div`
    margin:0% 0% 0% 40%;

    `;


export const Img = styled.img`
    width:25%;
    border-radius:50%;
`;

export const Text = styled.div`
    margin:5% 2% 4% 0%;
    width: 400px;
    height: 350px;
    display: inline-flex !important;
`;




