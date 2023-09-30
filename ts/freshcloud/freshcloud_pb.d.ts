import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class App extends jspb.Message {
  getId(): string;
  setId(value: string): App;

  getName(): string;
  setName(value: string): App;

  getEnvironment(): string;
  setEnvironment(value: string): App;

  getRunning(): boolean;
  setRunning(value: boolean): App;

  getCreatedat(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedat(value?: google_protobuf_timestamp_pb.Timestamp): App;
  hasCreatedat(): boolean;
  clearCreatedat(): App;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): App.AsObject;
  static toObject(includeInstance: boolean, msg: App): App.AsObject;
  static serializeBinaryToWriter(message: App, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): App;
  static deserializeBinaryFromReader(message: App, reader: jspb.BinaryReader): App;
}

export namespace App {
  export type AsObject = {
    id: string,
    name: string,
    environment: string,
    running: boolean,
    createdat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class CreateAppRequest extends jspb.Message {
  getName(): string;
  setName(value: string): CreateAppRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAppRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAppRequest): CreateAppRequest.AsObject;
  static serializeBinaryToWriter(message: CreateAppRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAppRequest;
  static deserializeBinaryFromReader(message: CreateAppRequest, reader: jspb.BinaryReader): CreateAppRequest;
}

export namespace CreateAppRequest {
  export type AsObject = {
    name: string,
  }
}

export class CreateAppResponse extends jspb.Message {
  getApp(): App | undefined;
  setApp(value?: App): CreateAppResponse;
  hasApp(): boolean;
  clearApp(): CreateAppResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAppResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAppResponse): CreateAppResponse.AsObject;
  static serializeBinaryToWriter(message: CreateAppResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAppResponse;
  static deserializeBinaryFromReader(message: CreateAppResponse, reader: jspb.BinaryReader): CreateAppResponse;
}

export namespace CreateAppResponse {
  export type AsObject = {
    app?: App.AsObject,
  }
}

export class StopAppRequest extends jspb.Message {
  getId(): string;
  setId(value: string): StopAppRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StopAppRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StopAppRequest): StopAppRequest.AsObject;
  static serializeBinaryToWriter(message: StopAppRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StopAppRequest;
  static deserializeBinaryFromReader(message: StopAppRequest, reader: jspb.BinaryReader): StopAppRequest;
}

export namespace StopAppRequest {
  export type AsObject = {
    id: string,
  }
}

export class StopAppResponse extends jspb.Message {
  getId(): string;
  setId(value: string): StopAppResponse;

  getMsg(): string;
  setMsg(value: string): StopAppResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StopAppResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StopAppResponse): StopAppResponse.AsObject;
  static serializeBinaryToWriter(message: StopAppResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StopAppResponse;
  static deserializeBinaryFromReader(message: StopAppResponse, reader: jspb.BinaryReader): StopAppResponse;
}

export namespace StopAppResponse {
  export type AsObject = {
    id: string,
    msg: string,
  }
}

export class DeleteAppRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteAppRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAppRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAppRequest): DeleteAppRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteAppRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAppRequest;
  static deserializeBinaryFromReader(message: DeleteAppRequest, reader: jspb.BinaryReader): DeleteAppRequest;
}

export namespace DeleteAppRequest {
  export type AsObject = {
    id: string,
  }
}

export class DeleteAppResponse extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteAppResponse;

  getMsg(): string;
  setMsg(value: string): DeleteAppResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAppResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAppResponse): DeleteAppResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteAppResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAppResponse;
  static deserializeBinaryFromReader(message: DeleteAppResponse, reader: jspb.BinaryReader): DeleteAppResponse;
}

export namespace DeleteAppResponse {
  export type AsObject = {
    id: string,
    msg: string,
  }
}

