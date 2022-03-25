import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, Text, View, PermissionsAndroid } from "react-native";
import Contacts from "react-native-contacts";

export default function App() {

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
		<View style={styles.container}>
			<Text>Open up App.tsx to start working on your app!</Text>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
