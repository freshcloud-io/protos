// Original file: freshcloud.proto


export interface CronExecuteRequest {
  'jobName'?: (string);
  'config'?: ({[key: string]: string});
  'statusServer'?: (number);
}

export interface CronExecuteRequest__Output {
  'jobName': (string);
  'config': ({[key: string]: string});
  'statusServer': (number);
}
