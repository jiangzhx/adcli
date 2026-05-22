// Generated from tencentad/marketing-api-go-sdk pkg/model/model_material_group_update_struct.go
// Do not edit manually.

import type { MaterialUpdateStruct, PreviewUpdateStruct } from "../model/index";

export interface MaterialGroupUpdateStruct {
  material_group_id?: number | string;
  materials?: MaterialUpdateStruct[];
  previews?: PreviewUpdateStruct[];
}

