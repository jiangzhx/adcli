// Generated from oceanengine/ad_open_sdk_go models/model_star_order_detail_v2_response_data.go
// Do not edit manually.

import type { StarOrderDetailV2ResponseDataAuthorInfo, StarOrderDetailV2ResponseDataComponentInfoInner, StarOrderDetailV2ResponseDataPaymentInfo, StarOrderDetailV2ResponseDataScriptListInner, StarOrderDetailV2ResponseDataVideoListInner } from "../models/index";

export interface StarOrderDetailV2ResponseData {
  audit_status?: number;
  author_cancel_reason?: string;
  author_cancel_status?: number;
  author_info?: StarOrderDetailV2ResponseDataAuthorInfo;
  component_info?: StarOrderDetailV2ResponseDataComponentInfoInner[];
  create_time?: number;
  finish_time?: number;
  order_id?: number | string;
  payment_info?: StarOrderDetailV2ResponseDataPaymentInfo;
  script_list?: StarOrderDetailV2ResponseDataScriptListInner[];
  status?: number;
  video_list?: StarOrderDetailV2ResponseDataVideoListInner[];
}

