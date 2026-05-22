// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_video_channel_leads_data_get_request.go
// Do not edit manually.

export interface VideoChannelLeadsDataGetRequest {
  account_id?: number | string;
  brand_ids?: string[];
  brand_names?: string[];
  dealer_ids?: string[];
  dealer_names?: string[];
  video_channel_ids?: string[];
  video_channel_names?: string[];
  start_date?: number;
  end_date?: number;
  page?: number;
  page_size?: number;
}

