// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { QianchuanDmpAudiencesGetV10DataRetargetingTagsHasOfflineTag, QianchuanDmpAudiencesGetV10DataRetargetingTagsIsCommon, QianchuanDmpAudiencesGetV10DataRetargetingTagsRetargetingTagsOp, QianchuanDmpAudiencesGetV10DataRetargetingTagsSource } from "../models";

export interface QianchuanDmpAudiencesGetV10ResponseDataRetargetingTagsInner {
  cover_num?: number;
  has_offline_tag?: QianchuanDmpAudiencesGetV10DataRetargetingTagsHasOfflineTag;
  is_common?: QianchuanDmpAudiencesGetV10DataRetargetingTagsIsCommon;
  name?: string;
  retargeting_tags_id?: number | string;
  retargeting_tags_op?: QianchuanDmpAudiencesGetV10DataRetargetingTagsRetargetingTagsOp;
  retargeting_tags_tip?: string;
  source?: QianchuanDmpAudiencesGetV10DataRetargetingTagsSource;
  status?: number;
}

