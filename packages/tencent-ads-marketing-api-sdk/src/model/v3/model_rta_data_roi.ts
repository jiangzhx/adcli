// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_rta_data_roi.go
// Do not edit manually.

export interface RtaDataRoi {
  Granularity?: string;
  BeginTime?: number;
  EndTime?: number;
  ExpId?: number | string[];
  UId?: string;
  AppId?: string;
  CId?: string;
  AId?: string;
  UserWeight?: string;
  DeviceOsType?: string;
  TotalFlag?: number;
  AdvancedFields?: string[];
  GroupBy?: string[];
  IsMp?: number;
  ReportType?: number;
  UserWeightFactor?: string;
}

