---
title: 删除定向模板
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2685&menuId=3419
doc_id: kuaishou_2685
source_id: kuaishou_2685
---
# 删除定向模板

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2685 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T12:11:23.981Z |

## 概述

注：本删除接口为物理删除，一旦删除后不可恢复，请谨慎操作

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/target/template/delete |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| template_id | Long |  |  | 模板ID |  |

## 请求样例

### 请求样例 (jsonc)

```
{
    "template_id": 123123
}
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| data | TemplateIdRespSnake |  |  | 数据详情 |  |
| - template_id | Long |  |  | 模板ID |  |
| message | String |  |  | 错误详情 |  |
| code | Integer |  |  | 返回码 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "message": "OK",
    "data": {
        "template_id": 123123
    }
}
```
