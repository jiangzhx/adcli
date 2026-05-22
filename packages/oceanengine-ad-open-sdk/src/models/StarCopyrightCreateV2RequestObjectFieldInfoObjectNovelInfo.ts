// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { StarCopyrightCreateV2RequestObjectFieldInfoObjectNovelInfoCopyrightQualificationInner, StarCopyrightCreateV2RequestObjectFieldInfoObjectNovelInfoNovelAttachmentListInner } from "../models";

export interface StarCopyrightCreateV2RequestObjectFieldInfoObjectNovelInfo {
  author_name: string;
  category_first: number;
  category_second: number;
  category_third: number;
  content_file_url?: string;
  copyright_owner: string;
  copyright_qualification: StarCopyrightCreateV2RequestObjectFieldInfoObjectNovelInfoCopyrightQualificationInner[];
  gender_category: number;
  length_type: number;
  novel_attachment_comment?: string;
  novel_attachment_list?: StarCopyrightCreateV2RequestObjectFieldInfoObjectNovelInfoNovelAttachmentListInner[];
  novel_cover_url: string;
  novel_intro: string;
  novel_name: string;
  total_word_count: number;
}

