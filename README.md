<div align="center">

# <img src="https://raw.githubusercontent.com/bryandms/covid-19costaricatracker/master/media/icon.png" alt="Logo" height="24"> Covid-19 Costa Rica Tracker

[About the Project](#about-the-project) | [How to Install](#how-to-install) | [Set up my own tracker](#set-up-my-own-tracker) | [License](#license)

[:es:](README-ES.md) | [:us:](README.md)

</div>

## About The Project

[Bitbar](https://getbitbar.com/) Plugin to track Covid-19 cases in Costa Rica from MacOS menu bar.

**Built with:**

- [Bitbar](https://getbitbar.com/)
- [Novel COVID API](https://github.com/NovelCOVID/API)

![](https://github.com/bryandms/covid-19costaricatracker/blob/master/media/minimisedpreview.png?raw=true)

![](https://github.com/bryandms/covid-19costaricatracker/blob/master/media/fullscreenpreview.png?raw=true)

## How to Install

**1. Installing BitBar**

There are two ways to install BitBar on your Mac:

- Use Homebrew: `brew cask install bitbar`.
- Or download .app file directly: [Get the latest version of BitBar](https://github.com/matryer/bitbar/releases). Then copy it to your Applications folder and run it - it will ask you to (create and) select a plugins folder, do so.

**2. Installing Node**

- Install Node by following the [instructions here](https://nodejs.org/en/download/).
- Make sure your node exec resides in `usr/local/bin/node`, else you will have to update the path in the script.

**3. Saving this script**

- Download the [script](https://raw.githubusercontent.com/bryandms/covid-19costaricatracker/master/covid-costarica.1h.js) on your local machine. Make sure you place this file in the same plugin folder which you created while installing Bitbar.
- Go to the plugin folder and run `chmod +x covid-costarica.1h.js`
- Refresh Bitbar.

## Set up my own tracker

**1. Fork or download the project**

If you fork, a copy of the project will be created in your github account, which you can clone or download to your computer to configure your own tracker with your country of preference.

If you download it you will have to unzip the project.

**2. Rename the file**

Edit the file name `covid-costarica.1h.js` for `covid-COUNTRY.UPDATE_TIME.js`, where `COUNTRY` is the country you want to track and `UPDATE_TIME` is the data update time. For more information about the update time settings click [here](https://github.com/matryer/bitbar#configure-the-refresh-time).

**3. Set my country**

Edit the `countryName` variable in the `covid-COUNTRY.UPDATE_TIME.js` file for the name of your country according to the [Novel COVID API](https://github.com/NovelCOVID/API).

**4. Run your file**

Go to the plugin folder and run `chmod +x covid-COUNTRY.UPDATE_TIME.js` and refresh Bitbar.

## License

[See license](https://github.com/bryandms/covid-19costaricatracker/blob/master/LICENSE)