export class LogsAppRequest extends jspb.Message {
  getId(): string;
  setId(value: string): LogsAppRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogsAppRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LogsAppRequest): LogsAppRequest.AsObject;
  static serializeBinaryToWriter(message: LogsAppRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogsAppRequest;
  static deserializeBinaryFromReader(message: LogsAppRequest, reader: jspb.BinaryReader): LogsAppRequest;
}

export namespace LogsAppRequest {
  export type AsObject = {
    id: string,
  }
}

export class LogsAppResponse extends jspb.Message {
  getLog(): string;
  setLog(value: string): LogsAppResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogsAppResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LogsAppResponse): LogsAppResponse.AsObject;
  static serializeBinaryToWriter(message: LogsAppResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogsAppResponse;
  static deserializeBinaryFromReader(message: LogsAppResponse, reader: jspb.BinaryReader): LogsAppResponse;
}

export namespace LogsAppResponse {
  export type AsObject = {
    log: string,
  }
}

export class ListAppsResponse extends jspb.Message {
  getAppsList(): Array<App>;
  setAppsList(value: Array<App>): ListAppsResponse;
  clearAppsList(): ListAppsResponse;
  addApps(value?: App, index?: number): App;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAppsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListAppsResponse): ListAppsResponse.AsObject;
  static serializeBinaryToWriter(message: ListAppsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAppsResponse;
  static deserializeBinaryFromReader(message: ListAppsResponse, reader: jspb.BinaryReader): ListAppsResponse;
}

export namespace ListAppsResponse {
  export type AsObject = {
    appsList: Array<App.AsObject>,
  }
}

export class PingResponse extends jspb.Message {
  getMsg(): string;
  setMsg(value: string): PingResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PingResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PingResponse): PingResponse.AsObject;
  static serializeBinaryToWriter(message: PingResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PingResponse;
  static deserializeBinaryFromReader(message: PingResponse, reader: jspb.BinaryReader): PingResponse;
}

export namespace PingResponse {
  export type AsObject = {
    msg: string,
  }
}

export class Image extends jspb.Message {
  getCommandsList(): Array<string>;
  setCommandsList(value: Array<string>): Image;
  clearCommandsList(): Image;
  addCommands(value: string, index?: number): Image;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Image.AsObject;
  static toObject(includeInstance: boolean, msg: Image): Image.AsObject;
  static serializeBinaryToWriter(message: Image, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Image;
  static deserializeBinaryFromReader(message: Image, reader: jspb.BinaryReader): Image;
}

export namespace Image {
  export type AsObject = {
    commandsList: Array<string>,
  }
}

export class ImageRegistry extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): ImageRegistry;

  getRepository(): string;
  setRepository(value: string): ImageRegistry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImageRegistry.AsObject;
  static toObject(includeInstance: boolean, msg: ImageRegistry): ImageRegistry.AsObject;
  static serializeBinaryToWriter(message: ImageRegistry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImageRegistry;
  static deserializeBinaryFromReader(message: ImageRegistry, reader: jspb.BinaryReader): ImageRegistry;
}

export namespace ImageRegistry {
  export type AsObject = {
    url: string,
    repository: string,
  }
}

export class Resources extends jspb.Message {
  getCpu(): number;
  setCpu(value: number): Resources;

  getMemory(): number;
  setMemory(value: number): Resources;

  getDisk(): number;
  setDisk(value: number): Resources;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Resources.AsObject;
  static toObject(includeInstance: boolean, msg: Resources): Resources.AsObject;
  static serializeBinaryToWriter(message: Resources, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Resources;
  static deserializeBinaryFromReader(message: Resources, reader: jspb.BinaryReader): Resources;
}

export namespace Resources {
  export type AsObject = {
    cpu: number,
    memory: number,
    disk: number,
  }
}

export class BuildInfo extends jspb.Message {
  getImage(): Image | undefined;
  setImage(value?: Image): BuildInfo;
  hasImage(): boolean;
  clearImage(): BuildInfo;

  getRegistry(): ImageRegistry | undefined;
  setRegistry(value?: ImageRegistry): BuildInfo;
  hasRegistry(): boolean;
  clearRegistry(): BuildInfo;

