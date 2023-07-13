function geoLocalizacion() {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error("El navegador no soporta geolocalización"));
      }
  
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
  
          const ubicacion = {
            lat,
            lng
          };
  
          resolve(ubicacion);
        },
        (err) => {
          reject(new Error('Error al obtener la ubicación', err));
        }
      );
    });
  }

export default geoLocalizacion;