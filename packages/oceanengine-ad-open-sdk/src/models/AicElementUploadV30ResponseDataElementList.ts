// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { AicElementUploadV30DataElementListElementType, AicElementUploadV30DataElementListUseAs } from "../models";

export interface AicElementUploadV30ResponseDataElementList {
  create_time?: string;
  element_id: number;
  element_name: string;
  element_type?: AicElementUploadV30DataElementListElementType;
  element_url?: string;
  signature?: string;
  use_as?: AicElementUploadV30DataElementListUseAs;
}

