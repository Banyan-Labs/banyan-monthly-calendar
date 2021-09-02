import React from 'react'
//import SearchBar from "../SearchBar";
import {BrowserRouter } from "react-router-dom";
import {Container, Wrapper } from "./style";

const TrainingsPage = () => {
    return (
        <BrowserRouter>
          <Container>
            <Wrapper>
              {/* <SearchBar />           */}
            </Wrapper>
           </Container>
        </BrowserRouter>   
    );
};

export default TrainingsPage
