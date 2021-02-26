import "./NesButton.js";
import "./NesConnector.js";

class NesConsoleFront extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      .container {
        width: var(--width);
        height: var(--height);
      }

      .top-container {
        height: 50%;
        background: #C4C0BD;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        display: flex;
        justify-content: center;
        position: relative;
        box-shadow: inset 0 2px 1px #fff9;
      }

      .bottom-container {
        height: 50%;
        background: #686264;
        clip-path: polygon(0 0, 100% 0, 100% 20%, 94% 100%, 6% 100%, 0 20%);
        display: flex;
        justify-content: flex-start;
        align-items: center;
        position: relative;
        border-top: 2px solid #0007;
        box-shadow: inset 0 1px 0 #777;
      }

      .door-container {
        width: 399px;
        height: 60px;
      }

      .door::after {
        content: "";
        display: block;
        background: #ddd;
        width: 60px;
        height: 3px;
        border-radius: 2px;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        box-shadow:
          0 0 2px #999 inset,
          0 0 2px 2px #9994,
          0 2px 2px 1px #1119;
        position: absolute;
        bottom: 0;
        left: 35%;
      }

      .door {
        width: 100%;
        height: 100%;
        border: 2px solid #888;
        border-top: 0;
        transform: translateX(-4px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        box-shadow: 0 1px 1px #eee;
      }