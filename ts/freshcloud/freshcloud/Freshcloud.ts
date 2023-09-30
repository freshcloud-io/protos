// Original file: freshcloud.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { ConsumeValuesQueueRequest as _freshcloud_ConsumeValuesQueueRequest, ConsumeValuesQueueRequest__Output as _freshcloud_ConsumeValuesQueueRequest__Output } from '../freshcloud/ConsumeValuesQueueRequest';
import type { ConsumeValuesQueueResponse as _freshcloud_ConsumeValuesQueueResponse, ConsumeValuesQueueResponse__Output as _freshcloud_ConsumeValuesQueueResponse__Output } from '../freshcloud/ConsumeValuesQueueResponse';
import type { CreateAppRequest as _freshcloud_CreateAppRequest, CreateAppRequest__Output as _freshcloud_CreateAppRequest__Output } from '../freshcloud/CreateAppRequest';
import type { CreateAppResponse as _freshcloud_CreateAppResponse, CreateAppResponse__Output as _freshcloud_CreateAppResponse__Output } from '../freshcloud/CreateAppResponse';
import type { DeleteAppRequest as _freshcloud_DeleteAppRequest, DeleteAppRequest__Output as _freshcloud_DeleteAppRequest__Output } from '../freshcloud/DeleteAppRequest';
import type { DeleteAppResponse as _freshcloud_DeleteAppResponse, DeleteAppResponse__Output as _freshcloud_DeleteAppResponse__Output } from '../freshcloud/DeleteAppResponse';
import type { DeleteValueDictionaryRequest as _freshcloud_DeleteValueDictionaryRequest, DeleteValueDictionaryRequest__Output as _freshcloud_DeleteValueDictionaryRequest__Output } from '../freshcloud/DeleteValueDictionaryRequest';
import type { DeleteValueDictionaryResponse as _freshcloud_DeleteValueDictionaryResponse, DeleteValueDictionaryResponse__Output as _freshcloud_DeleteValueDictionaryResponse__Output } from '../freshcloud/DeleteValueDictionaryResponse';
import type { DeployAppRequest as _freshcloud_DeployAppRequest, DeployAppRequest__Output as _freshcloud_DeployAppRequest__Output } from '../freshcloud/DeployAppRequest';
import type { DeployAppResponse as _freshcloud_DeployAppResponse, DeployAppResponse__Output as _freshcloud_DeployAppResponse__Output } from '../freshcloud/DeployAppResponse';
import type { Empty as _google_protobuf_Empty, Empty__Output as _google_protobuf_Empty__Output } from '../google/protobuf/Empty';
import type { ExistsValueDictionaryRequest as _freshcloud_ExistsValueDictionaryRequest, ExistsValueDictionaryRequest__Output as _freshcloud_ExistsValueDictionaryRequest__Output } from '../freshcloud/ExistsValueDictionaryRequest';
import type { ExistsValueDictionaryResponse as _freshcloud_ExistsValueDictionaryResponse, ExistsValueDictionaryResponse__Output as _freshcloud_ExistsValueDictionaryResponse__Output } from '../freshcloud/ExistsValueDictionaryResponse';
import type { GetValueDictionaryRequest as _freshcloud_GetValueDictionaryRequest, GetValueDictionaryRequest__Output as _freshcloud_GetValueDictionaryRequest__Output } from '../freshcloud/GetValueDictionaryRequest';
import type { GetValueDictionaryResponse as _freshcloud_GetValueDictionaryResponse, GetValueDictionaryResponse__Output as _freshcloud_GetValueDictionaryResponse__Output } from '../freshcloud/GetValueDictionaryResponse';
import type { LengthDictionaryRequest as _freshcloud_LengthDictionaryRequest, LengthDictionaryRequest__Output as _freshcloud_LengthDictionaryRequest__Output } from '../freshcloud/LengthDictionaryRequest';
import type { LengthDictionaryResponse as _freshcloud_LengthDictionaryResponse, LengthDictionaryResponse__Output as _freshcloud_LengthDictionaryResponse__Output } from '../freshcloud/LengthDictionaryResponse';
import type { ListAppsResponse as _freshcloud_ListAppsResponse, ListAppsResponse__Output as _freshcloud_ListAppsResponse__Output } from '../freshcloud/ListAppsResponse';
import type { LoadSecretsFromAPIRequest as _freshcloud_LoadSecretsFromAPIRequest, LoadSecretsFromAPIRequest__Output as _freshcloud_LoadSecretsFromAPIRequest__Output } from '../freshcloud/LoadSecretsFromAPIRequest';
import type { LoadSecretsFromAPIResponse as _freshcloud_LoadSecretsFromAPIResponse, LoadSecretsFromAPIResponse__Output as _freshcloud_LoadSecretsFromAPIResponse__Output } from '../freshcloud/LoadSecretsFromAPIResponse';
import type { LogsAppRequest as _freshcloud_LogsAppRequest, LogsAppRequest__Output as _freshcloud_LogsAppRequest__Output } from '../freshcloud/LogsAppRequest';
import type { LogsAppResponse as _freshcloud_LogsAppResponse, LogsAppResponse__Output as _freshcloud_LogsAppResponse__Output } from '../freshcloud/LogsAppResponse';
import type { PingResponse as _freshcloud_PingResponse, PingResponse__Output as _freshcloud_PingResponse__Output } from '../freshcloud/PingResponse';
import type { PopValueDictionaryRequest as _freshcloud_PopValueDictionaryRequest, PopValueDictionaryRequest__Output as _freshcloud_PopValueDictionaryRequest__Output } from '../freshcloud/PopValueDictionaryRequest';
import type { PopValueDictionaryResponse as _freshcloud_PopValueDictionaryResponse, PopValueDictionaryResponse__Output as _freshcloud_PopValueDictionaryResponse__Output } from '../freshcloud/PopValueDictionaryResponse';
import type { ProduceValueQueueRequest as _freshcloud_ProduceValueQueueRequest, ProduceValueQueueRequest__Output as _freshcloud_ProduceValueQueueRequest__Output } from '../freshcloud/ProduceValueQueueRequest';
import type { ProduceValueQueueResponse as _freshcloud_ProduceValueQueueResponse, ProduceValueQueueResponse__Output as _freshcloud_ProduceValueQueueResponse__Output } from '../freshcloud/ProduceValueQueueResponse';
import type { PutValueDictionaryRequest as _freshcloud_PutValueDictionaryRequest, PutValueDictionaryRequest__Output as _freshcloud_PutValueDictionaryRequest__Output } from '../freshcloud/PutValueDictionaryRequest';
import type { PutValueDictionaryResponse as _freshcloud_PutValueDictionaryResponse, PutValueDictionaryResponse__Output as _freshcloud_PutValueDictionaryResponse__Output } from '../freshcloud/PutValueDictionaryResponse';
import type { StopAppRequest as _freshcloud_StopAppRequest, StopAppRequest__Output as _freshcloud_StopAppRequest__Output } from '../freshcloud/StopAppRequest';
import type { StopAppResponse as _freshcloud_StopAppResponse, StopAppResponse__Output as _freshcloud_StopAppResponse__Output } from '../freshcloud/StopAppResponse';

