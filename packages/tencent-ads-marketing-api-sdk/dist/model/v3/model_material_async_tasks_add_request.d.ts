import type { MaterialDetailStruct, MaterialParamType, TaskSpecsStruct, TemplateType } from "../v3/index";
export interface MaterialAsyncTasksAddRequest {
    account_id?: number | string;
    organization_id?: number | string;
    material_param_type?: MaterialParamType;
    material_type?: TemplateType;
    material_detail?: MaterialDetailStruct[];
    task_specs?: TaskSpecsStruct;
}
