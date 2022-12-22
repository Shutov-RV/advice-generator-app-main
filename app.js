async function getDashboardData(url) {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    return data;

}

const adviceId = document.querySelector('.advice__id');
const adviceText = document.querySelector('.advice__text');
const btn = document.querySelector('.btn');
const url = 'https://api.adviceslip.com/advice';

document.addEventListener('DOMContentLoaded', () => {
    getDashboardData(url)
        .then(data => {
            render(data);
        })
})

btn.addEventListener('click', () => {
       getDashboardData(url)
            .then(data => {
                render(data);
            })
})




function render(data) {
    let { id, advice } = data.slip;
    adviceId.textContent = `Advice# ${id}`;
    adviceText.textContent = `"${advice}"`;
}
