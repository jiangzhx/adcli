// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_program_creative_info.go
// Do not edit manually.

import type { BidMode, DeriveVersionType, MaterialDeriveInfoStruct } from "../v3/index";

export interface ProgramCreativeInfo {
  material_derive_id?: number | string;
  material_derive_info?: MaterialDeriveInfoStruct[];
  bid_mode?: BidMode;
  derive_version?: DeriveVersionType;
}

