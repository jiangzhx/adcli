// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { StardeliveryTaskDetailV30DataStarTaskMaterialsRequirementsSpecifiedIsv, StardeliveryTaskDetailV30DataStarTaskMaterialsRequirementsVideoReviewer, StardeliveryTaskDetailV30ResponseDataStarTaskMaterialsRequirementsSpecifiedIsvDetailInner } from "../models";

export interface StardeliveryTaskDetailV30ResponseDataStarTaskMaterialsRequirements {
  additional_information?: string;
  on_camera_requirement?: string;
  other_requirements?: string[];
  red_line?: string;
  sample_material_ids?: string[];
  sample_material_info?: string;
  sample_video_urls?: string[];
  specified_isv?: StardeliveryTaskDetailV30DataStarTaskMaterialsRequirementsSpecifiedIsv;
  specified_isv_detail?: StardeliveryTaskDetailV30ResponseDataStarTaskMaterialsRequirementsSpecifiedIsvDetailInner[];
  title_mentions_aweme_id?: string;
  title_requirement?: string;
  title_specifies_topic_ids?: number[];
  video_reviewer?: StardeliveryTaskDetailV30DataStarTaskMaterialsRequirementsVideoReviewer;
  video_standards?: string;
  vo_requirement?: string;
}

