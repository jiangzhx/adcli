import type { Annotation } from "../v3/index";
export interface MaterialAiAnnotationAddRequest {
    account_id?: number | string;
    organization_id?: number | string;
    annotation_list?: Annotation[];
    resource_type?: string;
}
