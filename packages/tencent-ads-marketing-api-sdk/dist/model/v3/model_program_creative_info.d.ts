import type { BidMode, DeriveVersionType, MaterialDeriveInfoStruct } from "../v3/index";
export interface ProgramCreativeInfo {
    material_derive_id?: number | string;
    material_derive_info?: MaterialDeriveInfoStruct[];
    bid_mode?: BidMode;
    derive_version?: DeriveVersionType;
}
