import type { PrereviewElementStruct, ReviewElementPrereviewSupplementStruct } from "../models";
export interface TaskTypeReviewElementPrereviewResultSpec {
    adgroup_id?: number | string;
    elements?: PrereviewElementStruct[];
    supplement?: ReviewElementPrereviewSupplementStruct[];
}
