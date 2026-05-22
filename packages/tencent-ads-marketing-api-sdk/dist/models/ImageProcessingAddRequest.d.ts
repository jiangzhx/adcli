import type { OperationSpec } from "../models";
export interface ImageProcessingAddRequest {
    account_id?: number | string;
    organization_id?: number | string;
    image_id?: string;
    operation_type?: string;
    operation_spec?: OperationSpec;
    file_size_max?: number;
}
