// Generated from tencentad/marketing-api-go-sdk pkg/model/model_single_update_fail.go
// Do not edit manually.

import type { SingleUpdateFailedScenes } from "../model/index";

export interface SingleUpdateFail {
  user_action_set_id?: number | string;
  scenes?: SingleUpdateFailedScenes[];
  fail_reason?: string;
}

