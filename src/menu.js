const container = document.getElementById('container');


export const menuController = (() => {

    const menuBtn = document.getElementById('menu-btn');


    const addContent = () => {

        container.innerHTML = `
        <div id="container-container">
            <div class="donut-type">
                <h3>Bacon in the sun</h3>
                <span>3$</span>
            </div>
            <div class="donut-type">
                <h3>Beach Ball</h3>
                <span>2$</span>
            </div>
            <div class="donut-type">
                <h3>Blueberry Lemonade</h3>
                <span>4$</span>
            </div>
            <div class="donut-type">
                <h3>BlueBerry Pancake</h3>
                <span>4$</span>
            </div>
        </div>
        `;

    }


    menuBtn.addEventListener('click', addContent);



})();
