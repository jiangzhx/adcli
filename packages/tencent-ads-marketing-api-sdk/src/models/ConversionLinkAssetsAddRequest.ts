// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import type { ConversionLinkSecondCategoryType } from "../models";

export interface ConversionLinkAssetsAddRequest {
  account_id?: number | string;
  second_category_type?: ConversionLinkSecondCategoryType;
  marketing_carrier_id?: string;
  marketing_carrier_name?: string;
  name?: string;
  conversion_link_id?: number | string;
  claim_type?: number;
  attribution_window?: number;
  feedback_id?: number | string;
  optional_og_nodes_index?: number[];
  custom_report_nodes_index?: number[];
}

