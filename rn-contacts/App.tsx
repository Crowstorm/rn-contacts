import React, { useEffect } from "react";
import { Text, View, PermissionsAndroid } from "react-native";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from "expo-status-bar";
import Contacts from "react-native-contacts";
import { ContainerStyles, TextStyles } from "./constants/Styles";

const App: React.FC = () => {

	useEffect(() => {
		getContacts();
	}, [])

	const getContacts = () => {
		PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
			title: "Contacts",
			message: "This app would like to view your contacts.",
			buttonPositive: "Please accept bare mortal",
		}).then(() => {
			console.log("poszlo");
			Contacts.getAll()
				.then((contacts: any) => {
					// work with contacts
					console.log(contacts);
					return "x";
				})
				.catch((e) => {
					console.log(e);
				});
		});
	};

	return (
		<SafeAreaProvider>
			<SafeAreaView>
				<View style={ContainerStyles.APP_CONTAINER}>
					<Text style={TextStyles.PRIMARY_TEXT}>Open up App.tsx to start working on your app!</Text>
					<StatusBar style="dark" />
				</View>
			</SafeAreaView>
		</SafeAreaProvider>
	);
}

export default App;