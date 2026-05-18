---
title: 账户操作记录信息查询
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2919&menuId=3669
doc_id: kuaishou_2919
source_id: kuaishou_2919
---
# 账户操作记录信息查询

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2919 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2026-01-20T03:03:13.083Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/v1/tool/operation_record/list |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 广告主 ID | 在获取 access_token 的时候返回 |
| operation_type | Integer |  |  | 操作类型 | 1：新增 2：修改删除（可通过 content_log： "update_data": "删除"查看） |
| operation_target | Integer |  |  | 操作目标类型 | 目前只支持：1:账户 2：计划 3：广告组 4：创意 5：视频 6：app 应用 7：人群包 9：程序化创意2.0 10:评论内容 11:托管项目12:自动规则 13:评论屏蔽信息15:速推项目 20：商品库 21：关键行为 22：商品库商品 24：品牌计划 25：品牌单元 26：品牌创意 28：账户智投 29：线索优化 32：智能创意 33：省心投 34：粉条持续投 |
| role_type | Integer |  |  | 操作人 | 1：广告主 2：代理商 3：系统 4：管理员 5：Market Api 10：智能操盘 11：全自动投放 |
| page | Integer |  |  | 页码数 | 默认为 1 |
| page_size | Integer |  |  | 单页行数 | 默认为 20，不超过 500 |
| start_date | String |  |  | 开始时间 | 最多查询最近 6 个月的操作记录 |
| end_date | String |  |  | 结束时间 |  |

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | 返回码 |  |
| message | String |  |  | 返回信息 |  |
| data | ToolOperationRecordListData |  |  | JSON 返回值 |  |
| - total_count | Long |  |  | 总数 |  |
| - details | ToolOperationRecordListDetails |  |  | 详情 |  |
| - object_id | String |  |  | 操作对象 ID |  |
| - operation_type | Integer |  |  | 操作类型 | 1：新增 2：修改 |
| - operation_target | Integer |  |  | 操作目标类型 | 1：账户 2：计划 3：广告组 4：创意 5：视频 6：应用 7：人群包 |
| - role_type | Integer |  |  | 操作人 | 1：广告主 2：代理商 3：系统 4：管理员 5：Market Api |
| - object_name | String |  |  | 操作对象名称 |  |
| - operation_time | String |  |  | 操作时间 |  |
| - content_log | ContentLog[] |  |  | 日志内容 |  |
| - field_name | String |  |  | 字段名称 |  |
| - original_data | String |  |  | 原始数据 |  |
| - update_data | String |  |  | 修改数据 |  |

## 原始内容

```
账户操作记录信息查询 /rest/openapi/v1/tool/operation_record/list advertiser_id Long 广告主 ID operation_type Integer 操作类型 operation_target Integer 操作目标类型 role_type Integer 操作人 page Integer 页码数 page_size Integer 单页行数 start_date String 开始时间 end_date String 结束时间 code Integer 返回码 message String 返回信息 data ToolOperationRecordListData JSON 返回值 total_count Long 总数 details ToolOperationRecordListDetails 详情 object_id String 操作对象 ID operation_type Integer 操作类型 operation_target Integer 操作目标类型 role_type Integer 操作人 object_name String 操作对象名称 operation_time String 操作时间 content_log ContentLog[] 日志内容 field_name String 字段名称 original_data String 原始数据 update_data String 修改数据
```
