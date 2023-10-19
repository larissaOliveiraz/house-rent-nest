import { InMemoryTypeRepository } from '@test/repositories/in-memory-type.repository';
import { DeleteTypeService } from './delete-type.service';
import { EntityNotFoundException } from '@domain/@exceptions/entity-not-found.exception';

describe('Delete Type Service', () => {
  let typeRepository: InMemoryTypeRepository;
  let service: DeleteTypeService;

  beforeEach(async () => {
    typeRepository = new InMemoryTypeRepository();
    service = new DeleteTypeService(typeRepository);
  });

  it('should be able to delete a type', async () => {
    const { id } = await typeRepository.create({ description: 'new-type' });

    const { type } = await service.execute({ id });

    expect(type.id).toEqual(id);
  });

  it('should not be able to delete a type that does not exist', async () => {
    await expect(() =>
      service.execute({ id: 'non-existing-id' }),
    ).rejects.toBeInstanceOf(EntityNotFoundException);
  });
});
