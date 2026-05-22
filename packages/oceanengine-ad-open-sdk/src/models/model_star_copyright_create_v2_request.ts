// Generated from oceanengine/ad_open_sdk_go models/model_star_copyright_create_v2_request.go
// Do not edit manually.

import type { StarCopyrightCreateV2RequestObjectFieldInfo } from "../models/index";

export interface StarCopyrightCreateV2Request {
  developer_id?: number | string;
  object_field_info: StarCopyrightCreateV2RequestObjectFieldInfo;
  object_identity_id?: string;
  star_id: number | string;
  star_object_type?: number;
}

