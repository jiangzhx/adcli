// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import type { ActionType } from "../models";

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

