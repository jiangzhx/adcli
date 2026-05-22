// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_programmed_commponent_preview_get_response_data.go
// Do not edit manually.

import type { DeriveDataVersion, RspComponentGroupStruct } from "../v3/index";

export interface ProgrammedCommponentPreviewGetResponseData {
  account_id?: number | string;
  material_derive_id?: number | string;
  derive_data_version?: DeriveDataVersion;
  component_group_list?: RspComponentGroupStruct[];
}

