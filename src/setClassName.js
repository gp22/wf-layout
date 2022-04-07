import layouts from './layouts';

const setClassName = (attributes) => {
	const { layout, size, split } = attributes;

	switch (layout) {
		case layouts.box:
			return layouts.box;
		case layouts.center:
			return layouts.center;
		case layouts.cluster:
			return layouts.cluster;
		case layouts.stack:
			return `${layouts.stack} ${size} ${split ? `has-${split}-split` : ''}`;
		case layouts.switcher:
			return layouts.switcher;
		default:
			return '';
	}
};

export default setClassName;
