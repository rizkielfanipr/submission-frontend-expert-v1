import 'regenerator-runtime/runtime';
import '../styles/main.css';
import '../styles/responsive.css'
import '../styles/skip-link.css'
import '../scripts/component/app-bar'
import '../scripts/component/main-content'

async function fetchData() {
    try {
        const response = await import('../public/data/DATA.json');
        const jsonData = response.default;
        const datas = jsonData.restaurants;
        const cardContainer = document.querySelector('.card');
        
        let dataCard = '';
        datas.forEach(function (data) {
            const { pictureId, name, rating, city, description } = data;
            dataCard += `
                <div class="card-item">
                    <img class="card-item-img" src="${pictureId}" alt="${name}" title="${name}">
                    <div class="card-item-content">
                        <p class="restaurant-rating"> 
                            <span>&#11088;${rating}</span>
                            <span>&#x1F4CD;${city}</span>
                        </p>
                        <h1 class="restaurant-title">${name}</h1>
                        <div class="restaurant-description">${description.slice(0, 150)}...</div>
                    </div>
                </div>
            `;
        });

        cardContainer.innerHTML = dataCard;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

const toggleMenu = document.querySelector('#toggle-menu');
const drawer = document.querySelector('#drawer');

toggleMenu.addEventListener('click', (event) => {
    drawer.classList.toggle('open');
    event.stopPropagation();
});

fetchData();


