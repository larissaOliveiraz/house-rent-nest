import { InMemoryTypeRepository } from '@test/repositories/in-memory-type.repository';
import { CreateTypeService } from '../../../../../src/domain/house/types/services/create-type.service';
import { EntityAlreadyExistsException } from '@domain/@exceptions/entity-already-exists.exception';

describe('Create Type Service', () => {
  let typeRepository: InMemoryTypeRepository;
  let service: CreateTypeService;

  beforeEach(async () => {
    typeRepository = new InMemoryTypeRepository();
    service = new CreateTypeService(typeRepository);
  });

  it('should be able to create a type', async () => {
    const { type } = await service.execute({
      description: 'new-type',
    });

    expect(type.id).toEqual(expect.any(String));
  });

  it('should not be able to create a type that already exists', async () => {
    await service.execute({
      description: 'new-type',
    });

    await expect(() =>
      service.execute({ description: 'new-type' }),
    ).rejects.toBeInstanceOf(EntityAlreadyExistsException);
  });
});
