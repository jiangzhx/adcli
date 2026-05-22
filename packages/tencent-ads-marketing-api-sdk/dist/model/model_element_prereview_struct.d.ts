import type { PreReviewDetailStruct, PreReviewElementType, RiskLevel } from "../model/index";
export interface ElementPrereviewStruct {
    element_type?: PreReviewElementType;
    element_content?: string;
    risk_level?: RiskLevel;
    pre_review_details?: PreReviewDetailStruct[];
}
