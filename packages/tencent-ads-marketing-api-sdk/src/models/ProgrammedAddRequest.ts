// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import type { AdMetadataStruct, MaterialGroupCreateStruct } from "../models";

export interface ProgrammedAddRequest {
  account_id?: number | string;
  ad_metadata?: AdMetadataStruct;
  auto_derived_program_creative_switch?: boolean;
  standard_switch?: boolean;
  create_material_groups?: MaterialGroupCreateStruct[];
}

