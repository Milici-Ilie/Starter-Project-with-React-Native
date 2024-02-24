                                                                              # Cuprins #

# 1. REACT NATIVE ====== REACT NATIVE ====== REACT NATIVE ====== REACT NATIVE ====== REACT NATIVE ====== REACT NATIVE ====== REACT NATIVE ====== REACT NATIVE

# 1. REACT NATIVE ====== REACT NATIVE ====== REACT NATIVE ====== REACT NATIVE ====== REACT NATIVE ====== REACT NATIVE ====== REACT NATIVE ====== REACT NATIVE

# 1. REACT NATIVE ====== REACT NATIVE ====== REACT NATIVE ====== REACT NATIVE ====== REACT NATIVE ====== REACT NATIVE ====== REACT NATIVE ====== REACT NATIVE

# 1. REACT NATIVE ====== REACT NATIVE ====== REACT NATIVE ====== REACT NATIVE ====== REACT NATIVE ====== REACT NATIVE ====== REACT NATIVE ====== REACT NATIVE

# 1. REACT NATIVE ====== REACT NATIVE ====== REACT NATIVE ====== REACT NATIVE ====== REACT NATIVE ====== REACT NATIVE ====== REACT NATIVE ====== REACT NATIVE

# 1. REACT NATIVE ====== REACT NATIVE ====== REACT NATIVE ====== REACT NATIVE ====== REACT NATIVE ====== REACT NATIVE ====== REACT NATIVE ====== REACT NATIVE

# 1. REACT NATIVE ====== REACT NATIVE ====== REACT NATIVE ====== REACT NATIVE ====== REACT NATIVE ====== REACT NATIVE ====== REACT NATIVE ====== REACT NATIVE

# 1. Starter Project - Search on GitHUB: 'Starter Project with React Native'

    ## ✅I. -How to prepare React Native
             -What to install for React Native
             -How to create variables and apply Styles Sheet on them
             -How to create 'styles' variable, CSS styles

> 0.Zero base, install on the mobile the app Expo Go from store, it's a symbol black-white the logo of app. Works for both IOS and Android
> 1.First before starting the projects. Terminal: => 'npm install --legacy-peer-deps'
> 2.Terminal: 'npm start' ==> This opens the React Native bundler, this will get our code ready to ran on a mobile device
> s pentru a trece la build-ul de dezvoltare.
> a pentru a deschide aplicația pe Android.
> w pentru a deschide aplicația într-un browser web.
> j pentru a deschide debugger-ul.
> r pentru a reîncărca aplicația.
> m pentru a comuta meniul Expo.
> o pentru a deschide codul proiectului în editorul tău.
>
> 3. If the application is not supporting the web and is not auttomatically start a web page in the browser after the previos Terminal: 'npm start', then install this ❗❗❗'npx expo install react-native-web@~0.19.6 react-dom@18.2.0 @expo/webpack-config@^19.0.0'
>    Like wise for this demand: 'npx expo install @expo/webpack-config@^19.0.0'
>
> ----REACT COMPONENT FILE------
> Part 1: Import libraries we need to create components
> Part 2: Create a component - a function that resturns some 'JSX'
> Part 3: Create a stylesheet to style our component
> Part 4: Export the component so we can use it elsewhere in our project

[SRC/SCREEN/ComponentsScreen.js]/[App.js]

                                                                ❗❗❗ 👶👶[FIRST STEPS]👶👶 ❗❗❗

    ## ✅II. -Showing a custom component
              -Importing a file/page
              -How to connect pages

[SRC/SCREEN/HomeScreen.js]/[]

                                                           ❗❗❗ 🍮🍮[CUSTOM COMPONENTS]🍮🍮 ❗❗❗

    ## ✅III. -Building lists
               -How to build lists in React Native
               -How to add the unique 'key' to our objects/array
               -How to create a Horizontal Scrooling

> Horizontal scrooling: 'horizontal', check the 'ListScreen.js' file, the 'return(<Flatlist horizontal/>)'
> How to disable the ScroolBar if you dont want to see it: 'showsHorizontalScrollIndicator={false}'
> To create a list in React Native we need to use 'FlatList', check the 'ListScreen.js' file

[SRC/SCREENS/ListScreen.js]/[App.js]

                                                             ❗❗❗ 📃📃[BUILDING LISTS]📃📃 ❗❗❗

    ## ✅IV. -How to create Buttons
              -Buttons Types
              -How to change between pages using Buttons

