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
import { OrderConfirm } from './Components/Order/OrderConfirm';
import { useOrderConfirm } from './Components/Hooks/useOrderConfirm';
import { Context } from './Components/function/context';

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
	const orderConfirm = useOrderConfirm();
	useTitle(openItem.openItem);

	return (
		<Context.Provider value={{
			auth,
			openItem
		}}>
			<GlobalStyle />
			<NavBar />
			<Order
				{...orders}
				{...openItem}
				{...auth}
				{...orderConfirm}
			/>
			<Menu />
			{ openItem.openItem && <ModalItem {...openItem} {...orders} />}
			{orderConfirm.openOrderConfirm &&
				<OrderConfirm {...orders} {...auth} {...orderConfirm}
					firebaseDatabase={firebase.database} />}
		</Context.Provider>
	);
}

export default App;
