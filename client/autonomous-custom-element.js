export default class PopUpInfo extends HTMLElement {
  constructor() {
    super();

    // Create a shadow root
    const shadow = this.attachShadow({ mode: 'open' });

    const container = document.createElement('div');
    container.setAttribute('class', 'container');

    const wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'wrapper');

    const icon = document.createElement('div');
    icon.setAttribute('class', 'icon');

    const info = document.createElement('span');
    info.setAttribute('class', 'info');

    const text = this.getAttribute('data-text');
    info.textContent = text;

    let imgUrl;
    if (this.hasAttribute('img')) {
      imgUrl = this.getAttribute('img');
    } else {
      imgUrl = 'img/default.png';
    }

    const img = document.createElement('img');
    img.src = imgUrl;
    icon.appendChild(img);

    // Create some CSS to apply to the shadow dom
    const style = document.createElement('style');

    style.textContent = `
        .container {
          display: flex;
          justify-content: center;
        }
        .wrapper {
          position: relative;
          display: inline-block;
        }
        .info {
          font-size: 22px;
          width: 280px;
          display: inline-block;
          border: 1px solid black;
          padding: 10px;
          background: white;
          border-radius: 10px;
          opacity: 0;
          transition: 0.6s all;
          position: absolute;
          top: 0px;
          left: 10px;
          z-index: 3;
        }
        img {
          display: block;
          width: 300px;
        }
        .icon:hover + .info, icon:focus + .icon {
          opacity: 1;
        }
        .icon:hover {
          cursor: pointer;
        }
      `;

    // Attach the created elements to the shadow dom
    shadow.appendChild(style);
    shadow.appendChild(container);
    container.appendChild(wrapper);
    wrapper.appendChild(icon);
    wrapper.appendChild(info);
  }
}

customElements.define('popup-info', PopUpInfo);
