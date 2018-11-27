import { css } from "styled-components";

const style = css`
  @import url("https://fonts.googleapis.com/css?family=Amatic+SC|Comfortaa:400,700|Noto+Sans+KR:100,400,700|Permanent+Marker|Work+Sans:300,400,600&subset=latin-ext");

  body {
    .head {
      display: inline-block;
      height: 200px;
      /* background-color: greenyellow; */
      padding: 80px 100px;
    }

    .head-name {
      font-family: "Work Sans", sans-serif;
      font-size: 16pt;
      font-weight: 600;
      color: blue;
      /* letter-spacing: 1.7px; */

      line-height: 30px;
    }

    .head-name-02 {
      font-family: "Work Sans", sans-serif;
      font-size: 10pt;
      font-weight: 300;
      color: gray;
    }

    .Y-center {
      top: 50%;
      transform: translateY(-50%);
    }

    .head-menu {
      font-family: "Work Sans", sans-serif;
      font-size: 11pt;
      text-decoration: none;
      letter-spacing: 1.5px;

      display: inline-block;
      margin-right: 30px;
    }

    .container {
    }

    .box {
      transition: 2s;
    }

    .box-01:hover {
      opacity: 0.6;
      text-align: justify;
      color: #ffffff;
      font-size: 20px;
      font-weight: 700;
      font-family: "맑은 고딕";
      padding: 30px;
    }

    .box-01 {
      float: left;
    }
  }
`;

export default style;
