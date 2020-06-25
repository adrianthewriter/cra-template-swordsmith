# Sworsmith Template (`cra-template-swordsmith`)

A template for creating [Roll20.net](https://roll20.net) character sheets using [Create React App](https://github.com/facebook/create-react-app).

## Usage

```
yarn create react-app <project-name> --template @adrianthewriter/cra-template-swordsmith
```

## Todo

- [x] Render _layout_ components from the `src/layout` directory to a mock roll20.net app in when using `yarn start`
- [x] Generate _project-name.html_ and _project-name.css_ in `build` directory that are ready to upload to roll20.net as a custom character sheet when using `yarn build`
- [x] Append _roll template_ components from `src/templates` directory to _project-name.html_ when using `yarn build`
- [x] Process and bundle SheetWorker javascript in the `src/scripts` directory and append it to _project-name.html_ when using `yarn build`
- [ ] Generate a _translation.json_ file if i18n tags are used on the sheet when using `yarn build`
- [ ] Generate a customizable project _README_ when using `yarn build`
- [ ] Develop a helper utility script to facilitate writing roll20 sheetworker scripts **(In Progress!)**
