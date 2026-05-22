// Generated from oceanengine/ad_open_sdk_go models/model_tools_playable_validate_v2_response_data.go
// Do not edit manually.

import type { ToolsPlayableValidateV2DataPlayableOrientation, ToolsPlayableValidateV2DataStatus } from "../models/index";

export interface ToolsPlayableValidateV2ResponseData {
  fail_message?: string;
  playable_id?: number | string;
  playable_orientation?: ToolsPlayableValidateV2DataPlayableOrientation;
  playable_url?: string;
  status?: ToolsPlayableValidateV2DataStatus;
}

