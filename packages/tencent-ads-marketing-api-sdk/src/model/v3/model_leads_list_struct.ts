// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_leads_list_struct.go
// Do not edit manually.

import type { LeadsFollowTag, LeadsGenderType, LeadsSource, LeadsSubType, LeadsType } from "../v3/index";

export interface LeadsListStruct {
  account_id?: number | string;
  leads_id?: number | string;
  outer_leads_id?: string;
  click_id?: string;
  adgroup_id?: string;
  adgroup_name?: string;
  dynamic_creative_id?: number | string;
  dynamic_creative_name?: string;
  component_id?: string;
  component_name?: string;
  page_id?: string;
  page_name?: string;
  page_url?: string;
  leads_type?: LeadsType;
  leads_sub_type?: LeadsSubType;
  chat_id?: string;
  leads_source?: LeadsSource;
  leads_follow_tag?: LeadsFollowTag;
  outer_leads_convert_type?: string;
  outer_leads_ineffect_reason?: string;
  leads_name?: string;
  leads_telephone?: string;
  telephone_location?: string;
  leads_area?: string;
  leads_email?: string;
  leads_qq?: string;
  leads_wechat?: string;
  leads_gender?: LeadsGenderType;
  nationality?: string;
  working_years?: string;
  age?: string;
  profession?: string;
  id_number?: string;
  address?: string;
  bundle?: string;
  custom_qa?: string;
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
  is_broad_cast_leads?: string;
  nick_name?: string;
  owner_name?: string;
  owner_id?: number | string;
  all_follow_records?: string;
  correlation_factor_rank?: string;
  claim_account_id?: number | string;
  leads_response_duration?: number;
}

