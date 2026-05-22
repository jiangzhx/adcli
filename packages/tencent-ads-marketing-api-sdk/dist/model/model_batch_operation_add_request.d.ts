import type { BatchOperationType, OperationSpec, ResourceType } from "../model/index";
export interface BatchOperationAddRequest {
    resource_type?: ResourceType;
    operation_type?: BatchOperationType;
    resource_id_list?: number[];
    operation_spec?: OperationSpec;
    account_id?: number | string;
}
