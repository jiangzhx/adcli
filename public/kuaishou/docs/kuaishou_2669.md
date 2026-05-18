---
title: 获取可选的动态词包
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2669&menuId=3401
doc_id: kuaishou_2669
source_id: kuaishou_2669
---
# 获取可选的动态词包

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2669 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T12:04:33.143Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/v1/tool/creative_word/list |
| httpMethod | GET |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 广告主id |  |

## 请求样例

### 请求样例 (shell)

```
curl -X GET \
  -H 'Access-Token: 6acd879e43a32b58b5' \
  -H 'Content-Type: application/json' \
  -d '{
    "advertiser_id": 20000152
  }' -L https://ad.e.kuaishou.com/rest/openapi/v1/tool/creative_word/list
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | 状态码 |  |
| message | String |  |  | message |  |
| data | CreativeWordView[] |  |  | 动态词包列表 |  |
| - name | String |  |  | 创意词包名称 |  |
| - replace_words | String |  |  | 替换值 |  |
| - default_word | String |  |  | 默认值 |  |
| - max_word_length | Integer |  |  | 替换词最大长度 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "message": "OK",
    "data": [
        {
            "name": "日期",
            "replace_words": [
                "今天"
            ],
            "default_word": "今天",
            "max_word_length": 2
        },
        {
            "name": "星期",
            "replace_words": [
                "星期一",
                "星期二",
                "星期三",
                "星期四",
                "星期五",
                "星期六",
                "星期天"
            ],
            "default_word": "周末",
            "max_word_length": 3
        }
}
```
