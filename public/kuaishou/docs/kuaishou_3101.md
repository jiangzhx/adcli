---
title: 原生报表披露自然流量的数据整体概览接口
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=3101&menuId=3844
doc_id: kuaishou_3101
source_id: kuaishou_3101
---
# 原生报表披露自然流量的数据整体概览接口

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 3101 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-09-03T03:37:33.086Z |

## 概述

获取原生报表披露自然流量后的数据整体概览接口，包括转化数据、成本数据、经营数据。 概览数据： 转化数据：summaryConversion 整体转化数：totalConversion； 原生广告：adConversion； 原生经营：natureConversion； 成本数据：summaryCost 花费 totalCharge &nbsp; 整体转化成本 totalConversionCost &nbsp; 原生广告转化成本 adConversionCost &nbsp; 经营数据：summaryOperation 粉丝总数 fansUserNum &nbsp; 新增关注量 followCnt &nbsp; 取消关注量 unFollowCnt 快手号 authorId 原生广告-素材曝光数 adItemShowCnt &nbsp; 原生广告-行为数 adItemClickCnt &nbsp; 原生广告-视频评论量 adPhotoCommentCnt &nbsp; 原生广告-视频点赞量 adPhotoLikeCnt &nbsp; 原生广告-视频分享量 adPhotoShareCnt 原生经营-素材曝光数 natureItemShowCnt 原生经营-行为数 natureItemClickCnt 原生经营-视频评论量 naturePhotoCommentCnt &nbsp; 原生经营-视频点赞量 naturePhotoLikeCnt 原生经营-视频分享量 naturePhotoShareCnt

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/v1/effect/native/natureChartReport |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| search_param | NativeReportSearchParamSnake | 是 |  | 原生报表概览请求参数 |  |
| - author_id | Long[] |  | [123,456] | 快手号ID |  |
| - campaign_type | Integer[] |  | [2,5] | 营销目标 2提升应用安装 5收集销售线索 7提升应用活跃 19 快手小程序推广 30 短剧推广 |  |
| - ocpc_action_type | Integer[] |  |  | 转化目标 180激活 53表单优化 190付费 191 首日roi(24h) |  |
| - kol_user_type | Integer[] |  |  | 原生广告类型 1普通快手号 2 蓝V 3聚星达人 |  |
| - report_end_day | Long | 是 |  | 结束时间 时间戳 毫秒 |  |
| - report_start_day | Long | 是 |  | 开始时间 时间戳 毫秒 |  |
| advertiser_id | Long | 是 |  | advertiser_id |  |

## 请求样例

### 请求参数 (jsonc)

