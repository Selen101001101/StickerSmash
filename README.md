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

In the output, you"ll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you"re ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you"ll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.



# TUTORIAL : 

# Chap 1 . CREATE AN APP WITH EXPO AND REACT NATIVE

## Initialize a new Expo app

```bash
npx create-expo-app@latest StickerSmash
```

## Run reset-project script

[reset-project] script resets the app directory structure in a project and copies the previous boilerplate files from the project"s root directory to another sub-directory called app-example. We can delete it since it is not part of our main app"s structure.

```bash
npm run reset-project
```

## Run the app on mobile and web

```bash
npx expo start
```
After running the app:

- The development server will start, and you"ll see a QR code inside the terminal window.
- Scan that QR code to open the app on the device. On Android, use the Expo Go > Scan QR code option. On iOS, use the default camera app.
- To run the web app, press w in the terminal. It will open the web app in the default web browser.

## Edit the index screen

```tsx
import { Text, View,  StyleSheet } from "react-native";

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
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
  },
});

```

React Native uses the same color format as the web. It supports [hex] [triplets] (this is what #fff is), [rgba], [hsl], and [named] [colors], such as [red], [green], [blue], [peru], and [papayawhip]. For more information, see [Colors in React Native](https://reactnative.dev/docs/colors).


# Chap 2 . Add navigation

Expo Router is a file-based routing framework for React Native and web apps. It manages navigation between screens and uses the same components across multiple platforms. To get started, we need to know about the following conventions:

- [app] [directory]: A special directory containing only routes and their layouts. Any files added to this directory become a screen inside our native app and a page on the web.
[Root] [layout]: The ```app/_layout.tsx``` file. It defines shared UI elements such as headers and tab bars so they are consistent between different routes.
File name conventions: Index file names, such as ```index.tsx```, match their parent directory and do not add a path segment. For example, the index.tsx file in the app directory matches / route.
A route file exports a React component as its default value. It can use either ```.js```, ```.jsx```, ```.ts```, or ```.tsx``` extension.
Android, iOS, and web share a unified navigation structure.

This list is enough to start. For a complete list of features, see [Introduction to Expo Router](https://docs.expo.dev/router/introduction/).

## Add a new screen to the stack

Let"s create a new file named ```about.tsx``` inside the app directory. It displays the screen name when the user navigates to the ```/about``` route.

```tsx
import { Text, View, StyleSheet } from "react-native";

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
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
  },
});

```

A ```stack navigator``` is the foundation for navigating between different screens in an app : 
- On Android, a stacked route animates on top of the current screen. 
- On iOS, a stacked route animates from the right. 

Expo Router provides a Stack component to create a navigation stack to add new routes.

## Navigate between screens
We"ll use Expo Router"s Link component to navigate from the ```/index``` route to the ```/about``` route. It is a React component that renders a ```<Text>``` with a given href prop.

Import the Link component from expo-router inside ```index.tsx```.
Add a Link component after ```<Text>``` component and pass href prop with the /about route.
Add a style of fontSize, textDecorationLine, and color to Link component. It takes the same props as the ```<Text>``` component.

```tsx
import { Text, View, StyleSheet } from "react-native";
 import { Link } from "expo-router"; 

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
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
  },
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#fff",
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
import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
         tabBarActiveTintColor: "#ffd33d",
         headerStyle: {
            backgroundColor: "#25292e",
         },
         headerShadowVisible: false,
         headerTintColor: "#fff",
         tabBarStyle: {
            backgroundColor: "#25292e",
         },
      }}
      >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "home-sharp" : "home-outline"} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "information-circle" : "information-circle-outline"} color={color} size={24}/>
          ),
        }}
      />
    </Tabs>
  );
}
```

# Chap 3 . Build a screen

## Break down the screen

![Screen essential elements](/pictures_files/screen_essentials_components.png)

There are two essential elements:

- There is a large image displayed at the center of the screen
- There are two buttons in the bottom half of the screen

The first button contains multiple components. The parent element provides a yellow border, and contains an icon and text components inside a row.

![Parent Child Components](/pictures_files/parents_children_components.png)

Now that we"ve broken down the UI into smaller chunks, we"re ready to start coding.

## Display the image

We"ll use ```expo-image``` library to display the image in the app. It provides a cross-platform ```<Image>``` component to load and render an image.
To install those libraries, stop the dev server before:

```bash
npx expo install expo-image
```


To use the Image component in ```app/(tabs)/index.tsx``` file:

- Import ```Image``` from the ```expo-image``` library.
- Create a ```PlaceholderImage``` variable to use ```assets/images/background-image.png``` file as the source prop on the Image component.

```tsx
import { View, StyleSheet } from "react-native";
 import { Image } from "expo-image"; 


const PlaceholderImage = require("@/assets/images/background-image.png");


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
    backgroundColor: "#25292e",
    alignItems: "center",
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
import { ImageSourcePropType, StyleSheet } from "react-native";
import { Image } from "expo-image";

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
import { StyleSheet, View } from "react-native";

import ImageViewer from "@/components/ImageViewer"; 

const PlaceholderImage = require("@/assets/images/background-image.png");

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
    backgroundColor: "#25292e",
    alignItems: "center",
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
import { StyleSheet, View, Pressable, Text } from "react-native";

type Props = {
  label: string;
};

export default function Button({ label }: Props) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={() => alert("You pressed a button.")}>
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
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonLabel: {
    color: "#fff",
    fontSize: 16,
  },
});

```

### app/(tabs)/index.tsx

```tsx
import { View, StyleSheet } from "react-native";

import Button from "@/components/Button"; 
import ImageViewer from "@/components/ImageViewer";

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
    backgroundColor: "#25292e",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
    paddingTop: 28,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
});

```

## Enhance the reusable button component

### components/Button.tsx
```tsx
import { StyleSheet, View, Pressable, Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

type Props = {
  label: string;
  theme?: "primary";
};

export default function Button({ label, theme }: Props) {
  if (theme === "primary") {
    return (
      <View
        style={[
          styles.buttonContainer,
          { borderWidth: 4, borderColor: "#ffd33d", borderRadius: 18 },
        ]}>
        <Pressable
          style={[styles.button, { backgroundColor: "#fff" }]}
          onPress={() => alert("You pressed a button.")}>
          <FontAwesome name="picture-o" size={18} color="#25292e" style={styles.buttonIcon} />
          <Text style={[styles.buttonLabel, { color: "#25292e" }]}>{label}</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={() => alert("You pressed a button.")}>
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
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: "#fff",
    fontSize: 16,
  },
});

```
- The primary theme button uses inline styles, which overrides the styles defined in StyleSheet.create() with an object directly passed in the style prop.
- The ```Pressable``` component in the primary theme uses a ```backgroundColor``` property with a value ```#fff``` to set the button"s background to white. If we add this property to the ```styles.button```, the background color value will be set for both the primary theme and the unstyled one.
- Inline styles use JavaScript and override the default styles for a specific value.

After that, modify the ```app/(tabs)/index.tsx``` file to use the theme="primary" prop on the first button.

### app/(tabs)/index.tsx
```tsc
import { View, StyleSheet } from "react-native";

import Button from "@/components/Button";
import ImageViewer from "@/components/ImageViewer";

const PlaceholderImage = require("@/assets/images/background-image.png");

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
    backgroundColor: "#25292e",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
});

```

# Chap 4 . Use an Image Picker

React Native provides built-in components as standard building blocks, such as ```<View>```, ```<Text>```, and ```<Pressable>```. 
We are building a feature to select an image from the device"s media gallery. This isn"t possible with the core components and we"ll need a library to add this feature in our app.
We"ll use ```expo-image-picker```, a library from Expo SDK.
This library provides access to the system"s UI to select images and videos from the phone"s library.

## Install expo-image-picker

```bash
npx expo install expo-image-picker
```

Any time we install a new library in a project, we should stop the development server (```Ctrl + C```) in the terminal and run the installation command. After the installation completes, we can start the development server again by running npx expo start from the same terminal window.


## Pick an image from the device"s media library

```expo-image-picker``` provides ```launchImageLibraryAsync()``` method to display the system UI by choosing an image or a video from the device"s media library. 
We"ll use the primary themed button created in the previous chapter to select an image from the device"s media library and create a function to launch the device"s image library to implement this functionality.

In ```app/(tabs)/index.tsx```, import ```expo-image-picker```library and create a ```pickImageAsync()``` function inside the Index component:

```tsx
// ...rest of the import statements are the same
 import * as ImagePicker from "expo-image-picker";

export default function Index() {
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      console.log(result);
    } else {
      alert("You did not select any image.");
    }
  };

  // ...rest of the code is the same
}

```

- The ```launchImageLibraryAsync()``` receives an object to specify different options. This object is the ```ImagePickerOptions``` object, which we are passing when invoking the method.
- When ```allowsEditing``` is set to ```true```, the user can crop the image during the selection process on Android and iOS.
 


## Update the button component

On pressing the primary button, we'll call the ```opickImageAsync()```o function on the Button component. Update the ```onPress``` prop of the ```Button``` component in ```components/Button.tsx```:

```tsx
import { StyleSheet, View, Pressable, Text } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

type Props = {
  label: string;
  theme?: 'primary';
  onPress?: () => void;
};

export default function Button({ label, theme, onPress }: Props) {
  if (theme === 'primary') {
    return (
      <View
        style={[
          styles.buttonContainer,
          { borderWidth: 4, borderColor: '#ffd33d', borderRadius: 18 },
        ]}>
        <Pressable style={[styles.button, { backgroundColor: '#fff' }]} onPress={onPress}>
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

In ```app/(tabs)/index.tsx```, add the ```pickImageAsync()``` function to the ```onPress``` prop on the first ```<Button>```.

```tsx
// ...rest of the code above is the same

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button theme="primary" label="Choose a photo" onPress={pickImageAsync} />
        <Button label="Use this photo" />
      </View>
    </View>
  );

// ...rest of the code is the same

```



The ```pickImageAsync()``` function invokes ```ImagePicker.launchImageLibraryAsync()``` and then handles the result. The ```launchImageLibraryAsync()``` method returns an object containing information about the selected image.

The result object and the properties it contains:
### ANDROID
```JSON
{
  "assets": [
    {
      "assetId": null,
      "base64": null,
      "duration": null,
      "exif": null,
      "fileName": "ea574eaa-f332-44a7-85b7-99704c22b402.jpeg",
      "fileSize": 4513577,
      "height": 4570,
      "mimeType": "image/jpeg",
      "rotation": null,
      "type": "image",
      "uri": "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252FStickerSmash-13f21121-fc9d-4ec6-bf89-bf7d6165eb69/ImagePicker/ea574eaa-f332-44a7-85b7-99704c22b402.jpeg",
      "width": 2854
    }
  ],
  "canceled": false
}
```

### IOS

```JSON
{
  "assets": [
    {
      "assetId": "99D53A1F-FEEF-40E1-8BB3-7DD55A43C8B7/L0/001",
      "base64": null,
      "duration": null,
      "exif": null,
      "fileName": "IMG_0004.JPG",
      "fileSize": 2548364,
      "height": 1669,
      "mimeType": "image/jpeg",
      "type": "image",
      "uri": "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252FStickerSmash-13f21121-fc9d-4ec6-bf89-bf7d6165eb69/ImagePicker/ea574eaa-f332-44a7-85b7-99704c22b402.jpeg",
      "width": 1668
    }
  ],
  "canceled": false
}
```

### WEB
```JSON
{
  "assets": [
    {
      "fileName": "some-image.png",
      "height": 720,
      "mimeType": "image/png",
      "uri": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABQAA"
    }
  ],
  "canceled": false
}
```



## Use the selected image

- Declare a state variable called ```selectedImage``` using the ```useState``` hook from React. We'll use this state variable to hold the URI of the selected image.
- Update the ```pickImageAsync()``` function to save the image URI in the ```selectedImage``` state variable.
- Pass the ```selectedImage``` as a prop to the ```ImageViewer``` component.


### app/(tabs)/index.tsx
```tsx
import { View, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import { useState } from 'react';


import Button from '@/components/Button';
import ImageViewer from '@/components/ImageViewer';

const PlaceholderImage = require('@/assets/images/background-image.png');

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert('You did not select any image.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button theme="primary" label="Choose a photo" onPress={pickImageAsync} />
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

Pass the ```selectedImage``` prop to the ```ImageViewer``` component to display the selected image instead of a placeholder image.

- Modify the ```components/ImageViewer.tsx``` file to accept the ```selectedImage``` prop.
- The source of the image is getting long, so let's also move it to a separate variable called ```imageSource```.
- Pass ```imageSource``` as the value of the source prop on the ```Image``` component.

### components/ImageViewer.tsx
```tsx
import { ImageSourcePropType, StyleSheet } from 'react-native';
import { Image } from 'expo-image';

type Props = {
  imgSource: ImageSourcePropType;
  selectedImage?: string;
};

export default function ImageViewer({ imgSource, selectedImage }: Props) {
  const imageSource = selectedImage ? { uri: selectedImage } : imgSource;

  return <Image source={imageSource} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});

```

In the above snippet, the Image component uses a conditional operator to load the image s source. The picked image is a ```uri``` string, not a local asset like the placeholder image.


# Chap 5 . Create a modal

React Native provides a ```Modal``` component that presents content above the rest of your app. In general, modals are used to draw a user's attention toward critical information or guide them to take action.

## Declare a state variable to show buttons

```tsx
import { View, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

import Button from '@/components/Button';
import ImageViewer from '@/components/ImageViewer';

const PlaceholderImage = require('@/assets/images/background-image.png');

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert('You did not select any image.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage} />
      </View>
      {showAppOptions ? (
        <View />
      ) : (
        <View style={styles.footerContainer}>
          <Button theme="primary" label="Choose a photo" onPress={pickImageAsync} />
          <Button label="Use this photo" onPress={() => setShowAppOptions(true)} />
        </View>
      )}
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

And in the button:
```tsx
<Pressable style={styles.button} onPress={onPress} >
```


## Add buttons

The layout of the option buttons we'll implement in this chapter :
![layout option buttons](/pictures_files//option-button-layout.png)

It contains a parent ```View``` with three buttons aligned in a row. The button in the middle with the plus icon ```+``` will open the modal and is styled differently than the other two buttons.

Lets create a new ```CircleButton.tsx``` in the ```components``` directory:

```tsx
import { View, Pressable, StyleSheet } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

type Props = {
  onPress: () => void;
};

export default function CircleButton({ onPress }: Props) {
  return (
    <View style={styles.circleButtonContainer}>
      <Pressable style={styles.circleButton} onPress={onPress}>
        <MaterialIcons name="add" size={38} color="#25292e" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  circleButtonContainer: {
    width: 84,
    height: 84,
    marginHorizontal: 60,
    borderWidth: 4,
    borderColor: '#ffd33d',
    borderRadius: 42,
    padding: 3,
  },
  circleButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 42,
    backgroundColor: '#fff',
  },
});

```

And also a new ```IconButton.tsx```

```tsx
import { Pressable, StyleSheet, Text } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

type Props = {
  icon: keyof typeof MaterialIcons.glyphMap;
  label: string;
  onPress: () => void;
};

export default function IconButton({ icon, label, onPress }: Props) {
  return (
    <Pressable style={styles.iconButton} onPress={onPress}>
      <MaterialIcons name={icon} size={24} color="#fff" />
      <Text style={styles.iconButtonLabel}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  iconButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconButtonLabel: {
    color: '#fff',
    marginTop: 12,
  },
});

```

Next, add the new components, and some functions in ```index.tsx```:

```tsx
import { View, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

import Button from '@/components/Button';
import ImageViewer from '@/components/ImageViewer';

import IconButton from '@/components/IconButton';
import CircleButton from '@/components/CircleButton';


const PlaceholderImage = require('@/assets/images/background-image.png');

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert('You did not select any image.');
    }
  };

  const onReset = () => {
    setShowAppOptions(false);
  };

  const onAddSticker = () => {
    // we will implement this later
  };

  const onSaveImageAsync = async () => {
    // we will implement this later
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage} />
      </View>
      {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon="refresh" label="Reset" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
          </View>
        </View>
      ) : (
        <View style={styles.footerContainer}>
          <Button theme="primary" label="Choose a photo" onPress={pickImageAsync} />
          <Button label="Use this photo" onPress={() => setShowAppOptions(true)} />
        </View>
      )}
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
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});

