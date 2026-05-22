import type { PrereviewElementStruct, ReviewElementPrereviewSupplementStruct } from "../model/index";
export interface TaskTypeReviewElementPrereviewResultSpec {
    adgroup_id?: number | string;
    elements?: PrereviewElementStruct[];
    supplement?: ReviewElementPrereviewSupplementStruct[];
}
