import { HttpException, HttpStatus } from '@nestjs/common';

export class EntityNotFoundException extends HttpException {
  constructor(entity: string) {
    super(`${entity} was not found.`, HttpStatus.NOT_FOUND);
  }
}
