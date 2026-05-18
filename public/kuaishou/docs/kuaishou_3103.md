---
title: 原生报表披露自然流量后查询原生经营明细接口
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=3103&menuId=3843
doc_id: kuaishou_3103
source_id: kuaishou_3103
---
# 原生报表披露自然流量后查询原生经营明细接口

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 3103 |
| documentType | 2 |
| version | 0.0.2 |
| bizName | 效果广告 |
| createTime | 2025-03-11T12:50:42.226Z |

## 概述

【注】查询广告组、广告创意层级的数据时不包括省心投物料

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/v1/effect/native/natureDetailedReport |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| page_info | PageInfoSnake |  |  | 分页信息 |  |
| - total_count | Long |  |  | 总条数 |  |
| - page_size | Integer |  |  | 当前分页大小 |  |
| - current_page | Integer |  | ddd | 当前页面 |  |
| search_param | NativeReportSearchParamSnake | 是 |  | 原生经营明细筛选条件 |  |
| - author_id | Long[] |  | [123,456] | 快手号ID |  |
| - campaign_type | Integer[] |  | [2,5] | 营销目标 2提升应用安装 5收集销售线索 7提升应用活跃 19 快手小程序推广 30 短剧推广 |  |
| - ocpc_action_type | Integer[] |  |  | 转化目标 180激活 53表单优化 190付费 191 首日roi(24h) |  |
| - kol_user_type | Integer[] |  |  | 原生广告类型 1普通快手号 2 蓝V 3聚星达人 |  |
| - view_type | Integer |  |  | 2计划 3 广告组 4 广告创意 原生报表明细接口必填，原生报表概览接口非必填 |  |
| - report_end_day | Long | 是 |  | 结束时间 时间戳 毫秒 |  |
| - report_start_day | Long | 是 |  | 开始时间 时间戳 毫秒 |  |
| - skip_sum | Boolean |  | true | 获取效果明细是否获取汇总数据 true不获取，false获取 |  |
| advertiser_id | Long | 是 |  | 广告主id |  |

## 请求样例

### 请求参数 (jsonc)

