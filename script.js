let url='https://api.openweathermap.org/data/2.5/weather'
let key='328acb0019d3203055e027d99389d70e'
let kelvin=273.15



document.getElementById('busqueda').addEventListener('click',()=>{
const ciudad=document.getElementById('ciudad').value
DatosClima(ciudad)}
)
function DatosClima(ciudad){
    fetch(`${url}?q=${ciudad}&appid=${key}`)
    .then(data=>data.json())
    .then((data)=>MostrarDatos(data))
}

function MostrarDatos(data){
    console.log(data)
    const datitos=document.getElementById('datos')
    datitos.innerHTML=""
    const nombreCiudad=data.name
    const Temperatura=Math.ceil((data.main.temp)-kelvin)

    const Nciudad=document.createElement('h2')
    Nciudad.textContent=`Ciudad: ${nombreCiudad}`
    const temperaturaCiudad=document.createElement('p')
    temperaturaCiudad.textContent=`Temperatura actual: ${Temperatura}°C`
    const icono = document.createElement('i');
    if (Temperatura<10){
        icono.classList.add('fa-regular', 'fa-snowflake');
    }
    else if(Temperatura>=10 & Temperatura<15){
        icono.classList.add('fa-solid', 'fa-cloud-sun');

    }
    else{
        icono.classList.add('fa-regular' ,'fa-sun');
    }
    datitos.appendChild(Nciudad)
    datitos.appendChild(temperaturaCiudad)
    datitos.appendChild(icono);
}
