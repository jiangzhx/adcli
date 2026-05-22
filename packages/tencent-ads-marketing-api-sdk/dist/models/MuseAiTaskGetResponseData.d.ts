import type { MuseAiResultItem, MuseAiTaskStatus, MuseAiTaskType } from "../models";
export interface MuseAiTaskGetResponseData {
    task_id?: number | string;
    task_type?: MuseAiTaskType;
    task_status?: MuseAiTaskStatus;
    results?: MuseAiResultItem[];
}
