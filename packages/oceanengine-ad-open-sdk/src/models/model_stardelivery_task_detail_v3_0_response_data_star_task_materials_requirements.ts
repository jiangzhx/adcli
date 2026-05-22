// Generated from oceanengine/ad_open_sdk_go models/model_stardelivery_task_detail_v3_0_response_data_star_task_materials_requirements.go
// Do not edit manually.

import type { StardeliveryTaskDetailV30DataStarTaskMaterialsRequirementsSpecifiedIsv, StardeliveryTaskDetailV30DataStarTaskMaterialsRequirementsVideoReviewer, StardeliveryTaskDetailV30ResponseDataStarTaskMaterialsRequirementsSpecifiedIsvDetailInner } from "../models/index";

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
  title_specifies_topic_ids?: number | string[];
  video_reviewer?: StardeliveryTaskDetailV30DataStarTaskMaterialsRequirementsVideoReviewer;
  video_standards?: string;
  vo_requirement?: string;
}

