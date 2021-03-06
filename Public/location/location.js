function save() {
    navigator.geolocation.getCurrentPosition(async position =>{

    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    document.getElementById("latitude").textContent = lat;
    document.getElementById("longitude").textContent = lon;

    const data = {lat, lon};
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify(data),
    };
    const response = await fetch('/api', options);
    const  json_data = await response.json();
    console.log(json_data);

})
}
document.getElementById("btn_locate").addEventListener('click', save);
document.getElementById("time").innerHTML = Date();