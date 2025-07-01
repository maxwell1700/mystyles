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

# MyStyles React Native Expo App

## Project Structure & Conventions

```
/assets/images/         # All PNG assets for screens
/components/           # Reusable UI components (Button, Header, etc.)
/theme/                # Theme (colors, fonts) and image exports
/screens/              # Standalone screens (Onboarding, Login, etc.)
/(tabs)/               # Tab screens for bottom navigation (HomeTab, ClosetTab, ProfileTab)
/app/                  # Expo Router layout and navigation
App.js                 # Entry point, uses Expo Router
```

## Key Files
- **theme/theme.js**: Central color palette and font definitions
- **theme/images.js**: Exports all image assets for easy import
- **components/Button.js, Header.js**: Example reusable components using the theme
- **screens/Onboarding.js**: Example screen using an image and theme
- **(tabs)/HomeTab.js, ClosetTab.js, ProfileTab.js**: Each file is a tab in the bottom navigation
- **app/_layout.js**: Expo Router layout (file-based navigation)

## Navigation
- Uses Expo Router with file-based routing
- All files in `(tabs)/` become bottom tab screens automatically

## Theming & Consistency
- All screens and components import from `theme/theme.js` for colors and fonts
- Images are imported from `theme/images.js`
- Use only components from `/components/` for UI consistency

## Adding Screens or Tabs
- To add a new tab: create a new file in `(tabs)/`
- To add a new screen: create a new file in `/screens/`
- Use the shared theme and components for all new UI

## Example Theme (theme/theme.js)
```js
export const colors = {
  primary: '#000',
  secondary: '#fff',
  accent: '#F5A623',
  background: '#fff',
  text: '#222',
};
export const fonts = {
  regular: 'System',
  bold: 'System',
};
```

## Example Image Export (theme/images.js)
```js
export default {
  onboarding1: require('../assets/images/1.png'),
  onboarding2: require('../assets/images/2.png'),
  // ...
};
```

## Example Tab Screen ((tabs)/HomeTab.js)
```js
import { View, Text } from 'react-native';
export default function HomeTab() {
  return (
    <View>
      <Text>Home Tab</Text>
    </View>
  );
}
```

## Example Onboarding Screen (screens/Onboarding.js)
```js
import { View, Image, StyleSheet } from 'react-native';
import images from '../theme/images';
import { colors } from '../theme/theme';
export default function Onboarding() {
  return (
    <View style={styles.container}>
      <Image source={images.onboarding1} style={styles.image} resizeMode="contain" />
    </View>
  );
}
```

## How to Continue
- Always use the theme and components for new UI
- Place new images in `/assets/images/` and export them in `theme/images.js`
- Add new tabs/screens as new files in the appropriate folder
- Use Expo Router for navigation

---

**Paste this README at the start of a new session to help Copilot continue with full context and consistency!**
