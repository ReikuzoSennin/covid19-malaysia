var city = "malaysia";
const url = 'https://coronavirus-19-api.herokuapp.com/countries/'+city;

fetch(url)
    .then(response => response.json())
    .then(data => generateHtml(data))

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const generateHtml = (data) => {
    console.log(data);

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = dd + '/' + mm + '/' + yyyy;

    const html = `  
        <div class="country">Status Terkini COVID-19 ${data.country}<br><div id="date">${today}</div></div>
        <div class="details">
            <span>Jumlah Kes Kesuluruhan<div class="num">${numberWithCommas(data.cases)}</div></span>
            <span>Kes Baharu<div class="num">${numberWithCommas(data.todayCases)}</div></span>
            <span>Jumlah Kes Sembuh<div class="num">${numberWithCommas(data.recovered)}</div></span>
            <span>Jumlah Kes Aktif<div class="num">${numberWithCommas(data.active)}</div><div class="icu">Jumlah Kes ICU<div class="num">${numberWithCommas(data.critical)}</div></div></span>
            <span>Kes Kematian Baharu<div class="num">${numberWithCommas(data.todayDeaths)}</div><div class="death">Jumlah Kes Kematian<div class="num">${numberWithCommas(data.deaths)}</div></div></span>
        </div>
    `

    const casesDiv = document.querySelector('.cases')
    casesDiv.innerHTML = html;
}