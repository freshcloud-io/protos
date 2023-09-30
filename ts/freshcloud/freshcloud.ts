/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Observable } from "rxjs";
import { share } from "rxjs/operators";
import { Empty } from "./google/protobuf/empty";
import { Timestamp } from "./google/protobuf/timestamp";

export const protobufPackage = "freshcloud";

export interface App {
  id: string;
  name: string;
  environment: string;
  running: boolean;
  createdAt: Date | undefined;
}

export interface CreateAppRequest {
  name: string;
}

export interface CreateAppResponse {
  app: App | undefined;
}

export interface StopAppRequest {
  id: string;
}

export interface StopAppResponse {
  id: string;
  msg: string;
}

export interface DeleteAppRequest {
  id: string;
}

export interface DeleteAppResponse {
  id: string;
  msg: string;
}

export interface LogsAppRequest {
  id: string;
}

export interface LogsAppResponse {
  log: string;
}

export interface ListAppsResponse {
  apps: App[];
}

export interface PingResponse {
  msg: string;
}

/** Informatio to build the application in the backend */
export interface Image {
  commands: string[];
}

export interface ImageRegistry {
  url: string;
  repository: string;
}

export interface Resources {
  cpu: number;
  memory: number;
  disk: number;
}

export interface BuildInfo {
  image: Image | undefined;
  registry: ImageRegistry | undefined;
  resources: Resources | undefined;
}

export interface DeployAppRequest {
  blobKey: string;
  id: string;
  name: string;
  build: BuildInfo | undefined;
}

export interface DeployAppResponse {
  url: string;
  status: string;
}

export interface CronExecuteRequest {
  jobName: string;
  config: { [key: string]: string };
  statusServer: number;
}

export interface CronExecuteRequest_ConfigEntry {
  key: string;
  value: string;
}

export interface CronExecuteResponse {
  output: Uint8Array;
  error: string;
}

/** Dictionary messages */
export interface GetValueDictionaryRequest {
  key: string;
}

export interface GetValueDictionaryResponse {
  value: Uint8Array;
  error: string;
}

export interface ExistsValueDictionaryRequest {
  key: string;
}

export interface ExistsValueDictionaryResponse {
  exists: boolean;
}

export interface PutValueDictionaryRequest {
  key: string;
  value: Uint8Array;
}

export interface PutValueDictionaryResponse {
  error: string;
}

export interface DeleteValueDictionaryRequest {
  key: string;
}

export interface DeleteValueDictionaryResponse {
  error: string;
}

export interface PopValueDictionaryRequest {
  key: string;
}

export interface PopValueDictionaryResponse {
  value: Uint8Array;
  error: string;
}

export interface LengthDictionaryRequest {
  key: string;
}

export interface LengthDictionaryResponse {
  value: number;
  error: string;
}

/** Queue messages */
export interface ProduceValueQueueRequest {
  topic: string;
  message: Uint8Array;
}

export interface ProduceValueQueueResponse {
  ack: boolean;
  error: string;
}

export interface ConsumeValuesQueueRequest {
  topic: string;
}

export interface ConsumeValuesQueueResponse {
  message: Uint8Array;
}

/** SecretHandler messages */
export interface LoadSecretsFromAPIRequest {
  applicationId: string;
}

export interface LoadSecretsFromAPIResponse {
  values: { [key: string]: string };
}

export interface LoadSecretsFromAPIResponse_ValuesEntry {
  key: string;
  value: string;
}

function createBaseApp(): App {
  return { id: "", name: "", environment: "", running: false, createdAt: undefined };
}

