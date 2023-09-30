// Original file: freshcloud.proto

import type { Image as _freshcloud_Image, Image__Output as _freshcloud_Image__Output } from '../freshcloud/Image';
import type { ImageRegistry as _freshcloud_ImageRegistry, ImageRegistry__Output as _freshcloud_ImageRegistry__Output } from '../freshcloud/ImageRegistry';
import type { Resources as _freshcloud_Resources, Resources__Output as _freshcloud_Resources__Output } from '../freshcloud/Resources';

export interface BuildInfo {
  'image'?: (_freshcloud_Image | null);
  'registry'?: (_freshcloud_ImageRegistry | null);
  'resources'?: (_freshcloud_Resources | null);
}

export interface BuildInfo__Output {
  'image': (_freshcloud_Image__Output | null);
  'registry': (_freshcloud_ImageRegistry__Output | null);
  'resources': (_freshcloud_Resources__Output | null);
}
