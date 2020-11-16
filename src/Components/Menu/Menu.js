import React from 'react';
import styled from 'styled-components';
import { ListItem } from './ListItem';
import { MainImg } from './MainImg';
// import { useFetch } from '../Hooks/useFetch';

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


export const Menu = ({ setOpenItem, dbMenu }) => {

	// const res = useFetch();
	// const dbMenu = res.response;

	return (
		<MenuStyled>
			<MainImg />
			{dbMenu ?
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
				</> :
				<div> Loading.... </div>
			}
		</MenuStyled >
	)
};