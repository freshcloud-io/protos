// Original file: freshcloud.proto

import type { BuildInfo as _freshcloud_BuildInfo, BuildInfo__Output as _freshcloud_BuildInfo__Output } from '../freshcloud/BuildInfo';

export interface DeployAppRequest {
  'blobKey'?: (string);
  'id'?: (string);
  'name'?: (string);
  'build'?: (_freshcloud_BuildInfo | null);
}

export interface DeployAppRequest__Output {
  'blobKey': (string);
  'id': (string);
  'name': (string);
  'build': (_freshcloud_BuildInfo__Output | null);
}
