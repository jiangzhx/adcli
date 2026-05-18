---
title: 增加屏蔽评论信息
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2965&menuId=3716
doc_id: kuaishou_2965
source_id: kuaishou_2965
---
# 增加屏蔽评论信息

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2965 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T12:09:24.812Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/v1/comment/shield_info/create |
| httpMethod | POST |
| httpContentType | FORM |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 | 123 | 广告主 ID | 在获取 access_token 的时候返回 |
| shield_content_list | String[] | 是 | ["test"] | 屏蔽信息内容 | 根据 shield_type 类型填写屏蔽信息内容 |
| shield_type | Integer | 是 | 1 | 屏蔽信息类型 | 1：评论内容关键词（数量上限 100，长度上限 20），5：用户昵称关键词（数量上限 100，长度上限 20），6：快手 ID（数量上限 200） |

## 请求样例

### 请求样例 (jsonc)

```
{
    "shield_type": 1,
    "shield_content_list": [
        "test_a688fe31a8c8"
    ],
    "advertiser_id": 58
}
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  | 0 | 状态码 |  |
| message | String |  | "OK" | 错误信息 |  |
| request_id | String |  |  | 请求ID |  |
| data | ShieldInfoCreateData |  |  | 返回结果 |  |
| - shield_info_id_list | Long[] |  |  | 生成的屏蔽信息id | 仅返回创建成功的屏蔽信息id（超过数量限制返回为空；超过长度限制、屏蔽信息重复的屏蔽信息会被过滤掉） |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "message": "OK",
    "request_id": "997a93fead6b4ddbb5a0940abd3ea17f",
    "data": {
        "shield_info_id_list": [1, 2, 3]
    }
}
```
