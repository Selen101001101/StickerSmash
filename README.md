# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.



# TUTORIAL : CREATE AN APP WITH EXPO AND REACT NATIVE

## Initialize a new Expo app

```bash
npx create-expo-app@latest StickerSmash
```

## Run reset-project script

[reset-project] script resets the app directory structure in a project and copies the previous boilerplate files from the project's root directory to another sub-directory called app-example. We can delete it since it is not part of our main app's structure.

```bash
npm run reset-project
```

## Run the app on mobile and web

```bash
npx expo start
```
After running the app:

- The development server will start, and you'll see a QR code inside the terminal window.
- Scan that QR code to open the app on the device. On Android, use the Expo Go > Scan QR code option. On iOS, use the default camera app.
- To run the web app, press w in the terminal. It will open the web app in the default web browser.

## Edit the index screen

```tsx
import { Text, View,  StyleSheet } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
});

```

React Native uses the same color format as the web. It supports [hex] [triplets] (this is what #fff is), [rgba], [hsl], and [named] [colors], such as [red], [green], [blue], [peru], and [papayawhip]. For more information, see [Colors in React Native](https://reactnative.dev/docs/colors).


# TUTORIAL : Add navigation

Expo Router is a file-based routing framework for React Native and web apps. It manages navigation between screens and uses the same components across multiple platforms. To get started, we need to know about the following conventions:

- [app] [directory]: A special directory containing only routes and their layouts. Any files added to this directory become a screen inside our native app and a page on the web.
[Root] [layout]: The ```app/_layout.tsx``` file. It defines shared UI elements such as headers and tab bars so they are consistent between different routes.
File name conventions: Index file names, such as ```index.tsx```, match their parent directory and do not add a path segment. For example, the index.tsx file in the app directory matches / route.
A route file exports a React component as its default value. It can use either ```.js```, ```.jsx```, ```.ts```, or ```.tsx``` extension.
Android, iOS, and web share a unified navigation structure.

This list is enough to start. For a complete list of features, see [Introduction to Expo Router](https://docs.expo.dev/router/introduction/).

## Add a new screen to the stack

Let's create a new file named ```about.tsx``` inside the app directory. It displays the screen name when the user navigates to the ```/about``` route.

```tsx
import { Text, View, StyleSheet } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
});

```

A [stack navigator]() is the foundation for navigating between different screens in an app : 
- On Android, a stacked route animates on top of the current screen. 
- On iOS, a stacked route animates from the right. 

Expo Router provides a Stack component to create a navigation stack to add new routes.

## Navigate between screens
We'll use Expo Router's Link component to navigate from the ```/index``` route to the ```/about``` route. It is a React component that renders a ```<Text>``` with a given href prop.

Import the Link component from expo-router inside ```index.tsx```.
Add a Link component after ```<Text>``` component and pass href prop with the /about route.
Add a style of fontSize, textDecorationLine, and color to Link component. It takes the same props as the ```<Text>``` component.

```tsx
import { Text, View, StyleSheet } from 'react-native';
 import { Link } from 'expo-router'; 

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home screen</Text>
      <Link href="/about" style={styles.button}>
        Go to About screen
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});

```


##

##
