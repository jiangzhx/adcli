// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import type { PropertySetUserIdType, Schema } from "../models";

export interface PropertySetSchemasAddRequest {
  account_id?: number | string;
  property_set_id?: number | string;
  user_id_type?: PropertySetUserIdType;
  schemas?: Schema[];
}

