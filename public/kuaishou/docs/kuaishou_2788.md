---
title: 新建应用分包
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2788&menuId=3526
doc_id: kuaishou_2788
source_id: kuaishou_2788
---
# 新建应用分包

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2788 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T11:58:09.854Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/appcenter/subpkg/add |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 广告主id |  |
| channel_id | String[] |  |  | 上传的渠道号列表,系统自动分包方式不填 | 当type=2时填写，单次最多填写100个。同一应用包下填写的渠道号不可重复 |
| parent_package_id | Long | 是 |  | 母包id | 仅支持android应用的包id新建分包。该字段等同于获取新版应用发布列表【单元创编】 接口返回值的package_id |
| count | Integer |  |  | 分包数量 | 当type=1时填写，单次最多100 |
| type | Integer | 是 |  | 分包方式 | 1-系统自动分包，2-上传渠道号列表 |
| channel_columns | ChannelColumnSnake[] |  | - | 渠道分包 | 与 channel_id 功能类似，但不可同时传递。 |
| - channel_name | String |  | - | - |  |
| - description | String |  | - | - |  |

## 请求样例

### 请求样例 (shell)

```
curl --location 'https://ad.e.kuaishou.com/rest/openapi/gw/dsp/appcenter/subpkg/add' \
--header 'Content-Type: application/json' \
--header 'Access-Token: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' \
--data '{
    "advertiser_id": 900015391,
    "parent_package_id": 1099611757910,
    "type": 2,
    "count": 1,
    "channel_id": [],
    "channel_columns": [
        {
            "channel_name": "测试备注1",
            "description": "备注-1"
        },
        {
            "channel_name": "测试备注2",
            "description": "备注-2"
        }
    ]
}'
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| data | AddSubPackageRespSnake[] |  |  | 新建分包的返回参数 |  |
| - build_status | Integer |  |  | 构建状态 0-构建中 | 构建状态 0-创建中，1-构建中，2-构建成功，3-构建失败 |
| - channel_id | String |  |  | 渠道号(分包号) |  |
| - package_id | Long |  |  | 分包id |  |
| - parent_package_id | Long |  |  | 绑定的母包id |  |
| - description | String |  | - | 分包备注 |  |
| code | Integer |  |  | 返回码 |  |
| message | String |  |  | 返回详情 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "data": [
        {
            "description": "备注-2",
            "package_id": 100130534,
            "build_status": 0,
            "parent_package_id": 1099611757910,
            "channel_id": "测试备注2"
        },
        {
            "description": "备注-1",
            "package_id": 100130535,
            "build_status": 0,
            "parent_package_id": 1099611757910,
            "channel_id": "测试备注1"
        }
    ],
    "message": "OK",
    "request_id": "ELmAgIDQwJmOrAEYnAkgo8_CyJQxKLWe0dQB"
}
```
