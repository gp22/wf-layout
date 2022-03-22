import { __ } from '@wordpress/i18n';
import { useBlockProps, BlockControls, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import {
	__experimentalRadio as Radio,
	__experimentalRadioGroup as RadioGroup, PanelBody, RangeControl, ToolbarGroup
} from '@wordpress/components';
import './editor.scss';

export default function Edit ({ attributes, setAttributes }) {
	const { size, split } = attributes;
	const className = `wf-stack ${size} ${split ? `has-${split}-split` : ''}`;

	return (
		<div
			{...useBlockProps( { className })}
		>
			<BlockControls>
				<ToolbarGroup>
					<RadioGroup
						id="stack-size-radiogroup"
						label={__('Stack size', 'wf-stack')}
						checked={size}
						onChange={(value) => setAttributes({ size: value })}
					>
						<Radio value="small">Small</Radio>
						<Radio value="default">Normal</Radio>
						<Radio value="large">Large</Radio>
					</RadioGroup>
				</ToolbarGroup>
			</BlockControls>
			<InspectorControls>
				<PanelBody>
					<RangeControl
						label={__('Element to split stack vertically', 'wf-stack')}
						min={0}
						max={10}
						onChange={(value) => setAttributes({ split: value })}
						value={split}
					/>
				</PanelBody>
			</InspectorControls>
			<InnerBlocks/>
		</div>
	);
}
