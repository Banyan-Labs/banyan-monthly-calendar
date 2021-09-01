import styled from "styled-components";


export const Container = styled.div`
    position: absolute;
    top: 20%;
    left: 10%;
    margin: 3% 0% 0% 10%;
    line-height: 2.7;
    text-align:left;
    padding: 2%;
    background: #C4C4C4;
    @media screen and (max-width: 750px) {
        padding:13px 0px 13px 0px;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: right;
    }
`;

