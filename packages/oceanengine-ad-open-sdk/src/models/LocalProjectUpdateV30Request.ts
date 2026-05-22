// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { LocalProjectUpdateV30PeakHolidays, LocalProjectUpdateV30PeakWeekDays, LocalProjectUpdateV30RequestAudience, LocalProjectUpdateV30ScheduleType } from "../models";

export interface LocalProjectUpdateV30Request {
  audience?: LocalProjectUpdateV30RequestAudience;
  bid?: number;
  budget?: number;
  consult_aweme_uid?: string;
  daily_delivery_seconds?: number;
  end_time?: string;
  high_budget_rate?: number;
  is_set_peak_budget?: boolean;
  local_account_id: number;
  market_page_ids?: number[];
  name?: string;
  peak_holidays?: LocalProjectUpdateV30PeakHolidays[];
  peak_week_days?: LocalProjectUpdateV30PeakWeekDays[];
  project_id: number;
  schedule_fixed_seconds?: number;
  schedule_time?: string;
  schedule_type?: LocalProjectUpdateV30ScheduleType;
}

