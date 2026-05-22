import type { MuseAiResultItem, MuseAiTaskStatus, MuseAiTaskType } from "../v3/index";
export interface MuseAiTaskGetResponseData {
    task_id?: number | string;
    task_type?: MuseAiTaskType;
    task_status?: MuseAiTaskStatus;
    results?: MuseAiResultItem[];
}
