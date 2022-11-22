import React from 'react';
import NounsList from './NounsList';

function Nouns() {
	return (
		<>
		<h2 className="text-3xl pb-4">Nouns</h2>
			{/* @ts-ignore */}
			<NounsList />
		</>
	);
}

export default Nouns;
