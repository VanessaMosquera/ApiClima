function consultaClima() {
  let ciudad = document.getElementById("ciudad").value;

  const options = {
    method: "GET"
  };
  
  // Petición HTTP
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=96ddeac7568d65fa1431f5838aa93523`, options)
    .then(response => {return response.text()})
    .then(data => {
      //convertimos formato json cadena en objeto de javascript
      let infoClima = JSON.parse(data);
      let resultados = (parseInt(infoClima.main.temp) - (273.15)).toFixed(2);
      document.getElementById("resultado").innerHTML = (resultados + " °C");
      let icono = (infoClima.weather[0].icon)
      document.getElementById("icono").setAttribute( "src",`http://openweathermap.org/img/wn/${icono}@2x.png`)
    }).catch((err) => {console.log("Info error: ", err);})
}