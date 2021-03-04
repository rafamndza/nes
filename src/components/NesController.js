import "./CircleButton.js";
import "./DireccionalPad.js";

class NesController extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        --width: 375px;
        --height: 175px;
      }

      .top {
        perspective: 1000px;
        transform-style: preserve-3d;
        position: absolute;
        top: -48px;
      }

      .top-controller {
        background: #888;
        background: linear-gradient(to top, #888, #555);
        width: var(--width);
        height: 50px;
        border-radius: 5px;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        transform-origin: 50% 100%;
        transform: rotateX(80deg);
      }

      .outer-container {
        background: #CECECE;
        width: var(--width);
        height: var(--height);
        border-radius: 5px;

        display: flex;
        justify-content: center;
        align-items: center;

        animation: float 1.5s ease-in-out infinite alternate;
      }

      .inner-container {
        --inner-bgcolor: #3A3A3A;

        width: calc(var(--width) * 0.92);
        height: calc(var(--height) * 0.75);
        background: #3A3A3A;
        border-radius: 5px;
        transform: translateY(7%);

        display: grid;
        grid-template-columns: 32% 32% 36%;
      }

      .inner-container > div {
        background: var(--inner-bgcolor);
      }

      .options-container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      .options-container > .decoration {
        height: 15%;
        border-radius: 5px;
      }

      .decoration {
        background: #A3A3A3;
      }