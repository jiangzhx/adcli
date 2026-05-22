import type { AdcreativeMiniProgramSpec, DynamicProductSpec, MiniGameSpec, OverrideCanvasHeadOption } from "../model/index";
export interface PreviewPageSpec {
    page_id?: number | string;
    page_url?: string;
    mini_program_spec?: AdcreativeMiniProgramSpec;
    mini_game_spec?: MiniGameSpec;
    override_canvas_head_option?: OverrideCanvasHeadOption;
    dynamic_product_spec?: DynamicProductSpec;
}
