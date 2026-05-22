import type { Img2captionStruct, Img2imgStruct, MuseAiTaskType, Text2imgStruct } from "../models";
export interface MuseAiTaskAddRequest {
    account_id?: number | string;
    task_type?: MuseAiTaskType;
    output_image_num?: number;
    img2img?: Img2imgStruct;
    text2img?: Text2imgStruct;
    img2caption?: Img2captionStruct;
}
