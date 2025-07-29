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

A ```stack navigator``` is the foundation for navigating between different screens in an app : 
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

## Add a not-found route

- Create a new file named ```Not-found.tsx``` inside the app directory to add the ```NotFoundScreen component```.
Add options prop from the Stack.Screen to display a custom screen title for this route.
Add a Link component to navigate to the / route, which is our fallback route.

## Add a bottom tab navigator

- Inside the app directory, add a ```(tabs)``` subdirectory. This special directory is used to group routes together and display them in a bottom tab bar.
- Create a ```(tabs)/_layout.tsx``` file inside the directory. It will be used to define the tab layout, which is separate from Root layout.
- Move the existing ```index.tsx``` and ```about.tsx``` files inside the ```(tabs)``` directory.

## Update bottom tab navigator appearance

- Import ```Ionicons``` icons set from ```@expo/vector-icons``` — a library that includes popular icon sets.
- Add the ```tabBarIcon``` to both the ```index``` and about routes. This function takes ```focused``` and ```color``` as params and renders the icon component. From the icon set, we can provide custom icon names.
- Add ```screenOptions.tabBarActiveTintColor``` to the ```Tabs``` component and set its value to ```#ffd33d```. This will change the color of the tab bar icon and label when active.

### app/(tabs)/_layout.tsx
```tsx
import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
         tabBarActiveTintColor: '#ffd33d',
         headerStyle: {
            backgroundColor: '#25292e',
         },
         headerShadowVisible: false,
         headerTintColor: '#fff',
         tabBarStyle: {
            backgroundColor: '#25292e',
         },
      }}
      >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'About',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24}/>
          ),
        }}
      />
    </Tabs>
  );
}
```

# TUTORIEL: Build a screen

## Break down the screen

![Screen essential elements](/pictures_files/screen_essentials_components.png)

There are two essential elements:

- There is a large image displayed at the center of the screen
- There are two buttons in the bottom half of the screen

The first button contains multiple components. The parent element provides a yellow border, and contains an icon and text components inside a row.

![Parent Child Components](/pictures_files/parents_children_components.png)

Now that we've broken down the UI into smaller chunks, we're ready to start coding.

## Display the image

We'll use ```expo-image``` library to display the image in the app. It provides a cross-platform ```<Image>``` component to load and render an image.
To install those libraries, stop the dev server before:

```bash
npx expo install expo-image
```


To use the Image component in ```app/(tabs)/index.tsx``` file:

- Import ```Image``` from the ```expo-image``` library.
- Create a ```PlaceholderImage``` variable to use ```assets/images/background-image.png``` file as the source prop on the Image component.

```tsx
import { View, StyleSheet } from 'react-native';
 import { Image } from 'expo-image'; 


const PlaceholderImage = require('@/assets/images/background-image.png');


export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={PlaceholderImage} style={styles.image} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});

```


## Divide components into files

- Create a top-level ```components``` directory, and inside it, create the ```ImageViewer.tsx``` file.
- Move the code to display the image in this file along with the ```image``` styles.

```tsx
import { ImageSourcePropType, StyleSheet } from 'react-native';
import { Image } from 'expo-image';

type Props = {
  imgSource: ImageSourcePropType;
};

export default function ImageViewer({ imgSource }: Props) {
  return <Image source={imgSource} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});

```


Import ```ImageViewer``` and use it in the ```app/(tabs)/index.tsx```:

```tsx
import { StyleSheet, View } from 'react-native';

import ImageViewer from '@/components/ImageViewer'; 

const PlaceholderImage = require('@/assets/images/background-image.png');

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
  },
});

```


The ```@``` symbol is a custom path alias for importing custom components and other modules instead of relative paths. 
Expo CLI automatically configures it in ```tsconfig.json```.



## Create buttons using Pressable

### components/Button.tsx
```tsx
import { StyleSheet, View, Pressable, Text } from 'react-native';

type Props = {
  label: string;
};

export default function Button({ label }: Props) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={() => alert('You pressed a button.')}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
  },
});

```

### app/(tabs)/index.tsx

```tsx
import { View, StyleSheet } from 'react-native';

import Button from '@/components/Button'; 
import ImageViewer from '@/components/ImageViewer';

const PlaceholderImage = require("@/assets/images/background-image.png");

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button label="Choose a photo" />
        <Button label="Use this photo" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 28,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});

```

## Enhance the reusable button component

### components/Button.tsx
```tsx
import { StyleSheet, View, Pressable, Text } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

type Props = {
  label: string;
  theme?: 'primary';
};

export default function Button({ label, theme }: Props) {
  if (theme === 'primary') {
    return (
      <View
        style={[
          styles.buttonContainer,
          { borderWidth: 4, borderColor: '#ffd33d', borderRadius: 18 },
        ]}>
        <Pressable
          style={[styles.button, { backgroundColor: '#fff' }]}
          onPress={() => alert('You pressed a button.')}>
          <FontAwesome name="picture-o" size={18} color="#25292e" style={styles.buttonIcon} />
          <Text style={[styles.buttonLabel, { color: '#25292e' }]}>{label}</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={() => alert('You pressed a button.')}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
  },
});

```
- The primary theme button uses inline styles, which overrides the styles defined in StyleSheet.create() with an object directly passed in the style prop.
- The ```Pressable``` component in the primary theme uses a ```backgroundColor``` property with a value ```#fff``` to set the button's background to white. If we add this property to the ```styles.button```, the background color value will be set for both the primary theme and the unstyled one.
- Inline styles use JavaScript and override the default styles for a specific value.

After that, modify the ```app/(tabs)/index.tsx``` file to use the theme="primary" prop on the first button.

### app/(tabs)/index.tsx
```tsc
import { View, StyleSheet } from 'react-native';

import Button from '@/components/Button';
import ImageViewer from '@/components/ImageViewer';

const PlaceholderImage = require('@/assets/images/background-image.png');

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button theme="primary" label="Choose a photo" />
        <Button label="Use this photo" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});

```
