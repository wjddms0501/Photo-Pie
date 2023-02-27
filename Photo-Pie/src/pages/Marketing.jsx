import styled, { css } from "styled-components";

const Marketing = () => {
    return (
        <StDiv marketing_box>
            <StH2>마케팅 활용 및 광고성 정보 수신 동의</StH2>
            귀하는 개인(신용)정보의 선택적인 수집∙이용, 제공에 대한 동의를
            거부할 수 있습니다. 다만, 동의하지 않을 경우 관련 편의제공(이벤트
            안내, 공지사항, 할인행사)안내 등 이용 목적에 따른 혜택에 제한이 있을
            수 있습니다. 그 밖에 계약과 관련된 불이익은 없습니다. 동의한
            경우에도 귀하는 동의를 철회하거나 마케팅 목적으로 귀하에게 연락하는
            것을 중지하도록 요청할 수 있습니다.
            <StP marketingTitle>1. 수집 및 이용목적</StP>
            고객에 대한 편의제공, 귀사 및 제휴업체의 상품·서비스 안내 및
            이용권유, 사은·판촉행사 등의 마케팅 활동, 시장조사 및 상품·서비스
            개발연구 등을 목적으로 수집·이용
            <StP marketingTitle>2. 수집 및 이용항목</StP>
            - 개인식별정보: 성명, 성별, 나이, 휴대전화번호, e-mail 등
            <br />- 고객 ID, 접속 일시, IP주소 등
            <StP marketingTitle>3. 보유기간</StP>
            동의일로부터 회원 탈퇴 혹은 마케팅 동의 해제 시까지 보유·이용
            <StP marketingTitle>
                ※ 더 자세한 내용에 대해서는 개인정보처리방침을 참고하시기
                바랍니다. ※
            </StP>
        </StDiv>
    );
};

const StDiv = styled.div`
    ${(props) =>
        props.marketing_box &&
        css`
            max-width: 1200px;
            width: 95%;
            margin: 30px auto;
        `}
`;

const StH2 = styled.h2`
    margin-bottom: 30px;
`;

const StP = styled.p`
    ${(props) =>
        props.marketingTitle &&
        css`
            font-size: 17px;
            margin: 20px 10px 10px 10px;
            font-weight: bold;
        `}
`;
export default Marketing;
