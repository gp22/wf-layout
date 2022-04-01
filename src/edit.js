import { __ } from '@wordpress/i18n';
import { useBlockProps, BlockControls, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import {
	__experimentalRadio as Radio,
	__experimentalRadioGroup as RadioGroup, PanelBody, RangeControl, ToolbarDropdownMenu, ToolbarGroup
} from '@wordpress/components';
import layouts from './layouts';
import setClassName from './setClassName';
import './editor.scss';

export default function Edit ({ attributes, setAttributes }) {
	const { layout, size, split } = attributes;
	let className = setClassName(attributes);

	const dropdownControls = [
		{
			title: __('Box', 'wf-stack'),
			icon: 'arrowUp',
			onClick: () => setAttributes({ layout: layouts.box }),
		},
		{
			title: __('Stack', 'wf-stack'),
			icon: 'arrowDown',
			onClick: () => setAttributes({ layout: layouts.stack }),
		},
	];

	return (
		<div
			{...useBlockProps({ className })}
		>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarDropdownMenu
						icon="arrow-down-alt2"
						label={__('Layouts', 'wf-stack')}
						controls={dropdownControls}
					/>
					{layout === layouts.stack &&
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
					}
				</ToolbarGroup>
			</BlockControls>
			<InspectorControls>
				<PanelBody>
					{layout === layouts.stack &&
						<RangeControl
							label={__('Element to split stack vertically', 'wf-stack')}
							min={0}
							max={10}
							onChange={(value) => setAttributes({ split: value })}
							value={split}
						/>
					}
				</PanelBody>
			</InspectorControls>
			<InnerBlocks/>
		</div>
	);
}
