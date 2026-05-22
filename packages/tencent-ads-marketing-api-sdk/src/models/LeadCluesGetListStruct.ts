// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import type { LeadCluesGenderType, LeadCluesLeadsType, LeadsUserType } from "../models";

export interface LeadCluesGetListStruct {
  account_id?: number | string;
  leads_id?: number | string;
  outer_leads_id?: string;
  click_id?: string;
  wechat_appid?: string;
  agency_id?: string;
  agency_name?: string;
  campaign_id?: number | string;
  campaign_name?: string;
  adgroup_id?: string;
  adgroup_name?: string;
  creative_id?: string;
  creative_name?: string;
  ad_id?: number | string;
  ad_name?: string;
  adcreative_id?: number | string;
  adcreative_name?: string;
  component_id?: string;
  component_name?: string;
  page_id?: string;
  page_name?: string;
  page_url?: string;
  leads_type?: LeadCluesLeadsType;
  leads_sub_type?: string;
  chat_id?: string;
  leads_source?: string;
  leads_potential_score?: string;
  leads_follow_tag?: string;
  outer_leads_convert_type?: string;
  outer_leads_ineffect_reason?: string;
  leads_user_id?: string;
  leads_user_type?: LeadsUserType;
  leads_user_wechat_appid?: string;
  leads_name?: string;
  leads_telephone?: string;
  telephone_location?: string;
  leads_area?: string;
  leads_email?: string;
  leads_qq?: string;
  leads_wechat?: string;
  leads_gender?: LeadCluesGenderType;
  nationality?: string;
  working_years?: string;
  age?: string;
  profession?: string;
  id_number?: string;
  address?: string;
  bundle?: string;
  pos_type?: number;
  leads_create_time?: string;
  leads_action_time?: string;
  leads_tags?: string;
  shop_name?: string;
  shop_address?: string;
  call_middle_num?: string;
  call_consumer_hotline?: string;
  call_touch_tag?: string;
  call_duration?: string;
  call_record_url?: string;
  layer_form_content?: string;
  nick_name?: string;
  is_broad_cast_leads?: string;
  owner_name?: string;
  owner_id?: number | string;
  all_follow_records?: string;
  claim_advertiser_id?: number | string;
}

