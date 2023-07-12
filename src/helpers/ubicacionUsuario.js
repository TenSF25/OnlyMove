export function ubicacionUsuario() {
    if(!navigator.geolocation) {
      alert("El navegador no soporta geolocalización")
      return;
    }
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      console.log('Mi ubicacion:', `lat: ${position.coords.latitude}, lng: ${position.coords.longitude}`);
    },
    (err) => {
      alert('Error al obtener la ubicación')
    }
)