```


## Create an emoji picker modal

The modal'll allow the user to choose an emoji from a list of available emoji. 
First, create an ```EmojiPicker.tsx``` file inside the ```components``` directory. 
This component' ll accept three props:

- ```isVisible```: a boolean value to determine the state of the modal's visibility.
- ```onClose```: a function to close the modal.
- ```children```: used later to display a list of emoji.

The EmojiPicker:

```tsx
import { Modal, View, Text, Pressable, StyleSheet } from 'react-native';
import { PropsWithChildren } from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

type Props = PropsWithChildren<{
  isVisible: boolean;
  onClose: () => void;
}>;

export default function EmojiPicker({ isVisible, children, onClose }: Props) {
  return (
    <View>
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.modalContent}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Choose a sticker</Text>
          <Pressable onPress={onClose}>
            <MaterialIcons name="close" color="#fff" size={22} />
          </Pressable>
        </View>
        {children}
      </View>
    </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    height: '25%',
    width: '100%',
    backgroundColor: '#25292e',
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    position: 'absolute',
    bottom: 0,
  },
  titleContainer: {
    height: '16%',
    backgroundColor: '#464C55',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: '#fff',
    fontSize: 16,
  },
});

```

- The ```Modal``` component displays a title and a close button.
- Its ```visible``` prop takes the value of ```isVisible``` and controls whether the modal is open or closed.
- Its ```transparent``` prop is a boolean value, which determines whether the modal fills the entire view.
- Its ```animationType``` prop determines how it enters and leaves the screen. In this case, it is sliding from the bottom of the screen.
- Lastly, the ```EmojiPicker``` invokes the onClose prop when the user presses the close ```Pressable```.

After that, modify the ```app/(tabs)/index.tsx```:

- Import the ```EmojiPicker``` component.
- Create an ```isModalVisible``` state variable with the ```useState``` hook. Its default value is ```false```, which hides the modal until the user presses the button to open it.
- Replace the comment in the ```onAddSticker()``` function to update the ```isModalVisible``` variable to ```true``` when the user presses the button. This will open the emoji picker.
- Create the ```onModalClose()``` function to update the ```isModalVisible``` state variable.
- Place the ```EmojiPicker``` component at the bottom of the ```Index``` component.

## Display a list of emoji

Let's add a horizontal list of emoji in the modal's content. We'll use the ```FlatList``` component from React Native for it.

Create a ```EmojiList.tsx``` file inside the ```components``` directory:

```tsx
import { useState } from 'react';
import { ImageSourcePropType, StyleSheet, FlatList, Platform, Pressable } from 'react-native';
import { Image } from 'expo-image';

