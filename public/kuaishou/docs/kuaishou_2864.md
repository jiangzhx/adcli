---
title: 上传资质文件
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2864&menuId=3598
doc_id: kuaishou_2864
source_id: kuaishou_2864
---
# 上传资质文件

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2864 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-23T11:55:56.155Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/v1/agent/file/upload |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| file | File | 是 |  | 要上传的资质文件 | 支持jpg、jpeg、pdf、gif格式，小于5MB |
| agent_id | Long | 是 |  | 代理商 id |  |

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| file_token | String |  |  | 资质文件标识 |  |
| url | String |  |  | 文件预览链接 |  |

## 原始内容

```
上传资质文件 /rest/openapi/v1/agent/file/upload file File 要上传的资质文件 agent_id Long 代理商 id file_token String 资质文件标识 url String 文件预览链接
```
