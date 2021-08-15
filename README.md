# CodeFactor

Nivel A+

![image](https://user-images.githubusercontent.com/29376434/129470690-b3ffa0a5-4c55-4c92-a435-0664dc2657bd.png)

# Funcionamiento

Se pueden arrastrar o seleccionar los archivos en el Drop Box.
Máximo 3 archivos de no más de 250k cada uno.
Los archivos se suben al servidor.
Si estamos logueados en google, podemos subir archivos a nuestro Drive mediante un botón creado a tal efecto.
Otro botón permite eliminar el archivo del servidor.

...

El plugin que utilizo para visualizar las miniaturas (react-file-viewer-extended) no funciona bién en el servidor, pero lo hace perfectamente en local (desarrollo). Ya no me daba tiempo de buscar otra solución.

Da problemas al loguearse. La pantalla de selección de cuenta aparece dos veces. A veces solo aparece una sola vez y el usuario no llega a hacer login, tengo que refrescar la pantalla. Tengo localizado el problema pero es necesario cambiar el sistema que tengo para hacer login (react-google-login), una vez más no me da tiempo de arreglarlo. 

Cuando aparecen varias alertas a la vez en pantalla no las gestiono correctamente, se debe arreglar.

# La idea

Se trataría de un contenedor de archivos compartidos en la nube desde donde podríamos seleccionar archivos para subirlos a nuestro Drive personal.
En una futura versión, solo el propietario del archivo podrá eliminarlo, y ademas de subir los archivos al Drive se podrían, por ejemplo, descargar directamente en local.

# Deploy

[https://manuelgc.eu/nuwe2104/](https://manuelgc.eu/nuwe2104/)

# Tecnología

He utilizádo las siguientes versiones:

React 17.0.2<br>
Typescript 4.1.2<br>
Controles y theming con Material UI 4.12.3<br>
Material UI Lab 4.0.0-alpha.60<br>
axios 0.21.1<br>
react-dropzone 11.3.4<br>
react-file-viewer-extended 2.0.3<br>
react-google-login 5.2.2<br>

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
