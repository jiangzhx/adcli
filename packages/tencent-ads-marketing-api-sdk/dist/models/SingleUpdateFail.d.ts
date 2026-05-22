import type { SingleUpdateFailedScenes } from "../models";
export interface SingleUpdateFail {
    user_action_set_id?: number | string;
    scenes?: SingleUpdateFailedScenes[];
    fail_reason?: string;
}
