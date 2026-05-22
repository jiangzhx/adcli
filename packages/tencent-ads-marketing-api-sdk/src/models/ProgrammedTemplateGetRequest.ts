// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import type { PageInfoStruct, SortByStruct } from "../models";

export interface ProgrammedTemplateGetRequest {
  account_id?: number | string;
  material_derive_id?: number | string;
  material_preview_id?: number | string;
  template_id_list?: number[];
  key_word?: string;
  sort_by?: SortByStruct[];
  page_info?: PageInfoStruct;
}

