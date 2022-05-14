# Firebase example

Template starter with React Navigation and Firebase auth using React Context

# Preview

![](https://github.com/sarasapaula/NestedNavigation/blob/main/nestedNavigation.jpg)

# Installation

1. Install [node.js](https://nodejs.org/en/)
2. Install Expo

   ```jsx
   npm install --global expo-cli
   ```

3. Download this repo
4. Install deps on your template folder

   ```jsx
   npm install
   ```

5. Start the environtment

   ```jsx
   expo start
   ```

### Prebuilt UI Screens

There are 3 screens included inside `./src/screens/auth`. The ilustrations I use [undraw](https://undraw.co/)

- Login screen `./src/screens/auth/login.tsx`
- Register screen `./src/screens/auth/register.tsx`
- Forget password screen `./src/screens/auth/forget.tsx`


Inside the navigator `./src/navigation/AppNavigator.js`
There's 2 stack navigator and 1 bottom tab navigator

- `<Auth/>` → for not logged in users stack
- `<Main/>` → for logged in users stack
- `<MainTabs/>` → Main Menu with three options: Home, Profile and About


# Rapi UI

![../hero02.png](https://github.com/codingki/react-native-rapi-ui/blob/HEAD/media/hero02.png)

These UI components are provided by [Rapi UI](https://rapi-ui.kikiding.space/).
Check the [documentation](https://rapi-ui.kikiding.space/docs/) for usage and more components.

# Auth Flow

### Firebase Setup

- Set up a new firebase project
- Go to Authentication and under Sign-in Method enable Email/Password
- Fill this firebase config to your config inside `./src/navigation/AppNavigator.js`

```jsx
// Better put your these secret keys in .env file
const firebaseConfig = {
	apiKey: '',
	authDomain: '',
	databaseURL: '',
	projectId: '',
	storageBucket: '',
	messagingSenderId: '',
	appId: '',
};
```

# File Managements

These are the folders and the functionality

```jsx
/src/assets -> for media such as images, etc
/src/components -> for components
/src/navigation -> for React Navigation
/src/screens -> for Screens
```

