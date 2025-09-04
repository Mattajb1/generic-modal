let overlays = document.querySelectorAll('.overlay-element');

if (overlays.length > 0) {
    overlays.forEach(overlay => overlay.remove())
} else {
    // Generate element function
    function generateElement(elementType, elementId) {
      const element = document.createElement(elementType);
      element.classList.add('overlay-element');

      if (elementId) {
        element.id = elementId;
      }

      return element;
    }

    // Shaded Background
    const background = generateElement('div', 'background');
    document.body.appendChild(background);

    // Modal
    const modal = generateElement('div', 'modal');
    background.appendChild(modal);

    // Title
    const title = generateElement('h2', 'title')
    title.textContent = 'Insert Modal Title';
    modal.appendChild(title);

    // Close button (x)
    const closeButton = generateElement('button', 'close-button');
    closeButton.textContent = 'x'
    modal.appendChild(closeButton);

    //Style
    let head = document.getElementsByTagName('head')[0];
    let style = document.createElement('style');
    style.innerHTML = `
        #background {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #000000B3;
            z-index: 100000000;
        }

        #modal {
            width: 900px;
            height: 600px;
            top: calc(100vh / 2 - 300px);
            left: calc(100vw / 2 - 450px);
            background-color: #fff;
            position: fixed;
            padding: 15px;
            z-index: 99999999;
            box-sizing: border-box;
        }

        .overlay-element #title {
            font-family: sans-serif;
            font-weight: 700;
            color: #000;
            text-align: center;
            margin: revert;
            box-sizing: content-box;
            line-height: normal;
        }

        #close-button {
          font-family: sans-serif;
          font-size: 14pt;
          color: #000;
          position: absolute;
          top: 0px;
          right: 0px;
          margin: 1px 1px;
          padding: 1px 7px;
          font-weight: 100;
          border: none;
          background-color: transparent;
          appearance: none;
          cursor: pointer;
          line-height: normal;
        }

        #close-button:hover {
          border: 1px solid #ccc;
          padding: 0px 6px 2px 6px;
        }
    `;
    head.appendChild(style);
}

// Escape: Close modal
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        document.querySelectorAll('.overlay-element').forEach(overlay => overlay.remove());
    }
});

// Close button: Close modal
const closeButton = document.querySelector('#close-button');
closeButton.addEventListener('click', function () {
    document.querySelectorAll('.overlay-element').forEach(overlay => overlay.remove());
});

// Background: Close modal
const background = document.querySelector('#background');
background.addEventListener('click', function (event) {
		if (event.target === background ) {
			document.querySelectorAll('.overlay-element').forEach(overlay => overlay.remove());
		}
});
