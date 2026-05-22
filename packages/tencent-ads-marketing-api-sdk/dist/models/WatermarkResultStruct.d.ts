import type { MaterialTaskStatus, TemplateType } from "../models";
export interface WatermarkResultStruct {
    task_id?: string;
    task_status?: MaterialTaskStatus;
    message?: string;
    material_name?: string;
    material_type?: TemplateType;
    original_material_id?: string;
    original_material_uuid?: string;
    original_material_url?: string;
    original_cover_image_url?: string;
    result_material_id?: string;
    result_material_uuid?: string;
    result_material_url?: string;
    result_cover_image_url?: string;
    create_time?: number;
    update_time?: number;
}