> There are 2 ways of creating a button that connect with another page/file: 1.Button, simple Button. 2. TouchableOpacity: Highly customizable component that can detect a press on just about any kind of element, not necesarly to be a Button, it can be an IMG, or a text, etc.

[SRC/SCREEN/HomeScreen.js]/[]

                                                             ❗❗❗ 🧈🧈[BUTTON TYPES]🧈🧈 ❗❗❗

    ## ✅V. -How to navigate between files/pages
             -How to navigate when the use click the Buttons
             -Components reuse with Props

> To navigate between files we need to pass the 'props' in our files to make effect

[SRC/SCREEN/HomeScreen.js]/[and.all.the.connection.files]

                                                                ❗❗❗ 🧭🧭[NAVIGATION]🧭🧭 ❗❗❗

    ## ✅VI. -How to build different components
              -How to add IMG's
              -Parent-Child Relationships
              -How to pass 'props' between components/duplicated components

[SRC/COMPONENTS/ImageDetail.js]/[SRC/SCREENS/ImageScreen.js]

                                                                ❗❗❗ 🌠🌠[DIFFERENT COMPONENTS]🌠🌠 ❗❗❗

    ## ✅VII. -How to display Images
               -Displaying IMG's

[SRC/COMPONENTS/ImageDetail.js]/[SRC/SCREENS/ImageScreen.js]

                                                                ❗❗❗ 🗻🗻[DISPLAYING IMAGES]🗻🗻 ❗❗❗

    ## ✅VIII. -State in Components
                -How to create a counter
                -How to use State, rerender state data
                -How to add random color when pressing a button/ rerender function

> There are 2 types of systems: 1. Props (System to pass data from a parent component to a child component). 2. State (System to track a piece of data that will change over time. If that data changes, our app will 'rerender')

[SRC/SCREENS/CounterScreen.js]/[App.js]/[SRC/SCREENS/HomeScreen.js]/[SRC/SCREENS/ColorScreen.js]

                                                                ❗❗❗ 🗽🗽[COUNTER-PROPS & STATE]🗽🗽 ❗❗❗

    ## ✅IX. -How to make multiple changes/ rerenders/ 3 pieces of state 'useState'
              -How to change a content conected with multiple choices
              -How to connect more actions to a single result
              -How to create a reusable State Variable and passing as a 'props' from the parent file to the children files
              -Passing Callbacks to Children

> In this small App we want to create 6 Buttons, 2 Buttons for each color (red, green, blue), 1 Button for 'More Red' & 'Less Red', etc for green and blue. When the Buttons are pressed to square/content from bellow will change depending on our actions made on those Buttons

[SRC/SCREENS/SquareScreen.js]/[SRC/COMPONENTS/ColorCounter.js]

                                                                ❗❗❗ 🚼🚼[MULTIPLE RERENDERS]🚼🚼 ❗❗❗

    ## ✅X. -How to create a condition for not going above a limit. For ex: not bellow 0 or above 255
             -How to create TERNARY OPERATOR
             How to use 'IF' 'ELSE' statement

[SRC/SCREEN/SquareScreen.js]/[]

                                                                ❗❗❗ 🐢🐢[TERNARY OPERATION]🐢🐢 ❗❗❗

    ## ✅XI. -Implementing REDUCER

> NOTE!!! every time when we need some dynamic changes we use or 'useState' or 'Reducer', on or another to achieve our goal
> EXERCISE with 'useReducer' at Lesson.61 'Exercise Solution'

[SRC/SCREEN/SquareScreen2.js]/[SRC/SCREEN/CounterScreen]

                                                                       ❗❗❗ 🏮🏮[REDUCER]🏮🏮 ❗❗❗

    ## ✅XII. -How to create an Input text where the User types his name or any string
               -How to take values from the Input text and display it somewhere else

[]/[]

                                                                       ❗❗❗ 💉💉[INPUT TEXT]💉💉 ❗❗❗

    ## ✅XIII. subtitlu

    ## ✅XIV. subtitlu

    ## ✅XV. subtitlu

    ## ✅XVI. subtitlu

    ## ✅XVII. subtitlu

    ## ✅XVIII. subtitlu

    ## ✅XIX. subtitlu

    ## ✅XX. subtitlu

