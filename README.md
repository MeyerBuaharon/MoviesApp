# IsraCard Home Task - Movie app

## App architecture seperated by components
The following tree shows the structure of the components in the whole app.

- App
  - Drawer
	- Home
	  - AuthScreen
	- Movies 
	    - MainMoviesContainer
			- DetailedMovieModal
			  	- AddToFavorite
	- Favorites 
	  	- MainFavoritesContainer
	      	- DetailedMovieModal
		      	- RemoveFromFavorite 
	- LogOut


## Tech stac
1. React-Native
2. react-navigation
3. reduxjs/toolkit
4. Redux (react-redux)
5. Redux-presist
6. expo-google-app-auth
7. styled-components
8. react-native-community/async-storage (used to manage favorites)


##### Redux
The state manager has been used for managing globaly the whole state of the app.
The state contains:
1. **Movies** Array containing all of the relevant information about the movies currently displaying on the main app.
2. **favorites** array containing all the favorites Movies added by the users. Each item is a Movie object with all the relevant information to displayed it on the favorites page.
3. **fetchApiState** is going to show the state of the fetch calls to the Movies API. 
Posible values are: *LOADING* | *SUCCESS* | *FAILED*.

## Redux reducers and actions
### Actions:
- **fetchMovies**: This action will fetch all the movies from TMDB API.
- **addToFavorites.js**: This action will send a movie object given as parameter.
- **removeFromFavorites.js**: This action will remove a favorite movie which equals the movie id passed as parameter.

### Reducers:
- **movies**: This reducer will handle the fetch movies actions.
- **favorites**: This reducer will handle the  add to favorite and remove from favorite actions.


## External Api's
- TMDB API
- react-redux
- redux
- redux-persist


## Time spend
The project has tooked me 2 days. I started with all the fetching and rendering data part for the first 6 hours.
The other time I have, I used for the app design and making it responsive.

## Things to improve

- Adding global styles to the project, so I could reuse it and make the code more readable instead of writing fixed numbers.(e.g. background: ${({theme})=>theme.lightBlue})
- Making it works well with IOS users.

## Project Setup

In order to start the project:
	- Open terminal .
	- Type: yarn -> yarn start .
	- Scan the QR code that given with your mobile device .
	- or open emulator and press 'a' on terminal to set it on emulator .

	
## APK LINK DOWNLOAD ##

## IMPORTANT ## - usually the apk doesnt work because expo is abit problematic, I'd preffer if you run the app, download expo and Scan the QR code.


1. https://exp-shell-app-assets.s3.us-west-1.amazonaws.com/android/%40shonp/IsraCard_Test-7f0aceb525814b1aab34b238fa466a29-signed.apk
2. https://exp-shell-app-assets.s3.us-west-1.amazonaws.com/android/%40meir23/IsraCard_Test-f149bf7bcd3640898871ac53436fd7bf-signed.apk
