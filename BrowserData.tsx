import {Definition} from 'components/editable';
import React, {useEffect, useState} from 'react';

import * as Types from 'components/types';

type Props = {};

const getMode = (): any => {
	const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
	const isLightMode = window.matchMedia('(prefers-color-scheme: light)').matches;
	const isNotSpecified = window.matchMedia('(prefers-color-scheme: no-preference)').matches;
	const hasNoSupport = !isDarkMode && !isLightMode && !isNotSpecified;

	return {
		isDarkMode,
		isLightMode,
		isNotSpecified,
		hasNoSupport,
	};
};

export const BrowserData = (props: Props) => {
	const [theme, setTheme] = useState('light');

	useEffect(() => {
		const colorScheme = getMode();

		if (colorScheme.isDarkMode) {
			setTheme('dark');
		}
		if (colorScheme.isLightMode) {
			setTheme('light');
		}
		if (colorScheme.isNotSpecified) {
			setTheme('not-specified');
		}
		if (colorScheme.hasNoSupport) {
			setTheme('no support');
		}
	});

	return (
		<div>
			<Definition layout="side-by-side" data={[{title: 'Theme', content: theme}]} />
		</div>
	);
};
