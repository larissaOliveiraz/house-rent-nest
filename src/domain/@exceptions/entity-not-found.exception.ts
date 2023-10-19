import { HttpException, HttpStatus } from '@nestjs/common';

export class EntityNotFoundException extends HttpException {
  constructor(entity: string, id?: string) {
    let message = `${entity} was not found.`;

    if (id) message = `${entity} with id '${id}' was not found`;

    super(message, HttpStatus.NOT_FOUND);
  }
}
