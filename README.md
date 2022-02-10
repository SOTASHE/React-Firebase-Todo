
Live version(hosted on firebase and netlify):

https://todo-app-fueltofly.netlify.app/

https://todo-app-fueltofly.web.app/


### Built with
- SCSS
- Flexbox
- Firebase
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library


### Want to run your own instance of the app?  The requirements to build from source are:

NodeJS/NPM
- A Firebase Project
- First, clone the project repository
- cd to the parent folder
- Run npm install to install dependencies for the project
- nnpm install
- Create a .env file and fill it with your Firebase credentials
- You can get these by setting up a firebase web app.

Also note that you'll need to set up a Firestore Database, to get the correct value for FIREBASE_DATABASEURL. Be sure to set it to test mode so you can read/write data. Just remember to either revert these or remove the database after your testing is completed.

- FIREBASE_APIKEY=""
- FIREBASE_APPID=""
- FIREBASE_AUTHDOMAIN=""
- FIREBASE_DATABASEURL=""
- FIREBASE_MEASUREMENTID=""
- FIREBASE_MESSAGINGSENDERID=""
- FIREBASE_PROJECTID=""
- FIREBASE_STORAGEBUCKET=""
- Run npm run dev to run the development server or npm run build to build the production app.
   And that's it! 🎉



