import { House, User } from '@prisma/client';
import { Role } from '@common/enums/role.enum';

export class PrismaMapper {
  static toUserDomain(user: User) {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
      role: user.role as Role,
      createdAt: user.created_at,
    };
  }

  static toHouseDomain(house: House) {
    return {
      id: house.id,
      title: house.title,
      description: house.description,
      dailyPrice: Number(house.daily_price),
      dailyFine: Number(house.daily_fine),
      userId: house.user_id,
      typeId: house.type_id,
      locationId: house.location_id,
      addressId: house.address_id,
    };
  }
}
