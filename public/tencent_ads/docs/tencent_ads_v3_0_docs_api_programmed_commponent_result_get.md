---
title: 组件化创意衍生成品查询接口 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/programmed_commponent_result/get
doc_id: tencent_ads_v3_0_docs_api_programmed_commponent_result_get
source_id: tencent_ads_v3_0_docs_api_programmed_commponent_result_get
---
# 组件化创意衍生成品查询接口 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | programmed_commponent_result/get |
| 请求方法 | GET |

## 全局参数

全局参数是指每一个接口都需要使用到的参数。详情[参考](https://developers.e.qq.com/v3.0/pages/send_request)，代码案例[参考](https://developers.e.qq.com/v3.0/pages/send_request)。

| 参数名称 | 参数类型 |
| --- | --- |
| access_token | 授权令牌，完成 OAuth 2.0 授权后获得，参考[授权认证](https://developers.e.qq.com/docs/start/authorization)章节 |
| timestamp | 当前的时间戳，单位为秒，允许客户端请求最大时间误差为 300 秒。 MarketingAPI 所使用的时间戳，若无特殊说明，均为秒级时间戳 MarketingAPI 所使用的时区为 GMT+8，例如当时间戳为 1494840119 时，表示 2017-05-15 17:21:59 |
| nonce | 随机字串标识，不超过 32 个字符，由调用方自行生成，需保证全局唯一性 |

## 请求参数

标有*的参数为必填项

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| account_id* | integer | 推广帐号 id，有操作权限的帐号 id，包括代理商和广告主帐号 id |
| material_derive_id* | integer | 衍生全局 id |

使用说明

## 请求示例

```
curl -v -G 'https://api.e.qq.com/v3.0/programmed_commponent_result/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'material_derive_id=116922'
curl -v -G 'https://api.e.qq.com/v3.0/programmed_commponent_result/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'material_derive_id=116922'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| material_derive_id | integer | 衍生全局 id |
| derive_data_version | enum | 衍生数据版本，区分组件化衍生和素材衍生，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#derive_data_version) |
| dynamic_creative_id | integer | 广告创意 id |
| adgroup_id | int64 | 广告 id |
| list | struct[] | 衍生成品组件信息列表，数组长度为[0,20] |
| derive_component_id | integer | 衍生组件 id |
| origin_component_id | integer | 原始组件 id |
| template_id | integer | 模版 id |
| derive_material | struct | 素材信息 |
| material_id | integer | 素材 id，图片或者视频 通过 [\[videos 模块\]](https://developers.e.qq.com/v3.0/docs/api/videos/add) 或者 [\[images 模块\]](https://developers.e.qq.com/v3.0/docs/api/images/add) 上传后获得 |
| type | string | 素材类型，IMAGE-图片,VIDEO-视频 |
| origin_material | struct[] | 素材信息列表，数组长度为[0,50] |
| material_id | integer | 素材 id，图片或者视频 通过 [\[videos 模块\]](https://developers.e.qq.com/v3.0/docs/api/videos/add) 或者 [\[images 模块\]](https://developers.e.qq.com/v3.0/docs/api/images/add) 上传后获得 |
| type | string | 素材类型，IMAGE-图片,VIDEO-视频 |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "material_derive_id": 116922,
        "derive_data_version": "DERIVE_DATA_VERSION_V3",
        "dynamic_creative_id": 41068223,
        "adgroup_id": "<ADGROUP_ID>",
        "list": [
            {
                "derive_component_id": 1143930,
                "origin_component_id": 1139529,
                "template_id": 11425687,
                "derive_material": {
                    "material_id": "3173292726",
                    "type": "IMAGE"
                },
                "origin_material": [
                    {
                        "material_id": "3173291271",
                        "type": "IMAGE"
                    }
                ]
            },
            {
                "derive_component_id": 1143931,
                "origin_component_id": 1118902,
                "template_id": 11426489,
                "derive_material": {
                    "material_id": "3173292727",
                    "type": "IMAGE"
                },
                "origin_material": [
                    {
                        "material_id": "3173292096",
                        "type": "IMAGE"
                    }
                ]
            },
            {
                "derive_component_id": 1143932,
                "origin_component_id": 1118902,
                "template_id": 11426489,
                "derive_material": {
                    "material_id": "3173292728",
                    "type": "IMAGE"
                },
                "origin_material": [
                    {
                        "material_id": "3173292096",
                        "type": "IMAGE"
                    }
                ]
            },
            {
                "derive_component_id": 1143933,
                "origin_component_id": 1118755,
                "template_id": 11425553,
                "derive_material": {
                    "material_id": "3173292729",
                    "type": "VIDEO"
                },
                "origin_material": [
                    {
                        "material_id": "3173292070",
                        "type": "VIDEO"
                    }
                ]
            }
        ]
    }
}
```

## 可视化调试工具

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
