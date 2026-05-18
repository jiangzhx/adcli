---
title: 上传 APK 文件
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2766&menuId=3502
doc_id: kuaishou_2766
source_id: kuaishou_2766
---
# 上传 APK 文件

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2766 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T11:51:24.283Z |

## 概述

此接口为新增&amp;编辑安卓应用的前置步骤，需要将原始的APK文件上传至快手侧，生成blob_store_key，再调用「创建Android应用」的接口； 更新Android应用接口同理。

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/appcenter/upload/apk |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 广告主id |  |
| file | File | 是 |  | APK 文件 |  |
| type | Integer |  | 1 | 上传分包的用途：不填认为是上传母包，填 1 认为是上传母包并生成测试分包下载链接。 |  |

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| data | UploadApkResponseSnake |  |  | JSON 返回值 |  |
| - blob_store_key | String |  |  | APK 文件在快手的存储 Key |  |
| - url | String |  |  | 请补充描述详情 |  |
| - test_apk_url | String |  | - | 测试分包下载地址 |  |
| code | Integer |  |  | 返回码 |  |
| message | String |  |  | 返回信息 |  |
