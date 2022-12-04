import styled, {css} from "styled-components";
import { ReactComponent as githubLogo } from "../../images/github.svg";
import { ReactComponent as instagramLogo } from "../../images/instagram.svg";
import { ReactComponent as linkedInLogo } from "../../images/linkedIn.svg";
import { ReactComponent as companyName } from "../../images/companyName.svg";

export const StyledCompanyName = styled(companyName)`
fill: #D38611;
stroke: #323232;
height: 137px;
width: 137px;
margin-left: -202px;
margin-top: 110px;
z-index: 1;
transform-origin: 50% 3em;
animation: fadeInAnimation ease 2s;
  animation-iteration-count:  1;
  animation-fill-mode: forwards;
  animation-delay: 4s; //zrobic w react display none na isLoading 4s, a potem juz pokazywac
    @keyframes fadeInAnimation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    } 
 }
&:hover {
    cursor: default;
   animation: wiggle 2s linear infinite;
 @keyframes wiggle {
    0%, 7% {
    transform: rotateZ(0);
   }
   15% {
     transform: rotateZ(-15deg);
   }
   20% {
    transform: rotateZ(10deg);
   }
   25% {
    transform: rotateZ(-10deg);
   }
  30% {
    transform: rotateZ(6deg);
  }
   35% {
     transform: rotateZ(-4deg);
   }
    40%, 100% {
     transform: rotateZ(0);
   }
 }
  }
`;

export const StyledGithubLogo = styled(githubLogo)`
   width: 200px;
    height: 200px;
  & path {
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    -ms-transition: all 1s ease;
    -o-transition: all 1s ease;
    transition: all 1s ease;
  }
  &:hover {
    cursor: default;
    & path {
      stroke: gray;
    }
  }
  @media (max-width: 800px) {
    width: 88px;
    height: 88px;
  }
`;

export const StyledInstagramLogo = styled(instagramLogo)`
  width: 200px;
    height: 200px;
  & path {
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    -ms-transition: all 1s ease;
    -o-transition: all 1s ease;
    transition: all 1s ease;
  }
  &:hover {
    cursor: default;
    & path {
      stroke: gray;
    }
  }
  @media (max-width: 800px) {
    width: 88px;
    height: 88px;
  }
`;

export const StyledLinkedInLogo = styled(linkedInLogo)`
   width: 200px;
    height: 200px;
  & path {
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    -ms-transition: all 1s ease;
    -o-transition: all 1s ease;
    transition: all 1s ease;
  }
  &:hover {
    cursor: default;
    & path {
      stroke: gray;
    }
  }
  @media (max-width: 800px) {
    width: 88px;
    height: 88px;
  }
`;

export const Wrapper = styled.div`
display: grid;
/* min-width: 280px; */
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(2, 1fr);
  /* grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr; */
  /* grid-template-areas:
    "objectOne "
    "objectSecond objectThird"
   ; */
  grid-row-gap: 0px;
  grid-column-gap: 0px;
  animation: fadeInAnimation ease 8s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  transition: transform 3s;
  transition-delay: 6s;
  transform: (100px, 100px);
    @keyframes fadeInAnimation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
    /* grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-areas:
      "mode"
      "photo"
      "txt"
      "myName"
      "article"
      "hireButton";
    margin-top: 0px; */


`;

export const ObjectOne = styled.div`
grid-area: 2 / 1 / 3 / 2;
transition: transform 2s;
transition-delay: 2s;
${({ $themes }) => $themes && css`
transform: translateX(77px); 
    `};      //   NAPRAWIć 


`;

export const CompanyName = styled.span`
grid-area: 1 / 2 / 2 / 3;
font-family: 'Poppins', sans-serif;
color: #FFFFFF;
text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
font-size: 20px;
/* animation: fadeInAnimation ease 2s;
  animation-iteration-count:  1;
  animation-fill-mode: forwards;
  animation-delay: 4s;
    @keyframes fadeInAnimation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  } */
`;

export const ObjectSecond = styled.div`
grid-area: 2 / 3 / 3 / 4;
animation-name: example3;
animation-delay: 2s;
  animation-duration: 2s;
  position: relative;
@keyframes example3 {
  0%   {left:0px; top:0px;}
  100% {left:77px; top:0px;}
  }

`;

export const ObjectThird = styled.div`

grid-area: 1 / 2 / 2 / 3;
animation-name: example2;
animation-delay: 2s;
  animation-duration: 2s;
  position: relative;
@keyframes example2 {
  0%   {left:0px; top:0px;}
  100% {left:0px; top:-70px;}
  }

`;

export const Wrapperor= styled.div`
/* display: flex;
flex-direction: row;
justify-content: right;
align-items: right; */
/* padding-left: 30vw;
padding-top: 200px;  */
`;

// /* Animation property */
// button {
//   animation: wiggle 2s linear infinite;
// }

// /* Keyframes */
// @keyframes wiggle {
//   0%, 7% {
//     transform: rotateZ(0);
//   }
//   15% {
//     transform: rotateZ(-15deg);
//   }
//   20% {
//     transform: rotateZ(10deg);
//   }
//   25% {
//     transform: rotateZ(-10deg);
//   }
//   30% {
//     transform: rotateZ(6deg);
//   }
//   35% {
//     transform: rotateZ(-4deg);
//   }
//   40%, 100% {
//     transform: rotateZ(0);
//   }
// }

// body {
//   background: #000;
// }

// button {
//   position: absolute;
//   left: calc(50% - 3em);
//   top: calc(50% - 2em);
  
//   height: 4em;
//   width: 7em;
  
//   background: #444;
//   background: linear-gradient(top, #555, #333);
//   border: none;
//   border-top: 3px solid orange;
//   border-radius: 0 0 0.2em 0.2em;
//   color: #fff;
//   font-family: Helvetica, Arial, Sans-serif;
//   font-size: 1em;
//   transform-origin: 50% 5em;
// } przycisk
