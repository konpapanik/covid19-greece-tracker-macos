<div align="center">

# <img src="https://raw.githubusercontent.com/bryandms/covid-19costaricatracker/master/media/icon.png" alt="Logo" height="24"> Covid-19 Costa Rica Tracker

[Acerca del proyecto](#acerca-del-proyecto) | [Instalar](#instalar) | [Configurar mi propio tracker](#configurar-mi-propio-tracker)

[:es:](README-ES.md) | [:us:](README.md)

</div>

## Acerca del proyecto

[Bitbar](https://getbitbar.com/) Complemento para rastrear casos de Covid-19 en Costa Rica desde la barra de menú de MacOS.

**Construído con:**

- [Bitbar](https://getbitbar.com/)
- [Novel COVID API](https://github.com/NovelCOVID/API)

![](https://github.com/bryandms/covid-19costaricatracker/blob/master/media/minimisedpreview.png?raw=true)

![](https://github.com/bryandms/covid-19costaricatracker/blob/master/media/fullscreenpreview.png?raw=true)

## Instalar

**1. Instalar BitBar**

Hay dos formas de instalar BitBar en tu Mac:

- Use Homebrew: `brew cask install bitbar`.
- O descargue el archivo .app directamente: [Obtenga la última versión de BitBar](https://github.com/matryer/bitbar/releases). Luego cópielo en su carpeta de Aplicaciones y ejecútelo, le pedirá que (cree y) seleccione una carpeta de complementos, hágalo.

**2. Instalar Node**

- Instale Node siguiendo las [instrucciones aquí](https://nodejs.org/en/download/).
- Asegúrese de que su node exec reside en `usr/local/bin/node`, de lo contrario tendrá que actualizar la ruta en el script.

**3. Guarde este script**

- Descargue el [script](https://raw.githubusercontent.com/bryandms/covid-19costaricatracker/master/covid-costarica.1h.js) en su máquina local. Asegúrese de colocar este archivo en la misma carpeta de complementos que creó al instalar Bitbar.
- Vaya a la carpeta del complemento y ejecute `chmod + x covid-costarica.1h.js`
- Actualice Bitbar.

## Configurar mi propio tracker

**1. Haga un fork o descargue el proyecto**

Si hace un fork, se creará una copia del proyecto en su cuenta de github, que puede clonar o descargar en su computadora para configurar su propio rastreador con su país de preferencia.

Si lo descarga, deberá descomprimir el proyecto.

**2. Cambie el nombre del archivo**

Edite el nombre del archivo `covid-costarica.1h.js` por `covid-COUNTRY.UPDATE_TIME.js`, donde `COUNTRY` es el país que desea rastrear y`UPDATE_TIME` es el tiempo de actualización de datos. Para obtener más información sobre la configuración del tiempo de actualización, haga clic [aquí](https://github.com/matryer/bitbar#configure-the-refresh-time).

**3. Configurar mi país**

Edite la variable `countryName` en el archivo`covid-COUNTRY.UPDATE_TIME.js` por el nombre de su país de acuerdo con [Novel COVID API](https://github.com/NovelCOVID/API).

**4. Ejecute su archivo**

Vaya a la carpeta del complemento y ejecute `chmod + x covid-COUNTRY.UPDATE_TIME.js` y actualice Bitbar.
