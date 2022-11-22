import React from 'react';
import axios from 'axios';
import { Noun } from '../../typings';

const url = 'https://edwardtanguay.vercel.app/share/germanNouns.json';

async function NounsList() {
	const nouns: Noun[] = (await axios.get(url)).data;
	return (
		<>
			{nouns.map((noun: Noun) => {
				return (
					<div className="noun" key={noun.singular}>
						<div className="singular">{noun.article} {noun.singular} <span className="italic text-gray-400">({noun.plural})</span></div>
					</div>
				);
			})}
		</>
	);
}

export default NounsList;