  getResources(): Resources | undefined;
  setResources(value?: Resources): BuildInfo;
  hasResources(): boolean;
  clearResources(): BuildInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BuildInfo.AsObject;
  static toObject(includeInstance: boolean, msg: BuildInfo): BuildInfo.AsObject;
  static serializeBinaryToWriter(message: BuildInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BuildInfo;
  static deserializeBinaryFromReader(message: BuildInfo, reader: jspb.BinaryReader): BuildInfo;
}

export namespace BuildInfo {
  export type AsObject = {
    image?: Image.AsObject,
    registry?: ImageRegistry.AsObject,
    resources?: Resources.AsObject,
  }
}

export class DeployAppRequest extends jspb.Message {
  getBlobkey(): string;
  setBlobkey(value: string): DeployAppRequest;

  getId(): string;
  setId(value: string): DeployAppRequest;

  getName(): string;
  setName(value: string): DeployAppRequest;

  getBuild(): BuildInfo | undefined;
  setBuild(value?: BuildInfo): DeployAppRequest;
  hasBuild(): boolean;
  clearBuild(): DeployAppRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeployAppRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeployAppRequest): DeployAppRequest.AsObject;
  static serializeBinaryToWriter(message: DeployAppRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeployAppRequest;
  static deserializeBinaryFromReader(message: DeployAppRequest, reader: jspb.BinaryReader): DeployAppRequest;
}

export namespace DeployAppRequest {
  export type AsObject = {
    blobkey: string,
    id: string,
    name: string,
    build?: BuildInfo.AsObject,
  }
}

export class DeployAppResponse extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): DeployAppResponse;

  getStatus(): string;
  setStatus(value: string): DeployAppResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeployAppResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeployAppResponse): DeployAppResponse.AsObject;
  static serializeBinaryToWriter(message: DeployAppResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeployAppResponse;
  static deserializeBinaryFromReader(message: DeployAppResponse, reader: jspb.BinaryReader): DeployAppResponse;
}

export namespace DeployAppResponse {
  export type AsObject = {
    url: string,
    status: string,
  }
}

export class CronExecuteRequest extends jspb.Message {
  getJobname(): string;
  setJobname(value: string): CronExecuteRequest;

  getConfigMap(): jspb.Map<string, string>;
  clearConfigMap(): CronExecuteRequest;

  getStatusserver(): number;
  setStatusserver(value: number): CronExecuteRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CronExecuteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CronExecuteRequest): CronExecuteRequest.AsObject;
  static serializeBinaryToWriter(message: CronExecuteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CronExecuteRequest;
  static deserializeBinaryFromReader(message: CronExecuteRequest, reader: jspb.BinaryReader): CronExecuteRequest;
}

export namespace CronExecuteRequest {
  export type AsObject = {
    jobname: string,
    configMap: Array<[string, string]>,
    statusserver: number,
  }
}

export class CronExecuteResponse extends jspb.Message {
  getOutput(): Uint8Array | string;
  getOutput_asU8(): Uint8Array;
  getOutput_asB64(): string;
  setOutput(value: Uint8Array | string): CronExecuteResponse;

  getError(): string;
  setError(value: string): CronExecuteResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CronExecuteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CronExecuteResponse): CronExecuteResponse.AsObject;
  static serializeBinaryToWriter(message: CronExecuteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CronExecuteResponse;
  static deserializeBinaryFromReader(message: CronExecuteResponse, reader: jspb.BinaryReader): CronExecuteResponse;
}

export namespace CronExecuteResponse {
  export type AsObject = {
    output: Uint8Array | string,
    error: string,
  }
}

export class GetValueDictionaryRequest extends jspb.Message {
  getKey(): string;
  setKey(value: string): GetValueDictionaryRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetValueDictionaryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetValueDictionaryRequest): GetValueDictionaryRequest.AsObject;
  static serializeBinaryToWriter(message: GetValueDictionaryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetValueDictionaryRequest;
  static deserializeBinaryFromReader(message: GetValueDictionaryRequest, reader: jspb.BinaryReader): GetValueDictionaryRequest;
}

