// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { FileRebateMaterialDownloadCreateTaskV2FilteringIsAccumulation, FileRebateMaterialDownloadCreateTaskV2FilteringIsLiveRebateType, FileRebateMaterialDownloadCreateTaskV2FilteringIsValidMaterial, FileRebateMaterialDownloadCreateTaskV2FilteringMaterialIsEffective, FileRebateMaterialDownloadCreateTaskV2FilteringMaterialTag, FileRebateMaterialDownloadCreateTaskV2FilteringOperatorTag, FileRebateMaterialDownloadCreateTaskV2FilteringRebateCalcPolicyType, FileRebateMaterialDownloadCreateTaskV2FilteringRebateCalcSettlementStatsType } from "../models";

export interface FileRebateMaterialDownloadCreateTaskV2RequestFiltering {
  advertiser_id?: number;
  customer_name?: string;
  first_effective_period?: string;
  is_accumulation?: FileRebateMaterialDownloadCreateTaskV2FilteringIsAccumulation;
  is_live_rebate_type?: FileRebateMaterialDownloadCreateTaskV2FilteringIsLiveRebateType;
  is_valid_material?: FileRebateMaterialDownloadCreateTaskV2FilteringIsValidMaterial;
  material_first_effective_end_date?: string;
  material_first_effective_start_date?: string;
  material_is_effective?: FileRebateMaterialDownloadCreateTaskV2FilteringMaterialIsEffective;
  material_tag?: FileRebateMaterialDownloadCreateTaskV2FilteringMaterialTag[];
  operator_tag?: FileRebateMaterialDownloadCreateTaskV2FilteringOperatorTag;
  policy_cost_max?: number;
  policy_cost_min?: number;
  rebate_calc_first_industry_name?: string;
  rebate_calc_policy_type?: FileRebateMaterialDownloadCreateTaskV2FilteringRebateCalcPolicyType;
  rebate_calc_second_industry_name?: string;
  rebate_calc_settlement_stats_type?: FileRebateMaterialDownloadCreateTaskV2FilteringRebateCalcSettlementStatsType;
  this_period_cum_day_num?: number;
}

