---
title: 查询原生快手号列表(for 原生报表)
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=3042&menuId=3439
doc_id: kuaishou_3042
source_id: kuaishou_3042
---
# 查询原生快手号列表(for 原生报表)

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 3042 |
| documentType | 2 |
| version | 0.0.2 |
| bizName | 效果广告 |
| createTime | 2026-04-22T07:58:41.427Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/v1/native/report/user/list |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 | - | 广告主id |  |

## 请求样例

### 请求样例 (jsonc)

```
{
    "advertiser_id": 123456
}
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  | - | 返回码 | - |
| message | String |  | - | 返回描述 |  |
| data | UserProfileViewSnakeList |  | - | 1 |  |
| - user_list | UserProfileViewSnake[] |  |  | 用户列表 |  |
| - user_id | Long |  |  | 用户id |  |
| - user_name | String |  |  | 用户名称 |  |
| - user_sex | String |  | M | 用户性别，男性M，女性F |  |
| - head_url | String |  |  | 用户头像 |  |
| - kol_user_type | Integer |  |  | 达人用户类型，2服务号达人，3聚星达人 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code":0,
    "data":[
        {
            "user_sex":"M",
            "head_url":"http://static.yximgs.com/s1/i/def/head_222u.png",
            "kol_user_type":1,
            "user_id":123,
            "user_name":"test1"
        }
    ],
    "message":"OK",
    "request_id":"ELqAgIDQ9JiOrAEY3gUg_u7KoqQxKPjT_vgN"
}
```

## 原始内容

```
查询原生快手号列表(for 原生报表) /rest/openapi/gw/dsp/v1/native/report/user/list { "advertiser_id": 123456 } { "code":0, "data":[ { "user_sex":"M", "head_url":"http://static.yximgs.com/s1/i/def/head_222u.png", "kol_user_type":1, "user_id":123, "user_name":"test1" } ], "message":"OK", "request_id":"ELqAgIDQ9JiOrAEY3gUg_u7KoqQxKPjT_vgN" } kol_user_type Integer[] 达人原生类型，1代表普通快手号，2服务号原生达人，3聚星原生达人 获取普通快手号达人时，仅可选择在快手号授权中，状态为授权生效的非入驻聚星快手号（已入驻聚星请选择达人视频授权投放）。短剧默认为普通快手号 advertiser_id Long 广告主id code Integer 返回码 message String 返回描述 data UserProfileViewSnakeList 1 user_list UserProfileViewSnake[] 用户列表 user_id Long 用户id user_name String 用户名称 user_sex String 用户性别，男性M，女性F head_url String 用户头像 kol_user_type Integer 达人用户类型，2服务号达人，3聚星达人
```