export namespace GetValueDictionaryRequest {
  export type AsObject = {
    key: string,
  }
}

export class GetValueDictionaryResponse extends jspb.Message {
  getValue(): Uint8Array | string;
  getValue_asU8(): Uint8Array;
  getValue_asB64(): string;
  setValue(value: Uint8Array | string): GetValueDictionaryResponse;

  getError(): string;
  setError(value: string): GetValueDictionaryResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetValueDictionaryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetValueDictionaryResponse): GetValueDictionaryResponse.AsObject;
  static serializeBinaryToWriter(message: GetValueDictionaryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetValueDictionaryResponse;
  static deserializeBinaryFromReader(message: GetValueDictionaryResponse, reader: jspb.BinaryReader): GetValueDictionaryResponse;
}

export namespace GetValueDictionaryResponse {
  export type AsObject = {
    value: Uint8Array | string,
    error: string,
  }
}

export class ExistsValueDictionaryRequest extends jspb.Message {
  getKey(): string;
  setKey(value: string): ExistsValueDictionaryRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExistsValueDictionaryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExistsValueDictionaryRequest): ExistsValueDictionaryRequest.AsObject;
  static serializeBinaryToWriter(message: ExistsValueDictionaryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExistsValueDictionaryRequest;
  static deserializeBinaryFromReader(message: ExistsValueDictionaryRequest, reader: jspb.BinaryReader): ExistsValueDictionaryRequest;
}

export namespace ExistsValueDictionaryRequest {
  export type AsObject = {
    key: string,
  }
}

export class ExistsValueDictionaryResponse extends jspb.Message {
  getExists(): boolean;
  setExists(value: boolean): ExistsValueDictionaryResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExistsValueDictionaryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ExistsValueDictionaryResponse): ExistsValueDictionaryResponse.AsObject;
  static serializeBinaryToWriter(message: ExistsValueDictionaryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExistsValueDictionaryResponse;
  static deserializeBinaryFromReader(message: ExistsValueDictionaryResponse, reader: jspb.BinaryReader): ExistsValueDictionaryResponse;
}

export namespace ExistsValueDictionaryResponse {
  export type AsObject = {
    exists: boolean,
  }
}

export class PutValueDictionaryRequest extends jspb.Message {
  getKey(): string;
  setKey(value: string): PutValueDictionaryRequest;

  getValue(): Uint8Array | string;
  getValue_asU8(): Uint8Array;
  getValue_asB64(): string;
  setValue(value: Uint8Array | string): PutValueDictionaryRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PutValueDictionaryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PutValueDictionaryRequest): PutValueDictionaryRequest.AsObject;
  static serializeBinaryToWriter(message: PutValueDictionaryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PutValueDictionaryRequest;
  static deserializeBinaryFromReader(message: PutValueDictionaryRequest, reader: jspb.BinaryReader): PutValueDictionaryRequest;
}

export namespace PutValueDictionaryRequest {
  export type AsObject = {
    key: string,
    value: Uint8Array | string,
  }
}

export class PutValueDictionaryResponse extends jspb.Message {
  getError(): string;
  setError(value: string): PutValueDictionaryResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PutValueDictionaryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PutValueDictionaryResponse): PutValueDictionaryResponse.AsObject;
  static serializeBinaryToWriter(message: PutValueDictionaryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PutValueDictionaryResponse;
  static deserializeBinaryFromReader(message: PutValueDictionaryResponse, reader: jspb.BinaryReader): PutValueDictionaryResponse;
}

export namespace PutValueDictionaryResponse {
  export type AsObject = {
    error: string,
  }
}

