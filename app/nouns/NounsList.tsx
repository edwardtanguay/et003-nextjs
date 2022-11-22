import React from 'react';
import axios from 'axios';
import { Noun } from '../../typings';
import Link from 'next/link';

const url = 'https://edwardtanguay.vercel.app/share/germanNouns.json';

async function NounsList() {
	const nouns: Noun[] = (await axios.get(url)).data;
	return (
		<>
			{nouns.map((noun: Noun) => {
				return (
					<div className="noun" key={noun.singular}>
						<div className="singular">
							<Link href={`/nouns/${noun.singular}`}>
								{noun.singular}
							</Link>
						</div>
					</div>
				);
			})}
		</>
	);
}

export default NounsList;
