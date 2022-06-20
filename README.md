# Ava Plus

<img src="/readme-assets/app-gif-avaplus.gif" alt="AvaPlus App image" width="200" />

## What is Ava Plus for ?

> Ava Plus is a project to easy have a pocket UNOPAR University activity calendar. Its focused on fast get the next expiring activities from Unopar,
> and of course the incoming ones.

## How it works ?

> The project benefits from a backend made with Python, which is a web scrapper that log in in the university platform, collect all relevant data and
> return using a REST API. The scrapper was made by my childhood friend [Victor Heringer](https://github.com/victorheringer).

## How to run the project

- Backend

> The API runs on a docker composed container, so just run `docker-compose up` in the root folder of the
> [project](https://github.com/victorheringer/ava-api) and everything will set up.

- Mobile App

> The mobile app was made with React Native through [EXPO](https://expo.dev/) and to run simple clone or fork the project, in the root folder run
> `yarn android`. Its advised to have Android Studio Emulator already opened.

> > Login advise:
> > `You need to setup your login and password on the backend, this is a personal project intended to solve a real life problem of ours, so we do not implemented (yet) an enpoint to receive your credentials.`

## Know issues

None at the moment i'm writing this readme.
