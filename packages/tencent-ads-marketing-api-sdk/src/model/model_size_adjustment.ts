// Generated from tencentad/marketing-api-go-sdk pkg/model/model_size_adjustment.go
// Do not edit manually.

import type { SizeAdjustmentMethodEnum, SizeType } from "../model/index";

export interface SizeAdjustment {
  target_size?: SizeType;
  size_adjustment_method?: SizeAdjustmentMethodEnum;
  color?: string;
  bg_image_id1?: string;
  bg_image_id2?: string;
}

