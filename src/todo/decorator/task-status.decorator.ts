import { SetMetadata } from '@nestjs/common';

export const STATUS_KEY = 'status';

export const SetTaskStatus = (status: string) =>
  SetMetadata(STATUS_KEY, status);
