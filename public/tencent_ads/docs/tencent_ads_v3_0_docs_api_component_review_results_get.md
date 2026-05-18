---
title: 查询组件审核结果 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/component_review_results/get
doc_id: tencent_ads_v3_0_docs_api_component_review_results_get
source_id: tencent_ads_v3_0_docs_api_component_review_results_get
---
# 查询组件审核结果 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | component_review_results/get |
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
| account_id* | integer | 广告主帐号 id，有操作权限的帐号 id，不支持代理商 id |
| component_id_list* | integer[] | 创意组件 id 列表 数组最小长度 1，最大长度 100 |

## 请求示例

```
curl -v -G 'https://api.e.qq.com/v3.0/component_review_results/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'component_id_list=[]'
curl -v -G 'https://api.e.qq.com/v3.0/component_review_results/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'component_id_list=[]'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| list | struct[] | 返回信息列表 |
| component_info | struct | 创意组件信息 |
| component_id | integer | 创意组件 id |
| component_type | enum | 创意组件类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#component_type) |
| review_status | enum | 审核结果状态，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#review_result_status) |
| element_result_list | struct[] | 组件元素粒度审核结果列表 |
| element_id | integer | 元素 id |
| image_id | string | 图片 id，通过 [\[images 模块\]](https://developers.e.qq.com/docs/api/business_assets/image/images_add) 上传图片后获得 |
| video_id | string | 视频 id，通过 [\[videos 模块\]](https://developers.e.qq.com/docs/api/business_assets/video/videos_add?version=1.1&_preview=1) 上传视频后获得 |
| element_name | string | 元素名称 |
| element_value | string | 元素值 |
| element_type | enum | 元素类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#review_element_type) |
| review_status | enum | 审核结果状态，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#review_result_status) |
| element_reject_detail_info | struct[] | 元素拒绝原因详情列表 |
| reason | string | 拒绝原因 |
| site_set_list | struct[] | 影响版位列表 |
| site_set | enum | 版位，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_site_set_definition) |
| reject_info_location | struct[] | 拒绝原因可视化信息列表 |
| x | integer | x 轴位置 |
| y | integer | y 轴位置 |
| height | integer | 高度 |
| width | integer | 宽度 |
| img_url | string | 帧图片 url |
| location_img_url | string | 标注结果图 url |
| related_img_url | string | 种子图 url |
| time_second | float | 时间戳，视频时间点（非视频元素本字段为空） |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "list": [
            {
                "component_info": [],
                "element_result_list": [
                    {
                        "element_reject_detail_info": [
                            {
                                "site_set_list": [],
                                "reject_info_location": []
                            }
                        ]
                    }
                ]
            }
        ]
    }
}
```

## 可视化调试工具

请求

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
