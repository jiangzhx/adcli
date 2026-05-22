// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_official_landing_page_component_add_request.go
// Do not edit manually.

import type { PageConfigSave, PageElement } from "../v3/index";

export interface OfficialLandingPageComponentAddRequest {
  account_id?: number | string;
  page_config?: PageConfigSave;
  page_elements?: PageElement[];
  proto_version?: number;
}

