const body = document.querySelector("body");

body.innerHTML = `
<h1>Geolocation 2000.</h1>
<button class="js-locate">Locate me!</button>
<div class="js-output"></div>
`;

const locateMeBtn = document.querySelector(".js-locate");
const output = document.querySelector(".js-output");

const createMapImage = (lat, lng) => {
    const imageURL = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&size=400x400&zoom=15`;
    const image = new Image();
    image.src = imageURL;
    output.appendChild(image);
}

const handleGeoError = () => {
    output.innerHTML = "<h2>Can't locate you</h2>"
};

const handleGeoSuccess = (position) =>{
    const {coords: {latitude, longitude}} = position;
    output.innerHTML = "<h2>Got you...!</h2>";
    createMapImage(latitude, longitude);
};

const getLocation = () => {
   output.innerHTML = "<h2>Locating You...</h2>";
   const geoOptions = {
       enableHighAccuracy: true
   }
   navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError, geoOptions);
};

locateMeBtn.addEventListener("click", getLocation);