// Generated from tencentad/marketing-api-go-sdk pkg/model/model_response_detail_struct.go
// Do not edit manually.

import type { ClickDetailStruct, ConversionDetailStruct, DetailCompeteDetailStruct, DetailCpaDetailStruct, DetailCreativeDetailStruct, DetailFunnelStruct, DetailTargetDetailStruct, ExposureDetailStruct, OptimizeContentMainStruct } from "../model/index";

export interface ResponseDetailStruct {
  funnel?: DetailFunnelStruct;
  target_detail?: DetailTargetDetailStruct;
  compete_detail?: DetailCompeteDetailStruct;
  exposure_detail?: ExposureDetailStruct;
  click_detail?: ClickDetailStruct;
  conversion_detail?: ConversionDetailStruct;
  cpa_detail?: DetailCpaDetailStruct;
  creative_detail?: DetailCreativeDetailStruct;
  optimization?: OptimizeContentMainStruct;
}

