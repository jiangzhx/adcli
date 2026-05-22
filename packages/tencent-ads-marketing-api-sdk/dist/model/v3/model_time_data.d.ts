import type { ActionType } from "../v3/index";
export interface TimeData {
    date?: string;
    hour?: number;
    domain?: string;
    action_type?: ActionType;
    custom_action?: string;
    raw_action_count?: number;
    identified_action_count?: number;
    identified_user_count?: number;
}