export class DeleteValueDictionaryRequest extends jspb.Message {
  getKey(): string;
  setKey(value: string): DeleteValueDictionaryRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteValueDictionaryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteValueDictionaryRequest): DeleteValueDictionaryRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteValueDictionaryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteValueDictionaryRequest;
  static deserializeBinaryFromReader(message: DeleteValueDictionaryRequest, reader: jspb.BinaryReader): DeleteValueDictionaryRequest;
}

export namespace DeleteValueDictionaryRequest {
  export type AsObject = {
    key: string,
  }
}

export class DeleteValueDictionaryResponse extends jspb.Message {
  getError(): string;
  setError(value: string): DeleteValueDictionaryResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteValueDictionaryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteValueDictionaryResponse): DeleteValueDictionaryResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteValueDictionaryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteValueDictionaryResponse;
  static deserializeBinaryFromReader(message: DeleteValueDictionaryResponse, reader: jspb.BinaryReader): DeleteValueDictionaryResponse;
}

export namespace DeleteValueDictionaryResponse {
  export type AsObject = {
    error: string,
  }
}

export class PopValueDictionaryRequest extends jspb.Message {
  getKey(): string;
  setKey(value: string): PopValueDictionaryRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PopValueDictionaryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PopValueDictionaryRequest): PopValueDictionaryRequest.AsObject;
  static serializeBinaryToWriter(message: PopValueDictionaryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PopValueDictionaryRequest;
  static deserializeBinaryFromReader(message: PopValueDictionaryRequest, reader: jspb.BinaryReader): PopValueDictionaryRequest;
}

export namespace PopValueDictionaryRequest {
  export type AsObject = {
    key: string,
  }
}

export class PopValueDictionaryResponse extends jspb.Message {
  getValue(): Uint8Array | string;
  getValue_asU8(): Uint8Array;
  getValue_asB64(): string;
  setValue(value: Uint8Array | string): PopValueDictionaryResponse;

  getError(): string;
  setError(value: string): PopValueDictionaryResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PopValueDictionaryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PopValueDictionaryResponse): PopValueDictionaryResponse.AsObject;
  static serializeBinaryToWriter(message: PopValueDictionaryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PopValueDictionaryResponse;
  static deserializeBinaryFromReader(message: PopValueDictionaryResponse, reader: jspb.BinaryReader): PopValueDictionaryResponse;
}

export namespace PopValueDictionaryResponse {
  export type AsObject = {
    value: Uint8Array | string,
    error: string,
  }
}

export class LengthDictionaryRequest extends jspb.Message {
  getKey(): string;
  setKey(value: string): LengthDictionaryRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LengthDictionaryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LengthDictionaryRequest): LengthDictionaryRequest.AsObject;
  static serializeBinaryToWriter(message: LengthDictionaryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LengthDictionaryRequest;
  static deserializeBinaryFromReader(message: LengthDictionaryRequest, reader: jspb.BinaryReader): LengthDictionaryRequest;
}

export namespace LengthDictionaryRequest {
  export type AsObject = {
    key: string,
  }
}

export class LengthDictionaryResponse extends jspb.Message {
  getValue(): number;
  setValue(value: number): LengthDictionaryResponse;

  getError(): string;
  setError(value: string): LengthDictionaryResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LengthDictionaryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LengthDictionaryResponse): LengthDictionaryResponse.AsObject;
  static serializeBinaryToWriter(message: LengthDictionaryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LengthDictionaryResponse;
  static deserializeBinaryFromReader(message: LengthDictionaryResponse, reader: jspb.BinaryReader): LengthDictionaryResponse;
}

export namespace LengthDictionaryResponse {
  export type AsObject = {
    value: number,
    error: string,
  }
}

export class ProduceValueQueueRequest extends jspb.Message {
  getTopic(): string;
  setTopic(value: string): ProduceValueQueueRequest;

  getMessage(): Uint8Array | string;
  getMessage_asU8(): Uint8Array;
  getMessage_asB64(): string;
  setMessage(value: Uint8Array | string): ProduceValueQueueRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProduceValueQueueRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ProduceValueQueueRequest): ProduceValueQueueRequest.AsObject;
  static serializeBinaryToWriter(message: ProduceValueQueueRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProduceValueQueueRequest;
  static deserializeBinaryFromReader(message: ProduceValueQueueRequest, reader: jspb.BinaryReader): ProduceValueQueueRequest;
}

