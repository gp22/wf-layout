import { __ } from '@wordpress/i18n';
import { useBlockProps, BlockControls, InnerBlocks, InspectorControls, Panel } from '@wordpress/block-editor';
import { ToolbarGroup, ToolBarButton, ToolbarDropdownMenu, PanelBody } from '@wordpress/components';
import './editor.scss';

export default function Edit () {
	return (
		<>
			<InspectorControls>
				<PanelColorSettings
					title={__('Color settings', 'wf-stack')}
					icon={'admin-appearance'}
					initialOpen={false}
					disableCustomColors={true}
					colorSettings={[
						{
							value: backgroundColor,
							onChange: setBackgroundColor,
							label: __('Background Color', 'wf-stack')
						}
					]}
				>
					<p>Inspector control...</p>
				</PanelColorSettings>
			</InspectorControls>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarDropdownMenu
						icon="arrow-down-alt2"
						label={__('Stack sizes', 'wf-stack')}
						controls={[
							{
								title: __('Small', 'wf-stack'),
								icon: 'align-wide',
							},
							{
								title: __('Normal', 'wf-stack'),
								icon: 'align-full-width',
							},
						]}
					/>
				</ToolbarGroup>
			</BlockControls>
			<div {...useBlockProps()} className={'wf-stack'}>
				<InnerBlocks/>
			</div>
		</>
	);
}
