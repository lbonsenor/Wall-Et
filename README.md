# Grupo 21 - Wall-Et
**Integrantes**:
62872, Matías Leporini
62842, Lautaro Bonseñor
63382, Camila Lee
63074, Ana Negre

## Instructivo de instalación
1. Descargar el archivo y descomprimirlo.
2. Descargar las dependencias vía npm install
3. Instalar serve vía el npm install -g serve
4. Construir la página vía npm run build
5. Correr la página localmente vía server -s dist

## ¡Importante!
Al no tener la API disponible, no fue posible implementar la funcionalidad completa del registro e inicio de sesión. Se decidió hardcodear el usuario para ingresar, el cual se verifica en el UserStore. El mismo es **lau.bonsenor**. Adicionalmente, ya que no se consideró correcto guardar contraseñas en la página, se decidió que basta con que el campo de contraseña no estuviera vacío para considerarse válido.
