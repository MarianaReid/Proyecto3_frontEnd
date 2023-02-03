# Proyecto Final – Frontend - comision 17i
<p align="center"> <img src="proy3-frontend/src/img/logo.png" alt="logo-saboreslatinos" height="200" width="200"/> </p>

## 👪 Integrantes 
- [Veronica Menichetti](https://github.com/VMenichetti)
- [Andressa Arcocha](https://github.com/AndressaArcocha)
- [Esteban Orrego](https://github.com/eOrrego)
- [Mariana Reid](https://github.com/MarianaReid)
- [Enzo Lobo](https://github.com/elobo81)
- [Emmanuel Rizza](https://github.com/Emmanuelrizza)


## 📜Objetivo

Desarrollar una aplicación para que los clientes elijan entre distintos menús del restaurante y puedan hacer su pedido.


## 📜 Requerimientos 

- **Login**: Pantalla de login donde el usuario puede autenticarse o darse de alta a través de un enlace al formulario de registro. Se debe verificar si la el usuario existe y si tiene la cuenta verificada, en caso que no mostrar una pantalla diciendo: “Aún no verificaste tu cuenta, accede al mail que te enviamos para activarla.”
- **Registro**: Puede ser una página o un modal donde el usuario nuevo puede darse de alta.
Los datos indispensables para permitir el ingreso deben ser un email y contraseña, pudiendo agregar los que se deseen. Se debe enviar un mail para activar la cuenta.

- **Home**: Pantalla principal con información del restaurante y los menús disponibles para que los usuarios puedan seleccionar el que deseen.
- **Pedidos**: Una página que contendrá los menús seleccionados por el usuario y su costo total. Deberá tener un botón de hacer pedido. Al hacer click el pedido se guardará en la BD como pendiente.
- **Pagina del administrador**: El usuario administrador debe poder acceder a una página donde se muestran los listados de usuarios, menús y pedidos y además pueda realizar las siguientes operaciones:
- **Usuarios**: Listar los usuários, dar de alta a usuários y poder inactivarlos
- **Productos** del menú: Dar de alta productos, modificar productos, eliminar productos, listar productos
- **Pedidos**: Listar los pedidos, modificar el estado de los pedidos de pendientes a realizados
- **Nosotros**: Una página informativa que contendrá datos del grupo de desarrolladores del proyecto.
- **Error404**: Una página con el respectivo mensaje de error a donde deben dirigirnos en caso de no tener una
funcionalidad desarrollada.
## 📗 Bibliotecas externas

- React Bootstrap
- Sweet Alert
- React Router Dom
- Sweet Alert 2
- Fontawesome

## ⬇️ Instalacion
El backend de esta pagina esta subido en vercel, por lo que podriamos utilizarlo realizando los siguientes comandos

1. Clonamos el repositorio
```
git clone https://github.com/MarianaReid/Proyecto3-RollingCode
```
2. Instalamos todas las dependencias
```
npm i
```
3. Ejecutamos la aplicacion web
```
npm run
```
## ⬇️ Instalacion Local

### Opcion 1️⃣ 
Para poder utilizarlo de forma local, primero deberiamos descargar el [Backend]( https://github.com/MarianaReid/Proyecto3-RollingCode)

1. Clonamos el repositorio del frontend 
```
git clone https://github.com/MarianaReid/Proyecto3_frontEnd
```

2. Instalamos todas las dependencias
```
npm i
```

2. Ejecutamos la aplicacion web
```
npm run
```
### Opcion 2️⃣
1. Clonamos el repositorio del frontend 
```
git clone https://github.com/MarianaReid/Proyecto3_frontEnd
```

2. Instalamos todas las dependencias
```
npm i
```

3. Si tenemos instalado json server podemos simular una api ejecutando el siguiente comando en una terminal, de lo contrario instalarlo en [json server](https://www.npmjs.com/package/json-server) 

```
json-server --watch db.json --port 4040
```

4. Se debe crear un .env con las rutas del backend
```

5. En una terminal aparte ejecutamos la aplicacion web
```
npm run
```