# 2. Titlu

    ## ✅I. subtitlu

    ## ✅II. subtitlu

    ## ✅III. subtitlu

    ## ✅IV. subtitlu

    ## ✅V. subtitlu

    ## ✅VI. subtitlu

    ## ✅VII. subtitlu

    ## ✅VIII. subtitlu

    ## ✅IX. subtitlu

    ## ✅X. subtitlu

    ## ✅XI. subtitlu

    ## ✅XII. subtitlu

    ## ✅XIII. subtitlu

    ## ✅XIV. subtitlu

    ## ✅XV. subtitlu

    ## ✅XVI. subtitlu

    ## ✅XVII. subtitlu

    ## ✅XVIII. subtitlu

    ## ✅XIX. subtitlu

    ## ✅XX. subtitlu

# 3. Titlu

    ## ✅I. subtitlu

    ## ✅II. subtitlu

    ## ✅III. subtitlu

    ## ✅IV. subtitlu

    ## ✅V. subtitlu

    ## ✅VI. subtitlu

    ## ✅VII. subtitlu

    ## ✅VIII. subtitlu

    ## ✅IX. subtitlu

    ## ✅X. subtitlu

    ## ✅XI. subtitlu

    ## ✅XII. subtitlu

    ## ✅XIII. subtitlu

    ## ✅XIV. subtitlu

    ## ✅XV. subtitlu

    ## ✅XVI. subtitlu

    ## ✅XVII. subtitlu

    ## ✅XVIII. subtitlu

    ## ✅XIX. subtitlu

    ## ✅XX. subtitlu

# 4. Titlu

    ## ✅I. subtitlu

    ## ✅II. subtitlu

    ## ✅III. subtitlu

    ## ✅IV. subtitlu

    ## ✅V. subtitlu

    ## ✅VI. subtitlu

    ## ✅VII. subtitlu

    ## ✅VIII. subtitlu

    ## ✅IX. subtitlu

    ## ✅X. subtitlu

    ## ✅XI. subtitlu

    ## ✅XII. subtitlu

    ## ✅XIII. subtitlu

    ## ✅XIV. subtitlu

    ## ✅XV. subtitlu

    ## ✅XVI. subtitlu

    ## ✅XVII. subtitlu

    ## ✅XVIII. subtitlu

    ## ✅XIX. subtitlu

    ## ✅XX. subtitlu

# 5. Titlu

    ## ✅I. subtitlu

    ## ✅II. subtitlu

    ## ✅III. subtitlu

    ## ✅IV. subtitlu

    ## ✅V. subtitlu

    ## ✅VI. subtitlu

    ## ✅VII. subtitlu

    ## ✅VIII. subtitlu

    ## ✅IX. subtitlu

    ## ✅X. subtitlu

    ## ✅XI. subtitlu

    ## ✅XII. subtitlu

    ## ✅XIII. subtitlu

    ## ✅XIV. subtitlu

    ## ✅XV. subtitlu

    ## ✅XVI. subtitlu

    ## ✅XVII. subtitlu

    ## ✅XVIII. subtitlu

    ## ✅XIX. subtitlu

    ## ✅XX. subtitlu

# 6. Titlu

    ## ✅I. subtitlu

    ## ✅II. subtitlu

    ## ✅III. subtitlu

    ## ✅IV. subtitlu

    ## ✅V. subtitlu

    ## ✅VI. subtitlu

    ## ✅VII. subtitlu

    ## ✅VIII. subtitlu

    ## ✅IX. subtitlu

    ## ✅X. subtitlu

    ## ✅XI. subtitlu

    ## ✅XII. subtitlu

    ## ✅XIII. subtitlu

    ## ✅XIV. subtitlu

    ## ✅XV. subtitlu

    ## ✅XVI. subtitlu

    ## ✅XVII. subtitlu

    ## ✅XVIII. subtitlu

    ## ✅XIX. subtitlu

    ## ✅XX. subtitlu

# 7. Titlu

    ## ✅I. subtitlu

    ## ✅II. subtitlu

    ## ✅III. subtitlu

    ## ✅IV. subtitlu

    ## ✅V. subtitlu

    ## ✅VI. subtitlu

    ## ✅VII. subtitlu

    ## ✅VIII. subtitlu

    ## ✅IX. subtitlu

    ## ✅X. subtitlu

    ## ✅XI. subtitlu

    ## ✅XII. subtitlu

    ## ✅XIII. subtitlu

    ## ✅XIV. subtitlu

    ## ✅XV. subtitlu

    ## ✅XVI. subtitlu

    ## ✅XVII. subtitlu

    ## ✅XVIII. subtitlu

    ## ✅XIX. subtitlu

    ## ✅XX. subtitlu

