# La Cuenta contador
Un contador completo para el juego La Cuenta (2Tomatoes Games), creado por Pentech.

## Archivos
- `index.html` – la app
- `sw.js` – service worker (funciona sin conexión)
- `bg.jpg` – fondo (mantel)
- `splash.jpg` – pantalla de entrada
- `ka-ching.mp3` – sonido de caja registradora (al entrar y al pagar la cuenta)
- `fonts/` – tipografías Kalam, Caveat y Permanent Marker (licencia OFL, ver `fonts/OFL.txt`)
- `manifest.json`, `icon-192.png`, `icon-512.png`, `apple-touch-icon.png` – instalación como app

## Publicar cambios
Al subir una versión nueva, cambia `VERSION` en `sw.js` (p. ej. `lacuenta-v3`) para que los móviles descarguen la actualización.

## Archivo de partidas
Al terminar una partida se puede guardar en el archivo (en el propio dispositivo). Desde la pantalla de jugadores, «Archivo de partidas» muestra el historial (guardado solo en el dispositivo).

## Idiomas
Castellano, català, English, français y Deutsch, con los términos oficiales de las reglas de cada edición (2ª edición). La app abre en el idioma del móvil (si no es ninguno de estos, en castellano) y el botón de arriba a la izquierda permite cambiarlo; la elección se guarda en el dispositivo. Todos los textos están en el objeto `T` (y el aviso legal en `LEGAL`) dentro de `index.html`.

## Modo noche
Se activa solo con el modo oscuro del móvil o con el botón de la luna (arriba a la derecha).
