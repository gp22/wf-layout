import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save ({ attributes }) {
	const { size, split } = attributes;
	const className = `wf-stack ${size} ${split ? `has-${split}-split` : ''}`;

	return (
		<div {...useBlockProps.save({
			className
		})}>
			<InnerBlocks.Content/>
		</div>
	);
}
