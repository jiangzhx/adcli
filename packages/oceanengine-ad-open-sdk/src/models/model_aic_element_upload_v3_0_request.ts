// Generated from oceanengine/ad_open_sdk_go models/model_aic_element_upload_v3_0_request.go
// Do not edit manually.

import type { AicElementUploadV30AccountType, AicElementUploadV30ElementType, AicElementUploadV30UseAs } from "../models/index";

export interface AicElementUploadV30Request {
  account_id: number | string;
  account_type: AicElementUploadV30AccountType;
  element_name?: string;
  element_type: AicElementUploadV30ElementType;
  file?: Blob;
  path_name?: string;
  use_as?: AicElementUploadV30UseAs;
}

