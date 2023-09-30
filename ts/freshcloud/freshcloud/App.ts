// Original file: freshcloud.proto

import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../google/protobuf/Timestamp';

export interface App {
  'id'?: (string);
  'name'?: (string);
  'environment'?: (string);
  'running'?: (boolean);
  'createdAt'?: (_google_protobuf_Timestamp | null);
}

export interface App__Output {
  'id': (string);
  'name': (string);
  'environment': (string);
  'running': (boolean);
  'createdAt': (_google_protobuf_Timestamp__Output | null);
}
