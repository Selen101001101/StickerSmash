
# StickerSmash

![React](https://img.shields.io/badge/React-17.0.2-61DAFB?style=flat&logo=react&logoColor=white)
![Expo](https://img.shields.io/badge/Expo-43.0.0-1B1F23?style=flat&logo=expo&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-4.5.2-007ACC?style=flat&logo=typescript&logoColor=white)

## Project Description

StickerSmash is an interactive tutorial application built using Expo and React Native. This project serves as a practical guide for developers looking to learn how to create mobile applications with modern JavaScript frameworks. The app allows users to explore various emoji stickers, providing a fun and engaging way to learn about mobile UI components and state management.

### Key Features
- **Emoji Picker**: Users can select from a variety of emoji stickers.
- **Interactive Components**: Includes buttons and image viewers to demonstrate component interaction.
- **Responsive Design**: Optimized for different screen sizes using React Native's flexible layout system.

## Tech Stack

| Technology     | Description                       |
|----------------|-----------------------------------|
| ![React](https://img.shields.io/badge/React-17.0.2-61DAFB?style=flat&logo=react&logoColor=white) | A JavaScript library for building user interfaces. |
| ![Expo](https://img.shields.io/badge/Expo-43.0.0-1B1F23?style=flat&logo=expo&logoColor=white) | A framework and platform for universal React applications. |
| ![TypeScript](https://img.shields.io/badge/TypeScript-4.5.2-007ACC?style=flat&logo=typescript&logoColor=white) | A superset of JavaScript that compiles to clean JavaScript output. |

## Installation Instructions

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn
- Expo CLI (install via `npm install -g expo-cli`)

### Step-by-Step Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Selen101001101/StickerSmash.git
   cd StickerSmash
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the Expo development server:
   ```bash
   npm start
   # or
   yarn start
   ```

4. Follow the instructions in the terminal to run the app on your device or emulator.

## Usage

To run the project, use the Expo development server as described in the installation instructions. You can then open the app on your mobile device using the Expo Go app or in an emulator.

### Basic Usage Example
- Navigate to the **Emoji Picker** to select different emoji stickers.
- Use the **Image Viewer** component to display selected stickers.

## Project Structure

The project is organized into the following main directories and files:

```
StickerSmash/
├── app/
│   ├── (tabs)/
│   │   ├── _layout.tsx          # Layout component for tab navigation
│   │   ├── about.tsx            # About screen component
│   │   └── index.tsx            # Main entry point for the tab navigation
│   ├── components/
│   │   ├── Button.tsx           # Custom button component
│   │   ├── CircleButton.tsx      # Circular button component
│   │   ├── EmojiList.tsx        # Component for displaying a list of emojis
│   │   ├── EmojiPicker.tsx      # Component for selecting emojis
│   │   ├── EmojiSticker.tsx     # Component for displaying an emoji sticker
│   │   ├── IconButton.tsx       # Icon button component
│   │   └── ImageViewer.tsx      # Component for viewing images
│   ├── _layout.tsx              # Main layout component
│   └── +not-found.tsx           # Fallback component for not found pages
├── assets/                       # Contains images and fonts
│   ├── fonts/                   # Custom fonts used in the app
│   └── images/                  # Image assets used in the app
├── .gitignore                   # Git ignore file
├── app.json                     # Expo configuration file
├── eslint.config.js             # ESLint configuration file
├── package.json                 # Project dependencies and scripts
└── tsconfig.json                # TypeScript configuration file
```

### Explanation of Main Files
- **app.json**: Configuration file for Expo.
- **package.json**: Contains project metadata and dependencies.
- **tsconfig.json**: TypeScript configuration settings.
- **eslint.config.js**: Configuration for ESLint to maintain code quality.

## Contributing

We welcome contributions! If you'd like to contribute to StickerSmash, please follow these steps:
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push to your branch and submit a pull request.

Thank you for your interest in contributing to StickerSmash!
