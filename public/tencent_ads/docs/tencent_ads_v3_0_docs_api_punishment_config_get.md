---
title: 获取处罚系统配置 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/punishment_config/get
doc_id: tencent_ads_v3_0_docs_api_punishment_config_get
source_id: tencent_ads_v3_0_docs_api_punishment_config_get
---
# 获取处罚系统配置 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | punishment_config/get |
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

## 请求示例

```
curl -v -G 'https://api.e.qq.com/v3.0/punishment_config/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
curl -v -G 'https://api.e.qq.com/v3.0/punishment_config/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| illegal_scene_list | struct[] | 处罚场景 |
| value | string | 处罚枚举配置值 |
| desc | string | 处罚枚举配置描述 |
| level | integer | 处罚枚举配置层级，不超过四层 |
| parent_id | string | 处罚枚举配置值 |
| options | struct[] | 处罚枚举配置第二层列表 |
| value | string | 处罚枚举配置值 |
| desc | string | 处罚枚举配置描述 |
| level | integer | 处罚枚举配置层级，不超过四层 |
| parent_id | string | 处罚枚举配置值 |
| options | struct[] | 处罚枚举配置第三层列表 |
| value | string | 处罚枚举配置值 |
| desc | string | 处罚枚举配置描述 |
| level | integer | 处罚枚举配置层级，不超过四层 |
| parent_id | string | 处罚枚举配置值 |
| options | struct[] | 处罚枚举配置第四层列表 |
| value | string | 处罚枚举配置值 |
| desc | string | 处罚枚举配置描述 |
| level | integer | 处罚枚举配置层级，不超过四层 |
| parent_id | string | 处罚枚举配置值 |
| illegal_node_list | struct[] | 违规节点/对象 |
| value | string | 处罚枚举配置值 |
| desc | string | 处罚枚举配置描述 |
| level | integer | 处罚枚举配置层级，不超过四层 |
| parent_id | string | 处罚枚举配置值 |
| options | struct[] | 处罚枚举配置第二层列表 |
| value | string | 处罚枚举配置值 |
| desc | string | 处罚枚举配置描述 |
| level | integer | 处罚枚举配置层级，不超过四层 |
| parent_id | string | 处罚枚举配置值 |
| options | struct[] | 处罚枚举配置第三层列表 |
| value | string | 处罚枚举配置值 |
| desc | string | 处罚枚举配置描述 |
| level | integer | 处罚枚举配置层级，不超过四层 |
| parent_id | string | 处罚枚举配置值 |
| options | struct[] | 处罚枚举配置第四层列表 |
| value | string | 处罚枚举配置值 |
| desc | string | 处罚枚举配置描述 |
| level | integer | 处罚枚举配置层级，不超过四层 |
| parent_id | string | 处罚枚举配置值 |
| channel_list | struct[] | 发现渠道 |
| value | string | 处罚枚举配置值 |
| desc | string | 处罚枚举配置描述 |
| level | integer | 处罚枚举配置层级，不超过四层 |
| parent_id | string | 处罚枚举配置值 |
| options | struct[] | 处罚枚举配置第二层列表 |
| value | string | 处罚枚举配置值 |
| desc | string | 处罚枚举配置描述 |
| level | integer | 处罚枚举配置层级，不超过四层 |
| parent_id | string | 处罚枚举配置值 |
| options | struct[] | 处罚枚举配置第三层列表 |
| value | string | 处罚枚举配置值 |
| desc | string | 处罚枚举配置描述 |
| level | integer | 处罚枚举配置层级，不超过四层 |
| parent_id | string | 处罚枚举配置值 |
| options | struct[] | 处罚枚举配置第四层列表 |
| value | string | 处罚枚举配置值 |
| desc | string | 处罚枚举配置描述 |
| level | integer | 处罚枚举配置层级，不超过四层 |
| parent_id | string | 处罚枚举配置值 |
| action_type | struct[] | 账户处罚动作 |
| value | integer | 处罚枚举配置整数值 |
| desc | string | 处罚枚举配置描述 |
| punish_level | struct[] | 处罚等级 |
| value | integer | 处罚枚举配置整数值 |
| desc | string | 处罚枚举配置描述 |
| scene_list | struct[] | 违规原因 |
| value | integer | 处罚枚举配置整数值 |
| desc | string | 处罚枚举配置描述 |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "illegal_scene_list": [
            {
                "options": [
                    {
                        "options": [
                            {
                                "options": []
                            }
                        ]
                    }
                ]
            }
        ],
        "illegal_node_list": [
            {
                "options": [
                    {
                        "options": [
                            {
                                "options": []
                            }
                        ]
                    }
                ]
            }
        ],
        "channel_list": [
            {
                "options": [
                    {
                        "options": [
                            {
                                "options": []
                            }
                        ]
                    }
                ]
            }
        ],
        "action_type": [],
        "punish_level": [],
        "scene_list": []
    }
}
```

## 可视化调试工具

请求

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
