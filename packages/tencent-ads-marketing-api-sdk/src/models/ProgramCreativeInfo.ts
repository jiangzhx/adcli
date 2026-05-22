// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import type { BidMode, DeriveVersionType, MaterialDeriveInfoStruct } from "../models";

export interface ProgramCreativeInfo {
  material_derive_id?: number | string;
  material_derive_info?: MaterialDeriveInfoStruct[];
  bid_mode?: BidMode;
  derive_version?: DeriveVersionType;
}

