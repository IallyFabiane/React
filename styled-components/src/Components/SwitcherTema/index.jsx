import React from 'react';
import ThemeOn from '../../assets/images/themeOn.svg';
import ThemeOff from '../../assets/images/themeOff.svg';
import { Icone } from '../UI';

export const  claro = <Icone src={ThemeOn} alt="tema claro" />;
export const escuro = <Icone src={ThemeOff} alt="tema escuro" />;

// eslint-disable-next-line import/no-anonymous-default-export
export default (({tema}) => tema ? escuro : claro);