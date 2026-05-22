import type { AnnotationFailResult, AnnotationSuccessResult } from "../models";
export interface MaterialAiAnnotationAddResponseData {
    success_list?: AnnotationSuccessResult[];
    fail_list?: AnnotationFailResult[];
}
