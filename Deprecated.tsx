import React, {memo, useEffect, useState} from 'react';

import './Deprecated.scss';

type DeprecatedProps = {
	name?: string;
	suggestion?: string;
};

export const Deprecated = memo((props: DeprecatedProps) => {
	const base: string = 'deprecated';
	const {name = 'unknown', suggestion = 'Unknown'} = props;

	return (
		<div className={base}>
			<h2>
				<code>{name}</code> has been deprecated, please consider using <code>{suggestion}</code>{' '}
			</h2>
		</div>
	);
});
