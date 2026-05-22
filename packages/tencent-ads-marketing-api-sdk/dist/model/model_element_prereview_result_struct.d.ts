import type { PreReviewElementType, PreReviewResultDetailStruct, RiskLevel } from "../model/index";
export interface ElementPrereviewResultStruct {
    element_type?: PreReviewElementType;
    element_content?: string;
    risk_level?: RiskLevel;
    pre_review_details?: PreReviewResultDetailStruct[];
}