type Props = {
  onSelect: (image: ImageSourcePropType) => void;
  onCloseModal: () => void;
};

export default function EmojiList({ onSelect, onCloseModal }: Props) {
  const [emoji] = useState<ImageSourcePropType[]>([
    require("../assets/images/emoji1.png"),
    require("../assets/images/emoji2.png"),
    require("../assets/images/emoji3.png"),
    require("../assets/images/emoji4.png"),
    require("../assets/images/emoji5.png"),
    require("../assets/images/emoji6.png"),
  ]);

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={Platform.OS === 'web'}
      data={emoji}
      contentContainerStyle={styles.listContainer}
      renderItem={({ item, index }) => (
        <Pressable
          onPress={() => {
            onSelect(item);
            onCloseModal();
          }}>
          <Image source={item} key={index} style={styles.image} />
        </Pressable>
      )}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
});

```

- The <FlatList> component above renders all the emoji images using the Image component, wrapped by a <Pressable>. Later, we will improve it so that the user can tap an emoji on the screen to make it appear as a sticker on the image.
- It also takes an array of items provided by the emoji array variable as the value of the data prop. The renderItem prop takes the item from the data and returns the item in the list. Finally, we added Image and the <Pressable> components to display this item.
- The horizontal prop renders the list horizontally instead of vertically. The ```showsHorizontalScrollIndicator``` uses React Native's ```Platform``` module to check the value and display the horizontal scroll bar on web.


Now, update the ```app/(tabs)/index.tsx``` to import the <EmojiList> component and replace the comments inside the <EmojiPicker> component :

```tsx
import { ImageSourcePropType, View, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

import Button from '@/components/Button';
import ImageViewer from '@/components/ImageViewer';
import IconButton from '@/components/IconButton';
import CircleButton from '@/components/CircleButton';
import EmojiPicker from '@/components/EmojiPicker';

import EmojiList from '@/components/EmojiList';


const PlaceholderImage = require('@/assets/images/background-image.png');

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [pickedEmoji, setPickedEmoji] = useState<ImageSourcePropType | undefined>(undefined);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert('You did not select any image.');
    }
  };

  const onReset = () => {
    setShowAppOptions(false);
  };

  const onAddSticker = () => {
    setIsModalVisible(true);
  };

  const onModalClose = () => {
    setIsModalVisible(false);
  };

  const onSaveImageAsync = async () => {
    // we will implement this later
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage} />
      </View>
      {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon="refresh" label="Reset" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
          </View>
        </View>
      ) : (
        <View style={styles.footerContainer}>
          <Button theme="primary" label="Choose a photo" onPress={pickImageAsync} />
          <Button label="Use this photo" onPress={() => setShowAppOptions(true)} />
        </View>
      )}
      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
        <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
      </EmojiPicker>
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
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});

```



##

##

##





