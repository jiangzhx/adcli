import type { SizeAdjustmentMethodEnum, SizeType } from "../model/index";
export interface SizeAdjustment {
    target_size?: SizeType;
    size_adjustment_method?: SizeAdjustmentMethodEnum;
    color?: string;
    bg_image_id1?: string;
    bg_image_id2?: string;
}