export interface FreshcloudClient extends grpc.Client {
  ConsumeValuesQueue(argument: _freshcloud_ConsumeValuesQueueRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_freshcloud_ConsumeValuesQueueResponse__Output>;
  ConsumeValuesQueue(argument: _freshcloud_ConsumeValuesQueueRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_freshcloud_ConsumeValuesQueueResponse__Output>;
  consumeValuesQueue(argument: _freshcloud_ConsumeValuesQueueRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_freshcloud_ConsumeValuesQueueResponse__Output>;
  consumeValuesQueue(argument: _freshcloud_ConsumeValuesQueueRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_freshcloud_ConsumeValuesQueueResponse__Output>;
  
  CreateApp(argument: _freshcloud_CreateAppRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_freshcloud_CreateAppResponse__Output>): grpc.ClientUnaryCall;
  CreateApp(argument: _freshcloud_CreateAppRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_freshcloud_CreateAppResponse__Output>): grpc.ClientUnaryCall;
  CreateApp(argument: _freshcloud_CreateAppRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_freshcloud_CreateAppResponse__Output>): grpc.ClientUnaryCall;
  CreateApp(argument: _freshcloud_CreateAppRequest, callback: grpc.requestCallback<_freshcloud_CreateAppResponse__Output>): grpc.ClientUnaryCall;
  createApp(argument: _freshcloud_CreateAppRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_freshcloud_CreateAppResponse__Output>): grpc.ClientUnaryCall;
  createApp(argument: _freshcloud_CreateAppRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_freshcloud_CreateAppResponse__Output>): grpc.ClientUnaryCall;
  createApp(argument: _freshcloud_CreateAppRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_freshcloud_CreateAppResponse__Output>): grpc.ClientUnaryCall;
  createApp(argument: _freshcloud_CreateAppRequest, callback: grpc.requestCallback<_freshcloud_CreateAppResponse__Output>): grpc.ClientUnaryCall;
  
  DeleteApp(argument: _freshcloud_DeleteAppRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_freshcloud_DeleteAppResponse__Output>): grpc.ClientUnaryCall;
  DeleteApp(argument: _freshcloud_DeleteAppRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_freshcloud_DeleteAppResponse__Output>): grpc.ClientUnaryCall;
  DeleteApp(argument: _freshcloud_DeleteAppRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_freshcloud_DeleteAppResponse__Output>): grpc.ClientUnaryCall;
  DeleteApp(argument: _freshcloud_DeleteAppRequest, callback: grpc.requestCallback<_freshcloud_DeleteAppResponse__Output>): grpc.ClientUnaryCall;
  deleteApp(argument: _freshcloud_DeleteAppRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_freshcloud_DeleteAppResponse__Output>): grpc.ClientUnaryCall;
  deleteApp(argument: _freshcloud_DeleteAppRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_freshcloud_DeleteAppResponse__Output>): grpc.ClientUnaryCall;
  deleteApp(argument: _freshcloud_DeleteAppRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_freshcloud_DeleteAppResponse__Output>): grpc.ClientUnaryCall;
  deleteApp(argument: _freshcloud_DeleteAppRequest, callback: grpc.requestCallback<_freshcloud_DeleteAppResponse__Output>): grpc.ClientUnaryCall;
  
  DeleteValueDictionary(argument: _freshcloud_DeleteValueDictionaryRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_freshcloud_DeleteValueDictionaryResponse__Output>): grpc.ClientUnaryCall;
  DeleteValueDictionary(argument: _freshcloud_DeleteValueDictionaryRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_freshcloud_DeleteValueDictionaryResponse__Output>): grpc.ClientUnaryCall;
  DeleteValueDictionary(argument: _freshcloud_DeleteValueDictionaryRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_freshcloud_DeleteValueDictionaryResponse__Output>): grpc.ClientUnaryCall;
  DeleteValueDictionary(argument: _freshcloud_DeleteValueDictionaryRequest, callback: grpc.requestCallback<_freshcloud_DeleteValueDictionaryResponse__Output>): grpc.ClientUnaryCall;
  deleteValueDictionary(argument: _freshcloud_DeleteValueDictionaryRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_freshcloud_DeleteValueDictionaryResponse__Output>): grpc.ClientUnaryCall;
  deleteValueDictionary(argument: _freshcloud_DeleteValueDictionaryRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_freshcloud_DeleteValueDictionaryResponse__Output>): grpc.ClientUnaryCall;
  deleteValueDictionary(argument: _freshcloud_DeleteValueDictionaryRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_freshcloud_DeleteValueDictionaryResponse__Output>): grpc.ClientUnaryCall;
  deleteValueDictionary(argument: _freshcloud_DeleteValueDictionaryRequest, callback: grpc.requestCallback<_freshcloud_DeleteValueDictionaryResponse__Output>): grpc.ClientUnaryCall;
  
  DeployApp(argument: _freshcloud_DeployAppRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_freshcloud_DeployAppResponse__Output>): grpc.ClientUnaryCall;
  DeployApp(argument: _freshcloud_DeployAppRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_freshcloud_DeployAppResponse__Output>): grpc.ClientUnaryCall;
  DeployApp(argument: _freshcloud_DeployAppRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_freshcloud_DeployAppResponse__Output>): grpc.ClientUnaryCall;
  DeployApp(argument: _freshcloud_DeployAppRequest, callback: grpc.requestCallback<_freshcloud_DeployAppResponse__Output>): grpc.ClientUnaryCall;
  deployApp(argument: _freshcloud_DeployAppRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_freshcloud_DeployAppResponse__Output>): grpc.ClientUnaryCall;
  deployApp(argument: _freshcloud_DeployAppRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_freshcloud_DeployAppResponse__Output>): grpc.ClientUnaryCall;
  deployApp(argument: _freshcloud_DeployAppRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_freshcloud_DeployAppResponse__Output>): grpc.ClientUnaryCall;
  deployApp(argument: _freshcloud_DeployAppRequest, callback: grpc.requestCallback<_freshcloud_DeployAppResponse__Output>): grpc.ClientUnaryCall;
  
  ExistsValueDictionary(argument: _freshcloud_ExistsValueDictionaryRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_freshcloud_ExistsValueDictionaryResponse__Output>): grpc.ClientUnaryCall;
  ExistsValueDictionary(argument: _freshcloud_ExistsValueDictionaryRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_freshcloud_ExistsValueDictionaryResponse__Output>): grpc.ClientUnaryCall;
  ExistsValueDictionary(argument: _freshcloud_ExistsValueDictionaryRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_freshcloud_ExistsValueDictionaryResponse__Output>): grpc.ClientUnaryCall;
  ExistsValueDictionary(argument: _freshcloud_ExistsValueDictionaryRequest, callback: grpc.requestCallback<_freshcloud_ExistsValueDictionaryResponse__Output>): grpc.ClientUnaryCall;
  existsValueDictionary(argument: _freshcloud_ExistsValueDictionaryRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_freshcloud_ExistsValueDictionaryResponse__Output>): grpc.ClientUnaryCall;
  existsValueDictionary(argument: _freshcloud_ExistsValueDictionaryRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_freshcloud_ExistsValueDictionaryResponse__Output>): grpc.ClientUnaryCall;
  existsValueDictionary(argument: _freshcloud_ExistsValueDictionaryRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_freshcloud_ExistsValueDictionaryResponse__Output>): grpc.ClientUnaryCall;
  existsValueDictionary(argument: _freshcloud_ExistsValueDictionaryRequest, callback: grpc.requestCallback<_freshcloud_ExistsValueDictionaryResponse__Output>): grpc.ClientUnaryCall;
  
  GetValueDictionary(argument: _freshcloud_GetValueDictionaryRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_freshcloud_GetValueDictionaryResponse__Output>): grpc.ClientUnaryCall;
  GetValueDictionary(argument: _freshcloud_GetValueDictionaryRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_freshcloud_GetValueDictionaryResponse__Output>): grpc.ClientUnaryCall;
  GetValueDictionary(argument: _freshcloud_GetValueDictionaryRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_freshcloud_GetValueDictionaryResponse__Output>): grpc.ClientUnaryCall;
  GetValueDictionary(argument: _freshcloud_GetValueDictionaryRequest, callback: grpc.requestCallback<_freshcloud_GetValueDictionaryResponse__Output>): grpc.ClientUnaryCall;
  getValueDictionary(argument: _freshcloud_GetValueDictionaryRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_freshcloud_GetValueDictionaryResponse__Output>): grpc.ClientUnaryCall;
  getValueDictionary(argument: _freshcloud_GetValueDictionaryRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_freshcloud_GetValueDictionaryResponse__Output>): grpc.ClientUnaryCall;
  getValueDictionary(argument: _freshcloud_GetValueDictionaryRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_freshcloud_GetValueDictionaryResponse__Output>): grpc.ClientUnaryCall;
  getValueDictionary(argument: _freshcloud_GetValueDictionaryRequest, callback: grpc.requestCallback<_freshcloud_GetValueDictionaryResponse__Output>): grpc.ClientUnaryCall;
  
  LengthDictionary(argument: _freshcloud_LengthDictionaryRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_freshcloud_LengthDictionaryResponse__Output>): grpc.ClientUnaryCall;
  LengthDictionary(argument: _freshcloud_LengthDictionaryRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_freshcloud_LengthDictionaryResponse__Output>): grpc.ClientUnaryCall;
  LengthDictionary(argument: _freshcloud_LengthDictionaryRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_freshcloud_LengthDictionaryResponse__Output>): grpc.ClientUnaryCall;
  LengthDictionary(argument: _freshcloud_LengthDictionaryRequest, callback: grpc.requestCallback<_freshcloud_LengthDictionaryResponse__Output>): grpc.ClientUnaryCall;
  lengthDictionary(argument: _freshcloud_LengthDictionaryRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_freshcloud_LengthDictionaryResponse__Output>): grpc.ClientUnaryCall;
  lengthDictionary(argument: _freshcloud_LengthDictionaryRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_freshcloud_LengthDictionaryResponse__Output>): grpc.ClientUnaryCall;
  lengthDictionary(argument: _freshcloud_LengthDictionaryRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_freshcloud_LengthDictionaryResponse__Output>): grpc.ClientUnaryCall;
  lengthDictionary(argument: _freshcloud_LengthDictionaryRequest, callback: grpc.requestCallback<_freshcloud_LengthDictionaryResponse__Output>): grpc.ClientUnaryCall;
  
  ListApps(argument: _google_protobuf_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_freshcloud_ListAppsResponse__Output>): grpc.ClientUnaryCall;
  ListApps(argument: _google_protobuf_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_freshcloud_ListAppsResponse__Output>): grpc.ClientUnaryCall;
  ListApps(argument: _google_protobuf_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_freshcloud_ListAppsResponse__Output>): grpc.ClientUnaryCall;
  ListApps(argument: _google_protobuf_Empty, callback: grpc.requestCallback<_freshcloud_ListAppsResponse__Output>): grpc.ClientUnaryCall;
  listApps(argument: _google_protobuf_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_freshcloud_ListAppsResponse__Output>): grpc.ClientUnaryCall;
  listApps(argument: _google_protobuf_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_freshcloud_ListAppsResponse__Output>): grpc.ClientUnaryCall;
  listApps(argument: _google_protobuf_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_freshcloud_ListAppsResponse__Output>): grpc.ClientUnaryCall;
  listApps(argument: _google_protobuf_Empty, callback: grpc.requestCallback<_freshcloud_ListAppsResponse__Output>): grpc.ClientUnaryCall;
  
  LoadSecretsFromAPI(argument: _freshcloud_LoadSecretsFromAPIRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_freshcloud_LoadSecretsFromAPIResponse__Output>): grpc.ClientUnaryCall;
  LoadSecretsFromAPI(argument: _freshcloud_LoadSecretsFromAPIRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_freshcloud_LoadSecretsFromAPIResponse__Output>): grpc.ClientUnaryCall;
  LoadSecretsFromAPI(argument: _freshcloud_LoadSecretsFromAPIRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_freshcloud_LoadSecretsFromAPIResponse__Output>): grpc.ClientUnaryCall;
  LoadSecretsFromAPI(argument: _freshcloud_LoadSecretsFromAPIRequest, callback: grpc.requestCallback<_freshcloud_LoadSecretsFromAPIResponse__Output>): grpc.ClientUnaryCall;
  loadSecretsFromApi(argument: _freshcloud_LoadSecretsFromAPIRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_freshcloud_LoadSecretsFromAPIResponse__Output>): grpc.ClientUnaryCall;
  loadSecretsFromApi(argument: _freshcloud_LoadSecretsFromAPIRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_freshcloud_LoadSecretsFromAPIResponse__Output>): grpc.ClientUnaryCall;
  loadSecretsFromApi(argument: _freshcloud_LoadSecretsFromAPIRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_freshcloud_LoadSecretsFromAPIResponse__Output>): grpc.ClientUnaryCall;
  loadSecretsFromApi(argument: _freshcloud_LoadSecretsFromAPIRequest, callback: grpc.requestCallback<_freshcloud_LoadSecretsFromAPIResponse__Output>): grpc.ClientUnaryCall;
  
  LogsApp(argument: _freshcloud_LogsAppRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_freshcloud_LogsAppResponse__Output>;
  LogsApp(argument: _freshcloud_LogsAppRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_freshcloud_LogsAppResponse__Output>;
  logsApp(argument: _freshcloud_LogsAppRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_freshcloud_LogsAppResponse__Output>;
  logsApp(argument: _freshcloud_LogsAppRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_freshcloud_LogsAppResponse__Output>;
  
  Ping(argument: _google_protobuf_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_freshcloud_PingResponse__Output>): grpc.ClientUnaryCall;
  Ping(argument: _google_protobuf_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_freshcloud_PingResponse__Output>): grpc.ClientUnaryCall;
  Ping(argument: _google_protobuf_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_freshcloud_PingResponse__Output>): grpc.ClientUnaryCall;
  Ping(argument: _google_protobuf_Empty, callback: grpc.requestCallback<_freshcloud_PingResponse__Output>): grpc.ClientUnaryCall;
  ping(argument: _google_protobuf_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_freshcloud_PingResponse__Output>): grpc.ClientUnaryCall;
  ping(argument: _google_protobuf_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_freshcloud_PingResponse__Output>): grpc.ClientUnaryCall;
  ping(argument: _google_protobuf_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_freshcloud_PingResponse__Output>): grpc.ClientUnaryCall;
  ping(argument: _google_protobuf_Empty, callback: grpc.requestCallback<_freshcloud_PingResponse__Output>): grpc.ClientUnaryCall;
  
  PopValueDictionary(argument: _freshcloud_PopValueDictionaryRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_freshcloud_PopValueDictionaryResponse__Output>): grpc.ClientUnaryCall;
  PopValueDictionary(argument: _freshcloud_PopValueDictionaryRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_freshcloud_PopValueDictionaryResponse__Output>): grpc.ClientUnaryCall;
  PopValueDictionary(argument: _freshcloud_PopValueDictionaryRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_freshcloud_PopValueDictionaryResponse__Output>): grpc.ClientUnaryCall;
  PopValueDictionary(argument: _freshcloud_PopValueDictionaryRequest, callback: grpc.requestCallback<_freshcloud_PopValueDictionaryResponse__Output>): grpc.ClientUnaryCall;
  popValueDictionary(argument: _freshcloud_PopValueDictionaryRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_freshcloud_PopValueDictionaryResponse__Output>): grpc.ClientUnaryCall;
  popValueDictionary(argument: _freshcloud_PopValueDictionaryRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_freshcloud_PopValueDictionaryResponse__Output>): grpc.ClientUnaryCall;
  popValueDictionary(argument: _freshcloud_PopValueDictionaryRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_freshcloud_PopValueDictionaryResponse__Output>): grpc.ClientUnaryCall;
  popValueDictionary(argument: _freshcloud_PopValueDictionaryRequest, callback: grpc.requestCallback<_freshcloud_PopValueDictionaryResponse__Output>): grpc.ClientUnaryCall;
  
  ProduceValueQueue(argument: _freshcloud_ProduceValueQueueRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_freshcloud_ProduceValueQueueResponse__Output>): grpc.ClientUnaryCall;
  ProduceValueQueue(argument: _freshcloud_ProduceValueQueueRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_freshcloud_ProduceValueQueueResponse__Output>): grpc.ClientUnaryCall;
  ProduceValueQueue(argument: _freshcloud_ProduceValueQueueRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_freshcloud_ProduceValueQueueResponse__Output>): grpc.ClientUnaryCall;
  ProduceValueQueue(argument: _freshcloud_ProduceValueQueueRequest, callback: grpc.requestCallback<_freshcloud_ProduceValueQueueResponse__Output>): grpc.ClientUnaryCall;
  produceValueQueue(argument: _freshcloud_ProduceValueQueueRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_freshcloud_ProduceValueQueueResponse__Output>): grpc.ClientUnaryCall;
  produceValueQueue(argument: _freshcloud_ProduceValueQueueRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_freshcloud_ProduceValueQueueResponse__Output>): grpc.ClientUnaryCall;
  produceValueQueue(argument: _freshcloud_ProduceValueQueueRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_freshcloud_ProduceValueQueueResponse__Output>): grpc.ClientUnaryCall;
  produceValueQueue(argument: _freshcloud_ProduceValueQueueRequest, callback: grpc.requestCallback<_freshcloud_ProduceValueQueueResponse__Output>): grpc.ClientUnaryCall;
  
  PutValueDictionary(argument: _freshcloud_PutValueDictionaryRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_freshcloud_PutValueDictionaryResponse__Output>): grpc.ClientUnaryCall;
  PutValueDictionary(argument: _freshcloud_PutValueDictionaryRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_freshcloud_PutValueDictionaryResponse__Output>): grpc.ClientUnaryCall;
  PutValueDictionary(argument: _freshcloud_PutValueDictionaryRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_freshcloud_PutValueDictionaryResponse__Output>): grpc.ClientUnaryCall;
  PutValueDictionary(argument: _freshcloud_PutValueDictionaryRequest, callback: grpc.requestCallback<_freshcloud_PutValueDictionaryResponse__Output>): grpc.ClientUnaryCall;
  putValueDictionary(argument: _freshcloud_PutValueDictionaryRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_freshcloud_PutValueDictionaryResponse__Output>): grpc.ClientUnaryCall;
  putValueDictionary(argument: _freshcloud_PutValueDictionaryRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_freshcloud_PutValueDictionaryResponse__Output>): grpc.ClientUnaryCall;
  putValueDictionary(argument: _freshcloud_PutValueDictionaryRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_freshcloud_PutValueDictionaryResponse__Output>): grpc.ClientUnaryCall;
  putValueDictionary(argument: _freshcloud_PutValueDictionaryRequest, callback: grpc.requestCallback<_freshcloud_PutValueDictionaryResponse__Output>): grpc.ClientUnaryCall;
  
  StopApp(argument: _freshcloud_StopAppRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_freshcloud_StopAppResponse__Output>): grpc.ClientUnaryCall;
  StopApp(argument: _freshcloud_StopAppRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_freshcloud_StopAppResponse__Output>): grpc.ClientUnaryCall;
  StopApp(argument: _freshcloud_StopAppRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_freshcloud_StopAppResponse__Output>): grpc.ClientUnaryCall;
  StopApp(argument: _freshcloud_StopAppRequest, callback: grpc.requestCallback<_freshcloud_StopAppResponse__Output>): grpc.ClientUnaryCall;
  stopApp(argument: _freshcloud_StopAppRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_freshcloud_StopAppResponse__Output>): grpc.ClientUnaryCall;
  stopApp(argument: _freshcloud_StopAppRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_freshcloud_StopAppResponse__Output>): grpc.ClientUnaryCall;
  stopApp(argument: _freshcloud_StopAppRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_freshcloud_StopAppResponse__Output>): grpc.ClientUnaryCall;
  stopApp(argument: _freshcloud_StopAppRequest, callback: grpc.requestCallback<_freshcloud_StopAppResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface FreshcloudHandlers extends grpc.UntypedServiceImplementation {
  ConsumeValuesQueue: grpc.handleServerStreamingCall<_freshcloud_ConsumeValuesQueueRequest__Output, _freshcloud_ConsumeValuesQueueResponse>;
  
  CreateApp: grpc.handleUnaryCall<_freshcloud_CreateAppRequest__Output, _freshcloud_CreateAppResponse>;
  
  DeleteApp: grpc.handleUnaryCall<_freshcloud_DeleteAppRequest__Output, _freshcloud_DeleteAppResponse>;
  
  DeleteValueDictionary: grpc.handleUnaryCall<_freshcloud_DeleteValueDictionaryRequest__Output, _freshcloud_DeleteValueDictionaryResponse>;
  
  DeployApp: grpc.handleUnaryCall<_freshcloud_DeployAppRequest__Output, _freshcloud_DeployAppResponse>;
  
  ExistsValueDictionary: grpc.handleUnaryCall<_freshcloud_ExistsValueDictionaryRequest__Output, _freshcloud_ExistsValueDictionaryResponse>;
  
  GetValueDictionary: grpc.handleUnaryCall<_freshcloud_GetValueDictionaryRequest__Output, _freshcloud_GetValueDictionaryResponse>;
  
  LengthDictionary: grpc.handleUnaryCall<_freshcloud_LengthDictionaryRequest__Output, _freshcloud_LengthDictionaryResponse>;
  
  ListApps: grpc.handleUnaryCall<_google_protobuf_Empty__Output, _freshcloud_ListAppsResponse>;
  
  LoadSecretsFromAPI: grpc.handleUnaryCall<_freshcloud_LoadSecretsFromAPIRequest__Output, _freshcloud_LoadSecretsFromAPIResponse>;
  
  LogsApp: grpc.handleServerStreamingCall<_freshcloud_LogsAppRequest__Output, _freshcloud_LogsAppResponse>;
  
  Ping: grpc.handleUnaryCall<_google_protobuf_Empty__Output, _freshcloud_PingResponse>;
  
  PopValueDictionary: grpc.handleUnaryCall<_freshcloud_PopValueDictionaryRequest__Output, _freshcloud_PopValueDictionaryResponse>;
  
  ProduceValueQueue: grpc.handleUnaryCall<_freshcloud_ProduceValueQueueRequest__Output, _freshcloud_ProduceValueQueueResponse>;
  
  PutValueDictionary: grpc.handleUnaryCall<_freshcloud_PutValueDictionaryRequest__Output, _freshcloud_PutValueDictionaryResponse>;
  
  StopApp: grpc.handleUnaryCall<_freshcloud_StopAppRequest__Output, _freshcloud_StopAppResponse>;
  
}

export interface FreshcloudDefinition extends grpc.ServiceDefinition {
  ConsumeValuesQueue: MethodDefinition<_freshcloud_ConsumeValuesQueueRequest, _freshcloud_ConsumeValuesQueueResponse, _freshcloud_ConsumeValuesQueueRequest__Output, _freshcloud_ConsumeValuesQueueResponse__Output>
  CreateApp: MethodDefinition<_freshcloud_CreateAppRequest, _freshcloud_CreateAppResponse, _freshcloud_CreateAppRequest__Output, _freshcloud_CreateAppResponse__Output>
  DeleteApp: MethodDefinition<_freshcloud_DeleteAppRequest, _freshcloud_DeleteAppResponse, _freshcloud_DeleteAppRequest__Output, _freshcloud_DeleteAppResponse__Output>
  DeleteValueDictionary: MethodDefinition<_freshcloud_DeleteValueDictionaryRequest, _freshcloud_DeleteValueDictionaryResponse, _freshcloud_DeleteValueDictionaryRequest__Output, _freshcloud_DeleteValueDictionaryResponse__Output>
  DeployApp: MethodDefinition<_freshcloud_DeployAppRequest, _freshcloud_DeployAppResponse, _freshcloud_DeployAppRequest__Output, _freshcloud_DeployAppResponse__Output>
  ExistsValueDictionary: MethodDefinition<_freshcloud_ExistsValueDictionaryRequest, _freshcloud_ExistsValueDictionaryResponse, _freshcloud_ExistsValueDictionaryRequest__Output, _freshcloud_ExistsValueDictionaryResponse__Output>
  GetValueDictionary: MethodDefinition<_freshcloud_GetValueDictionaryRequest, _freshcloud_GetValueDictionaryResponse, _freshcloud_GetValueDictionaryRequest__Output, _freshcloud_GetValueDictionaryResponse__Output>
  LengthDictionary: MethodDefinition<_freshcloud_LengthDictionaryRequest, _freshcloud_LengthDictionaryResponse, _freshcloud_LengthDictionaryRequest__Output, _freshcloud_LengthDictionaryResponse__Output>
  ListApps: MethodDefinition<_google_protobuf_Empty, _freshcloud_ListAppsResponse, _google_protobuf_Empty__Output, _freshcloud_ListAppsResponse__Output>
  LoadSecretsFromAPI: MethodDefinition<_freshcloud_LoadSecretsFromAPIRequest, _freshcloud_LoadSecretsFromAPIResponse, _freshcloud_LoadSecretsFromAPIRequest__Output, _freshcloud_LoadSecretsFromAPIResponse__Output>
  LogsApp: MethodDefinition<_freshcloud_LogsAppRequest, _freshcloud_LogsAppResponse, _freshcloud_LogsAppRequest__Output, _freshcloud_LogsAppResponse__Output>
  Ping: MethodDefinition<_google_protobuf_Empty, _freshcloud_PingResponse, _google_protobuf_Empty__Output, _freshcloud_PingResponse__Output>
  PopValueDictionary: MethodDefinition<_freshcloud_PopValueDictionaryRequest, _freshcloud_PopValueDictionaryResponse, _freshcloud_PopValueDictionaryRequest__Output, _freshcloud_PopValueDictionaryResponse__Output>
  ProduceValueQueue: MethodDefinition<_freshcloud_ProduceValueQueueRequest, _freshcloud_ProduceValueQueueResponse, _freshcloud_ProduceValueQueueRequest__Output, _freshcloud_ProduceValueQueueResponse__Output>
  PutValueDictionary: MethodDefinition<_freshcloud_PutValueDictionaryRequest, _freshcloud_PutValueDictionaryResponse, _freshcloud_PutValueDictionaryRequest__Output, _freshcloud_PutValueDictionaryResponse__Output>
  StopApp: MethodDefinition<_freshcloud_StopAppRequest, _freshcloud_StopAppResponse, _freshcloud_StopAppRequest__Output, _freshcloud_StopAppResponse__Output>
}
