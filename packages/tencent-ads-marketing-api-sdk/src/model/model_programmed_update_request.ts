// Generated from tencentad/marketing-api-go-sdk pkg/model/model_programmed_update_request.go
// Do not edit manually.

import type { MaterialGroupUpdateStruct } from "../model/index";

export interface ProgrammedUpdateRequest {
  account_id?: number | string;
  material_derive_id?: number | string;
  auto_derived_program_creative_switch?: boolean;
  standard_switch?: boolean;
  update_material_groups?: MaterialGroupUpdateStruct[];
}

