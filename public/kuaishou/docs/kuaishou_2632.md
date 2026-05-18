---
title: 视频库-推送视频（新版）
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2632&menuId=3356
doc_id: kuaishou_2632
source_id: kuaishou_2632
---
# 视频库-推送视频（新版）

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2632 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2025-09-02T07:49:07.718Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/v1/file/ad/video/share/new |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| sync_profile | Boolean |  |  | 分享个人主页（默认不同步） |  |
| advertiser_id | Long | 是 | 0 | 当前账户 |  |
| photo_ids | Long[] | 是 | [] | 被推送视频 |  |
| account_ids | Long[] | 是 | [] | 被推送账户 |  |
| share_account_type | Integer | 是 | 1 | 分享账户类型 | 1-同主体同代理商账户；2-同主体下账户（需加白使用）；9-同代理下账户（需加白使用）；10-同运营自定义客户名下账户（需加白使用） |

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  | 1 | 状态码 |  |
| message | String |  | "" | 状态信息 |  |
| data | SharePhotoResultViewGW |  | {} | 分享结果 |  |
| - share_status | Integer |  | -1 | 视频推送结果：-1=全部失败，0=表示部分失败，1=全部成功, 2=等待异步推送结果。 |  |
| - share_photo_exists | Boolean |  | true | 推送视频是否已存在于被推送账户中 |  |
| - not_supported_internal_photo | Boolean |  | false | 被推送账户是否支持内部账户推送，true=不支持，false=支持。 |  |
| - mismatched_account_list | Long[] |  | 6882090 | 被推送账户是否属于所选 [同主体同代理商账户, 同主体账户, 内部账户]，不符合则加入这个列表。 |  |
| - need_to_retry_list | NeedToRetryListGW[] |  | [{}] | 因种种原因导致未推送成功的结果 |  |
| - account_id | Long |  | 6882090 | 账户ID |  |
| - photo_id | String |  | 5218827606618037747 | 加密后的视频ID |  |
| - share_result | String |  | NEED_TO_RETRY | 推送结果 |  |
| - duplicated_photo_list | NeedToRetryListGW49[] |  | [{}] | 已经存在于被推送账户中的视频ID |  |
| - account_id | Long |  | 6882090 | 账户ID |  |
| - photo_id | String |  | 5218827606618037747 | 加密后的视频ID |  |
| - original_photo_id | String |  | 5218827606618037747 | 推送账户中的视频ID |  |
| - share_success_list | NeedToRetryListGW49[] |  | [{}] | 推送成功的数据 |  |
| - account_id | Long |  | 6882090 | 账户ID |  |
| - photo_id | String |  | 5218827606618037747 | 加密后的视频ID |  |
| - original_photo_id | String |  | 5218827606618037747 | 推送账户中的视频ID |  |
