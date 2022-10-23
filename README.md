# react-open-street-map-nominatim

How to use Open Street Map Nominatim service for address lookups.

## Example

### Typing an address

![Alt text](/images/1-typing.jpg "Typing an address")

### An address has been selected

![Alt text](/images/2-selection.jpg "An address has been selected")

### Editing a selected address

![Alt text](/images/3-editing.jpg "Editing a selected address")

### API requests, response, console events

![Alt text](/images/4-events.jpg "API requests, response, console events")

## Restrictions

Read really carefully the Open Street Map Terms & Conditions [https://operations.osmfoundation.org/policies/nominatim/](https://operations.osmfoundation.org/policies/nominatim/) to avoid to get you banned.

For example:

- [...]
- No heavy uses (an absolute maximum of 1 request per second).
- [...]

Unacceptable Use

- [...]
- The following uses are strictly forbidden and will get you banned:
  - Auto-complete search: This is not yet supported by Nominatim and you must not implement such a service on the client side using the API.
  - Systematic queries: This includes reverse queries in a grid, searching for complete lists of postcodes, towns etc. and downloading all POIs in an area.
- [...]

## Code structure

This demo project uses React, Typescript, Sass, and some extra packages:

- `React Bootstrap` for the Address dropdown, but it could be replaced very easily with anything else.

  > npx create-react-app my-app --template typescript

  > npm install react-bootstrap bootstrap

- `TanStack React Query` for fetching data from the OSM Nominatim endpoint, but it could be replaced very easily with anything else.

- `Material UI Icons`, but it could be replaced very easily with anything else.

- debouncer hook based on [https://usehooks.com/useDebounce/](https://usehooks.com/useDebounce/)

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
