import React from 'react'
import { render } from 'react-dom'
import { App } from './jsx/components.jsx'

window.React = React;

render(
	<App />, document.getElementById('ks-app-wrapper')
);