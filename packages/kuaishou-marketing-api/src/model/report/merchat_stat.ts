// Generated from github.com/bububa/kwai-marketing-api/model/report/merchat_stat.go
// Do not edit manually.

import type { KuaishouId } from "../types";

export interface MerchantStat {
  report_date?: string;
  report_hour?: number;
  report_date_hour?: string;
  campaign_name?: string;
  campaign_id?: KuaishouId;
  unit_name?: string;
  unit_id?: KuaishouId;
  creative_name?: string;
  creative_id?: KuaishouId;
  cost_total?: number;
  impression?: number;
  photo_click?: number;
  photo_click_ratio?: number;
  click?: number;
  actionbar_click?: number;
  action_ratio?: number;
  merchant_photo_impression_1k_cost?: number;
  merchant_photo_click_cost?: number;
  merchant_impression_1k_cost?: number;
  merchant_click_cost?: number;
  play_3s_ratio?: number;
  play_5s_ratio?: number;
  play_end_ratio?: number;
  share?: number;
  comment?: number;
  likes?: number;
  report?: number;
  block?: number;
  negative?: number;
  merchant_reco_fans?: number;
  reco_fans_cost?: number;
  paid_order?: number;
  order_cost?: number;
  gmv?: number;
  t0_gmv?: number;
  t1_gmv?: number;
  t3_gmv?: number;
  t7_gmv?: number;
  t15_gmv?: number;
  t30_gmv?: number;
  roi?: number;
  t0Roi?: number;
  t1Roi?: number;
  t3Roi?: number;
  t7Roi?: number;
  t15Roi?: number;
  t30Roi?: number;
  t7_retention?: number;
  t30_retention?: number;
  t7_retention_ratio?: number;
  t30_retention_ratio?: number;
  t0_order_cnt?: number;
  t1_order_cnt?: number;
  t3_order_cnt?: number;
  t7_order_cnt?: number;
  t15_order_cnt?: number;
  t30_order_cnt?: number;
}
