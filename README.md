# Photo Gallery Application
___
## Problem Statement:
Create a Photo Gallery application using Javascript, Html, CSS, and any other Javascript Framework which shows the strength of the candidate in Javascript and associated technologies. The photo gallery should:
- The application should asynchronously retrieve the images from a server.
- The application should display the photos in a gallery layout using HTML and CSS.
- The application should allow the user to interact with the gallery, such as clicking on an image to view it in a larger size and buttons to go to the next or previous image
- Additional features are highly appreciated.
Optional Feature:
- Write test code for your application using JEST.
Acceptance criteria:
-The code must be working with no errors.
-The code should be properly commented on.
-Basic CSS styling must be applied. (Show your creativity)
-A document should be created which must have a well-defined Problem statement for your project, a detailed explanation of your application, and images of the final output.

## Submitted Application Details:
- hosted link: [https://photo-album-debo.netlify.app/](https://photo-album-debo.netlify.app/)
- Submitted Application Github: [https://github.com/debojeetjha10/photo_album](https://github.com/debojeetjha10/photo_album)

## The application is created using
- React
- React-query (for easy querying of data)
- Unsplash API (to retrieve images from the web)
- And a few other utility packages for icons and other small tasks.

## Tests for the application are written in
- Jest
- React Testing Library
- React Test renderer
# How to run the application:
## Development mode:
- Make sure node and npm are installed in the system.
- Run command: `npm i` to install node modules.
- Run command: `npm start` to launch the application.
## Test:
- After setting up the development mode.
- Run command: `npm run test` to test the code.
## Build:
- After setting up the development mode.
- Run `npm run build` to build the project.

# How does the whole service work?
On each load of the websites 
- The frontend sends a get request to the Unsplash API and retrieves 30 random images for the gallery.
The images are loaded into the frontend then just show the thumbnails.
- On clicking over the images, the images can be viewed in a larger space with full quality.
On that page, we get options to download the image and switch between images by clicking on a small bar below the main image containing the remaining images and also using the dedicated buttons for that.

        PS: The Unsplash API only allows 50 requests per hour per user so I did a hack to have a seamless experience if the request fails to provide valid data then dummy data from a pool of 5  predefined data will be sent out. This ensures the application will not break if  API usage exceeds the limit.
        Screenshots:


# General Info about React

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
