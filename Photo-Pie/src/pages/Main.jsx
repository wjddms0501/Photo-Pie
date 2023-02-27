import { Toaster } from "react-hot-toast";
import styled, { css } from "styled-components";
import MainSlider from "../components/Main/MainSlider";

const Main = () => {
    return (
        <StDiv MainBox>
            <Toaster />
            <MainSlider />
        </StDiv>
    );
};

const StDiv = styled.div`
    ${(props) =>
        props.MainBox &&
        css`
            width: 100vw;
            display: flex;
            flex-direction: column;
            align-items: center;
        `}
`;

export default Main;
