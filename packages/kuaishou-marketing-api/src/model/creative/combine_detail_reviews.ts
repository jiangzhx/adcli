// Generated from github.com/bububa/kwai-marketing-api/model/creative/combine_detail_reviews.go
// Do not edit manually.

import type { KuaishouId } from "../types";

export interface CombineDetailView {
  id?: KuaishouId;
  photo_id?: KuaishouId;
  cover_url?: string;
  caption?: string;
  review_status?: number;
  review_detail?: string[];
  put_status?: number;
}
