// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_element_prereview_struct.go
// Do not edit manually.

import type { PreReviewDetailStruct, PreReviewElementType, RiskLevel } from "../v3/index";

export interface ElementPrereviewStruct {
  element_type?: PreReviewElementType;
  element_content?: string;
  risk_level?: RiskLevel;
  pre_review_details?: PreReviewDetailStruct[];
}

