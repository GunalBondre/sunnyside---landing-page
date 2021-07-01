import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
    padding: 0;
    list-style-type:none;
    text-decoration:none;

}

  body {
    box-sizing:border-box; 
    height:100vh;
    position:relative;
    font-size:18px;
    font-family: 'Fraunces', serif;
    font-family: 'Barlow', sans-serif;    
  }
  .title1 {
      font-size: 50px;
      font-weight: 900;
      color: ${(props) => props.theme.white};
      letter-spacing: 5px;
      text-transform: uppercase;
      font-family: Fraunces;
      padding-top: 40px;

     
      @media(max-width:767px){
        font-size: 25px;
      }

  }

  .title2{
    font-size: 35px;
    font-family: Fraunces;
    font-weight: 900;
    @media(max-width:767px){
        font-size: 25px;
      }
   
  }
  .title3{
    font-size: 25px;
    font-family: Fraunces;
    font-weight: 900;
  }

  .title4{
    font-size: 20px;
  }
  .para1{
    font-size: 18px;
    font-weight: 300;
    padding: 20px 0;
    color: ${(props) => props.theme.very_dark_desaturated_blue};
    @media(max-width:767px){
      font-size: 16px;
    }
  }

  img{
    width: 100%;
  }
  a{
    text-decoration:none;
  }

  .sectionPadding{
    padding: 40px 0;
  }

  
 

`;
