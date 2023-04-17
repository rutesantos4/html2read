# html2read

Web frontend that converts HTML into a read template.

This project was a request from João Freitas (@freitzzz) to facilitate the posts that he does on his [blog](https://joaomagfreitas.link/). Check https://joaomagfreitas.link/reads/ to see the application of this tool's result.

## Hooks

This repository is configured with client-side Git hooks that automatically format + lint the codebase before each push. You can install it by running the following command:

```bash
./hooks/INSTALL
```

## Development

Once you've created a project, install the dependencies with `npm install`.

To properly run this, you will need to a setup a `.env` file. Start by creating a copy of the `.env.example` file and fill the variables with values appropriate for the execution context.

Start a development server:

```bash
npm run dev
```

Also, to update the localization files, you will need to run the following command before editing each locale files:

```bash
npm run typesafe-i18n
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

## Deploy

To deploy, you will need to install a fork of `gh-pages`. Do it via: `npm i @freitzzz/gh-pagez -g`

To deploy your app:

```bash
npm run deploy
```

### Contact

This template was prepared by:

- João Freitas, @freitzzz
- Rute Santos, @rutesantos4

Contact us for freelancing work!
