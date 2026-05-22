import type { EstimationAudienceSpec } from "../model/index";
export interface CustomAudienceEstimationsGetRequest {
    account_id?: number | string;
    type?: string;
    audience_spec?: EstimationAudienceSpec;
}
