// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import type { AudienceGrantType, GrantSpec } from "../models";

export interface AudienceGrantRelationsAddRequest {
  account_id?: number | string;
  audience_id_list?: number[];
  grant_type?: AudienceGrantType;
  grant_spec?: GrantSpec;
}

