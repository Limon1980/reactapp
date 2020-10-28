import React from 'react';
import styled from 'styled-components';
import dbMenu from './DBMenu';
import { ListItem } from './ListItem';
import { MainImg } from './MainImg';

const MenuStyled = styled.main`
	background-color: #ccc;
	margin-top: 80px;

`;

const H2 = styled.h2`
	margin-bottom: 20px;
	padding-left: 15px;
`;

const SectionMenu = styled.section`
	padding: 30px;
`;


export const Menu = () => (
	<MenuStyled>
		<MainImg />
		<SectionMenu>
			<H2>Бургеры</H2>
			<ListItem itemList={dbMenu.burger} />
		</SectionMenu>

		<SectionMenu>
			<H2>Закуски / Напитки</H2>
			<ListItem itemList={dbMenu.other} />
		</SectionMenu>
	</MenuStyled>
);