```
{
  "advertiser_id": 14342652,
  "search_param": {
    "view_type": 2,
    "report_start_day": 1723981775000,
    "report_end_day": 1724240975000
  }
}
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| data | NativeNatureDetailReportResponseSnake |  |  | 原生经营明细结果 |  |
| - result_list | AdDspNativeNatureReportViewSnake[] |  |  | 原生经营明细 |  |
| - ad_item_click | Long |  |  | 行为数 |  |
| - action_ratio | Double |  |  | 素材点击率 |  |
| - conversion_cnt | Long |  |  | 原生经营转化数 |  |
| - campaign_id | Long |  |  | 计划ID |  |
| - campaign_name | String |  |  | 计划名称 |  |
| - unit_id | Long |  |  | 广告组ID |  |
| - unit_name | String |  |  | 广告组名称 |  |
| - creative_id | Long |  |  | 创意ID |  |
| - creative_name | String |  |  | 创意名称 |  |
| - create_time | String |  |  | 创建时间 时间戳 毫秒 |  |
| - click | Long |  |  | 素材曝光数 |  |
| - share | Long |  |  | 分享数 |  |
| - comment | Long |  |  | 评论数 |  |
| - likes | Long |  |  | 点赞数 |  |
| - kol_user_type_desc | String |  |  | 原生广告类型 |  |
| - ocpc_action_type | String |  |  | 优化目标 |  |
| - campaign_type | String |  |  | 营销目标 |  |
| - author_id | String |  |  | 快手号ID |  |
| - sum | AdDspNativeNatureReportViewSnake[] |  |  | 全局汇总 |  |
| - ad_item_click | Long |  |  | 行为数 |  |
| - action_ratio | Double |  |  | 素材点击率 |  |
| - conversion_cnt | Long |  |  | 原生经营转化数 |  |
| - campaign_id | Long |  |  | 计划ID |  |
| - campaign_name | String |  |  | 计划名称 |  |
| - unit_id | Long |  |  | 广告组ID |  |
| - unit_name | String |  |  | 广告组名称 |  |
| - creative_id | Long |  |  | 创意ID |  |
| - creative_name | String |  |  | 创意名称 |  |
| - create_time | String |  |  | 创建时间 时间戳 毫秒 |  |
| - click | Long |  |  | 素材曝光数 |  |
| - share | Long |  |  | 分享数 |  |
| - comment | Long |  |  | 评论数 |  |
| - likes | Long |  |  | 点赞数 |  |
| - kol_user_type_desc | String |  |  | 原生广告类型 |  |
| - ocpc_action_type | String |  |  | 优化目标 |  |
| - campaign_type | String |  |  | 营销目标 |  |
| - author_id | String |  |  | 快手号ID |  |
| - page_info | PageInfoSnake |  |  | 分页信息 |  |
| - total_count | Long |  |  | 总条数 |  |
| - page_size | Integer |  |  | 当前分页大小 |  |
| - current_page | Integer |  | ddd | 当前页面 |  |
| message | String |  | "OK" | 返回信息 |  |
| code | Integer |  | 0 | 返回码 |  |

## 返回样例

### 响应结果 (jsonc)

```
{
  "code": 0,
  "data": {
    "page_info": {
      "currentPage": -1,
      "pageSize": -1,
      "totalCount": 24
    },
    "result_list": [
      {
        "creative_name": null,
        "conversion_cnt": 0,
        "create_time": 1723087910240,
        "campaign_type": "应用安装提升",
        "click": 394,
        "creative_id": 0,
        "unit_name": null,
        "campaign_name": "24年08月08日11时人工素材复建组任务_aj1_bt0_14342652",
        "ad_item_click": 2,
        "ocpc_action_type": "",
        "kol_user_type_desc": null,
        "action_ratio": 0.005076142131979695,
        "share": 1,
        "comment": 3,
        "author_id": "",
        "unit_id": 0,
        "campaign_id": 2456598639,
        "likes": 2
      },
      {
        "creative_name": null,
        "conversion_cnt": 0,
        "create_time": 1723529606925,
        "campaign_type": "应用安装提升",
        "click": 1094,
        "creative_id": 0,
        "unit_name": null,
        "campaign_name": "24年08月13日14时人工素材复建组任务_aj1_bt0_14342652",
        "ad_item_click": 5,
        "ocpc_action_type": "",
        "kol_user_type_desc": null,
        "action_ratio": 0.004570383912248629,
        "share": 4,
        "comment": 0,
        "author_id": "",
        "unit_id": 0,
        "campaign_id": 2469565708,
        "likes": 11
      },
      {
        "creative_name": null,
        "conversion_cnt": 0,
        "create_time": 1721889592897,
        "campaign_type": "应用安装提升",
        "click": 0,
        "creative_id": 0,
        "unit_name": null,
        "campaign_name": "24年07月25日14时人工素材复建组任务_aj1_bt0_14342652",
        "ad_item_click": 0,
        "ocpc_action_type": "",
        "kol_user_type_desc": null,
        "action_ratio": 0,
        "share": 0,
        "comment": 0,
        "author_id": "",
        "unit_id": 0,
        "campaign_id": 2410052186,
        "likes": 0
      },
      {
        "creative_name": null,
        "conversion_cnt": 14,
        "create_time": 1724039140552,
        "campaign_type": "应用安装提升",
        "click": 4281,
        "creative_id": 0,
        "unit_name": null,
        "campaign_name": "24年08月19日11时人工素材复建组任务_aj1_bt0_14342652",
        "ad_item_click": 32,
        "ocpc_action_type": "",
        "kol_user_type_desc": null,
        "action_ratio": 0.007474889044615744,
        "share": 4,
        "comment": 5,
        "author_id": "",
        "unit_id": 0,
        "campaign_id": 2485041260,
        "likes": 62
      },
      {
        "creative_name": null,
        "conversion_cnt": 0,
        "create_time": 1723272379492,
        "campaign_type": "应用安装提升",
        "click": 358,
        "creative_id": 0,
        "unit_name": null,
        "campaign_name": "24年08月10日14时人工素材复建组任务_aj1_bt0_14342652",
        "ad_item_click": 1,
        "ocpc_action_type": "",
        "kol_user_type_desc": null,
        "action_ratio": 0.002793296089385475,
        "share": 0,
        "comment": 0,
        "author_id": "",
        "unit_id": 0,
        "campaign_id": 2462288103,
        "likes": 7
      },
      {
        "creative_name": null,
        "conversion_cnt": 0,
        "create_time": 1722829057560,
        "campaign_type": "应用安装提升",
        "click": 280,
        "creative_id": 0,
        "unit_name": null,
        "campaign_name": "24年08月05日11时人工素材复建组任务_aj1_bt0_14342652",
        "ad_item_click": 4,
        "ocpc_action_type": "",
        "kol_user_type_desc": null,
        "action_ratio": 0.014285714285714285,
        "share": 0,
        "comment": 1,
        "author_id": "",
        "unit_id": 0,
        "campaign_id": 2448640837,
        "likes": 1
      },
      {
        "creative_name": null,
        "conversion_cnt": 1,
        "create_time": 1722931949487,
        "campaign_type": "应用安装提升",
        "click": 686,
        "creative_id": 0,
        "unit_name": null,
        "campaign_name": "24年08月06日16时人工素材复建组任务_aj1_bt0_14342652",
        "ad_item_click": 6,
        "ocpc_action_type": "",
        "kol_user_type_desc": null,
        "action_ratio": 0.008746355685131196,
        "share": 1,
        "comment": 0,
        "author_id": "",
        "unit_id": 0,
        "campaign_id": 2452561548,
        "likes": 8
      },
      {
        "creative_name": null,
        "conversion_cnt": 1,
        "create_time": 1723350805716,
        "campaign_type": "应用安装提升",
        "click": 267,
        "creative_id": 0,
        "unit_name": null,
        "campaign_name": "24年08月11日12时人工素材复建组任务_aj1_bt0_14342652",
        "ad_item_click": 5,
        "ocpc_action_type": "",
        "kol_user_type_desc": null,
        "action_ratio": 0.018726591760299626,
        "share": 0,
        "comment": 1,
        "author_id": "",
        "unit_id": 0,
        "campaign_id": 2464580351,
        "likes": 6
      },
      {
        "creative_name": null,
        "conversion_cnt": 0,
        "create_time": 1722308321207,
        "campaign_type": "应用安装提升",
        "click": 20,
        "creative_id": 0,
        "unit_name": null,
        "campaign_name": "24年07月30日10时人工素材复建组任务_aj1_bt0_14342652",
        "ad_item_click": 0,
        "ocpc_action_type": "",
        "kol_user_type_desc": null,
        "action_ratio": 0,
        "share": 0,
        "comment": 0,
        "author_id": "",
        "unit_id": 0,
        "campaign_id": 2422009021,
        "likes": 0
      },
      {
        "creative_name": null,
        "conversion_cnt": 0,
        "create_time": 1722579133267,
        "campaign_type": "应用安装提升",
        "click": 39,
        "creative_id": 0,
        "unit_name": null,
        "campaign_name": "24年08月02日14时人工素材复建组任务_aj1_bt0_14342652",
        "ad_item_click": 0,
        "ocpc_action_type": "",
        "kol_user_type_desc": null,
        "action_ratio": 0,
        "share": 0,
        "comment": 0,
        "author_id": "",
        "unit_id": 0,
        "campaign_id": 2432107294,
        "likes": 1
      },
      {
        "creative_name": null,
        "conversion_cnt": 2,
        "create_time": 1723704005505,
        "campaign_type": "应用安装提升",
        "click": 1609,
        "creative_id": 0,
        "unit_name": null,
        "campaign_name": "24年08月15日14时人工素材复建组任务_aj1_bt0_14342652",
        "ad_item_click": 14,
        "ocpc_action_type": "",
        "kol_user_type_desc": null,
        "action_ratio": 0.00870105655686762,
        "share": 2,
        "comment": 2,
        "author_id": "",
        "unit_id": 0,
        "campaign_id": 2475449755,
        "likes": 17
      },
      {
        "creative_name": null,
        "conversion_cnt": 0,
        "create_time": 1722664674670,
        "campaign_type": "应用安装提升",
        "click": 1,
        "creative_id": 0,
        "unit_name": null,
        "campaign_name": "24年08月03日13时人工素材复建组任务_aj1_bt0_14342652",
        "ad_item_click": 0,
        "ocpc_action_type": "",
        "kol_user_type_desc": null,
        "action_ratio": 0,
        "share": 0,
        "comment": 0,
        "author_id": "",
        "unit_id": 0,
        "campaign_id": 2437799519,
        "likes": 0
      },
      {
        "creative_name": null,
        "conversion_cnt": 0,
        "create_time": 1723013930345,
        "campaign_type": "应用安装提升",
        "click": 414,
        "creative_id": 0,
        "unit_name": null,
        "campaign_name": "24年08月07日14时人工素材复建组任务_aj1_bt0_14342652",
        "ad_item_click": 0,
        "ocpc_action_type": "",
        "kol_user_type_desc": null,
        "action_ratio": 0,
        "share": 1,
        "comment": 0,
        "author_id": "",
        "unit_id": 0,
        "campaign_id": 2454652058,
        "likes": 5
      },
      {
        "creative_name": null,
        "conversion_cnt": 7,
        "create_time": 1723777347376,
        "campaign_type": "应用安装提升",
        "click": 2145,
        "creative_id": 0,
        "unit_name": null,
        "campaign_name": "24年08月16日11时人工素材复建组任务_aj1_bt0_14342652",
        "ad_item_click": 23,
        "ocpc_action_type": "",
        "kol_user_type_desc": null,
        "action_ratio": 0.010722610722610723,
        "share": 6,
        "comment": 4,
        "author_id": "",
        "unit_id": 0,
        "campaign_id": 2477686427,
        "likes": 26
      },
      {
        "creative_name": null,
        "conversion_cnt": 2,
        "create_time": 1723456624123,
        "campaign_type": "应用安装提升",
        "click": 550,
        "creative_id": 0,
        "unit_name": null,
        "campaign_name": "24年08月12日17时人工素材复建组任务_aj1_bt0_14342652",
        "ad_item_click": 6,
        "ocpc_action_type": "",
        "kol_user_type_desc": null,
        "action_ratio": 0.01090909090909091,
        "share": 1,
        "comment": 0,
        "author_id": "",
        "unit_id": 0,
        "campaign_id": 2467499778,
        "likes": 15
      },
      {
        "creative_name": null,
        "conversion_cnt": 2,
        "create_time": 1721789736923,
        "campaign_type": "应用安装提升",
        "click": 1716,
        "creative_id": 0,
        "unit_name": null,
        "campaign_name": "24年07月24日10时人工素材复建组任务_aj1_bt0_14342652",
        "ad_item_click": 9,
        "ocpc_action_type": "",
        "kol_user_type_desc": null,
        "action_ratio": 0.005244755244755245,
        "share": 4,
        "comment": 2,
        "author_id": "",
        "unit_id": 0,
        "campaign_id": 2407627087,
        "likes": 24
      },
      {
        "creative_name": null,
        "conversion_cnt": 10,
        "create_time": 1724135462795,
        "campaign_type": "应用安装提升",
        "click": 2017,
        "creative_id": 0,
        "unit_name": null,
        "campaign_name": "24年08月20日14时人工素材复建组任务_aj1_bt0_14342652",
        "ad_item_click": 28,
        "ocpc_action_type": "",
        "kol_user_type_desc": null,
        "action_ratio": 0.013882002974714923,
        "share": 1,
        "comment": 5,
        "author_id": "",
        "unit_id": 0,
        "campaign_id": 2487854783,
        "likes": 21
      },
      {
        "creative_name": null,
        "conversion_cnt": 12,
        "create_time": 1711705715849,
        "campaign_type": "应用安装提升",
        "click": 3326,
        "creative_id": 0,
        "unit_name": null,
        "campaign_name": "ocpm-打包-0329",
        "ad_item_click": 51,
        "ocpc_action_type": "",
        "kol_user_type_desc": null,
        "action_ratio": 0.015333734215273603,
        "share": 7,
        "comment": 3,
        "author_id": "",
        "unit_id": 0,
        "campaign_id": 2112754503,
        "likes": 40
      },
      {
        "creative_name": null,
        "conversion_cnt": 2,
        "create_time": 1723175268178,
        "campaign_type": "应用安装提升",
        "click": 621,
        "creative_id": 0,
        "unit_name": null,
        "campaign_name": "24年08月09日11时人工素材复建组任务_aj1_bt0_14342652",
        "ad_item_click": 5,
        "ocpc_action_type": "",
        "kol_user_type_desc": null,
        "action_ratio": 0.008051529790660225,
        "share": 2,
        "comment": 1,
        "author_id": "",
        "unit_id": 0,
        "campaign_id": 2458973145,
        "likes": 5
      },
      {
        "creative_name": null,
        "conversion_cnt": 17,
        "create_time": 1723953123588,
        "campaign_type": "应用安装提升",
        "click": 5360,
        "creative_id": 0,
        "unit_name": null,
        "campaign_name": "24年08月18日11时人工素材复建组任务_aj1_bt0_14342652",
        "ad_item_click": 37,
        "ocpc_action_type": "",
        "kol_user_type_desc": null,
        "action_ratio": 0.006902985074626866,
        "share": 10,
        "comment": 4,
        "author_id": "",
        "unit_id": 0,
        "campaign_id": 2482791016,
        "likes": 88
      },
      {
        "creative_name": null,
        "conversion_cnt": 3,
        "create_time": 1723606614332,
        "campaign_type": "应用安装提升",
        "click": 1452,
        "creative_id": 0,
        "unit_name": null,
        "campaign_name": "24年08月14日11时人工素材复建组任务_aj1_bt0_14342652",
        "ad_item_click": 5,
        "ocpc_action_type": "",
        "kol_user_type_desc": null,
        "action_ratio": 0.003443526170798898,
        "share": 2,
        "comment": 0,
        "author_id": "",
        "unit_id": 0,
        "campaign_id": 2472081712,
        "likes": 24
      },
      {
        "creative_name": null,
        "conversion_cnt": 0,
        "create_time": 1722741133385,
        "campaign_type": "应用安装提升",
        "click": 258,
        "creative_id": 0,
        "unit_name": null,
        "campaign_name": "24年08月04日11时人工素材复建组任务_aj1_bt0_14342652",
        "ad_item_click": 1,
        "ocpc_action_type": "",
        "kol_user_type_desc": null,
        "action_ratio": 0.003875968992248062,
        "share": 0,
        "comment": 0,
        "author_id": "",
        "unit_id": 0,
        "campaign_id": 2442938210,
        "likes": 1
      },
      {
        "creative_name": null,
        "conversion_cnt": 0,
        "create_time": 1721717972764,
        "campaign_type": "应用安装提升",
        "click": 53,
        "creative_id": 0,
        "unit_name": null,
        "campaign_name": "24年07月23日14时人工素材复建组任务_aj1_bt0_14342652",
        "ad_item_click": 1,
        "ocpc_action_type": "",
        "kol_user_type_desc": null,
        "action_ratio": 0.018867924528301886,
        "share": 0,
        "comment": 0,
        "author_id": "",
        "unit_id": 0,
        "campaign_id": 2406002196,
        "likes": 1
      },
      {
        "creative_name": null,
        "conversion_cnt": 1,
        "create_time": 1722497723526,
        "campaign_type": "应用安装提升",
        "click": 264,
        "creative_id": 0,
        "unit_name": null,
        "campaign_name": "24年08月01日15时人工素材复建组任务_aj1_bt0_14342652",
        "ad_item_click": 3,
        "ocpc_action_type": "",
        "kol_user_type_desc": null,
        "action_ratio": 0.011363636363636364,
        "share": 0,
        "comment": 0,
        "author_id": "",
        "unit_id": 0,
        "campaign_id": 2429681094,
        "likes": 6
      }
    ],
    "sum": [
      {
        "conversion_cnt": 74,
        "ad_item_click": 238,
        "action_ratio": 0.008748391839735343,
        "share": 46,
        "comment": 31,
        "click": 27205,
        "likes": 371
      }
    ]
  },
  "message": "OK",
  "request_id": "EMmEgICwooSaChjKCyDD2s6vmzIovJKA9Qc="
}
```
