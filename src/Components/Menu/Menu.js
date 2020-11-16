import React, { useContext } from 'react';
import styled from 'styled-components';
import { ListItem } from './ListItem';
import { MainImg } from './MainImg';
import { useFetch } from '../Hooks/useFetch';
import { Context } from '../function/context';

const MenuStyled = styled.main`
	background-color: #ccc;
	margin-top: 80px;
	margin-left: 380px;

`;

const H2 = styled.h2`
	margin-bottom: 20px;
	padding-left: 15px;
`;

const SectionMenu = styled.section`
	padding: 30px;
`;


export const Menu = () => {

	const { openItem: { setOpenItem } } = useContext(Context);
	const res = useFetch();
	const dbMenu = res.response;

	return (
		<MenuStyled>
			<MainImg />
			{res.response ?
				<>
					<SectionMenu>
						<H2>Бургеры</H2>
						<ListItem itemList={dbMenu.burger}
							setOpenItem={setOpenItem}
						/>
					</SectionMenu>

					<SectionMenu>
						<H2>Закуски / Напитки</H2>
						<ListItem itemList={dbMenu.other}
							setOpenItem={setOpenItem}
						/>
					</SectionMenu>
				</> : res.error ?
					<div> Sorry, we will fix it soon... </div> :
					<div> Loading.... </div>
			}
		</MenuStyled >
	)
};