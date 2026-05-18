---
title: 获取试玩列表
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2723&menuId=3455
doc_id: kuaishou_2723
source_id: kuaishou_2723
---
# 获取试玩列表

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2723 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T11:47:00.369Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/v1/playable/list |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| account_id | Long | 是 | 1 | 账户 ID |  |
| page | Integer |  | 1 | 分页页码 |  |
| page_size | Integer |  | 10 | 分页大小 |  |
| query_value | String |  | tomato | 搜索值，试玩 ID 或 Name。 |  |
| play_sources | Integer[] |  | [1, 2] | 视频来源（1=本地，2=联盟） |  |
| start_time | Long |  | 1 | 起始时间 |  |
| end_time | Long |  | 1 | 结束时间 |  |

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| message | String |  | "" | 状态信息 |  |
| data | DspPlayListData |  |  | 试玩列表 |  |
| - details | AdDspPlayView[] |  | [] | 试玩具体数据 |  |
| - play_id | Long |  | 1 | 试玩ID |  |
| - play_cover_url | String |  | "" | 试玩封面 |  |
| - play_orientation | Integer |  | 1 | 试玩支持的横竖版类型： 0:横竖均可 1:竖屏 2:横屏 |  |
| - play_name | String |  | tomato | 试玩名称 |  |
| - file_format | String |  | zip | 试玩格式 |  |
| - play_time | Integer |  | 10 | 试玩时长 |  |
| - review_status | Integer |  | 1 | 1.待审核，2.审核通过，3审核不通过，4.部署中 |  |
| - play_url | String |  | https://static.yximgs.com/kos/nlav10790/ad/playable/5aafb98d7f9dba45858b9e229db6af20/chuangguantest/chuangguantest/index.html | 试玩链接 |  |
| - creative_count | Integer |  | null | 关联创意数 |  |
| - upload_source | Integer |  | 1 | 试玩来源 |  |
| - play_type | Integer |  | 1 | 试玩类型 1:轻度，2：重度 |  |
| - unit_count | Integer |  | 1 | 关联广告组数 |  |
| - review_details | String |  | “” | 审核详情 |  |
| - haima_extra | String |  | "{}" | 海马云审核 |  |
| - update_time | Long |  | 1 | 更新时间 |  |
| - create_time | Long |  | 1 | 创建时间 |  |
| code | Integer |  | 0 | 状态码 |  |
