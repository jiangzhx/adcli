// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { StarMcnProviderGetTaskDetailV2ResponseDataTaskDetailInfoRelationObjectInfoInnerObjectFieldInfoObjectNovelInfoCopyrightQualificationInner, StarMcnProviderGetTaskDetailV2ResponseDataTaskDetailInfoRelationObjectInfoInnerObjectFieldInfoObjectNovelInfoNovelAttachmentListInner } from "../models";

export interface StarMcnProviderGetTaskDetailV2ResponseDataTaskDetailInfoRelationObjectInfoInnerObjectFieldInfoObjectNovelInfo {
  author_name?: string;
  category_first_name?: string;
  category_second_name?: string;
  category_third_name?: string;
  content_file_url?: string;
  copyright_owner?: string;
  copyright_qualification?: StarMcnProviderGetTaskDetailV2ResponseDataTaskDetailInfoRelationObjectInfoInnerObjectFieldInfoObjectNovelInfoCopyrightQualificationInner[];
  gender_category?: number;
  length_type?: number;
  novel_attachment_comment?: string;
  novel_attachment_list?: StarMcnProviderGetTaskDetailV2ResponseDataTaskDetailInfoRelationObjectInfoInnerObjectFieldInfoObjectNovelInfoNovelAttachmentListInner[];
  novel_cover_url?: string;
  novel_id?: number | string;
  novel_intro?: string;
  novel_name?: string;
  total_word_count?: number;
}

