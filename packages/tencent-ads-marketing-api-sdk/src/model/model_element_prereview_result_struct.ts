// Generated from tencentad/marketing-api-go-sdk pkg/model/model_element_prereview_result_struct.go
// Do not edit manually.

import type { PreReviewElementType, PreReviewResultDetailStruct, RiskLevel } from "../model/index";

export interface ElementPrereviewResultStruct {
  element_type?: PreReviewElementType;
  element_content?: string;
  risk_level?: RiskLevel;
  pre_review_details?: PreReviewResultDetailStruct[];
}

