---
title: 查询企微授权成员
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=3065&menuId=3757
doc_id: kuaishou_3065
source_id: kuaishou_3065
---
# 查询企微授权成员

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 3065 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 老铁线索通 |
| createTime | 2024-07-23T03:19:05.130Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/clue_laotie/v1/qywx/getQywxCorpAuthInfo |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| corp_id | String | 是 | xxx | corpId | 企微id明文 |
| advertiser_id | Long | 是 | 12345 | accountId | 账户id |
| dep_ids | Integer[] |  | [1,2] | 部门列表，必须是授权可见部门，查当前层级的成员 | 部门列表 |

## 请求样例

### 示例标题 (java)

```
//  请输入示例代码
{"corp_id":"ww026587a59a4f","advertiser_id":"901526"}
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| data | GetQywxCorpAuthInfoData |  |  | - |  |
| - user_infos | QywxOpenUser[] |  |  | - |  |
| - open_user_id | String |  | woIcKmHwAAGIlM8wUUH | - |  |
| - dept_ids | Integer[] |  | [1] | 部门id |  |
| - active_status | Integer |  | 1 | 激活状态0-已激活、1-未激活、2-初始免费期、3-已过期 |  |
| - expire_time | Long |  | 1722090015 | 过期时间 |  |
| - agent_id | String |  | 10005 | - |  |
| message | String |  | ok | OK-成功，其他错误信息 |  |
| code | Integer |  | 0 | 0-成功 |  |

## 返回样例

### 示例标题 (java)

```
//  请输入示例代码
{
	"code": 401000,
	"data": {
		"user_infos": [{
			"open_user_id": "woIcKmHwAAnHtU3MjPEjuLclQ",
			"dept_ids": [2]
		}, {
			"open_user_id": "woIcKmHwAANbFo8waaJ34JXw",
			"dept_ids": [2]
		}, {
			"open_user_id": "woIcKmHwAAFw2O2IifK3iVAv5w",
			"dept_ids": [2]
		}],
		"agent_id": "10006"
	},
	"message": "OK",
	"request_id": "ELiAgIDAqpiOrAEY9wMy3Vw="
}
```
