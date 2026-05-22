// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { AicElementGetV30DataElementsElementType, AicElementGetV30DataElementsUseAs } from "../models";

export interface AicElementGetV30ResponseDataElementsInner {
  create_time?: string;
  element_id: number;
  element_name: string;
  element_type?: AicElementGetV30DataElementsElementType;
  element_url?: string;
  signature?: string;
  update_time?: string;
  use_as?: AicElementGetV30DataElementsUseAs;
}

