import type { MuseAiTaskStatus, MuseAiTaskType } from "../v3/index";
export interface MuseAiTaskAddResponseData {
    task_id?: number | string;
    task_type?: MuseAiTaskType;
    task_status?: MuseAiTaskStatus;
}
