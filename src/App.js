import styled, { keyframes } from "styled-components";

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

// Animation and Pseudo Selectors
const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: ${( props ) => props.theme.backgroundColor}
`;

const roatationAnimation = keyframes`
  0%{
    transform: rotate(0deg);
    
  }
  50% {
    transform: rotate(180deg);
    border-radius: 50%;
  }
  100% {
    transform: rotate(0deg);
  }
`
const Emoji = styled.span`
  font-size: 36px;
`

const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 200px;
  height: 200px;
  display:flex;
  justify-content: center;
  align-items: center;
  animation: ${roatationAnimation} 1s linear infinite;
  // 스타일 컴포넌트 타겟팅
  ${Emoji}:hover{
    font-size: 60px
  }
`;

const darkTheme = {
  textColor: "whitesmoke",
  backgroundColor: "#111"
}


function App() {
  return (
  <Wrapper>
    {/* <Box bgColor="tomato">
      <Emoji as="div">🤔</Emoji>
    </Box> */}
    <Title>Hello</Title>
  </Wrapper>
  );
}

export default App;
