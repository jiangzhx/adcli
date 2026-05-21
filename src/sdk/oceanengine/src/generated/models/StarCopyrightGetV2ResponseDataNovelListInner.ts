// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { StarCopyrightGetV2ResponseDataNovelListInnerCopyrightQualificationInner, StarCopyrightGetV2ResponseDataNovelListInnerNovelAttachmentListInner } from "../models";

export interface StarCopyrightGetV2ResponseDataNovelListInner {
  author_name?: string;
  category_first_name?: string;
  category_second_name?: string;
  category_third_name?: string;
  content_file_url?: string;
  copyright_owner?: string;
  copyright_qualification?: StarCopyrightGetV2ResponseDataNovelListInnerCopyrightQualificationInner[];
  gender_category?: number;
  length_type?: number;
  novel_attachment_comment?: string;
  novel_attachment_list?: StarCopyrightGetV2ResponseDataNovelListInnerNovelAttachmentListInner[];
  novel_cover_url?: string;
  novel_id?: number;
  novel_intro?: string;
  novel_name?: string;
  total_word_count?: number;
}