export const App = {
  encode(message: App, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.environment !== "") {
      writer.uint32(26).string(message.environment);
    }
    if (message.running === true) {
      writer.uint32(32).bool(message.running);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): App {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseApp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.environment = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.running = reader.bool();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): App {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      name: isSet(object.name) ? String(object.name) : "",
      environment: isSet(object.environment) ? String(object.environment) : "",
      running: isSet(object.running) ? Boolean(object.running) : false,
      createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
    };
  },

  toJSON(message: App): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.environment !== "") {
      obj.environment = message.environment;
    }
    if (message.running === true) {
      obj.running = message.running;
    }
    if (message.createdAt !== undefined) {
      obj.createdAt = message.createdAt.toISOString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<App>, I>>(base?: I): App {
    return App.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<App>, I>>(object: I): App {
    const message = createBaseApp();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.environment = object.environment ?? "";
    message.running = object.running ?? false;
    message.createdAt = object.createdAt ?? undefined;
    return message;
  },
};

function createBaseCreateAppRequest(): CreateAppRequest {
  return { name: "" };
}

export const CreateAppRequest = {
  encode(message: CreateAppRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateAppRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateAppRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateAppRequest {
    return { name: isSet(object.name) ? String(object.name) : "" };
  },

  toJSON(message: CreateAppRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateAppRequest>, I>>(base?: I): CreateAppRequest {
    return CreateAppRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateAppRequest>, I>>(object: I): CreateAppRequest {
    const message = createBaseCreateAppRequest();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseCreateAppResponse(): CreateAppResponse {
  return { app: undefined };
}

export const CreateAppResponse = {
  encode(message: CreateAppResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.app !== undefined) {
      App.encode(message.app, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateAppResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateAppResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.app = App.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateAppResponse {
    return { app: isSet(object.app) ? App.fromJSON(object.app) : undefined };
  },

  toJSON(message: CreateAppResponse): unknown {
    const obj: any = {};
    if (message.app !== undefined) {
      obj.app = App.toJSON(message.app);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateAppResponse>, I>>(base?: I): CreateAppResponse {
    return CreateAppResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateAppResponse>, I>>(object: I): CreateAppResponse {
    const message = createBaseCreateAppResponse();
    message.app = (object.app !== undefined && object.app !== null) ? App.fromPartial(object.app) : undefined;
    return message;
  },
};

function createBaseStopAppRequest(): StopAppRequest {
  return { id: "" };
}

export const StopAppRequest = {
  encode(message: StopAppRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StopAppRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStopAppRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StopAppRequest {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: StopAppRequest): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StopAppRequest>, I>>(base?: I): StopAppRequest {
    return StopAppRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StopAppRequest>, I>>(object: I): StopAppRequest {
    const message = createBaseStopAppRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseStopAppResponse(): StopAppResponse {
  return { id: "", msg: "" };
}

export const StopAppResponse = {
  encode(message: StopAppResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.msg !== "") {
      writer.uint32(18).string(message.msg);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StopAppResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStopAppResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.msg = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StopAppResponse {
    return { id: isSet(object.id) ? String(object.id) : "", msg: isSet(object.msg) ? String(object.msg) : "" };
  },

  toJSON(message: StopAppResponse): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.msg !== "") {
      obj.msg = message.msg;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StopAppResponse>, I>>(base?: I): StopAppResponse {
    return StopAppResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StopAppResponse>, I>>(object: I): StopAppResponse {
    const message = createBaseStopAppResponse();
    message.id = object.id ?? "";
    message.msg = object.msg ?? "";
    return message;
  },
};

function createBaseDeleteAppRequest(): DeleteAppRequest {
  return { id: "" };
}

export const DeleteAppRequest = {
  encode(message: DeleteAppRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteAppRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteAppRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteAppRequest {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: DeleteAppRequest): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteAppRequest>, I>>(base?: I): DeleteAppRequest {
    return DeleteAppRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteAppRequest>, I>>(object: I): DeleteAppRequest {
    const message = createBaseDeleteAppRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseDeleteAppResponse(): DeleteAppResponse {
  return { id: "", msg: "" };
}

export const DeleteAppResponse = {
  encode(message: DeleteAppResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.msg !== "") {
      writer.uint32(18).string(message.msg);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteAppResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteAppResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.msg = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteAppResponse {
    return { id: isSet(object.id) ? String(object.id) : "", msg: isSet(object.msg) ? String(object.msg) : "" };
  },

  toJSON(message: DeleteAppResponse): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.msg !== "") {
      obj.msg = message.msg;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteAppResponse>, I>>(base?: I): DeleteAppResponse {
    return DeleteAppResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteAppResponse>, I>>(object: I): DeleteAppResponse {
    const message = createBaseDeleteAppResponse();
    message.id = object.id ?? "";
    message.msg = object.msg ?? "";
    return message;
  },
};

function createBaseLogsAppRequest(): LogsAppRequest {
  return { id: "" };
}

export const LogsAppRequest = {
  encode(message: LogsAppRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LogsAppRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLogsAppRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LogsAppRequest {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: LogsAppRequest): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LogsAppRequest>, I>>(base?: I): LogsAppRequest {
    return LogsAppRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LogsAppRequest>, I>>(object: I): LogsAppRequest {
    const message = createBaseLogsAppRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseLogsAppResponse(): LogsAppResponse {
  return { log: "" };
}

export const LogsAppResponse = {
  encode(message: LogsAppResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.log !== "") {
      writer.uint32(10).string(message.log);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LogsAppResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLogsAppResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.log = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LogsAppResponse {
    return { log: isSet(object.log) ? String(object.log) : "" };
  },

  toJSON(message: LogsAppResponse): unknown {
    const obj: any = {};
    if (message.log !== "") {
      obj.log = message.log;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LogsAppResponse>, I>>(base?: I): LogsAppResponse {
    return LogsAppResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LogsAppResponse>, I>>(object: I): LogsAppResponse {
    const message = createBaseLogsAppResponse();
    message.log = object.log ?? "";
    return message;
  },
};

function createBaseListAppsResponse(): ListAppsResponse {
  return { apps: [] };
}

export const ListAppsResponse = {
  encode(message: ListAppsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.apps) {
      App.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListAppsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListAppsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.apps.push(App.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListAppsResponse {
    return { apps: Array.isArray(object?.apps) ? object.apps.map((e: any) => App.fromJSON(e)) : [] };
  },

  toJSON(message: ListAppsResponse): unknown {
    const obj: any = {};
    if (message.apps?.length) {
      obj.apps = message.apps.map((e) => App.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListAppsResponse>, I>>(base?: I): ListAppsResponse {
    return ListAppsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListAppsResponse>, I>>(object: I): ListAppsResponse {
    const message = createBaseListAppsResponse();
    message.apps = object.apps?.map((e) => App.fromPartial(e)) || [];
    return message;
  },
};

function createBasePingResponse(): PingResponse {
  return { msg: "" };
}

export const PingResponse = {
  encode(message: PingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.msg !== "") {
      writer.uint32(10).string(message.msg);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PingResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.msg = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PingResponse {
    return { msg: isSet(object.msg) ? String(object.msg) : "" };
  },

  toJSON(message: PingResponse): unknown {
    const obj: any = {};
    if (message.msg !== "") {
      obj.msg = message.msg;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PingResponse>, I>>(base?: I): PingResponse {
    return PingResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PingResponse>, I>>(object: I): PingResponse {
    const message = createBasePingResponse();
    message.msg = object.msg ?? "";
    return message;
  },
};

function createBaseImage(): Image {
  return { commands: [] };
}

export const Image = {
  encode(message: Image, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.commands) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Image {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseImage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.commands.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Image {
    return { commands: Array.isArray(object?.commands) ? object.commands.map((e: any) => String(e)) : [] };
  },

  toJSON(message: Image): unknown {
    const obj: any = {};
    if (message.commands?.length) {
      obj.commands = message.commands;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Image>, I>>(base?: I): Image {
    return Image.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Image>, I>>(object: I): Image {
    const message = createBaseImage();
    message.commands = object.commands?.map((e) => e) || [];
    return message;
  },
};

function createBaseImageRegistry(): ImageRegistry {
  return { url: "", repository: "" };
}

export const ImageRegistry = {
  encode(message: ImageRegistry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.url !== "") {
      writer.uint32(10).string(message.url);
    }
    if (message.repository !== "") {
      writer.uint32(18).string(message.repository);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ImageRegistry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseImageRegistry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.url = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.repository = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ImageRegistry {
    return {
      url: isSet(object.url) ? String(object.url) : "",
      repository: isSet(object.repository) ? String(object.repository) : "",
    };
  },

  toJSON(message: ImageRegistry): unknown {
    const obj: any = {};
    if (message.url !== "") {
      obj.url = message.url;
    }
    if (message.repository !== "") {
      obj.repository = message.repository;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ImageRegistry>, I>>(base?: I): ImageRegistry {
    return ImageRegistry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ImageRegistry>, I>>(object: I): ImageRegistry {
    const message = createBaseImageRegistry();
    message.url = object.url ?? "";
    message.repository = object.repository ?? "";
    return message;
  },
};

function createBaseResources(): Resources {
  return { cpu: 0, memory: 0, disk: 0 };
}

export const Resources = {
  encode(message: Resources, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cpu !== 0) {
      writer.uint32(8).int64(message.cpu);
    }
    if (message.memory !== 0) {
      writer.uint32(16).int64(message.memory);
    }
    if (message.disk !== 0) {
      writer.uint32(24).int64(message.disk);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Resources {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResources();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.cpu = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.memory = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.disk = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Resources {
    return {
      cpu: isSet(object.cpu) ? Number(object.cpu) : 0,
      memory: isSet(object.memory) ? Number(object.memory) : 0,
      disk: isSet(object.disk) ? Number(object.disk) : 0,
    };
  },

  toJSON(message: Resources): unknown {
    const obj: any = {};
    if (message.cpu !== 0) {
      obj.cpu = Math.round(message.cpu);
    }
    if (message.memory !== 0) {
      obj.memory = Math.round(message.memory);
    }
    if (message.disk !== 0) {
      obj.disk = Math.round(message.disk);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Resources>, I>>(base?: I): Resources {
    return Resources.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Resources>, I>>(object: I): Resources {
    const message = createBaseResources();
    message.cpu = object.cpu ?? 0;
    message.memory = object.memory ?? 0;
    message.disk = object.disk ?? 0;
    return message;
  },
};

function createBaseBuildInfo(): BuildInfo {
  return { image: undefined, registry: undefined, resources: undefined };
}

export const BuildInfo = {
  encode(message: BuildInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.image !== undefined) {
      Image.encode(message.image, writer.uint32(10).fork()).ldelim();
    }
    if (message.registry !== undefined) {
      ImageRegistry.encode(message.registry, writer.uint32(18).fork()).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BuildInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBuildInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.image = Image.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.registry = ImageRegistry.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.resources = Resources.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BuildInfo {
    return {
      image: isSet(object.image) ? Image.fromJSON(object.image) : undefined,
      registry: isSet(object.registry) ? ImageRegistry.fromJSON(object.registry) : undefined,
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
    };
  },

  toJSON(message: BuildInfo): unknown {
    const obj: any = {};
    if (message.image !== undefined) {
      obj.image = Image.toJSON(message.image);
    }
    if (message.registry !== undefined) {
      obj.registry = ImageRegistry.toJSON(message.registry);
    }
    if (message.resources !== undefined) {
      obj.resources = Resources.toJSON(message.resources);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BuildInfo>, I>>(base?: I): BuildInfo {
    return BuildInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BuildInfo>, I>>(object: I): BuildInfo {
    const message = createBaseBuildInfo();
    message.image = (object.image !== undefined && object.image !== null) ? Image.fromPartial(object.image) : undefined;
    message.registry = (object.registry !== undefined && object.registry !== null)
      ? ImageRegistry.fromPartial(object.registry)
      : undefined;
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? Resources.fromPartial(object.resources)
      : undefined;
    return message;
  },
};

function createBaseDeployAppRequest(): DeployAppRequest {
  return { blobKey: "", id: "", name: "", build: undefined };
}

export const DeployAppRequest = {
  encode(message: DeployAppRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.blobKey !== "") {
      writer.uint32(10).string(message.blobKey);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.build !== undefined) {
      BuildInfo.encode(message.build, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeployAppRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeployAppRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.blobKey = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.id = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.name = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.build = BuildInfo.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeployAppRequest {
    return {
      blobKey: isSet(object.blobKey) ? String(object.blobKey) : "",
      id: isSet(object.id) ? String(object.id) : "",
      name: isSet(object.name) ? String(object.name) : "",
      build: isSet(object.build) ? BuildInfo.fromJSON(object.build) : undefined,
    };
  },

  toJSON(message: DeployAppRequest): unknown {
    const obj: any = {};
    if (message.blobKey !== "") {
      obj.blobKey = message.blobKey;
    }
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.build !== undefined) {
      obj.build = BuildInfo.toJSON(message.build);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeployAppRequest>, I>>(base?: I): DeployAppRequest {
    return DeployAppRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeployAppRequest>, I>>(object: I): DeployAppRequest {
    const message = createBaseDeployAppRequest();
    message.blobKey = object.blobKey ?? "";
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.build = (object.build !== undefined && object.build !== null)
      ? BuildInfo.fromPartial(object.build)
      : undefined;
    return message;
  },
};

function createBaseDeployAppResponse(): DeployAppResponse {
  return { url: "", status: "" };
}

export const DeployAppResponse = {
  encode(message: DeployAppResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.url !== "") {
      writer.uint32(10).string(message.url);
    }
    if (message.status !== "") {
      writer.uint32(18).string(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeployAppResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeployAppResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.url = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.status = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeployAppResponse {
    return {
      url: isSet(object.url) ? String(object.url) : "",
      status: isSet(object.status) ? String(object.status) : "",
    };
  },

  toJSON(message: DeployAppResponse): unknown {
    const obj: any = {};
    if (message.url !== "") {
      obj.url = message.url;
    }
    if (message.status !== "") {
      obj.status = message.status;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeployAppResponse>, I>>(base?: I): DeployAppResponse {
    return DeployAppResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeployAppResponse>, I>>(object: I): DeployAppResponse {
    const message = createBaseDeployAppResponse();
    message.url = object.url ?? "";
    message.status = object.status ?? "";
    return message;
  },
};

function createBaseCronExecuteRequest(): CronExecuteRequest {
  return { jobName: "", config: {}, statusServer: 0 };
}

export const CronExecuteRequest = {
  encode(message: CronExecuteRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.jobName !== "") {
      writer.uint32(10).string(message.jobName);
    }
    Object.entries(message.config).forEach(([key, value]) => {
      CronExecuteRequest_ConfigEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).ldelim();
    });
    if (message.statusServer !== 0) {
      writer.uint32(24).uint32(message.statusServer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CronExecuteRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCronExecuteRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.jobName = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          const entry2 = CronExecuteRequest_ConfigEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.config[entry2.key] = entry2.value;
          }
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.statusServer = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CronExecuteRequest {
    return {
      jobName: isSet(object.jobName) ? String(object.jobName) : "",
      config: isObject(object.config)
        ? Object.entries(object.config).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      statusServer: isSet(object.statusServer) ? Number(object.statusServer) : 0,
    };
  },

  toJSON(message: CronExecuteRequest): unknown {
    const obj: any = {};
    if (message.jobName !== "") {
      obj.jobName = message.jobName;
    }
    if (message.config) {
      const entries = Object.entries(message.config);
      if (entries.length > 0) {
        obj.config = {};
        entries.forEach(([k, v]) => {
          obj.config[k] = v;
        });
      }
    }
    if (message.statusServer !== 0) {
      obj.statusServer = Math.round(message.statusServer);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CronExecuteRequest>, I>>(base?: I): CronExecuteRequest {
    return CronExecuteRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CronExecuteRequest>, I>>(object: I): CronExecuteRequest {
    const message = createBaseCronExecuteRequest();
    message.jobName = object.jobName ?? "";
    message.config = Object.entries(object.config ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.statusServer = object.statusServer ?? 0;
    return message;
  },
};

function createBaseCronExecuteRequest_ConfigEntry(): CronExecuteRequest_ConfigEntry {
  return { key: "", value: "" };
}

export const CronExecuteRequest_ConfigEntry = {
  encode(message: CronExecuteRequest_ConfigEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CronExecuteRequest_ConfigEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCronExecuteRequest_ConfigEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CronExecuteRequest_ConfigEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: CronExecuteRequest_ConfigEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CronExecuteRequest_ConfigEntry>, I>>(base?: I): CronExecuteRequest_ConfigEntry {
    return CronExecuteRequest_ConfigEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CronExecuteRequest_ConfigEntry>, I>>(
    object: I,
  ): CronExecuteRequest_ConfigEntry {
    const message = createBaseCronExecuteRequest_ConfigEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseCronExecuteResponse(): CronExecuteResponse {
  return { output: new Uint8Array(0), error: "" };
}

export const CronExecuteResponse = {
  encode(message: CronExecuteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.output.length !== 0) {
      writer.uint32(10).bytes(message.output);
    }
    if (message.error !== "") {
      writer.uint32(18).string(message.error);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CronExecuteResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCronExecuteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.output = reader.bytes();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.error = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CronExecuteResponse {
    return {
      output: isSet(object.output) ? bytesFromBase64(object.output) : new Uint8Array(0),
      error: isSet(object.error) ? String(object.error) : "",
    };
  },

  toJSON(message: CronExecuteResponse): unknown {
    const obj: any = {};
    if (message.output.length !== 0) {
      obj.output = base64FromBytes(message.output);
    }
    if (message.error !== "") {
      obj.error = message.error;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CronExecuteResponse>, I>>(base?: I): CronExecuteResponse {
    return CronExecuteResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CronExecuteResponse>, I>>(object: I): CronExecuteResponse {
    const message = createBaseCronExecuteResponse();
    message.output = object.output ?? new Uint8Array(0);
    message.error = object.error ?? "";
    return message;
  },
};

function createBaseGetValueDictionaryRequest(): GetValueDictionaryRequest {
  return { key: "" };
}

export const GetValueDictionaryRequest = {
  encode(message: GetValueDictionaryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetValueDictionaryRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetValueDictionaryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetValueDictionaryRequest {
    return { key: isSet(object.key) ? String(object.key) : "" };
  },

  toJSON(message: GetValueDictionaryRequest): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetValueDictionaryRequest>, I>>(base?: I): GetValueDictionaryRequest {
    return GetValueDictionaryRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetValueDictionaryRequest>, I>>(object: I): GetValueDictionaryRequest {
    const message = createBaseGetValueDictionaryRequest();
    message.key = object.key ?? "";
    return message;
  },
};

function createBaseGetValueDictionaryResponse(): GetValueDictionaryResponse {
  return { value: new Uint8Array(0), error: "" };
}

export const GetValueDictionaryResponse = {
  encode(message: GetValueDictionaryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value.length !== 0) {
      writer.uint32(10).bytes(message.value);
    }
    if (message.error !== "") {
      writer.uint32(18).string(message.error);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetValueDictionaryResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetValueDictionaryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.value = reader.bytes();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.error = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetValueDictionaryResponse {
    return {
      value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(0),
      error: isSet(object.error) ? String(object.error) : "",
    };
  },

  toJSON(message: GetValueDictionaryResponse): unknown {
    const obj: any = {};
    if (message.value.length !== 0) {
      obj.value = base64FromBytes(message.value);
    }
    if (message.error !== "") {
      obj.error = message.error;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetValueDictionaryResponse>, I>>(base?: I): GetValueDictionaryResponse {
    return GetValueDictionaryResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetValueDictionaryResponse>, I>>(object: I): GetValueDictionaryResponse {
    const message = createBaseGetValueDictionaryResponse();
    message.value = object.value ?? new Uint8Array(0);
    message.error = object.error ?? "";
    return message;
  },
};

function createBaseExistsValueDictionaryRequest(): ExistsValueDictionaryRequest {
  return { key: "" };
}

export const ExistsValueDictionaryRequest = {
  encode(message: ExistsValueDictionaryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExistsValueDictionaryRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExistsValueDictionaryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ExistsValueDictionaryRequest {
    return { key: isSet(object.key) ? String(object.key) : "" };
  },

  toJSON(message: ExistsValueDictionaryRequest): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ExistsValueDictionaryRequest>, I>>(base?: I): ExistsValueDictionaryRequest {
    return ExistsValueDictionaryRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ExistsValueDictionaryRequest>, I>>(object: I): ExistsValueDictionaryRequest {
    const message = createBaseExistsValueDictionaryRequest();
    message.key = object.key ?? "";
    return message;
  },
};

function createBaseExistsValueDictionaryResponse(): ExistsValueDictionaryResponse {
  return { exists: false };
}

export const ExistsValueDictionaryResponse = {
  encode(message: ExistsValueDictionaryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.exists === true) {
      writer.uint32(8).bool(message.exists);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExistsValueDictionaryResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExistsValueDictionaryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.exists = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ExistsValueDictionaryResponse {
    return { exists: isSet(object.exists) ? Boolean(object.exists) : false };
  },

  toJSON(message: ExistsValueDictionaryResponse): unknown {
    const obj: any = {};
    if (message.exists === true) {
      obj.exists = message.exists;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ExistsValueDictionaryResponse>, I>>(base?: I): ExistsValueDictionaryResponse {
    return ExistsValueDictionaryResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ExistsValueDictionaryResponse>, I>>(
    object: I,
  ): ExistsValueDictionaryResponse {
    const message = createBaseExistsValueDictionaryResponse();
    message.exists = object.exists ?? false;
    return message;
  },
};

function createBasePutValueDictionaryRequest(): PutValueDictionaryRequest {
  return { key: "", value: new Uint8Array(0) };
}

export const PutValueDictionaryRequest = {
  encode(message: PutValueDictionaryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PutValueDictionaryRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePutValueDictionaryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PutValueDictionaryRequest {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(0),
    };
  },

  toJSON(message: PutValueDictionaryRequest): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value.length !== 0) {
      obj.value = base64FromBytes(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PutValueDictionaryRequest>, I>>(base?: I): PutValueDictionaryRequest {
    return PutValueDictionaryRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PutValueDictionaryRequest>, I>>(object: I): PutValueDictionaryRequest {
    const message = createBasePutValueDictionaryRequest();
    message.key = object.key ?? "";
    message.value = object.value ?? new Uint8Array(0);
    return message;
  },
};

function createBasePutValueDictionaryResponse(): PutValueDictionaryResponse {
  return { error: "" };
}

export const PutValueDictionaryResponse = {
  encode(message: PutValueDictionaryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.error !== "") {
      writer.uint32(10).string(message.error);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PutValueDictionaryResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePutValueDictionaryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.error = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PutValueDictionaryResponse {
    return { error: isSet(object.error) ? String(object.error) : "" };
  },

  toJSON(message: PutValueDictionaryResponse): unknown {
    const obj: any = {};
    if (message.error !== "") {
      obj.error = message.error;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PutValueDictionaryResponse>, I>>(base?: I): PutValueDictionaryResponse {
    return PutValueDictionaryResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PutValueDictionaryResponse>, I>>(object: I): PutValueDictionaryResponse {
    const message = createBasePutValueDictionaryResponse();
    message.error = object.error ?? "";
    return message;
  },
};

function createBaseDeleteValueDictionaryRequest(): DeleteValueDictionaryRequest {
  return { key: "" };
}

export const DeleteValueDictionaryRequest = {
  encode(message: DeleteValueDictionaryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteValueDictionaryRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteValueDictionaryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteValueDictionaryRequest {
    return { key: isSet(object.key) ? String(object.key) : "" };
  },

  toJSON(message: DeleteValueDictionaryRequest): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteValueDictionaryRequest>, I>>(base?: I): DeleteValueDictionaryRequest {
    return DeleteValueDictionaryRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteValueDictionaryRequest>, I>>(object: I): DeleteValueDictionaryRequest {
    const message = createBaseDeleteValueDictionaryRequest();
    message.key = object.key ?? "";
    return message;
  },
};

function createBaseDeleteValueDictionaryResponse(): DeleteValueDictionaryResponse {
  return { error: "" };
}

export const DeleteValueDictionaryResponse = {
  encode(message: DeleteValueDictionaryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.error !== "") {
      writer.uint32(10).string(message.error);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteValueDictionaryResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteValueDictionaryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.error = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteValueDictionaryResponse {
    return { error: isSet(object.error) ? String(object.error) : "" };
  },

  toJSON(message: DeleteValueDictionaryResponse): unknown {
    const obj: any = {};
    if (message.error !== "") {
      obj.error = message.error;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteValueDictionaryResponse>, I>>(base?: I): DeleteValueDictionaryResponse {
    return DeleteValueDictionaryResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteValueDictionaryResponse>, I>>(
    object: I,
  ): DeleteValueDictionaryResponse {
    const message = createBaseDeleteValueDictionaryResponse();
    message.error = object.error ?? "";
    return message;
  },
};

function createBasePopValueDictionaryRequest(): PopValueDictionaryRequest {
  return { key: "" };
}

export const PopValueDictionaryRequest = {
  encode(message: PopValueDictionaryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PopValueDictionaryRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePopValueDictionaryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PopValueDictionaryRequest {
    return { key: isSet(object.key) ? String(object.key) : "" };
  },

  toJSON(message: PopValueDictionaryRequest): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PopValueDictionaryRequest>, I>>(base?: I): PopValueDictionaryRequest {
    return PopValueDictionaryRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PopValueDictionaryRequest>, I>>(object: I): PopValueDictionaryRequest {
    const message = createBasePopValueDictionaryRequest();
    message.key = object.key ?? "";
    return message;
  },
};

function createBasePopValueDictionaryResponse(): PopValueDictionaryResponse {
  return { value: new Uint8Array(0), error: "" };
}

export const PopValueDictionaryResponse = {
  encode(message: PopValueDictionaryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value.length !== 0) {
      writer.uint32(10).bytes(message.value);
    }
    if (message.error !== "") {
      writer.uint32(18).string(message.error);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PopValueDictionaryResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePopValueDictionaryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.value = reader.bytes();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.error = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PopValueDictionaryResponse {
    return {
      value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(0),
      error: isSet(object.error) ? String(object.error) : "",
    };
  },

  toJSON(message: PopValueDictionaryResponse): unknown {
    const obj: any = {};
    if (message.value.length !== 0) {
      obj.value = base64FromBytes(message.value);
    }
    if (message.error !== "") {
      obj.error = message.error;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PopValueDictionaryResponse>, I>>(base?: I): PopValueDictionaryResponse {
    return PopValueDictionaryResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PopValueDictionaryResponse>, I>>(object: I): PopValueDictionaryResponse {
    const message = createBasePopValueDictionaryResponse();
    message.value = object.value ?? new Uint8Array(0);
    message.error = object.error ?? "";
    return message;
  },
};

function createBaseLengthDictionaryRequest(): LengthDictionaryRequest {
  return { key: "" };
}

export const LengthDictionaryRequest = {
  encode(message: LengthDictionaryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LengthDictionaryRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLengthDictionaryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LengthDictionaryRequest {
    return { key: isSet(object.key) ? String(object.key) : "" };
  },

  toJSON(message: LengthDictionaryRequest): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LengthDictionaryRequest>, I>>(base?: I): LengthDictionaryRequest {
    return LengthDictionaryRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LengthDictionaryRequest>, I>>(object: I): LengthDictionaryRequest {
    const message = createBaseLengthDictionaryRequest();
    message.key = object.key ?? "";
    return message;
  },
};

function createBaseLengthDictionaryResponse(): LengthDictionaryResponse {
  return { value: 0, error: "" };
}

export const LengthDictionaryResponse = {
  encode(message: LengthDictionaryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== 0) {
      writer.uint32(8).int32(message.value);
    }
    if (message.error !== "") {
      writer.uint32(18).string(message.error);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LengthDictionaryResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLengthDictionaryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.value = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.error = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LengthDictionaryResponse {
    return {
      value: isSet(object.value) ? Number(object.value) : 0,
      error: isSet(object.error) ? String(object.error) : "",
    };
  },

  toJSON(message: LengthDictionaryResponse): unknown {
    const obj: any = {};
    if (message.value !== 0) {
      obj.value = Math.round(message.value);
    }
    if (message.error !== "") {
      obj.error = message.error;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LengthDictionaryResponse>, I>>(base?: I): LengthDictionaryResponse {
    return LengthDictionaryResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LengthDictionaryResponse>, I>>(object: I): LengthDictionaryResponse {
    const message = createBaseLengthDictionaryResponse();
    message.value = object.value ?? 0;
    message.error = object.error ?? "";
    return message;
  },
};

function createBaseProduceValueQueueRequest(): ProduceValueQueueRequest {
  return { topic: "", message: new Uint8Array(0) };
}

export const ProduceValueQueueRequest = {
  encode(message: ProduceValueQueueRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.topic !== "") {
      writer.uint32(10).string(message.topic);
    }
    if (message.message.length !== 0) {
      writer.uint32(18).bytes(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProduceValueQueueRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProduceValueQueueRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.topic = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.message = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProduceValueQueueRequest {
    return {
      topic: isSet(object.topic) ? String(object.topic) : "",
      message: isSet(object.message) ? bytesFromBase64(object.message) : new Uint8Array(0),
    };
  },

  toJSON(message: ProduceValueQueueRequest): unknown {
    const obj: any = {};
    if (message.topic !== "") {
      obj.topic = message.topic;
    }
    if (message.message.length !== 0) {
      obj.message = base64FromBytes(message.message);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ProduceValueQueueRequest>, I>>(base?: I): ProduceValueQueueRequest {
    return ProduceValueQueueRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ProduceValueQueueRequest>, I>>(object: I): ProduceValueQueueRequest {
    const message = createBaseProduceValueQueueRequest();
    message.topic = object.topic ?? "";
    message.message = object.message ?? new Uint8Array(0);
    return message;
  },
};

function createBaseProduceValueQueueResponse(): ProduceValueQueueResponse {
  return { ack: false, error: "" };
}

export const ProduceValueQueueResponse = {
  encode(message: ProduceValueQueueResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ack === true) {
      writer.uint32(8).bool(message.ack);
    }
    if (message.error !== "") {
      writer.uint32(18).string(message.error);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProduceValueQueueResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProduceValueQueueResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.ack = reader.bool();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.error = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProduceValueQueueResponse {
    return {
      ack: isSet(object.ack) ? Boolean(object.ack) : false,
      error: isSet(object.error) ? String(object.error) : "",
    };
  },

  toJSON(message: ProduceValueQueueResponse): unknown {
    const obj: any = {};
    if (message.ack === true) {
      obj.ack = message.ack;
    }
    if (message.error !== "") {
      obj.error = message.error;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ProduceValueQueueResponse>, I>>(base?: I): ProduceValueQueueResponse {
    return ProduceValueQueueResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ProduceValueQueueResponse>, I>>(object: I): ProduceValueQueueResponse {
    const message = createBaseProduceValueQueueResponse();
    message.ack = object.ack ?? false;
    message.error = object.error ?? "";
    return message;
  },
};

function createBaseConsumeValuesQueueRequest(): ConsumeValuesQueueRequest {
  return { topic: "" };
}

export const ConsumeValuesQueueRequest = {
  encode(message: ConsumeValuesQueueRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.topic !== "") {
      writer.uint32(10).string(message.topic);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConsumeValuesQueueRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConsumeValuesQueueRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.topic = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConsumeValuesQueueRequest {
    return { topic: isSet(object.topic) ? String(object.topic) : "" };
  },

  toJSON(message: ConsumeValuesQueueRequest): unknown {
    const obj: any = {};
    if (message.topic !== "") {
      obj.topic = message.topic;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ConsumeValuesQueueRequest>, I>>(base?: I): ConsumeValuesQueueRequest {
    return ConsumeValuesQueueRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ConsumeValuesQueueRequest>, I>>(object: I): ConsumeValuesQueueRequest {
    const message = createBaseConsumeValuesQueueRequest();
    message.topic = object.topic ?? "";
    return message;
  },
};

function createBaseConsumeValuesQueueResponse(): ConsumeValuesQueueResponse {
  return { message: new Uint8Array(0) };
}

export const ConsumeValuesQueueResponse = {
  encode(message: ConsumeValuesQueueResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message.length !== 0) {
      writer.uint32(10).bytes(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConsumeValuesQueueResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConsumeValuesQueueResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.message = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConsumeValuesQueueResponse {
    return { message: isSet(object.message) ? bytesFromBase64(object.message) : new Uint8Array(0) };
  },

  toJSON(message: ConsumeValuesQueueResponse): unknown {
    const obj: any = {};
    if (message.message.length !== 0) {
      obj.message = base64FromBytes(message.message);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ConsumeValuesQueueResponse>, I>>(base?: I): ConsumeValuesQueueResponse {
    return ConsumeValuesQueueResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ConsumeValuesQueueResponse>, I>>(object: I): ConsumeValuesQueueResponse {
    const message = createBaseConsumeValuesQueueResponse();
    message.message = object.message ?? new Uint8Array(0);
    return message;
  },
};

function createBaseLoadSecretsFromAPIRequest(): LoadSecretsFromAPIRequest {
  return { applicationId: "" };
}

export const LoadSecretsFromAPIRequest = {
  encode(message: LoadSecretsFromAPIRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.applicationId !== "") {
      writer.uint32(10).string(message.applicationId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LoadSecretsFromAPIRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoadSecretsFromAPIRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.applicationId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LoadSecretsFromAPIRequest {
    return { applicationId: isSet(object.applicationId) ? String(object.applicationId) : "" };
  },

  toJSON(message: LoadSecretsFromAPIRequest): unknown {
    const obj: any = {};
    if (message.applicationId !== "") {
      obj.applicationId = message.applicationId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LoadSecretsFromAPIRequest>, I>>(base?: I): LoadSecretsFromAPIRequest {
    return LoadSecretsFromAPIRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LoadSecretsFromAPIRequest>, I>>(object: I): LoadSecretsFromAPIRequest {
    const message = createBaseLoadSecretsFromAPIRequest();
    message.applicationId = object.applicationId ?? "";
    return message;
  },
};

function createBaseLoadSecretsFromAPIResponse(): LoadSecretsFromAPIResponse {
  return { values: {} };
}

export const LoadSecretsFromAPIResponse = {
  encode(message: LoadSecretsFromAPIResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.values).forEach(([key, value]) => {
      LoadSecretsFromAPIResponse_ValuesEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LoadSecretsFromAPIResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoadSecretsFromAPIResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          const entry1 = LoadSecretsFromAPIResponse_ValuesEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.values[entry1.key] = entry1.value;
          }
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LoadSecretsFromAPIResponse {
    return {
      values: isObject(object.values)
        ? Object.entries(object.values).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: LoadSecretsFromAPIResponse): unknown {
    const obj: any = {};
    if (message.values) {
      const entries = Object.entries(message.values);
      if (entries.length > 0) {
        obj.values = {};
        entries.forEach(([k, v]) => {
          obj.values[k] = v;
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LoadSecretsFromAPIResponse>, I>>(base?: I): LoadSecretsFromAPIResponse {
    return LoadSecretsFromAPIResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LoadSecretsFromAPIResponse>, I>>(object: I): LoadSecretsFromAPIResponse {
    const message = createBaseLoadSecretsFromAPIResponse();
    message.values = Object.entries(object.values ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseLoadSecretsFromAPIResponse_ValuesEntry(): LoadSecretsFromAPIResponse_ValuesEntry {
  return { key: "", value: "" };
}

export const LoadSecretsFromAPIResponse_ValuesEntry = {
  encode(message: LoadSecretsFromAPIResponse_ValuesEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LoadSecretsFromAPIResponse_ValuesEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoadSecretsFromAPIResponse_ValuesEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LoadSecretsFromAPIResponse_ValuesEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: LoadSecretsFromAPIResponse_ValuesEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LoadSecretsFromAPIResponse_ValuesEntry>, I>>(
    base?: I,
  ): LoadSecretsFromAPIResponse_ValuesEntry {
    return LoadSecretsFromAPIResponse_ValuesEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LoadSecretsFromAPIResponse_ValuesEntry>, I>>(
    object: I,
  ): LoadSecretsFromAPIResponse_ValuesEntry {
    const message = createBaseLoadSecretsFromAPIResponse_ValuesEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

export interface Freshcloud {
  /** Application functions */
  CreateApp(request: DeepPartial<CreateAppRequest>, metadata?: grpc.Metadata): Promise<CreateAppResponse>;
  StopApp(request: DeepPartial<StopAppRequest>, metadata?: grpc.Metadata): Promise<StopAppResponse>;
  DeleteApp(request: DeepPartial<DeleteAppRequest>, metadata?: grpc.Metadata): Promise<DeleteAppResponse>;
  LogsApp(request: DeepPartial<LogsAppRequest>, metadata?: grpc.Metadata): Observable<LogsAppResponse>;
  ListApps(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<ListAppsResponse>;
  DeployApp(request: DeepPartial<DeployAppRequest>, metadata?: grpc.Metadata): Promise<DeployAppResponse>;
  /** Dictionary functions */
  GetValueDictionary(
    request: DeepPartial<GetValueDictionaryRequest>,
    metadata?: grpc.Metadata,
  ): Promise<GetValueDictionaryResponse>;
  ExistsValueDictionary(
    request: DeepPartial<ExistsValueDictionaryRequest>,
    metadata?: grpc.Metadata,
  ): Promise<ExistsValueDictionaryResponse>;
  PutValueDictionary(
    request: DeepPartial<PutValueDictionaryRequest>,
    metadata?: grpc.Metadata,
  ): Promise<PutValueDictionaryResponse>;
  DeleteValueDictionary(
    request: DeepPartial<DeleteValueDictionaryRequest>,
    metadata?: grpc.Metadata,
  ): Promise<DeleteValueDictionaryResponse>;
  PopValueDictionary(
    request: DeepPartial<PopValueDictionaryRequest>,
    metadata?: grpc.Metadata,
  ): Promise<PopValueDictionaryResponse>;
  LengthDictionary(
    request: DeepPartial<LengthDictionaryRequest>,
    metadata?: grpc.Metadata,
  ): Promise<LengthDictionaryResponse>;
  /** Queue functions */
  ProduceValueQueue(
    request: DeepPartial<ProduceValueQueueRequest>,
    metadata?: grpc.Metadata,
  ): Promise<ProduceValueQueueResponse>;
  ConsumeValuesQueue(
    request: DeepPartial<ConsumeValuesQueueRequest>,
    metadata?: grpc.Metadata,
  ): Observable<ConsumeValuesQueueResponse>;
  /** SecretHandler functions */
  LoadSecretsFromAPI(
    request: DeepPartial<LoadSecretsFromAPIRequest>,
    metadata?: grpc.Metadata,
  ): Promise<LoadSecretsFromAPIResponse>;
  Ping(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<PingResponse>;
}

export class FreshcloudClientImpl implements Freshcloud {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateApp = this.CreateApp.bind(this);
    this.StopApp = this.StopApp.bind(this);
    this.DeleteApp = this.DeleteApp.bind(this);
    this.LogsApp = this.LogsApp.bind(this);
    this.ListApps = this.ListApps.bind(this);
    this.DeployApp = this.DeployApp.bind(this);
    this.GetValueDictionary = this.GetValueDictionary.bind(this);
    this.ExistsValueDictionary = this.ExistsValueDictionary.bind(this);
    this.PutValueDictionary = this.PutValueDictionary.bind(this);
    this.DeleteValueDictionary = this.DeleteValueDictionary.bind(this);
    this.PopValueDictionary = this.PopValueDictionary.bind(this);
    this.LengthDictionary = this.LengthDictionary.bind(this);
    this.ProduceValueQueue = this.ProduceValueQueue.bind(this);
    this.ConsumeValuesQueue = this.ConsumeValuesQueue.bind(this);
    this.LoadSecretsFromAPI = this.LoadSecretsFromAPI.bind(this);
    this.Ping = this.Ping.bind(this);
  }

  CreateApp(request: DeepPartial<CreateAppRequest>, metadata?: grpc.Metadata): Promise<CreateAppResponse> {
    return this.rpc.unary(FreshcloudCreateAppDesc, CreateAppRequest.fromPartial(request), metadata);
  }

  StopApp(request: DeepPartial<StopAppRequest>, metadata?: grpc.Metadata): Promise<StopAppResponse> {
    return this.rpc.unary(FreshcloudStopAppDesc, StopAppRequest.fromPartial(request), metadata);
  }

  DeleteApp(request: DeepPartial<DeleteAppRequest>, metadata?: grpc.Metadata): Promise<DeleteAppResponse> {
    return this.rpc.unary(FreshcloudDeleteAppDesc, DeleteAppRequest.fromPartial(request), metadata);
  }

  LogsApp(request: DeepPartial<LogsAppRequest>, metadata?: grpc.Metadata): Observable<LogsAppResponse> {
    return this.rpc.invoke(FreshcloudLogsAppDesc, LogsAppRequest.fromPartial(request), metadata);
  }

  ListApps(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<ListAppsResponse> {
    return this.rpc.unary(FreshcloudListAppsDesc, Empty.fromPartial(request), metadata);
  }

  DeployApp(request: DeepPartial<DeployAppRequest>, metadata?: grpc.Metadata): Promise<DeployAppResponse> {
    return this.rpc.unary(FreshcloudDeployAppDesc, DeployAppRequest.fromPartial(request), metadata);
  }

  GetValueDictionary(
    request: DeepPartial<GetValueDictionaryRequest>,
    metadata?: grpc.Metadata,
  ): Promise<GetValueDictionaryResponse> {
    return this.rpc.unary(FreshcloudGetValueDictionaryDesc, GetValueDictionaryRequest.fromPartial(request), metadata);
  }

  ExistsValueDictionary(
    request: DeepPartial<ExistsValueDictionaryRequest>,
    metadata?: grpc.Metadata,
  ): Promise<ExistsValueDictionaryResponse> {
    return this.rpc.unary(
      FreshcloudExistsValueDictionaryDesc,
      ExistsValueDictionaryRequest.fromPartial(request),
      metadata,
    );
  }

  PutValueDictionary(
    request: DeepPartial<PutValueDictionaryRequest>,
    metadata?: grpc.Metadata,
  ): Promise<PutValueDictionaryResponse> {
    return this.rpc.unary(FreshcloudPutValueDictionaryDesc, PutValueDictionaryRequest.fromPartial(request), metadata);
  }

  DeleteValueDictionary(
    request: DeepPartial<DeleteValueDictionaryRequest>,
    metadata?: grpc.Metadata,
  ): Promise<DeleteValueDictionaryResponse> {
    return this.rpc.unary(
      FreshcloudDeleteValueDictionaryDesc,
      DeleteValueDictionaryRequest.fromPartial(request),
      metadata,
    );
  }

  PopValueDictionary(
    request: DeepPartial<PopValueDictionaryRequest>,
    metadata?: grpc.Metadata,
  ): Promise<PopValueDictionaryResponse> {
    return this.rpc.unary(FreshcloudPopValueDictionaryDesc, PopValueDictionaryRequest.fromPartial(request), metadata);
  }

  LengthDictionary(
    request: DeepPartial<LengthDictionaryRequest>,
    metadata?: grpc.Metadata,
  ): Promise<LengthDictionaryResponse> {
    return this.rpc.unary(FreshcloudLengthDictionaryDesc, LengthDictionaryRequest.fromPartial(request), metadata);
  }

  ProduceValueQueue(
    request: DeepPartial<ProduceValueQueueRequest>,
    metadata?: grpc.Metadata,
  ): Promise<ProduceValueQueueResponse> {
    return this.rpc.unary(FreshcloudProduceValueQueueDesc, ProduceValueQueueRequest.fromPartial(request), metadata);
  }

  ConsumeValuesQueue(
    request: DeepPartial<ConsumeValuesQueueRequest>,
    metadata?: grpc.Metadata,
  ): Observable<ConsumeValuesQueueResponse> {
    return this.rpc.invoke(FreshcloudConsumeValuesQueueDesc, ConsumeValuesQueueRequest.fromPartial(request), metadata);
  }

  LoadSecretsFromAPI(
    request: DeepPartial<LoadSecretsFromAPIRequest>,
    metadata?: grpc.Metadata,
  ): Promise<LoadSecretsFromAPIResponse> {
    return this.rpc.unary(FreshcloudLoadSecretsFromAPIDesc, LoadSecretsFromAPIRequest.fromPartial(request), metadata);
  }

  Ping(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<PingResponse> {
    return this.rpc.unary(FreshcloudPingDesc, Empty.fromPartial(request), metadata);
  }
}

export const FreshcloudDesc = { serviceName: "freshcloud.Freshcloud" };

export const FreshcloudCreateAppDesc: UnaryMethodDefinitionish = {
  methodName: "CreateApp",
  service: FreshcloudDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return CreateAppRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = CreateAppResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const FreshcloudStopAppDesc: UnaryMethodDefinitionish = {
  methodName: "StopApp",
  service: FreshcloudDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return StopAppRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = StopAppResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const FreshcloudDeleteAppDesc: UnaryMethodDefinitionish = {
  methodName: "DeleteApp",
  service: FreshcloudDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return DeleteAppRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = DeleteAppResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const FreshcloudLogsAppDesc: UnaryMethodDefinitionish = {
  methodName: "LogsApp",
  service: FreshcloudDesc,
  requestStream: false,
  responseStream: true,
  requestType: {
    serializeBinary() {
      return LogsAppRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = LogsAppResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const FreshcloudListAppsDesc: UnaryMethodDefinitionish = {
  methodName: "ListApps",
  service: FreshcloudDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return Empty.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = ListAppsResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const FreshcloudDeployAppDesc: UnaryMethodDefinitionish = {
  methodName: "DeployApp",
  service: FreshcloudDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return DeployAppRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = DeployAppResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const FreshcloudGetValueDictionaryDesc: UnaryMethodDefinitionish = {
  methodName: "GetValueDictionary",
  service: FreshcloudDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return GetValueDictionaryRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = GetValueDictionaryResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const FreshcloudExistsValueDictionaryDesc: UnaryMethodDefinitionish = {
  methodName: "ExistsValueDictionary",
  service: FreshcloudDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return ExistsValueDictionaryRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = ExistsValueDictionaryResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const FreshcloudPutValueDictionaryDesc: UnaryMethodDefinitionish = {
  methodName: "PutValueDictionary",
  service: FreshcloudDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return PutValueDictionaryRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = PutValueDictionaryResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const FreshcloudDeleteValueDictionaryDesc: UnaryMethodDefinitionish = {
  methodName: "DeleteValueDictionary",
  service: FreshcloudDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return DeleteValueDictionaryRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = DeleteValueDictionaryResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const FreshcloudPopValueDictionaryDesc: UnaryMethodDefinitionish = {
  methodName: "PopValueDictionary",
  service: FreshcloudDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return PopValueDictionaryRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = PopValueDictionaryResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const FreshcloudLengthDictionaryDesc: UnaryMethodDefinitionish = {
  methodName: "LengthDictionary",
  service: FreshcloudDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return LengthDictionaryRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = LengthDictionaryResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const FreshcloudProduceValueQueueDesc: UnaryMethodDefinitionish = {
  methodName: "ProduceValueQueue",
  service: FreshcloudDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return ProduceValueQueueRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = ProduceValueQueueResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const FreshcloudConsumeValuesQueueDesc: UnaryMethodDefinitionish = {
  methodName: "ConsumeValuesQueue",
  service: FreshcloudDesc,
  requestStream: false,
  responseStream: true,
  requestType: {
    serializeBinary() {
      return ConsumeValuesQueueRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = ConsumeValuesQueueResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const FreshcloudLoadSecretsFromAPIDesc: UnaryMethodDefinitionish = {
  methodName: "LoadSecretsFromAPI",
  service: FreshcloudDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return LoadSecretsFromAPIRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = LoadSecretsFromAPIResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const FreshcloudPingDesc: UnaryMethodDefinitionish = {
  methodName: "Ping",
  service: FreshcloudDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return Empty.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = PingResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

interface UnaryMethodDefinitionishR extends grpc.UnaryMethodDefinition<any, any> {
  requestStream: any;
  responseStream: any;
}

type UnaryMethodDefinitionish = UnaryMethodDefinitionishR;

interface Rpc {
  unary<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    request: any,
    metadata: grpc.Metadata | undefined,
  ): Promise<any>;
  invoke<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    request: any,
    metadata: grpc.Metadata | undefined,
  ): Observable<any>;
}

export class GrpcWebImpl {
  private host: string;
  private options: {
    transport?: grpc.TransportFactory;
    streamingTransport?: grpc.TransportFactory;
    debug?: boolean;
    metadata?: grpc.Metadata;
    upStreamRetryCodes?: number[];
  };

  constructor(
    host: string,
    options: {
      transport?: grpc.TransportFactory;
      streamingTransport?: grpc.TransportFactory;
      debug?: boolean;
      metadata?: grpc.Metadata;
      upStreamRetryCodes?: number[];
    },
  ) {
    this.host = host;
    this.options = options;
  }

  unary<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    _request: any,
    metadata: grpc.Metadata | undefined,
  ): Promise<any> {
    const request = { ..._request, ...methodDesc.requestType };
    const maybeCombinedMetadata = metadata && this.options.metadata
      ? new BrowserHeaders({ ...this.options?.metadata.headersMap, ...metadata?.headersMap })
      : metadata ?? this.options.metadata;
    return new Promise((resolve, reject) => {
      grpc.unary(methodDesc, {
        request,
        host: this.host,
        metadata: maybeCombinedMetadata ?? {},
        ...(this.options.transport !== undefined ? { transport: this.options.transport } : {}),
        debug: this.options.debug ?? false,
        onEnd: function (response) {
          if (response.status === grpc.Code.OK) {
            resolve(response.message!.toObject());
          } else {
            const err = new GrpcWebError(response.statusMessage, response.status, response.trailers);
            reject(err);
          }
        },
      });
    });
  }

  invoke<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    _request: any,
    metadata: grpc.Metadata | undefined,
  ): Observable<any> {
    const upStreamCodes = this.options.upStreamRetryCodes ?? [];
    const DEFAULT_TIMEOUT_TIME: number = 3_000;
    const request = { ..._request, ...methodDesc.requestType };
    const transport = this.options.streamingTransport ?? this.options.transport;
    const maybeCombinedMetadata = metadata && this.options.metadata
      ? new BrowserHeaders({ ...this.options?.metadata.headersMap, ...metadata?.headersMap })
      : metadata ?? this.options.metadata;
    return new Observable((observer) => {
      const upStream = () => {
        const client = grpc.invoke(methodDesc, {
          host: this.host,
          request,
          ...(transport !== undefined ? { transport } : {}),
          metadata: maybeCombinedMetadata ?? {},
          debug: this.options.debug ?? false,
          onMessage: (next) => observer.next(next),
          onEnd: (code: grpc.Code, message: string, trailers: grpc.Metadata) => {
            if (code === 0) {
              observer.complete();
            } else if (upStreamCodes.includes(code)) {
              setTimeout(upStream, DEFAULT_TIMEOUT_TIME);
            } else {
              const err = new Error(message) as any;
              err.code = code;
              err.metadata = trailers;
              observer.error(err);
            }
          },
        });
        observer.add(() => {
          return client.close();
        });
      };
      upStream();
    }).pipe(share());
  }
}

declare const self: any | undefined;
declare const window: any | undefined;
declare const global: any | undefined;
const tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

function bytesFromBase64(b64: string): Uint8Array {
  if (tsProtoGlobalThis.Buffer) {
    return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = tsProtoGlobalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (tsProtoGlobalThis.Buffer) {
    return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return tsProtoGlobalThis.btoa(bin.join(""));
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000;
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (t.seconds || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export class GrpcWebError extends tsProtoGlobalThis.Error {
  constructor(message: string, public code: grpc.Code, public metadata: grpc.Metadata) {
    super(message);
  }
}
