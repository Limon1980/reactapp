import React from 'react';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import { NavBar } from './Components/NavBar/NavBar';
import { Menu } from './Components/Menu/Menu';
import { GlobalStyle } from './Components/Styled/GlobalStyle';
import { ModalItem } from './Components/Modal/ModalItem';
import { Order } from './Components/Order/Order';
import { useOpenItem } from './Components/Hooks/useOpenItem';
import { useOrders } from './Components/Hooks/useOrders';
import { useAuth } from './Components/Hooks/useAuth';
import { useTitle } from './Components/Hooks/useTitle';

const firebaseConfig = {
	apiKey: "AIzaSyDmccqWbL4kBSKwxQxYfmBAf_Pr3jfroEo",
	authDomain: "msdonalds-af34c.firebaseapp.com",
	databaseURL: "https://msdonalds-af34c.firebaseio.com",
	projectId: "msdonalds-af34c",
	storageBucket: "msdonalds-af34c.appspot.com",
	messagingSenderId: "695764138138",
	appId: "1:695764138138:web:34d1bceebb66f9654fc723"
};

firebase.initializeApp(firebaseConfig);

function App() {

	const auth = useAuth(firebase.auth);
	const openItem = useOpenItem();
	const orders = useOrders();
	useTitle(openItem.openItem);

	return (
		<>
			<GlobalStyle />
			<NavBar {...auth} />
			<Order
				{...orders}
				{...openItem}
				{...auth}
				firebaseDatabase={firebase.database}
			/>
			<Menu {...openItem} />
			{ openItem.openItem && <ModalItem {...openItem} {...orders} />}
		</>
	);
}

export default App;
