---
title: 小说列表查询
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2802&menuId=3543
doc_id: kuaishou_2802
source_id: kuaishou_2802
---
# 小说列表查询

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2802 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T11:42:01.705Z |

## 概述

用来查询小说相关信息 主要用于列出账号下的小说及相关信息

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/books/list |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 广告主id，鉴权用 |  |
| user_id | Long | 是 |  | 小说用户id |  |
| book_name | String |  |  | 小说名称，选填，传入后根据名称模糊搜索 |  |
| kwai_book_id | Long |  |  | 选填，传入后查询该小说id |  |
| page_info | PageSnake | 是 |  | 请补充描述详情 |  |
| - current_page | Integer | 是 |  | 当前页 |  |
| - page_size | Integer | 是 |  | 分页大小 |  |
| - total_count | Long |  |  | 总条数 |  |

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| data | MapiBooksQueryResSnake |  |  | 返回数据 |  |
| - page_info | PageInfoSnake |  |  | 分页信息 |  |
| - current_page | Integer |  |  | 当前页id |  |
| - page_size | Integer |  |  | 页大小 |  |
| - total_count | Long |  |  | 总条数 |  |
| - books | MapiBookInfoSnake[] |  |  | 小说信息 |  |
| - kwai_book_id | Long |  |  | 小说id，创编用 |  |
| - book_name | String |  |  | 小说名称 |  |
| - cover_url | String |  |  | 封面链接 |  |
| - deep_link | String |  |  | 小说跳转kwai链 |  |
| - description | String |  |  | 描述 |  |
| - chapter_count | Integer |  |  | 章节数 |  |
| - status | Integer |  |  | 状态，接口默认返回上架小说，status=2 |  |
| - author_name | String |  |  | 作者名 |  |
| - gender_type | Integer |  |  | 请补充描述详情 |  |
| - category_id | Integer |  |  | 请补充描述详情 |  |
| - pay_anchor_chapter_index | Integer |  |  | 请补充描述详情 |  |
| - tag_list | String[] |  |  | 请补充描述详情 |  |
| - serial_status | Integer |  |  | 请补充描述详情 |  |
| message | String |  |  | 返回信息 |  |
| code | Integer |  |  | 返回码 |  |
