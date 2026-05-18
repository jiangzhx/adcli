---
title: AI视频推荐
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=3089&menuId=3830
doc_id: kuaishou_3089
source_id: kuaishou_3089
---
# AI视频推荐

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 3089 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-08-08T06:56:47.438Z |

## 概述

【AI视频】功能简介：AI视频是根据您视频库优质视频自动生成更多优质视频，为您提供素材供给，您可自主选择投放。 若您使用该视频，表示您理解并同意，素材推荐作为中立的技术服务平台仅提供自动化功能，您使用本功能仍需遵守国家法律法规，包括但不限于在投放前获得相关内容合法授权或行政许可，否则因使用素材推荐产生的问题，由您自行承担法律责任。

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/video/aiRecommend |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long |  |  | 广告主id |  |
| page | Integer |  |  | 分页 |  |
| page_size | Integer |  |  | 分页大小，最大100 |  |
| dpa_product_id | Long |  |  | sDpaId |  |
| series_id | Long |  |  | 短剧ID |  |

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | 状态码 |  |
| message | String |  |  | 返回信息 |  |
| data | AdMarketVideoInfoView |  |  | 信息 |  |
| - total_count | Long |  | 104 | 视频总数 |  |
| - details | AMDetails603[] |  | [{}] | 详情 |  |
| - cover_url | String |  | http://ali2.a.yximgs.com/upic/2021/07/08/11/unknown-0-5967be10b83044ab-3d4b358efb604372&clientCacheKey=3xtg7uijuw72f8u_v1.jpg&di=a3491bb&bp=10000 | 视频首帧图片链接 |  |
| - photo_id | String |  | 5233464296313677649 | 视频 ID |  |
| - photo_name | String |  | 49396634578.mp4 | 视频名称 | `默认为视频ID |
| - create_time | String |  | 2021-07-08 11:54:38 | 创建时间 |  |
| - signature | String |  | b6529d6fdd09ce085bcb384664caae89 | 视频MD5 |  |
| - new_status | Integer |  | 1 | 视频状态 | 0：视频库删除，1：可用状态，2：转码中，3：审核中，11：转码失败，12：审核失败，13：已屏蔽，14：视频在客户端删除 |
| - source | Integer |  | 0 | 视频来源 | ` 0：本地；1：开眼；2：素造；4：mapi；7：聚星视频；8：LA 素材上传；10：个人主页；11:代理商自制 |
| - url | String |  | http://txmov6.a.yximgs.com/upic/2021/07/08/11/unknown-0-5967be10b83044ab-3d4b358efb604372&clientCacheKey=3xtg7uijuw72f8u_v1_b.mp4&tt=b&di=a3491bb&bp=10000 | 视频预览链接 |  |
| - authorization | Integer |  | 1 | 授权状态`1：授权视频；2：取消授权 |  |
| - duration | Long |  | 24566 | 视频时长 | 单位毫秒 |
| - upload_time | String |  | 2021-07-08 11:54:37 | 上传时间 |  |
| - photo_tag | String[] |  | 123 | 视频标签 |  |
| - width | Integer |  | 720 | 视频宽度 |  |
| - height | Integer |  | 1280 | 视频高度 |  |
| - status | Integer |  | 0 | 视频状态`0：正常；1：删除 |  |
| - photo_wake_status | Integer |  |  | 视频唤醒状态 | 已经废弃， |
| - photo_tag_identify_items | PhotoTagIdentifyItems[] |  |  | 素材内容标签 |  |
| - dimension | String |  | 产品卖点 | 字段描述，需要修改 |  |
| - adAssetTagActionItems | AdAssetTagActionItems[] |  | [{}] | 字段描述，需要修改 |  |
| - action | String |  | 删除 | 字段描述，需要修改 |  |
| - adAssetTagInfoItemList | AdAssetTagInfoItemList[] |  | [{}] | 字段描述，需要修改 |  |
| - tagId | Long |  | 4030114 | 字段描述，需要修改 |  |
| - tagName | String |  | 真人认证交友 | 字段描述，需要修改 |  |
| - tagDetail | String |  | 产品卖点，指用户是真人用户，非机器人 | 字段描述，需要修改 |  |
| - photo_user_id | Long |  | 0 | 视频所属的UserId |  |
| - outer_loop_native | Integer |  | 0 | 是否是原生视频 | 0或2=非原生视频；1或3=原生视频。 |
| - atlas_pic_ids | String[] |  | 1 | 1 |  |
| - atlas_audio_bs_key | String |  | 1 | 1 |  |
| - atlas_audio_url | String |  | 1 | 1 |  |
| - shield_status | Integer |  | 1 | 视频是否已同步个人主页 1否 0是 |  |
| - cursor | Long |  | 1 | 游标值 |  |
| - photo_dup_status | Integer |  | 1 | 素材创新度 | 0-原创，1-重复 |
| - native_good_type | Integer |  | 1 | 素材质量 | 1-良好，2-优质，0,3-其他 |
