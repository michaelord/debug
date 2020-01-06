import {Button} from 'components/form';
import {Container} from 'components/layout';
import {getModifiers} from 'components/libs';
import {ThemeConsumer} from 'components/theme';
import {Theme} from 'components/types';
import React from 'react';
import './DebugBar.scss';

import * as Types from 'components/types';

export type DebugBarProps = {
	theme?: Theme;
};

export const DebugBar = (props: DebugBarProps) => {
	const base: string = 'debug-bar';

	const {theme = 'grey'} = props;

	const atts: object = {
		className: getModifiers(base, {}),
		'data-theme': theme,
	};

	return (
		<div {...atts}>
			<Container>
				<ThemeConsumer>
					{context => (
						<>
							<Button
								size="sm"
								label="Light"
								priority={context.theme === 'light' ? 'primary' : 'secondary'}
								onClick={(ev: MouseEvent) => {
									ev.preventDefault();
									context.setTheme('light');
								}}
								type="button"
							/>

							<Button
								size="sm"
								label="Dark"
								priority={context.theme === 'dark' ? 'primary' : 'secondary'}
								onClick={(ev: MouseEvent) => {
									ev.preventDefault();
									context.setTheme('dark');
								}}
								type="button"
							/>

							<Button
								size="sm"
								label="Primary"
								priority={context.theme === 'primary' ? 'primary' : 'secondary'}
								onClick={(ev: MouseEvent) => {
									ev.preventDefault();
									context.setTheme('primary');
								}}
								type="button"
							/>

							<Button
								size="sm"
								label="Debug"
								priority={context.debug === 'on' ? 'primary' : 'secondary'}
								onClick={(ev: MouseEvent) => {
									ev.preventDefault();
									context.toggleDebug();
								}}
								type="button"
							/>
						</>
					)}
				</ThemeConsumer>
			</Container>
		</div>
	);
};
