import type { AdActionType } from "../model/index";
export interface AudienceReport {
    audience_id?: number | string;
    account_id?: number | string;
    adgroup_id?: number | string;
    campaign_id?: number | string;
    wechat_adgroup_id?: number | string;
    wechat_campaign_id?: number | string;
    model_id?: number | string;
    audience_predict_task_id?: number | string;
    action_type?: AdActionType;
    cost?: number;
    action_count?: number;
    user_count?: number;
}
