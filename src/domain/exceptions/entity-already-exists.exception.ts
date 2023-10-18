import { HttpException, HttpStatus } from '@nestjs/common';

export class EntityAlreadyExistsException extends HttpException {
  constructor(entity: string) {
    let message = `${entity} already exists.`;

    if (entity === 'User') message = 'User with this email already exist.';
    if (entity === 'Type')
      message = 'Type with this description already exist.';

    super(message, HttpStatus.BAD_REQUEST);
  }
}