```
{
  "advertiser_id": 900015364,
  "search_param": {
    "report_start_day": 1723692624000,
    "report_end_day": 1724729424000
  }
}
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| data | NativeNatureChartReportResponseSnake |  |  | 原生报表披露自然流量数据概览结果 |  |
| - summary_operation | NativeReportSummarySnake[] |  |  | 经营数据 |  |
| - sum_value | Double |  |  | 总体数据 |  |
| - type | String |  |  | 整体转化数 totalConversion 原生广告经营 adConversion 自然经营 key natureConversion |  |
| - yoy | Double |  |  | 同比 |  |
| - summary_cost | NativeReportSummarySnake[] |  |  | 成本数据 |  |
| - sum_value | Double |  |  | 总体数据 |  |
| - type | String |  |  | 整体转化数 totalConversion 原生广告经营 adConversion 自然经营 key natureConversion |  |
| - yoy | Double |  |  | 同比 |  |
| - summary_conversion | NativeReportSummarySnake[] |  |  | 转化数据 |  |
| - sum_value | Double |  |  | 总体数据 |  |
| - type | String |  |  | 整体转化数 totalConversion 原生广告经营 adConversion 自然经营 key natureConversion |  |
| - yoy | Double |  |  | 同比 |  |
| message | String |  |  | 错误详情 |  |
| code | Integer |  |  | 请求结果，非1为失败 |  |

## 返回样例

### 响应结果 (jsonc)

```
{
  "code": 0,
  "data": {
    "summary_cost": [
      {
        "yoy": 0,
        "sum_value": 0,
        "type": "adConversionCost"
      },
      {
        "yoy": 0,
        "sum_value": 0,
        "type": "totalCharge"
      },
      {
        "yoy": 0,
        "sum_value": 0,
        "type": "totalConversionCost"
      }
    ],
    "summary_operation": [
      {
        "yoy": 366.6666666666667,
        "sum_value": 980,
        "type": "naturePhotoShareCnt"
      },
      {
        "yoy": 366.6666666666667,
        "sum_value": 840,
        "type": "naturePhotoLikeCnt"
      },
      {
        "yoy": 0,
        "sum_value": 0,
        "type": "adItemClickCnt"
      },
      {
        "yoy": 0,
        "sum_value": 0,
        "type": "authorId"
      },
      {
        "yoy": 0,
        "sum_value": 0,
        "type": "fansUserNum"
      },
      {
        "yoy": 0,
        "sum_value": 0,
        "type": "adItemShowCnt"
      },
      {
        "yoy": 366.6666666666667,
        "sum_value": 700,
        "type": "natureItemClickCnt"
      },
      {
        "yoy": 0,
        "sum_value": 0,
        "type": "unFollowCnt"
      },
      {
        "yoy": 0,
        "sum_value": 0,
        "type": "adPhotoLikeCnt"
      },
      {
        "yoy": 366.6666666666667,
        "sum_value": 560,
        "type": "natureItemShowCnt"
      },
      {
        "yoy": 0,
        "sum_value": 0,
        "type": "adPhotoShareCnt"
      },
      {
        "yoy": 0,
        "sum_value": 0,
        "type": "adPhotoCommentCnt"
      },
      {
        "yoy": 0,
        "sum_value": 0,
        "type": "followCnt"
      },
      {
        "yoy": 0,
        "sum_value": 0,
        "type": "naturePhotoCommentCnt"
      }
    ],
    "summary_conversion": [
      {
        "yoy": 366.6666666666667,
        "sum_value": 140,
        "type": "totalConversion"
      },
      {
        "yoy": 0,
        "sum_value": 0,
        "type": "natureConversion"
      },
      {
        "yoy": 366.6666666666667,
        "sum_value": 140,
        "type": "natureConversion"
      }
    ]
  },
  "message": "OK",
  "request_id": "EIHnh4Cg7ZmOrAEYrQcg9cWrr5syKNmFhroC"
}
```

## 原始内容

```
原生报表披露自然流量的数据整体概览接口 /rest/openapi/gw/dsp/v1/effect/native/natureChartReport search_param NativeReportSearchParamSnake 原生报表概览请求参数 author_id Long[] 快手号ID campaign_type Integer[] 营销目标 2提升应用安装 5收集销售线索 7提升应用活跃 19 快手小程序推广 30 短剧推广 ocpc_action_type Integer[] 转化目标 180激活 53表单优化 190付费 191 首日roi(24h) kol_user_type Integer[] 原生广告类型 1普通快手号 2 蓝V 3聚星达人 report_end_day Long 结束时间 时间戳 毫秒 report_start_day Long 开始时间 时间戳 毫秒 advertiser_id Long advertiser_id data NativeNatureChartReportResponseSnake 原生报表披露自然流量数据概览结果 summary_operation NativeReportSummarySnake[] 经营数据 sum_value Double 总体数据 type String 整体转化数 totalConversion 原生广告经营 adConversion 自然经营 key natureConversion yoy Double 同比 summary_cost NativeReportSummarySnake[] 成本数据 sum_value Double 总体数据 type String 整体转化数 totalConversion 原生广告经营 adConversion 自然经营 key natureConversion yoy Double 同比 summary_conversion NativeReportSummarySnake[] 转化数据 sum_value Double 总体数据 type String 整体转化数 totalConversion 原生广告经营 adConversion 自然经营 key natureConversion yoy Double 同比 message String 错误详情 code Integer 请求结果，非1为失败
```
