// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { ToolsClueLifeGetV2DataListActionType, ToolsClueLifeGetV2DataListAdType, ToolsClueLifeGetV2DataListAllocationStatus, ToolsClueLifeGetV2DataListClueType, ToolsClueLifeGetV2DataListConvertStatus, ToolsClueLifeGetV2DataListEffectiveState, ToolsClueLifeGetV2DataListEffectiveStateName, ToolsClueLifeGetV2DataListFlowEntrance, ToolsClueLifeGetV2DataListFlowType, ToolsClueLifeGetV2DataListFollowLifeAccountType, ToolsClueLifeGetV2DataListFollowStateName, ToolsClueLifeGetV2DataListGender, ToolsClueLifeGetV2DataListIsPrivateClue, ToolsClueLifeGetV2DataListLeadsPage, ToolsClueLifeGetV2DataListProductType, ToolsClueLifeGetV2DataListQcpxTicketStatus } from "../models";

export interface ToolsClueLifeGetV2ResponseDataListInner {
  action_type?: ToolsClueLifeGetV2DataListActionType;
  ad_type?: ToolsClueLifeGetV2DataListAdType;
  address?: string;
  advertiser_name?: string;
  age?: number;
  allocation_status?: ToolsClueLifeGetV2DataListAllocationStatus;
  author_aweme_id?: string;
  author_nickname?: string;
  author_role?: string;
  auto_city_name?: string;
  auto_province_name?: string;
  carousel_id?: number;
  city_name?: string;
  clue_id?: string;
  clue_intention?: string;
  clue_owner_name?: string;
  clue_return_status?: string;
  clue_type?: ToolsClueLifeGetV2DataListClueType;
  content_id?: string;
  convert_status?: ToolsClueLifeGetV2DataListConvertStatus;
  country_name?: string;
  county_name?: string;
  create_time_detail?: string;
  effective_state?: ToolsClueLifeGetV2DataListEffectiveState;
  effective_state_name?: ToolsClueLifeGetV2DataListEffectiveStateName;
  ext_info?: string;
  flow_entrance?: ToolsClueLifeGetV2DataListFlowEntrance;
  flow_type?: ToolsClueLifeGetV2DataListFlowType;
  follow_life_account_id?: string;
  follow_life_account_name?: string;
  follow_life_account_type?: ToolsClueLifeGetV2DataListFollowLifeAccountType;
  follow_poi_id?: string;
  follow_state_name?: ToolsClueLifeGetV2DataListFollowStateName;
  gender?: ToolsClueLifeGetV2DataListGender;
  intention_life_account_name?: string;
  intention_poi_id?: string;
  is_private_clue?: ToolsClueLifeGetV2DataListIsPrivateClue;
  leads_page?: ToolsClueLifeGetV2DataListLeadsPage;
  local_account_id?: string;
  modify_time?: string;
  name?: string;
  order_id?: number;
  order_status?: string;
  product_id?: string;
  product_name?: string;
  product_type?: ToolsClueLifeGetV2DataListProductType;
  promotion_id?: number;
  promotion_name?: string;
  province_name?: string;
  qcpx_ticket_info?: string;
  qcpx_ticket_status?: ToolsClueLifeGetV2DataListQcpxTicketStatus;
  remark?: string;
  remark_dict?: string;
  req_id?: string;
  search_bid_word?: string;
  source_craftsman_douyin_id?: string;
  source_craftsman_nickname?: string;
  staff_aweme_id?: string;
  staff_commerce_nickname?: string;
  staff_nickname?: string;
  system_tags?: string[];
  tags?: string[];
  telephone?: string;
  title_id?: number;
  tool_id?: string;
  video_id?: number;
  weixin?: string;
}

