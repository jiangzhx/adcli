import type { PreReviewElementKey, PreReviewElementType } from "../model/index";
export interface ElementStruct {
    element_type?: PreReviewElementType;
    element_content?: string;
    element_key?: PreReviewElementKey;
}
