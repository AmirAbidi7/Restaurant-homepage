const container = document.getElementById('container');


export const homeController = (() => {

    const homeBtn = document.getElementById('home-btn');


    const addContent = () => {

        


        container.innerHTML = `
        <div id="title-slogan-container">

            
        
        
        </div>
        <h1>Welcome to our restaurant!</h1>

        <div id="description">
        
            <h2>Who are we?</h2>
            <p>We have founded this restaurant because we found a severe lack of doughnut artistry in our country,
             so we hoped to fill in the gap with all this sugary goodness!
              We hope to see you enjoy & crave our sugary dough!</p>        
        
        </div>`;
    }
    
    homeBtn.addEventListener('click',addContent);

    addContent();
})();