---
title: 获取素造视频接口
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2955&menuId=3706
doc_id: kuaishou_2955
source_id: kuaishou_2955
---
# 获取素造视频接口

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2955 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T12:30:24.253Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/v1/ad_creator/video/list |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 广告主 ID | 在获取 access_token 的时候返回 |
| photo_ids | String[] |  |  | 视频 ID 集 | 过滤筛选条件；photo_ids 与 start_date&end_date 只能有一个生效，指定 photo_ids 时以 photo_ids 为准 |
| start_date | String |  |  | 开始时间 | 与 end_date 同时传或同时不传；以下两种筛选条件兼容；过滤筛选条件，格式为"yyyy-MM-dd"；过滤筛选条件，格式为 “yyyy-MM-dd HH:mm:ss” |
| end_date | String |  |  | 结束时间 | 与 start_date 同时传或同时不传；以下两种筛选条件兼容；过滤筛选条件，格式为"yyyy-MM-dd"；过滤筛选条件，格式为 “yyyy-MM-dd HH:mm:ss” |
| page | Integer |  |  | 查询的页码数 | 默认为 1 |
| page_size | Integer |  |  | 单页行数 | 默认为 20，不超过 200 |

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | 返回码 |  |
| message | String |  |  | 返回信息 |  |
| details | VideoListDetail |  |  | JSON 返回值 |  |
| - total_count | Integer |  |  | 数据的总行数 |  |
| - data | VideoListData |  |  | 详情 |  |
| - width | Integer |  |  | 视频宽度 |  |
| - height | Integer |  |  | 视频高度 |  |
| - watermark_url | String |  |  | 视频预览链接 |  |
| - md5 | String |  |  | 视频 md5 值 |  |
| - photo_id | String |  |  | 视频 ID |  |
| - material_id | String |  |  | 素造视频素材 ID |  |
| - cover_url | String |  |  | 视频首帧图片链接 |  |
| - sync_date | String |  |  | 视频同步日期 | photo 的被创建日期格式: yyyy-MM-dd HH:mm:ss |
| - covers | Covers[] |  |  | 包括多封面 url 和预审核状态 |  |
| - cover_url | String |  |  | 封面 url |  |
| - status | Integer |  |  | 审核状态 | 0：预审通过，1：预审失败，2：非预审核 |
| - material_tag | String |  |  | 素造素材标签 | firstLevel：；1 电商；2 游戏；3 网服；4 本地；5 金融；secondLevel：；1 综合平台类；2 垂直电商；3 二类电商；4 传统 IP/经典成熟；5 休闲游戏；6 主流经济；7 工具类；8 社交类；9 阅读类；10 贷款平台；11 保险；12 信用卡；13 本地 |
| - material_title | String |  |  | 素造素材标题 |  |
| - supplier_account_id | Long |  |  | 素造供应商 id |  |
| - supplier_account_name | String |  |  | 供应商名称 |  |
