// Original file: freshcloud.proto


export interface ProduceValueQueueRequest {
  'topic'?: (string);
  'message'?: (Buffer | Uint8Array | string);
}

export interface ProduceValueQueueRequest__Output {
  'topic': (string);
  'message': (Buffer);
}
