/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const navigationWide = css`
  display: inline-block;
  width: 100%;
  transform: scale(1, 1);
  height: 80px;
  color: #eef2f5;
  z-index: 1000;
  position: fixed;
`;

const navigationList = css`
  display: flex;
  z-index: 100;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  width: 100%;
  font-size: 2rem;
  text-align: center;
  background-color: rgba(12, 12, 11, 0.925);
`;

const navigationListStyle = css`
  list-style-type: none;
`;

const navigationList__btn = css`
  display: inline-block;
  cursor: pointer;
  font-family: "Gill Sans", sans-serif;
`;

function Header() {
  return (
    <nav css={navigationWide} class="navigation wide">
      <ul css={navigationList} class="navigationList" id="navigationWide__js">
        <li css={navigationListStyle} class="navigationList__top">
          <div
            css={navigationList__btn}
            class="navigationList__btn"
            id="topJs__wide"
          >
            TOP
          </div>
        </li>
        <li css={navigationListStyle} class="navigationList__portfolio">
          <div
            css={navigationList__btn}
            class="navigationList__btn"
            id="portfolioJs__wide"
          >
            My portfolio
          </div>
        </li>
        <li css={navigationListStyle} class="navigationList__profile">
          <div
            css={navigationList__btn}
            class="navigationList__btn"
            id="aboutJs__wide"
          >
            About me
          </div>
        </li>
        <li css={navigationListStyle} class="navigationList__contact">
          <div
            css={navigationList__btn}
            class="navigationList__btn"
            id="contactJs__wide"
          >
            and more...
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
