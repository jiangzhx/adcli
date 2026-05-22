import type { PreReviewElementKey, PreReviewElementType } from "../v3/index";
export interface ElementStruct {
    element_type?: PreReviewElementType;
    element_content?: string;
    element_key?: PreReviewElementKey;
}
