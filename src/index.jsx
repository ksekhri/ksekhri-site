import React from 'react'
import { render } from 'react-dom'
import { Routes } from './Routes.jsx'

window.React = React;

render(
	<Routes />, document.getElementById('ks-app-wrapper')
);