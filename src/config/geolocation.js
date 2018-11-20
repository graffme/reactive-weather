import * as geolocator from 'geolocator';

geolocator.config({
  language: "en",
  google: {
    version: "3",
    key: "AIzaSyAIlt92QJ4DNXvz1GrIfSYK5MfI37Z5pJs"
  }
});

export const locateUser = () => {
  return new Promise((resolve, reject) => {
    const options = {
      enableHighAccuracy: true,
      fallbackToIP: true, // fallback to IP if Geolocation fails or rejected
      addressLookup: true
    };

    geolocator.locate(options, function (reject, resolve) {
      console.log(resolve)
      return resolve;
    });
  });
}
