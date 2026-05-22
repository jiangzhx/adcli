// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import type { RecommendedRating, SplitTestStatus } from "../models";

export interface SplitTestsGetListStruct {
  account_id?: number | string;
  split_test_id?: number | string;
  split_test_status?: SplitTestStatus;
  split_test_name?: string;
  begin_time?: number;
  end_time?: number;
  smart_expand_enabled?: boolean;
  adgroup_id_list?: number[];
  recommended_rating?: RecommendedRating;
  recommended_adgroup_id_list?: number[];
}

