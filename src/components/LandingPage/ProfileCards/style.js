import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    @media screen and (max-width: 770px) {
    /* padding: 13px 0px 13px 0px; */
    /* display: flex; */
    flex-direction: column;
    /* justify-content: space-evenly; */
    /* align-items: right; */
    }
`;
    
