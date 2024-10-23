# Avance-Countertop




### Nombre del proyecto: 
The countertop.

### Descripcion del peoyecto:
Una plataforma en donde usuarios podrán ver y publicar recetas para cocinar.

### Link prototipo figma:
https://www.figma.com/design/W2uxvvbovOexNT7hWF5ZhH/Untitled?node-id=6-290&t=zIfVI5T2kXuB4EdI-1

### Integrantes:
Armin Hucke.

Funcionalidades descritas en el archivo pdf.

## Detalles

Esta version del proyecto permite a un usuario crear una cuenta e ingresar a dicha cuenta. Lo que permite la funcionalidad de login en este caso es el state manager pinia, que una vez verificadas las credenciales en json-server, guarda la informacion del usuario en el local storage del navegador, y usa esa informacion para actualizar la barra de navegacion de forma reactiva y registrar acciones realizadas como hechas por el usuario loggeado con su id.

La subida de recetas esta estructurada de una forma que se desvia del prototipo inicial hacia una forma ams guiada, en donde el usuario agrega ingredientes e instrucciones uno por uno, se selecciona una imagen para acompanar la publicacion, tiempo estimado de cocina, y la categoria. La receta despues se guarda en db.json con json-server.

La vista de busqueda de recetas es simplemente en un inicio un listado de todas las recetas disponibles en db.json, con un input para buscar recetas por nombre.

El usuario en la vista de cuentas puede ver la informacion de su cuenta como nombre de usuario y correo electronico. Dentro de esta vista el usuario puede cerrar su sesion, borrando sus datos del store de pinia y del local storage del navegador.

La vista de administrador es un panel en donde aparecen todos los usuarios y todas las recetas en db.json de manera ordenada, ofreciendo al lado de cada una la opcion de eliminar dicho elemento.
