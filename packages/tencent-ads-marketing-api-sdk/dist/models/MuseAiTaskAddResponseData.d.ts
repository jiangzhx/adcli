import type { MuseAiTaskStatus, MuseAiTaskType } from "../models";
export interface MuseAiTaskAddResponseData {
    task_id?: number | string;
    task_type?: MuseAiTaskType;
    task_status?: MuseAiTaskStatus;
}
