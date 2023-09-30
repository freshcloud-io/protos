// Original file: freshcloud.proto

import type { Long } from '@grpc/proto-loader';

export interface Resources {
  'cpu'?: (number | string | Long);
  'memory'?: (number | string | Long);
  'disk'?: (number | string | Long);
}

export interface Resources__Output {
  'cpu': (string);
  'memory': (string);
  'disk': (string);
}
