import styled from "styled-components";
import { CenterContent } from "./theme";

export const Wrapper = styled.div`
${CenterContent};
width: 100vw;
height: 100vh;
flex-direction: row;
min-width: 280px;
background-color: 3E9E9E9;
`;

export const Hello = styled.div`
display: flex;
flex-direction: column;
text-align: center;
color: violet;
font-size: 34px;
`;






// @media (prefers-reduced-motion: no-preference) {
//   .App-logo {
//     animation: App-logo-float infinite 3s ease-in-out;
//   }
// }
// @keyframes App-logo-float {
//   0% {
//     transform: translateY(0);
//   }
//   50% {
//     transform: translateY(10px);
//   }
//   100% {
//     transform: translateY(0px);
//   }
// }
