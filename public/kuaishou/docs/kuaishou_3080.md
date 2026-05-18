---
title: 行为意向4.0类目词查询接口
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=3080&menuId=3415
doc_id: kuaishou_3080
source_id: kuaishou_3080
---
# 行为意向4.0类目词查询接口

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 3080 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-23T07:13:45.983Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/target/option/behavior_interest |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 账户ID |  |

## 请求样例

### 请求示例 (jsonc)

```
{
  "advertiser_id": 139494
}
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| data | TargetBehaviorCategory[] |  |  | 数据详情 |  |
| - children | TargetBehaviorCategoryChild[] |  |  | 子类目列表 |  |
| - children | String[] |  |  | 请补充描述详情 |  |
| - count | Long |  |  | 请补充描述详情 |  |
| - id | Long |  |  | 请补充描述详情 |  |
| - level | Integer |  |  | 请补充描述详情 |  |
| - name | String |  |  | 请补充描述详情 |  |
| - count | Long |  |  | 类目覆盖人群数 |  |
| - id | Long |  |  | 类目ID，可用于广告组创编 |  |
| - level | Integer |  |  | 类目层级 |  |
| - name | String |  |  | 类目名称 |  |
| message | String |  |  | 错误详情，正常时返回 OK |  |
| code | Integer |  |  | 错误码 |  |

## 返回样例

### 返回示例 (jsonc)

```
{
    "code": 0,
    "data": [
        {
            "children": [
                {
                    "id": 1010101,
                    "name": "wifi联网",
                    "level": 2,
                    "count": 33429320,
                    "children": []
                },
                {
                    "id": 1010105,
                    "name": "多媒体处理",
                    "level": 2,
                    "count": 9404928,
                    "children": [
                        {
                            "id": 1010105002,
                            "name": "视频处理",
                            "level": 3,
                            "count": 2722134,
                            "children": []
                        }
                    ]
                }
            ],
            "level": 1,
            "count": 62760773,
            "name": "传媒资讯",
            "id": 10101
        }
    ],
    "message": "OK",
    "request_id": "ELqAgIDQ1JGaChibBiDEmcPN-jEoodH60Qg="
}
```
