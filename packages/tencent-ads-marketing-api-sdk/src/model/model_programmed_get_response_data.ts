// Generated from tencentad/marketing-api-go-sdk pkg/model/model_programmed_get_response_data.go
// Do not edit manually.

import type { AdMetadataStruct, MaterialGroupStruct } from "../model/index";

export interface ProgrammedGetResponseData {
  account_id?: number | string;
  material_derive_id?: number | string;
  ad_metadata?: AdMetadataStruct;
  material_groups?: MaterialGroupStruct[];
}

