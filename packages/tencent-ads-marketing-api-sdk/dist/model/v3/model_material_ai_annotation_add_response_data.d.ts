import type { AnnotationFailResult, AnnotationSuccessResult } from "../v3/index";
export interface MaterialAiAnnotationAddResponseData {
    success_list?: AnnotationSuccessResult[];
    fail_list?: AnnotationFailResult[];
}
