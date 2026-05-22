import type { UrgeDimension } from "../models";
export interface ComponentElementUrgeReviewAddRequest {
    account_id?: number | string;
    dynamic_creative_id?: number | string;
    urge_dimension?: UrgeDimension;
    urge_dimension_value?: string;
}
