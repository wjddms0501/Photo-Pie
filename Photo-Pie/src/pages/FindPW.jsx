import ResetPW from "../components/Find/ResetPW";
import FindPWMsg from "../components/Find/FindPWMsg";
import { useState } from "react";
import { useInput } from "../lib/utils/useInput";
import styled from "styled-components";

const FindPW = () => {
    const [show, setShow] = useState(false);
    const [userId, setUserId] = useInput();

    return (
        <StDiv>
            {show === true ? (
                <ResetPW userId={userId} setUserId={setUserId} />
            ) : (
                <FindPWMsg
                    setShow={setShow}
                    userId={userId}
                    setUserId={setUserId}
                />
            )}
        </StDiv>
    );
};

const StDiv = styled.div`
    width: 100%;
`;
export default FindPW;
