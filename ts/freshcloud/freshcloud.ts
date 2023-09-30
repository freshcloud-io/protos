import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { FreshcloudClient as _freshcloud_FreshcloudClient, FreshcloudDefinition as _freshcloud_FreshcloudDefinition } from './freshcloud/Freshcloud';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  freshcloud: {
    App: MessageTypeDefinition
    BuildInfo: MessageTypeDefinition
    ConsumeValuesQueueRequest: MessageTypeDefinition
    ConsumeValuesQueueResponse: MessageTypeDefinition
    CreateAppRequest: MessageTypeDefinition
    CreateAppResponse: MessageTypeDefinition
    CronExecuteRequest: MessageTypeDefinition
    CronExecuteResponse: MessageTypeDefinition
    DeleteAppRequest: MessageTypeDefinition
    DeleteAppResponse: MessageTypeDefinition
    DeleteValueDictionaryRequest: MessageTypeDefinition
    DeleteValueDictionaryResponse: MessageTypeDefinition
    DeployAppRequest: MessageTypeDefinition
    DeployAppResponse: MessageTypeDefinition
    ExistsValueDictionaryRequest: MessageTypeDefinition
    ExistsValueDictionaryResponse: MessageTypeDefinition
    Freshcloud: SubtypeConstructor<typeof grpc.Client, _freshcloud_FreshcloudClient> & { service: _freshcloud_FreshcloudDefinition }
    GetValueDictionaryRequest: MessageTypeDefinition
    GetValueDictionaryResponse: MessageTypeDefinition
    Image: MessageTypeDefinition
    ImageRegistry: MessageTypeDefinition
    LengthDictionaryRequest: MessageTypeDefinition
    LengthDictionaryResponse: MessageTypeDefinition
    ListAppsResponse: MessageTypeDefinition
    LoadSecretsFromAPIRequest: MessageTypeDefinition
    LoadSecretsFromAPIResponse: MessageTypeDefinition
    LogsAppRequest: MessageTypeDefinition
    LogsAppResponse: MessageTypeDefinition
    PingResponse: MessageTypeDefinition
    PopValueDictionaryRequest: MessageTypeDefinition
    PopValueDictionaryResponse: MessageTypeDefinition
    ProduceValueQueueRequest: MessageTypeDefinition
    ProduceValueQueueResponse: MessageTypeDefinition
    PutValueDictionaryRequest: MessageTypeDefinition
    PutValueDictionaryResponse: MessageTypeDefinition
    Resources: MessageTypeDefinition
    StopAppRequest: MessageTypeDefinition
    StopAppResponse: MessageTypeDefinition
  }
  google: {
    protobuf: {
      Empty: MessageTypeDefinition
      Timestamp: MessageTypeDefinition
    }
  }
}

