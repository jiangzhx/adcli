import type { AdStatus, OtherData } from "../models";
export interface VideomakerTasksGetResponseData {
    code?: number;
    task_id?: string;
    status?: AdStatus;
    video_id?: string;
    other_data?: OtherData;
}
