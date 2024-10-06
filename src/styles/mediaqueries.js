// mq.js
import { css } from "styled-components";

const sizes = {
  mobile: "768px",
  tablet: "1024px",
  desktop: "1440px",
};

const media = {
  mobile: (...args) => css`
    @media (max-width: ${sizes.mobile}) {
      ${css(...args)}
    }
  `,
  tablet: (...args) => css`
    @media (max-width: ${sizes.tablet}) {
      ${css(...args)}
    }
  `,
  desktop: (...args) => css`
    @media (max-width: ${sizes.desktop}) {
      ${css(...args)}
    }
  `,
};

export default media;
