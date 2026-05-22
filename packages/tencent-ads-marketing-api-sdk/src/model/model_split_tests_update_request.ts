// Generated from tencentad/marketing-api-go-sdk pkg/model/model_split_tests_update_request.go
// Do not edit manually.

import type { SplitTestStatus } from "../model/index";

export interface SplitTestsUpdateRequest {
  account_id?: number | string;
  split_test_id?: number | string;
  split_test_status?: SplitTestStatus;
  split_test_name?: string;
  adgroup_id_list?: number[];
}

