import layouts from './layouts';

const setClassName = (attributes) => {
	const { layout, size, split } = attributes;

	switch (layout) {
		case layouts.box:
			return `wf-box`;
		case layouts.center:
			return `wf-center`;
		case layouts.cluster:
			return `wf-cluster`;
		case layouts.stack:
			return `wf-stack ${size} ${split ? `has-${split}-split` : ''}`;
		default:
			return '';
	}
};

export default setClassName;
