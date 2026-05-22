// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { AicElementUploadV30AccountType, AicElementUploadV30ElementType, AicElementUploadV30UseAs } from "../models";

export interface AicElementUploadV30Request {
  account_id: number;
  account_type: AicElementUploadV30AccountType;
  element_name?: string;
  element_type: AicElementUploadV30ElementType;
  file?: File;
  path_name?: string;
  use_as?: AicElementUploadV30UseAs;
}

