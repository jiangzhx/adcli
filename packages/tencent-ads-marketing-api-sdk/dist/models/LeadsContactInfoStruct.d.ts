import type { LeadCluesGenderType, LeadsUserType } from "../models";
export interface LeadsContactInfoStruct {
    outer_leads_id?: string;
    leads_id?: number | string;
    click_id?: string;
    leads_user_type?: LeadsUserType;
    leads_user_wechat_appid?: string;
    leads_user_id?: string;
    leads_tel?: string;
    leads_qq?: number;
    leads_wechat?: string;
    leads_name?: string;
    leads_gender?: LeadCluesGenderType;
    leads_email?: string;
    leads_area?: string;
    bundle?: string;
    memo?: string;
    shop_name?: string;
}
