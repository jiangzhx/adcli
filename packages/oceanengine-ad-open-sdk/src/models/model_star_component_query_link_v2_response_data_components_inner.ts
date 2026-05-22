// Generated from oceanengine/ad_open_sdk_go models/model_star_component_query_link_v2_response_data_components_inner.go
// Do not edit manually.

import type { StarComponentQueryLinkV2ResponseDataComponentsInnerLiveAttractComponent } from "../models/index";

export interface StarComponentQueryLinkV2ResponseDataComponentsInner {
  audit_ban_reason?: string;
  component_id?: number | string;
  link_android?: string;
  link_android_download?: string;
  link_ios?: string;
  link_ios_download?: string;
  link_name?: string;
  link_page_target?: number;
  link_platform?: number;
  link_platform_source?: number;
  link_status?: number;
  link_title?: string;
  link_type?: number;
  live_attract_component?: StarComponentQueryLinkV2ResponseDataComponentsInnerLiveAttractComponent;
}