# 8. Titlu

    ## ✅I. subtitlu

    ## ✅II. subtitlu

    ## ✅III. subtitlu

    ## ✅IV. subtitlu

    ## ✅V. subtitlu

    ## ✅VI. subtitlu

    ## ✅VII. subtitlu

    ## ✅VIII. subtitlu

    ## ✅IX. subtitlu

    ## ✅X. subtitlu

    ## ✅XI. subtitlu

    ## ✅XII. subtitlu

    ## ✅XIII. subtitlu

    ## ✅XIV. subtitlu

    ## ✅XV. subtitlu

    ## ✅XVI. subtitlu

    ## ✅XVII. subtitlu

    ## ✅XVIII. subtitlu

    ## ✅XIX. subtitlu

    ## ✅XX. subtitlu

# 9. Titlu

    ## ✅I. subtitlu

    ## ✅II. subtitlu

    ## ✅III. subtitlu

    ## ✅IV. subtitlu

    ## ✅V. subtitlu

    ## ✅VI. subtitlu

    ## ✅VII. subtitlu

    ## ✅VIII. subtitlu

    ## ✅IX. subtitlu

    ## ✅X. subtitlu

    ## ✅XI. subtitlu

    ## ✅XII. subtitlu

    ## ✅XIII. subtitlu

    ## ✅XIV. subtitlu

    ## ✅XV. subtitlu

    ## ✅XVI. subtitlu

    ## ✅XVII. subtitlu

    ## ✅XVIII. subtitlu

    ## ✅XIX. subtitlu

    ## ✅XX. subtitlu

# 10. Titlu

    ## ✅I. subtitlu

    ## ✅II. subtitlu

    ## ✅III. subtitlu

    ## ✅IV. subtitlu

    ## ✅V. subtitlu

    ## ✅VI. subtitlu

    ## ✅VII. subtitlu

    ## ✅VIII. subtitlu

    ## ✅IX. subtitlu

    ## ✅X. subtitlu

    ## ✅XI. subtitlu

    ## ✅XII. subtitlu

    ## ✅XIII. subtitlu

    ## ✅XIV. subtitlu

    ## ✅XV. subtitlu

    ## ✅XVI. subtitlu

    ## ✅XVII. subtitlu

    ## ✅XVIII. subtitlu

    ## ✅XIX. subtitlu

    ## ✅XX. subtitlu

# 11. Titlu

    ## ✅I. subtitlu

    ## ✅II. subtitlu

    ## ✅III. subtitlu

    ## ✅IV. subtitlu

    ## ✅V. subtitlu

    ## ✅VI. subtitlu

    ## ✅VII. subtitlu

    ## ✅VIII. subtitlu

    ## ✅IX. subtitlu

    ## ✅X. subtitlu

    ## ✅XI. subtitlu

    ## ✅XII. subtitlu

    ## ✅XIII. subtitlu

    ## ✅XIV. subtitlu

    ## ✅XV. subtitlu

    ## ✅XVI. subtitlu

    ## ✅XVII. subtitlu

    ## ✅XVIII. subtitlu

    ## ✅XIX. subtitlu

    ## ✅XX. subtitlu

# 12. Titlu

    ## ✅I. subtitlu

    ## ✅II. subtitlu

    ## ✅III. subtitlu

    ## ✅IV. subtitlu

    ## ✅V. subtitlu

    ## ✅VI. subtitlu

    ## ✅VII. subtitlu

    ## ✅VIII. subtitlu

    ## ✅IX. subtitlu

    ## ✅X. subtitlu

    ## ✅XI. subtitlu

    ## ✅XII. subtitlu

    ## ✅XIII. subtitlu

    ## ✅XIV. subtitlu

    ## ✅XV. subtitlu

    ## ✅XVI. subtitlu

    ## ✅XVII. subtitlu

    ## ✅XVIII. subtitlu

    ## ✅XIX. subtitlu

    ## ✅XX. subtitlu

