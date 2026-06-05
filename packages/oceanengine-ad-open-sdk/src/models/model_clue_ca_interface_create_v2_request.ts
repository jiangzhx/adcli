// 由 oceanengine/ad_open_sdk_go models/model_clue_ca_interface_create_v2_request.go 生成
// 不要手动编辑。

export interface ClueCaInterfaceCreateV2Request {
  advertiser_id: number | string;
  backup_instance_id: number | string;
  call_back_url: string;
  custom_params: string;
  deduplication_exp?: number;
  deduplication_key?: string;
  name: string;
}

