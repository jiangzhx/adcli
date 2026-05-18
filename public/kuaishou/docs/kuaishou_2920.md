---
title: 获取高级创意列表
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2920&menuId=3670
doc_id: kuaishou_2920
source_id: kuaishou_2920
---
# 获取高级创意列表

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2920 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T11:12:33.767Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/v1/asset/adv_card/list |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 广告主 id |  |
| card_type | Integer | 是 |  | 卡片类型 | 100:图片卡片 101:多利益卡-图文 102：多利益卡-多标签 103：电商促销样式 107：倒计时卡 108：优惠券卡 131：商品卡-汽车样式 132: 商品卡-电商样式 133: 商品卡-小说样式 134: 商品卡-房产样式 200：推广位 |
| style_type | Integer |  |  | 高级创意样式类型 | 1=普通卡片，2=推广位 |
| page | Integer |  |  | 查询的页码数 | 默认为 1 |
| page_size | Integer |  |  | 单页行数 | 默认为 10，不超过 200 |

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | 返回码 |  |
| message | String |  |  | 返回信息 |  |
| data | AdvCardListData |  |  | JSON 返回值 |  |
| - total_count | Integer |  |  | 卡片总数 |  |
| - details | AdvCardListDetails[] |  |  | 数据详情 |  |
| - adv_card_id | Long |  |  | 卡片 id |  |
| - template_name | String |  |  | 模版名 |  |
| - unit_count | Integer |  |  | 关联广告组数 |  |
| - url | String |  |  | 图片 url |  |
| - title | String |  |  | 标题 |  |
| - sub_title | String |  |  | 副标题 |  |
| - price | Integer |  |  | 原价格(单位：分) |  |
| - sale_price | Integer |  |  | 售卖价(单位：分) |  |
| - begin_time | Integer |  |  | 倒计时卡开始时间 | 107：倒计时卡提示 |
| - end_time | Integer |  |  | 倒计时卡结束时间 | 107：倒计时卡提示 |
| - sdpa_card_content | SdpaCardContent |  |  | SDPA商品卡样式内容 | card_type=131/132/133/134专用 |
| - title | String |  |  | 商品卡标题 | card_type=131/132/133/134专用 |
| - sub_title | String |  |  | 商品卡副标题(描述/简介) | card_type=131/132/133/134专用 |
| - icon | String |  |  | 商品卡图片 | card_type=131/132/133/134专用 |
| - description | String |  |  | 商品卡价格类型描述 | card_type=131/132/133/134专用 |
| - symbol | String |  |  | 商品卡价格符号描述 | card_type=131/132/133/134专用 |
| - price | Double |  |  | 商品卡价格(现价) | card_type=131/132/133/134专用 |
| - tail_description | String |  |  | 商品卡价格单位描述 | card_type=131/132/133/134专用 |
| - sale_price | Double |  |  | 商品卡价格(原价) | card_type=131/132/133/134专用 |
| - tag_text | String |  |  | 商品卡角标 | card_type=131/132/133/134专用 |
| - hot_text | String |  |  | 商品卡热度标签 | card_type=131/132/133/134专用 |
| - city | String |  |  | 商品卡城市标签 | card_type=131/132/133/134专用 |
