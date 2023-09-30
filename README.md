# REACT-NATIVE-EXPO TEMPLATE
- ### Stack:
- React Native 0.72+
- React 18.2.0
- expo 49+ expo-dev-client
- expo font, auth, splash-screen, linear-gradient
- Framer-Motion native version
- Tailwind/Nativewind
- recoil 0.7.7+
- Firebase Auth, Storage, Firestore
- Typescript 5.1+

## MAKE IT WORK LOCAL
### First steps:
- ```npx expo install``` or ```yarn install```
- create a new eas https://expo.dev/ project and init with your id 
- ```npx eas init --id 6608ed12-YOUR-test-id-739eaa```
- ```npx expo prebuild --clean```
- ```npx expo run:android``` or :ios
- ```eas build --profile development --platform android```
- go on https://expo.dev/ and download the internal distribution android app
- or ```eas build --profile preview --platform android``` and get the downloadable apk file.
- ```yarn start```

### Files to change
- ``package.json`` value :name
- to use a font of your choice in folder ``./assets/fonts/`` family like ``App.tsx`` in lines 16-24
- make sure ``projectId`` file ``app.json`` in line 35 is the one you initialized in previous step...
- create a .env file and add ``WEB_CLIENT_ID`` for auth with ``GoogleSignin``
- create a firebase project & create google services
- creace a file ``typings.d.ts`` in the route and use it for global types
