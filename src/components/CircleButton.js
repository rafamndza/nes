class CircleButton extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
  
    static get styles() {
      return /* css */`
        .container {
          --size: calc(var(--width) * 0.10);
  
          background: #CECECE;
          border-radius: 3px;
          width: var(--size);
          height: var(--size);
  
          display: flex;
          justify-content: center;
          align-items: center;
        }
  
        .button {
          width: calc(var(--size) * 0.8);
          height: calc(var(--size) * 0.8);
          background: #E5393F;
          border-radius: 50%;
          box-shadow: inset 1px 2px 2px #1E0606;
          overflow: hidden;
          position: relative;
        }