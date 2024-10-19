const container = document.getElementById('container');


export const contactController = (() => {


    const contactBtn = document.getElementById('contact-btn');

    const addContent =() => {
        container.innerHTML = `
            <div id="contact-container">
                <h3>totallyRealEmail@notFake.com</h3>
                <h3>555-555-5554</h3>
            </div>
        `;
    }

    contactBtn.addEventListener('click', addContent);
})();