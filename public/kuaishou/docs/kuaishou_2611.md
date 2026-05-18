---
title: 获取创意审核详情接口
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2611&menuId=3335
doc_id: kuaishou_2611
source_id: kuaishou_2611
---
# 获取创意审核详情接口

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2611 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T11:10:45.132Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/creative/element/reviewDetails |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | accountId |  |
| ids | Long[] | 是 | [1,2,3] | 自定义创意时为创意ID 程序化创意时为组ID |  |
| creative_mold | Integer | 是 | 1 | 创意类型 | 1 自定义创意 2程序化创意 |

## 请求样例

### 示例标题 (javascript)

```
{
  "advertiser_id": 7869843,
  "creative_mold": 1,
  "ids": [
    38502062490,
    38501947560,
    38502062459
  ]
}
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | 状态码 |  |
| message | String |  | "OK" | 描述信息 |  |
| data | CreativeAuditDetailViewSnake868[] |  |  | 审核详情 |  |
| - community_review_status | Integer |  |  | 社区审核状态 1审核中 2审核通过 3审核拒绝 5基本通过审核(指视频通过审核) |  |
| - review_status | Integer |  |  | 商业审核状态 1审核中 2审核通过 3审核拒绝 5基本通过审核(指视频通过审核) |  |
| - review_reason | ElementReasonViewSnake[] |  |  | 商业审核拒绝详情 |  |
| - id | Integer |  |  | 视频ID或者创意ID | 视频ID或者创意ID |
| - type | Integer |  |  | 审核元素 1视频 2封面 3广告语 4图片 6创意 7图集 | 审核元素 1视频 2封面 3广告语 4图片 6创意 7图集 |
| - negative_type | Integer |  |  | 限流类型 1低质 2降级 3负向 4封面没过 | 限流类型 1低质 2降级 3负向 4封面没过 |
| - reason_and_modify | ReasonAndModifySnake[] |  |  | 审核拒绝/限流原因和建议 | 审核拒绝/限流原因和建议 |
| - reason | String |  |  | 审核拒绝原因 |  |
| - modify | String[] |  |  | 修改建议 |  |
| - limiting_reason | ElementReasonViewSnake[] |  |  | 限流详情 |  |
| - id | Integer |  |  | 视频ID或者创意ID | 视频ID或者创意ID |
| - type | Integer |  |  | 审核元素 1视频 2封面 3广告语 4图片 6创意 7图集 | 审核元素 1视频 2封面 3广告语 4图片 6创意 7图集 |
| - negative_type | Integer |  |  | 限流类型 1低质 2降级 3负向 4封面没过 | 限流类型 1低质 2降级 3负向 4封面没过 |
| - reason_and_modify | ReasonAndModifySnake[] |  |  | 审核拒绝/限流原因和建议 | 审核拒绝/限流原因和建议 |
| - reason | String |  |  | 审核拒绝原因 |  |
| - modify | String[] |  |  | 修改建议 |  |
| - adv_creative_community_review_detail | CreativeCommunityReasonViewSnake775[] |  |  | 程序化创意社区审核拒绝详情 |  |
| - id | Long |  |  | 创意ID |  |
| - photo_id | Long |  |  | 视频ID |  |
| - cover_id | Long |  |  | 封面ID |  |
| - cover_url | String |  |  | 封面url |  |
| - caption | String |  |  | 视频标题 |  |
| - community_review_detail | String |  |  | 审核拒绝理由 |  |
| - custom_creative_community_review_detail | CreativeCommunityReasonViewSnake775 |  |  | 自定义创意社区审核拒绝详情 |  |
| - id | Long |  |  | 创意ID |  |
| - photo_id | Long |  |  | 视频ID |  |
| - cover_id | Long |  |  | 封面ID |  |
| - cover_url | String |  |  | 封面url |  |
| - caption | String |  |  | 视频标题 |  |
| - community_review_detail | String |  |  | 审核拒绝理由 |  |
| - id | Long |  |  | 程序化创意组id，自定义创意创意id |  |

## 返回样例

### 示例标题 (javascript)

```
{
  "code": 0,
  "data": [
    {
      "review_reason": null,
      "community_review_detail": null,
      "review_detail": null,
      "adv_creative_community_review_detail": null,
      "community_review_status": 2,
      "limiting_reason": [],
      "id": 38502062459,
      "review_status": 2
    },
    {
      "review_reason": null,
      "community_review_detail": null,
      "review_detail": null,
      "adv_creative_community_review_detail": null,
      "community_review_status": 2,
      "limiting_reason": [],
      "id": 38502062490,
      "review_status": 2
    },
    {
      "review_reason": null,
      "community_review_detail": null,
      "review_detail": null,
      "adv_creative_community_review_detail": null,
      "community_review_status": 2,
      "limiting_reason": [],
      "id": 38501947560,
      "review_status": 2
    }
  ],
  "message": "OK",
  "request_id": "ELiAgIDgnISaChiqEiDf_s7HwTEomuGNiws="
}
```
