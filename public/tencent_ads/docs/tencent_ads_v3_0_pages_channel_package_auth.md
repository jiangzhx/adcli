---
title: 应用宝渠道包授权及管理指引
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/pages/channel_package_auth
doc_id: tencent_ads_v3_0_pages_channel_package_auth
source_id: tencent_ads_v3_0_pages_channel_package_auth
---
# 应用宝渠道包授权及管理指引

# 1. 概述

为解决广告主通过 Marketing api 的方式来管理已授权的渠道包，我们在 Marketing 上支持了应用宝账号授权和安卓渠道包管理，通过 Marketing api 开发者可以更好的批量创建、批量更新、获取等管理渠道包,如果您希望通过 Marketing API 管理渠道包，您需要执行以下步骤：

# 2. 完成授权流程

授权的目的

应用宝渠道包属于应用宝 open 的资产管理，如果想通过 Marketing API 来进行管理，管理前必须通过授权的方式，将开发者官网的广告账号和应用宝账号进行授权管理才可以操作应用宝 QQ 账号下的渠道包，授权通过后可以获得授权标识。

授权对应关系说明

Marketing 官网下最多可管理多个 APP id，每个 APP id 可以绑定多个腾讯广告账号 UID

管理维度：一个腾讯广告账户 uid 可以授权多个应用宝 QQ，一个应用宝 QQ 只能被一个腾讯广告账户 uid 授权，即腾讯广告 uid 与应用宝 QQ 为一对多的关系；

投放维度：一个应用宝 QQ 可以绑定多个腾讯广告账户 uid，一个腾讯广告账户 uid 只能绑定一个应用宝 QQ，及腾讯广告 uid 与应用宝 QQ 为多对一的关系。

# 3. 获取授权标识（myapp_auth_key）

授权标识是什么？

应用宝授权标识（myapp_auth_key）是通过 API 方式管理渠道包时必填的参数，每个应用宝 open 账号下分配的唯一授权标识。授权标识为 32 位数字字母组成（例如:5443FS22K244K22H45894503157853D），在使用 Marketing API 创建、更新、获取时的必填参数。

如何获取授权标识？ 方式一：登录开发者官网-应用程序管理-第三方应用详情，查看已授权的 应用宝账户对应的 授权唯一标识，应用宝授权标识（myapp_auth_key）是通过 api 方式管理渠道包时必填的参数，每个应用宝 open 账号下分配的唯一授权标识 32 位。

方式二：访问并登录渠道包管理页面（[https://ch.open.qq.com/static](https://ch.open.qq.com/static)），在页面的右上角查看授权唯一标识，应用宝授权标识（myapp_auth_key）是通过 api 方式管理渠道包时必填的参数，每个应用宝 open 账号下分配的唯一授权标识 32 位。

# 4. 如何通过异步任务接口创建、更新渠道包

接口定义详见：[创建异步任务（async_tasks/add）](https://developers.e.qq.com/v3.0/docs/api/async_tasks/add) 创建渠道包任务：TASK_TYPE_CREATE_ANDROID_CHANNEL_PACKAGE，和更新渠道包任务：TADK_TYPE_UPDATE_ANDROID_CHANNEL_PACKAGE。在任务所需条件（task_spec）里新增了创建安卓渠道包接口任务所需条件（task_type_create_android_channel_package_spec）和更新安卓渠道包接口任务所需条件（task_type_update_android_channel_package_spec）

应用宝用户唯一标识（myapp_auth_key）：完成授权流程可以获取唯一标识，32 位数字字母组成

应用宝 APP id（android_app_id）：应用宝渠道包主线包应用 id，登录（[https://ch.open.qq.com/static](https://ch.open.qq.com/static)）可以在页面获取

渠道包名称（package_name）：渠道包的文件名称

渠道包下载地址（download_url）：http 或 https 开头，以 apk 格式结尾的渠道包下载 url 地址

假设您需要创建一个名为“创建测试”的渠道包，请求示例如下：

```
curl -X POST \ 
    'https://api.e.qq.com/v3.0/async_tasks/add?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \ 
    -H 'Content-Type: application/json' \ 
    -d '{
      task_name: task201912041579056095,
      account_id: 123456,
      task_type: TASK_TYPE_CREATE_ANDROID_CHANNEL_PACKAGE,
      task_spec: {
          task_type_create_android_channel_package_spec: {
              android_channel_package_spec: [
                  {
                      package_name: 创建测试,
                      download_url: http://dd.myapp.com/test.apk
                  }
              ],
              myapp_auth_key: FA1EF73285DAEE55EC5EDA06FD6A6835,
              android_app_id: 1104985435
          }
      }
    }'
```

假设您需要更新一个名为“更新测试”的渠道包，请求示例如下：

```
curl -X POST \ 
    'https://api.e.qq.com/v3.0/async_task/add?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \ 
    -H 'Content-Type: application/json' \ 
	-d '{
	  task_name: 8551957660,
	  account_id: 123456,
	  task_type: TASK_TYPE_UPDATE_ANDROID_CHANNEL_PACKAGE,
	  task_spec: {
		  task_type_update_android_channel_package_spec: {
			  android_channel_package_spec: [
				  {
					  channel_package_id: 000116083833313139383033,
					  package_name: 更新测试,
					  download_url: http://dd.myapp.com/test.apk
				  }
			  ],
			  myapp_auth_key: FA1EF73285DAEE55EC5EDA06FD6A6835,
			  android_app_id: 1101072624
		  }
	  }
	}'
```

# 4. 如何通过 API 查询渠道包任务的处理状态

接口定义详见：[获取异步任务（async_tasks/get）](https://developers.e.qq.com/v3.0/docs/api/async_tasks/get) 我们在获取异步任务(async_tasks/get)应答字段任务结果（result）中新增了渠道包任务处理信息（channel_package_info_list）。

请求示例如下：

```
curl -G 'https://api.e.qq.com/v1.1/async_task/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>'
  -d 'account_id=123456' \ 
  -d 'page=1' \ 
  -d 'page_size=1'
```

应答示例：

```
{
      trace_id: 07f6e9f950630aacc5d255559d924a46,
      code: 0,
      data: {
          page_info: {
              total_number: 1,
              total_page: 1,
              page: 1,
              page_size: 1
          },
          list: [
              {
                  task_name: task201912041579056219,
                  result: {
                      data: {
                          channel_package_info_list: [
                              {
                                  created_time: 1579056204,
                                  last_modified_time: 1579056204,
                                  package_name: 测试应用包名,
                                  error_code: TASK_ERROR_NORMAL,
                                  android_app_id: 1104985435,
                                  status: CHANNEL_TASK_STATUS_PENDING
                              }
                          ]
                      }
                  },
                  created_time: 1579056205,
                  task_id: 289970,
                  task_type: TASK_TYPE_CREATE_ANDROID_CHANNEL_PACKAGE,
                  status: TASK_STATUS_PROCESSING
              }
          ]
      },
      message_cn: ,
      message: 
  }
```

# 5. 如何获取线上渠道包信息

接口定义/请求参数/应答字段详见：[获取安卓渠道包（android_channel/get）](https://developers.e.qq.com/v3.0/docs/api/android_channel/get)
