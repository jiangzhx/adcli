---
title: 获取程序化创意/智能创意审核信息
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2591&menuId=3314
doc_id: kuaishou_2591
source_id: kuaishou_2591
---
# 获取程序化创意/智能创意审核信息

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2591 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2025-04-29T02:44:51.432Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/v2/creative/advanced/program/review_detail |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 | 20000800 | 广告主ID`在获取 access_token 的时候返回 |  |
| unit_ids | Long[] | 是 | [123124,325344] | 广告组ID集`数量小于等于20个 |  |

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  | 0 | 状态码 |  |
| message | String |  | "OK" | 返回信息 |  |
| data | AdMarketAdvancedProgramCreativeReviewDetailsSnake |  | 1 | 返回数据 |  |
| - details | AdMarketAdvancedProgramCreativeReviewDetailViewSnake[] |  | 1 | 详情 |  |
| - slogans | String[] |  | 222 | 审核不通过的封面广告语 |  |
| - combine_detail_views | CombineDetailViewsSnake[] |  | [{}] | 审核不通过和正在审核的创意组合 |  |
| - id | Long |  | 2484509491 | 创意ID |  |
| - photo_id | String |  | 5235434606906684459 | 视频ID`已加密 |  |
| - cover_url | String |  | http://static.yximgs.com/udata/pkg/c71377c52fd0499d8a3420635aaf44b9.jpg | 封面URL |  |
| - caption | String |  | ere | 作品广告语 |  |
| - review_status | Integer |  | 3 | 审核状态`1：审核中；2：审核通过；3：审核不通过 |  |
| - review_detail | ReviewDetail |  | {} | 审核信息 |  |
| - reason | String |  | 账户未通过 | 字段描述，需要修改 |  |
| - put_status | Integer |  | 1 | 程序化创意操作状态`1：投放中；2：暂停；3：删除 |  |
| - pic_image_token | String |  |  | 联盟图片（横版/竖版）`联盟图片imageToken |  |
| - pic_url | String |  | http://www.baidu.com/ | 联盟图片url（横版/竖版） |  |
| - app_grade_type | Integer |  | 1 | 审核分级结果`0：默认；1：当创意发生降级时，会限制部分流量无法投放 |  |
| - audit_detail | CreativeAuditDetailViewSnake100 |  |  | 审核限流详情 |  |
| - community_review_status | Integer |  |  | 社区审核状态 0未送审 1待审核 2审核通过 3审核拒绝 5部分审核通过 |  |
| - community_review_detail | String |  |  | 社区审核拒绝原因 |  |
| - review_status | Integer |  |  | 商业审核状态 0未送审 1待审核 2审核通过 3审核拒绝 5部分审核通过 |  |
| - review_detail | String |  |  | 商业审核拒绝理由 |  |
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
| - adv_creative_community_review_detail | CreativeCommunityReasonViewSnake[] |  |  | 程序化创意社区审核详情 |  |
| - id | Long |  |  | 创意ID |  |
| - photo_id | String |  |  | 视频ID |  |
| - cover_id | Long |  |  | 封面ID |  |
| - cover_url | String |  |  | 封面url |  |
| - caption | String |  |  | 视频标题 |  |
| - community_review_detail | String |  |  | 审核拒绝理由 |  |
| - custom_creative_community_review_detail | CreativeCommunityReasonViewSnake |  |  | 自定义创意社区审核详情 |  |
| - id | Long |  |  | 创意ID |  |
| - photo_id | String |  |  | 视频ID |  |
| - cover_id | Long |  |  | 封面ID |  |
| - cover_url | String |  |  | 封面url |  |
| - caption | String |  |  | 视频标题 |  |
| - community_review_detail | String |  |  | 审核拒绝理由 |  |
| - unit_id | Long |  | 166925091 | 当前的程序化创意的广告组ID |  |
