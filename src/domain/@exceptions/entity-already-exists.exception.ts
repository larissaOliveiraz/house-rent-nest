import { HttpException, HttpStatus } from '@nestjs/common';

export class EntityAlreadyExistsException extends HttpException {
  constructor(entity: string) {
    let message = `${entity} already exists.`;

    if (entity === 'User') message = `${entity} with this email already exist.`;
    if (entity === 'Type' || entity === 'Location')
      message = `${entity} with this description already exist.`;
    if (entity === 'House')
      message = `${entity} with this address already exists.`;

    super(message, HttpStatus.BAD_REQUEST);
  }
}