export namespace ProduceValueQueueRequest {
  export type AsObject = {
    topic: string,
    message: Uint8Array | string,
  }
}

export class ProduceValueQueueResponse extends jspb.Message {
  getAck(): boolean;
  setAck(value: boolean): ProduceValueQueueResponse;

  getError(): string;
  setError(value: string): ProduceValueQueueResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProduceValueQueueResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ProduceValueQueueResponse): ProduceValueQueueResponse.AsObject;
  static serializeBinaryToWriter(message: ProduceValueQueueResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProduceValueQueueResponse;
  static deserializeBinaryFromReader(message: ProduceValueQueueResponse, reader: jspb.BinaryReader): ProduceValueQueueResponse;
}

export namespace ProduceValueQueueResponse {
  export type AsObject = {
    ack: boolean,
    error: string,
  }
}

export class ConsumeValuesQueueRequest extends jspb.Message {
  getTopic(): string;
  setTopic(value: string): ConsumeValuesQueueRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConsumeValuesQueueRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ConsumeValuesQueueRequest): ConsumeValuesQueueRequest.AsObject;
  static serializeBinaryToWriter(message: ConsumeValuesQueueRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConsumeValuesQueueRequest;
  static deserializeBinaryFromReader(message: ConsumeValuesQueueRequest, reader: jspb.BinaryReader): ConsumeValuesQueueRequest;
}

export namespace ConsumeValuesQueueRequest {
  export type AsObject = {
    topic: string,
  }
}

export class ConsumeValuesQueueResponse extends jspb.Message {
  getMessage(): Uint8Array | string;
  getMessage_asU8(): Uint8Array;
  getMessage_asB64(): string;
  setMessage(value: Uint8Array | string): ConsumeValuesQueueResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConsumeValuesQueueResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ConsumeValuesQueueResponse): ConsumeValuesQueueResponse.AsObject;
  static serializeBinaryToWriter(message: ConsumeValuesQueueResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConsumeValuesQueueResponse;
  static deserializeBinaryFromReader(message: ConsumeValuesQueueResponse, reader: jspb.BinaryReader): ConsumeValuesQueueResponse;
}

export namespace ConsumeValuesQueueResponse {
  export type AsObject = {
    message: Uint8Array | string,
  }
}

export class LoadSecretsFromAPIRequest extends jspb.Message {
  getApplicationid(): string;
  setApplicationid(value: string): LoadSecretsFromAPIRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoadSecretsFromAPIRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LoadSecretsFromAPIRequest): LoadSecretsFromAPIRequest.AsObject;
  static serializeBinaryToWriter(message: LoadSecretsFromAPIRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoadSecretsFromAPIRequest;
  static deserializeBinaryFromReader(message: LoadSecretsFromAPIRequest, reader: jspb.BinaryReader): LoadSecretsFromAPIRequest;
}

export namespace LoadSecretsFromAPIRequest {
  export type AsObject = {
    applicationid: string,
  }
}

export class LoadSecretsFromAPIResponse extends jspb.Message {
  getValuesMap(): jspb.Map<string, string>;
  clearValuesMap(): LoadSecretsFromAPIResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoadSecretsFromAPIResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LoadSecretsFromAPIResponse): LoadSecretsFromAPIResponse.AsObject;
  static serializeBinaryToWriter(message: LoadSecretsFromAPIResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoadSecretsFromAPIResponse;
  static deserializeBinaryFromReader(message: LoadSecretsFromAPIResponse, reader: jspb.BinaryReader): LoadSecretsFromAPIResponse;
}

export namespace LoadSecretsFromAPIResponse {
  export type AsObject = {
    valuesMap: Array<[string, string]>,
  }
}

