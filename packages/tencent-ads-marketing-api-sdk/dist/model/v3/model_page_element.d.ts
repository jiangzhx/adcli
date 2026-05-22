import type { BlockButtonConfig, BlockCarouselConfig, BlockCustomPageConfig, BlockDividerConfig, BlockImageConfig, BlockShelfConfig, BlockShelfGroupConfig, BlockTextConfig, BlockVideoConfig, FixedButtonConfig, Head180PanoramaImageConfig, HeadCarouselConfig, HeadImageConfig, HeadOutsideMaterialConfig, HeadTextConfig, HeadVideoConfig, RightFixedButtonConfig } from "../v3/index";
export interface PageElement {
    element_type?: string;
    head_outside_material_config?: HeadOutsideMaterialConfig;
    head_video_config?: HeadVideoConfig;
    head_image_config?: HeadImageConfig;
    head_180_panorama_image_config?: Head180PanoramaImageConfig;
    head_carousel_config?: HeadCarouselConfig;
    head_text_config?: HeadTextConfig;
    block_video_config?: BlockVideoConfig;
    block_image_config?: BlockImageConfig;
    block_carousel_config?: BlockCarouselConfig;
    block_text_config?: BlockTextConfig;
    block_divider_config?: BlockDividerConfig;
    block_custom_page_config?: BlockCustomPageConfig;
    block_button_config?: BlockButtonConfig;
    fixed_button_config?: FixedButtonConfig;
    right_fixed_button_config?: RightFixedButtonConfig;
    block_shelf_config?: BlockShelfConfig;
    block_shelf_group_config?: BlockShelfGroupConfig;
}
