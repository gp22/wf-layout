import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save ({ attributes }) {
	const { split } = attributes;

	return (
		<div {...useBlockProps.save({
			className: `wf-stack ${split ? `has-${split}-split` : ''}`
		})}>
			<InnerBlocks.Content/>
		</div>
	);
}
