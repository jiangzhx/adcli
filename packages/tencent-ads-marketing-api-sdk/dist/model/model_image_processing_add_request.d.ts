import type { CropOperationSpec, ImageOperationType } from "../model/index";
export interface ImageProcessingAddRequest {
    account_id?: number | string;
    image_id?: string;
    operation_type?: ImageOperationType;
    operation_spec?: CropOperationSpec;
    file_size_max?: number;
}
