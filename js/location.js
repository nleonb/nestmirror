export const getCoords = async () => {
    const pos = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });

    return {
        long: pos.coords.longitude,
        lat: pos.coords.latitude,
    };
};

let map
export const getCiTy = (lat, long) => {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 43.5293101, lng: -5.6773233},
        zoom: 13
    });
}
