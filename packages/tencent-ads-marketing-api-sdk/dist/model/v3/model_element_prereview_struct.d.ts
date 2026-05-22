import type { PreReviewDetailStruct, PreReviewElementType, RiskLevel } from "../v3/index";
export interface ElementPrereviewStruct {
    element_type?: PreReviewElementType;
    element_content?: string;
    risk_level?: RiskLevel;
    pre_review_details?: PreReviewDetailStruct[];
}
