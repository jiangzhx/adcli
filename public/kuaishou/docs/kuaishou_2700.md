---
title: 获取达人原生视频列表接口
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2700&menuId=3435
doc_id: kuaishou_2700
source_id: kuaishou_2700
---
# 获取达人原生视频列表接口

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2700 |
| documentType | 2 |
| version | 0.0.2 |
| bizName | 效果广告 |
| createTime | 2025-09-10T06:49:34.623Z |

## 概述

【注】当达人原生视频存在授权使用到期、视频被设置为不公开等多种情况时，您将不能再拉取到本视频。为了防止因不符合拉取条件的视频数量太多，拖慢请求处理效率，所以技术层面执行了一些优化，可能会导致您发现返回数据data.photos为空但data.pcursor不为'no_more'的情况，此时您可使用接口返回的data.pcursor作为入参再次请求以获取后续数据，请您注意以及理解。

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/v1/native/photo/list |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| author_id | Long | 是 | 2189466824 | 达人用户id |  |
| pcursor | String |  |  | 游标，第一次不传，后续滑动获取时根据结果返回的pcursor填取 |  |
| count | Integer | 是 | 1 | 每次获取的个数，最大不超过50个 |  |
| kol_user_type | Integer | 是 | 2 | 原生达人类型，1代表普通快手号 达人2服务号原生，3聚星达人原生 |  |
| tab_type | Integer |  | 0 | 0表示 个人主页非隐藏视频，1代表个人主页隐藏视频 |  |
| campaign_type | Integer |  | 2 | 计划类型，原生场景下仅支持部分计划类型 |  |
| advertiser_id | Long | 是 |  | advertiser_id |  |
| keyword | String |  |  | 搜索场景时，关键词必填 |  |
| search_keyword_type | Integer |  |  | 关键词类型 0未知 1photoId搜索 2关键词搜索 |  |

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | 请求状态 |  |
| message | String |  |  | 请求结果提示 |  |
| data | KwaiOrderPhotoListViewSnake |  |  | 请求结果 |  |
| - photos | KwaiOrdePhotoViewSnake[] |  |  | 视频列表 |  |
| - photo_id | String |  |  | 加密后的photoId |  |
| - caption | String |  |  | 视频标题 |  |
| - cover_url | CdnUrlInfo[] |  |  | 封面url |  |
| - cdn | String |  |  | cdn信息 |  |
| - url | String |  |  | url信息 |  |
| - movie_url | CdnUrlInfo[] |  |  | 视频url |  |
| - cdn | String |  |  | cdn信息 |  |
| - url | String |  |  | url信息 |  |
| - duration | Long |  |  | 视频时长，单位毫秒 |  |
| - height | Integer |  |  | 视频高度 |  |
| - width | Integer |  |  | 视频宽度 |  |
| - creative_material_type | Integer |  |  | 视频横竖版 |  |
| - ad_social_order_id | String |  |  | 聚星订单id |  |
| - upload_time_mills | Long |  |  | 视频上传时间 毫秒 |  |
| - signature | String |  |  | 视频md5，无用字段，当前只会返回"" |  |
| - native_good_type | Integer |  | - | 素材质量 | 1-良好，2-优质，0,3-其他 |
| - photo_dup_status | Integer |  | - | 素材创新度 | 0-原创，1-重复 |
| - pcursor | String |  |  | 下标，如果后面无更多视频则返回 no_more; 如果后续有更多视频需用此返回填到拉取视频接口的入参上 |  |
