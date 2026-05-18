---
title: 原生效果数据整体概览接口
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2702&menuId=3437
doc_id: kuaishou_2702
source_id: kuaishou_2702
---
# 原生效果数据整体概览接口

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2702 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T11:18:26.947Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/v1/effect/native/chartReport |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | advertiser_id |  |
| search_param | NativeReportSearchParamSnake | 是 |  | 原生报表概览请求参数 |  |
| - author_id | Long[] |  | [123,456] | 快手号ID |  |
| - campaign_type | Integer[] |  | [2,5] | 营销目标 2提升应用安装 5收集销售线索 7提升应用活跃 19 快手小程序推广 30 短剧推广 |  |
| - ocpc_action_type | Integer[] |  |  | 转化目标 180激活 53表单优化 190付费 191 首日roi(24h) |  |
| - kol_user_type | Integer[] |  |  | 原生广告类型 1普通快手号 2 蓝V 3聚星达人 |  |
| - report_end_day | Long | 是 |  | 开始时间 时间戳 毫秒 |  |
| - report_start_day | Long | 是 |  | 结束时间 时间戳 毫秒 |  |

## 请求样例

### 示例标题 (jsonc)

```
{
  "advertiser_id": 10049502,
  "search_param": {
    "report_start_day": 1700668800000,
    "report_end_day": 1700755199999
  }
}
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | 请求结果，非1为失败 |  |
| message | String |  |  | 错误详情 |  |
| data | NativeChartReportResponseSnake |  |  | 原生报表数据概览结果 |  |
| - summary_nature | NativeReportSummarySnake[] |  |  | 自然流量数据 |  |
| - type | String |  |  | "totalCharge" 花费(元)"paiedAmt" 整体付费金额(币) conversion 整体转化数 |  |
| - yoy | Double |  |  | 环比 |  |
| - direct | Double |  |  | 直接数据，只有整体转化数、整体付费金额才会区分直接、间接数据 |  |
| - indirect | Double |  |  | 间接数据，只有整体转化数、整体付费金额才会区分直接、间接数据 |  |
| - native_soft_charge_ratio | Double |  |  | 原生消耗增量收益，只有花费才有这个指标 |  |
| - attribute_window | Integer |  |  | 归因窗口 1代表1天 7代表7天 |  |
| - sum_value | Double |  |  | 总体值 |  |
| - native_conversion_ratio | Double |  |  | 原生转化增量收益 |  |
| - summary | NativeReportSummarySnake[] |  |  | 数据概览 |  |
| - type | String |  |  | "totalCharge" 花费(元)"paiedAmt" 整体付费金额(币) conversion 整体转化数 |  |
| - yoy | Double |  |  | 环比 |  |
| - direct | Double |  |  | 直接数据，只有整体转化数、整体付费金额才会区分直接、间接数据 |  |
| - indirect | Double |  |  | 间接数据，只有整体转化数、整体付费金额才会区分直接、间接数据 |  |
| - native_soft_charge_ratio | Double |  |  | 原生消耗增量收益，只有花费才有这个指标 |  |
| - attribute_window | Integer |  |  | 归因窗口 1代表1天 7代表7天 |  |
| - sum_value | Double |  |  | 总体值 |  |
| - native_conversion_ratio | Double |  |  | 原生转化增量收益 |  |
| - conversion_chart | NativeReportConversionChartSnake[] |  |  | 转化数分日柱状图 |  |
| - date | Long |  |  | 日期 时间戳 毫秒 |  |
| - attribute_window | Integer |  |  | 归因窗口 1代表1天 7代表7天 |  |
| - sum_value | Double |  |  | 总体值 |  |
| - funnel | NativeReportFunnelInfoSnake[] |  |  | 漏斗数据 |  |
| - ad_show | Long |  |  | 曝光数 |  |
| - actionbar_click | Long |  |  | 行为数 |  |
| - conversion_cnt | Long |  |  | 直接转化数 |  |
| - attribute_window | Integer |  |  | 归因窗口 1代表1天 7代表7天 |  |

## 返回样例

### 示例标题 (jsonc)

```
{
  "code": 0,
  "data": {
    "summary": [
      {
        "yoy": 12647.39336492891,
        "sum_value": 457249,
        "attribute_window": 7,
        "type": "totalCharge",
        "native_soft_charge_ratio": 34.71347121590206,
        "native_conversion_ratio": null
      },
      {
        "yoy": 0,
        "sum_value": 0,
        "attribute_window": 7,
        "type": "paiedAmt",
        "native_soft_charge_ratio": null,
        "native_conversion_ratio": null
      },
      {
        "yoy": 43850,
        "sum_value": 879,
        "attribute_window": 7,
        "type": "conversion",
        "native_soft_charge_ratio": null,
        "native_conversion_ratio": 15.813424345847555
      }
    ],
    "funnel": [
      {
        "conversion_cnt": 879,
        "ad_show": 79901,
        "attribute_window": 7,
        "actionbar_click": 878
      }
    ],
    "conversion_chart": [
      {
        "date": 1700668800000,
        "sum_value": 879,
        "attribute_window": 7
      }
    ]
  },
  "message": "OK",
  "request_id": "ELqAgIDg9pmaChi0DiC74LDm0TEoxYHwwA4="
}
```
