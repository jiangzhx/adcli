// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import type { LeadCluesGenderType, LeadCluesLeadsType, LeadsUserType, OuterLeadsComeFrom } from "../models";

export interface LeadsImportInfoStruct {
  outer_leads_id?: string;
  leads_id?: number | string;
  leads_tel?: string;
  leads_qq?: number;
  leads_wechat?: string;
  click_id?: string;
  leads_type?: LeadCluesLeadsType;
  leads_user_id?: string;
  leads_user_type?: LeadsUserType;
  leads_user_wechat_appid?: string;
  leads_action_time?: string;
  leads_name?: string;
  leads_gender?: LeadCluesGenderType;
  leads_email?: string;
  leads_area?: string;
  bundle?: string;
  leads_convert_type?: string;
  leads_ineffect_reason?: string;
  outer_leads_convert_type?: string;
  outer_leads_ineffect_reason?: string;
  outer_leads_comefrom?: OuterLeadsComeFrom;
  memo?: string;
  wechat_agency_id?: string;
  leads_age?: string;
  leads_id_number?: string;
  leads_nationality?: string;
  leads_address?: string;
  leads_company?: string;
  leads_profession?: string;
  leads_working_years?: string;
  leads_page_id?: string;
  leads_page_name?: string;
  leads_page_url?: string;
}

