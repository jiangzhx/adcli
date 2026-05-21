// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { DmpCustomAudienceReadV2DataCustomAudienceListDeliveryStatus, DmpCustomAudienceReadV2DataCustomAudienceListSource } from "../models";

export interface DmpCustomAudienceReadV2ResponseDataCustomAudienceListInner {
  cover_num?: number;
  create_time?: string;
  custom_audience_id?: number;
  data_source_id?: string;
  delivery_status?: DmpCustomAudienceReadV2DataCustomAudienceListDeliveryStatus;
  exist_pull_off_tag?: number;
  isdel?: number;
  modify_time?: string;
  name?: string;
  push_status?: number;
  source?: DmpCustomAudienceReadV2DataCustomAudienceListSource;
  status?: number;
  tag?: string;
  third_party_info?: string;
  upload_num?: number;
}

