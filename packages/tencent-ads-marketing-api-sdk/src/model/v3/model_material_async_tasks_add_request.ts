// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_material_async_tasks_add_request.go
// Do not edit manually.

import type { MaterialDetailStruct, MaterialParamType, TaskSpecsStruct, TemplateType } from "../v3/index";

export interface MaterialAsyncTasksAddRequest {
  account_id?: number | string;
  organization_id?: number | string;
  material_param_type?: MaterialParamType;
  material_type?: TemplateType;
  material_detail?: MaterialDetailStruct[];
  task_specs?: TaskSpecsStruct;
}

