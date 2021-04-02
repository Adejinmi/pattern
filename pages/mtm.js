import React from 'react';
import { CenterText, GridEqual } from '../components/Styles';
import man from 'public/images/image35.png';
import Product from 'components/Product';

export default () => {
	const [products] = React.useState(new Array(9).fill(' '));
	return (
		<>
			<GridEqual count={3} gap='40px'>
				{products.map((product, i) => (
					<Product img={man} key={i} />
				))}
			</GridEqual>
		</>
	);
};
