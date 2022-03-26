import React, { useEffect } from "react";
import { Text, View, PermissionsAndroid, Platform } from "react-native";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from "expo-status-bar";
import Contacts, { Contact } from "react-native-contacts";
import { ContainerStyles, TextStyles } from "./constants/Styles";

const App: React.FC = () => {

	useEffect(() => {
		if (Platform.OS === "android") {
			getReadContactsPermission().then(() => {
				getContacts();
			});
		} else {
			getContacts();
		}
	}, [])

	const getReadContactsPermission = async () => {
		try {
			const granted = await PermissionsAndroid.request(
				PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
				{
					title: "Contacts",
					message: "This app would like to view your contacts.",
					buttonNegative: "Cancel",
					buttonPositive: "OK"
				}
			);
			if (granted === PermissionsAndroid.RESULTS.GRANTED) {
				console.log("You can read the contacts");
			} else {
				console.log("Read contacts permission denied");
			}
		} catch (e) {
			console.error(e);
		}
	}

	const getContacts = () => {
		Contacts.getAll()
			.then((contacts: Contact[]) => {
				// work with contacts
				console.log('Successfully acquired contacts');
			})
			.catch((e) => {
				console.error(e);
			});

		Contacts.getCount().then((count: number) => {
			console.log(`Acquired ${count} contacts`)
		})
			.catch((e) => {
				console.error(e)
			})
	};

	return (
		<SafeAreaProvider>
			<SafeAreaView>
				<View style={ContainerStyles.APP_CONTAINER}>
					<Text style={TextStyles.PRIMARY_TEXT}>react-native-contacts test app</Text>
					<StatusBar style="dark" />
				</View>
			</SafeAreaView>
		</SafeAreaProvider>
	);
}

export default App;