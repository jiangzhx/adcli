---
title: 智投项目创建接口
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=3326&menuId=4109
doc_id: kuaishou_3326
source_id: kuaishou_3326
---
# 智投项目创建接口

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 3326 |
| documentType | 2 |
| version | 0.0.0 |
| bizName | 效果广告 |
| createTime | 2025-11-20T13:00:47.583Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/v2/auax/project/create |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 广告主账号ID |  |
| name | String | 是 |  | 项目名称 |  |
| kol_user_id | Long | 是 |  | 快手号ID |  |
| kol_user_type | Integer | 是 |  | 快手号类型：1-普通快手号，2-蓝V服务号，3-聚星达人 |  |
| auto_manage_type | Integer | 是 |  | 智投类型：2-短剧智投 |  |
| subject_id | Long | 是 |  | 短剧ID/小说ID |  |
| ocpx_action_type | Integer | 是 |  | 转化目标：191-首日ROI，990-首日变现ROI（短剧） |  |
| roi_ratio | Double | 是 |  | ROI系数 |  |
| description | String | 是 |  | 广告语 |  |
| photo_package_info | Long[] | 是 |  | 素材包ID |  |

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| data | AuaxProejctIdS |  |  | 智投项目ID |  |
| - auax_project_id | Long |  |  | 智投项目ID |  |
| code | Integer |  |  | 状态码 |  |
| message | String |  |  | 错误信息 |  |

## 原始内容

```
智投项目创建接口 /rest/openapi/gw/dsp/v2/auax/project/create advertiser_id Long 广告主账号ID name String 项目名称 kol_user_id Long 快手号ID kol_user_type Integer 快手号类型：1-普通快手号，2-蓝V服务号，3-聚星达人 auto_manage_type Integer 智投类型：2-短剧智投 subject_id Long 短剧ID/小说ID ocpx_action_type Integer 转化目标：191-首日ROI，990-首日变现ROI（短剧），978-首日变现ROI（小说） roi_ratio Double ROI系数 description String 广告语 photo_package_info Long[] 素材包ID data AuaxProejctIdS 智投项目ID auax_project_id Long 智投项目ID code Integer 返回码 message String errorMessage
```
