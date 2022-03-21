import { __ } from '@wordpress/i18n';
import { useBlockProps, BlockControls, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { ToolbarGroup, ToolBarButton, ToolbarDropdownMenu, PanelBody, RangeControl } from '@wordpress/components';
import './editor.scss';

export default function Edit ({ attributes, setAttributes }) {
	const { split = 0 } = attributes;
	const onChangeSplit = (newSplit) => {
		setAttributes({ split: newSplit });
	};

	return (
		<div {...useBlockProps({
			className: `wf-stack ${split ? `has-${split}-split` : ''}`
		})} >
			<InspectorControls>
				<PanelBody>
					<RangeControl
						label={__('Element to split stack vertically', 'wf-stack')}
						min={0}
						max={10}
						onChange={onChangeSplit}
						value={split}
					/>
				</PanelBody>
			</InspectorControls>
			<InnerBlocks/>
		</div>
	);
}
