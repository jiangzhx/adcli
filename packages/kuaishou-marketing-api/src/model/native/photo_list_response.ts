// Generated from github.com/bububa/kwai-marketing-api/model/native/photo_list_response.go
// Do not edit manually.

export interface PhotoListResponse {
  photos?: KwaiOrdePhotoViewSnake[];
  pcursor?: string;
}

export interface CdnUrlInfo {
  cdn?: string;
  url?: string;
}

export interface KwaiOrdePhotoViewSnake {
  photo_id?: string;
  caption?: string;
  cover_url?: CdnUrlInfo[];
  movie_url?: CdnUrlInfo[];
  duration?: number;
  height?: number;
  width?: number;
  creative_material_type?: number;
  ad_socail_order_id?: number;
}
