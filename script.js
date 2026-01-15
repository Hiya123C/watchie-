function updateCalendar() {
    const now = new Date();
    // MY TIME SHIT!!

    const hours = now.getHours().toString().padStart(2,'0');
    const minutes = now.getMinutes().toString().padStart(2,'0');
    const seconds = now.getSeconds().toString().padStart(2,'0');

    const formattedTime = `${hours}:${minutes}:${seconds}`;

    // ALL THE CALENDAR SHIT
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const date = now.getDate()
    const day = dayNames[now.getDay()];
    const month = monthNames[now.getMonth()];
    const year = now.getFullYear();

    // CSS to HTML
    document.getElementById('time').textContent = formattedTime;
    document.getElementById('date').textContent = date;
    document.getElementById('day').textContent = day;    
    document.getElementById('month').textContent = month;
    document.getElementById('year').textContent = year;
}

updateCalendar();
setInterval(updateCalendar, 1000);


// View toggle....
const app = document.querySelector('.app');
const defaultView = document.querySelector('.default-view');
const clickedView = document.querySelector('.clicked-view');

document.querySelector('.default-view').style.display = 'block';
document.querySelector('.clicked-view').style.display = 'none';

app.addEventListener('click', ()=> {
    if (defaultView.style.display === 'block') {
        defaultView.style.display = 'none';
        clickedView.style.display = 'block';
    } else if (clickedView.style.display === 'block') {
        defaultView.style.display = 'block';
        clickedView.style.display = 'none';
    }
});