# 13. Titlu

    ## ✅I. subtitlu

    ## ✅II. subtitlu

    ## ✅III. subtitlu

    ## ✅IV. subtitlu

    ## ✅V. subtitlu

    ## ✅VI. subtitlu

    ## ✅VII. subtitlu

    ## ✅VIII. subtitlu

    ## ✅IX. subtitlu

    ## ✅X. subtitlu

    ## ✅XI. subtitlu

    ## ✅XII. subtitlu

    ## ✅XIII. subtitlu

    ## ✅XIV. subtitlu

    ## ✅XV. subtitlu

    ## ✅XVI. subtitlu

    ## ✅XVII. subtitlu

    ## ✅XVIII. subtitlu

    ## ✅XIX. subtitlu

    ## ✅XX. subtitlu

# 14. Titlu

    ## ✅I. subtitlu

    ## ✅II. subtitlu

    ## ✅III. subtitlu

    ## ✅IV. subtitlu

    ## ✅V. subtitlu

    ## ✅VI. subtitlu

    ## ✅VII. subtitlu

    ## ✅VIII. subtitlu

    ## ✅IX. subtitlu

    ## ✅X. subtitlu

    ## ✅XI. subtitlu

    ## ✅XII. subtitlu

    ## ✅XIII. subtitlu

    ## ✅XIV. subtitlu

    ## ✅XV. subtitlu

    ## ✅XVI. subtitlu

    ## ✅XVII. subtitlu

    ## ✅XVIII. subtitlu

    ## ✅XIX. subtitlu

    ## ✅XX. subtitlu

# 15. Titlu

    ## ✅I. subtitlu

    ## ✅II. subtitlu

    ## ✅III. subtitlu

    ## ✅IV. subtitlu

    ## ✅V. subtitlu

    ## ✅VI. subtitlu

    ## ✅VII. subtitlu

    ## ✅VIII. subtitlu

    ## ✅IX. subtitlu

    ## ✅X. subtitlu

    ## ✅XI. subtitlu

    ## ✅XII. subtitlu

    ## ✅XIII. subtitlu

    ## ✅XIV. subtitlu

    ## ✅XV. subtitlu

    ## ✅XVI. subtitlu

    ## ✅XVII. subtitlu

    ## ✅XVIII. subtitlu

    ## ✅XIX. subtitlu

    ## ✅XX. subtitlu

# 16. Titlu

    ## ✅I. subtitlu

    ## ✅II. subtitlu

    ## ✅III. subtitlu

    ## ✅IV. subtitlu

    ## ✅V. subtitlu

    ## ✅VI. subtitlu

    ## ✅VII. subtitlu

    ## ✅VIII. subtitlu

    ## ✅IX. subtitlu

    ## ✅X. subtitlu

    ## ✅XI. subtitlu

    ## ✅XII. subtitlu

    ## ✅XIII. subtitlu

    ## ✅XIV. subtitlu

    ## ✅XV. subtitlu

    ## ✅XVI. subtitlu

    ## ✅XVII. subtitlu

    ## ✅XVIII. subtitlu

    ## ✅XIX. subtitlu

    ## ✅XX. subtitlu

# 17. Titlu

    ## ✅I. subtitlu

    ## ✅II. subtitlu

    ## ✅III. subtitlu

    ## ✅IV. subtitlu

    ## ✅V. subtitlu

    ## ✅VI. subtitlu

    ## ✅VII. subtitlu

    ## ✅VIII. subtitlu

    ## ✅IX. subtitlu

    ## ✅X. subtitlu

    ## ✅XI. subtitlu

    ## ✅XII. subtitlu

    ## ✅XIII. subtitlu

    ## ✅XIV. subtitlu

    ## ✅XV. subtitlu

    ## ✅XVI. subtitlu

    ## ✅XVII. subtitlu

    ## ✅XVIII. subtitlu

    ## ✅XIX. subtitlu

    ## ✅XX. subtitlu

    ## ✅XXI. subtitlu
    ## ✅XXII. subtitlu
    ## ✅XXIII. subtitlu
    ## ✅XXIV. subtitlu
    ## ✅XXV. subtitlu
    ## ✅XXVI. subtitlu
    ## ✅XXVII. subtitlu
    ## ✅XXVIII. subtitlu
    ## ✅XXIX. subtitlu
    ## ✅XXX. subtitlu
    ## ✅XXXI. subtitlu
    ## ✅XXXII. subtitlu
    ## ✅XXXIII. subtitlu
    ## ✅XXXIV. subtitlu
    ## ✅XXXV. subtitlu
    ## ✅XXXVI. subtitlu
    ## ✅XXXVII. subtitlu
    ## ✅XXXVIII. subtitlu
    ## ✅XXXIX. subtitlu
    ## ✅XL. subtitlu
