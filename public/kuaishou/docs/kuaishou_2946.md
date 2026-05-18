---
title: 获取可用咨询组件列表
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2946&menuId=3698
doc_id: kuaishou_2946
source_id: kuaishou_2946
---
# 获取可用咨询组件列表

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2946 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T12:05:59.634Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/v2/lp/consult/list |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| page | Integer |  |  | 页码 | 从 1 开始 |
| page_size | Integer |  |  | 每页个数，默认 20 |  |

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | 返回码 |  |
| message | String |  |  | 返回信息 |  |
| data | ConsultListData |  |  | JSON 返回值 | 见下详细说明 |
| - datails | ConsultListDetail |  |  | 详情 | 见下 |
| - id | Long |  |  | 自增主键 | 唯一 id，unit 创建参数 consult_id |
| - title | String |  |  | 客服名称 | 如：快聊客服 |
| - create_time | Long |  |  | 创建时间 |  |
| - last_session_time | Long |  |  | 最后会话时间 |  |
| - third_party_app_id | Integer |  |  | 第三方客服 app_id | 当前支持的枚举值如下：快聊客服：10000；美洽客服：10001；53 客服：10002；快商通客服：10003；易聊客服：10004；螳螂客服：10005 |
| - consultants_num | Integer |  |  | 咨询人数 | 历史累计数值 |
| - total_count | Long |  |  | 总共条数 |  |
