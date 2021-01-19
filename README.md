# Sworsmith Template (`cra-template-swordsmith`)

A template for creating [Roll20.net](https://roll20.net) character sheets using [Create React App](https://github.com/facebook/create-react-app).

__The Swordsmith project has been abandoned in favor of [Runesmith](https://github.com/adrianthewriter/runesmith). It is no longer maintained.__

## Usage

```
yarn create react-app <project-name> --template @adrianthewriter/cra-template-swordsmith
```

## Todo

- [x] Render _layout_ components from the `src/layout` directory to a mock roll20.net app in when using `yarn start`
- [x] Generate _project-name.html_ and _project-name.css_ in `build` directory that are ready to upload to roll20.net as a custom character sheet when using `yarn build`
- [x] Append _roll template_ components from `src/templates` directory to _project-name.html_ when using `yarn build`
- [x] Process and bundle SheetWorker javascript in the `src/scripts` directory and append it to _project-name.html_ when using `yarn build`
- [x] Develop a set of default components to facilitate building common roll20 elements.
- [x] Extract default components to swordsmith package
- [ ] Document default components
- [ ] Develop a utility class to facilitate writing roll20 sheetworker scripts **(In Progress!)**
- [ ] Extract utility class to swordsmith package
- [ ] Document utility class
- [ ] Generate a _translation.json_ file if i18n tags are used on the sheet when using `yarn build`
- [ ] Generate a customizable project _README_ when using `yarn build`
