import React from 'react';
import styled from 'styled-components';
import img from '../image/banner.png';

const Img = styled.div`
    width: 100%;
		height: 210px;
    background: url(${img}) no-repeat center center/cover;
`;

export const MainImg = () => {
	return <Img></Img>;
};