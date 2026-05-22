import type { CanvasImageTextElementType, CanvasImageTextJumpMode, FloatEnterpriseWxSpec, FloatGhSpec } from "../model/index";
export interface ImageTextItemStruct {
    border_color?: string;
    title_color?: string;
    desc_color?: string;
    bg_color?: string;
    jump_mode?: CanvasImageTextJumpMode;
    material_id?: string;
    title?: string;
    desc?: string;
    sub_elem_type?: CanvasImageTextElementType;
    gh_spec?: FloatGhSpec;
    enterprise_wx_spec?: FloatEnterpriseWxSpec;
}
