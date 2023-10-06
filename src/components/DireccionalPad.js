class DireccionalPad extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
  
    static get styles() {
      return /* css */`
        :host {
          transform: translateY(10%);
        }
  
        .container {
          --size: calc(var(--width) * 0.22);
  
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          width: var(--size);
          height: var(--size);
        }
  
        .dpad {
          background: #DBDBDB;
          border-radius: 5px;
        }
  
        .dpad.horizontal {
          width: calc(var(--size) * 0.41);
          height: 100%;
          position: absolute;
        }
  
        .dpad.vertical {
          width: 100%;
          height: calc(var(--size) * 0.41);
          position: absolute;
        }
  
        .dpad-inner {
          position: absolute;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          filter: drop-shadow(0 0 0 #111);
        }