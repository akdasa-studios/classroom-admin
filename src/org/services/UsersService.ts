import { RestRepository } from '@akd-studios/framework-persistence-rest/repository'
import { UuidIdentity } from '@akd-studios/framework/domain'
import { User, type UserIdentity } from '@classroom/core/aggregates'
import { type UserScheme } from '@classroom/protocol/user'


const UserSerializer = (
  from: User
): UserScheme => ({
  id: from.id.value,
  name: from.name,
  roles: from.roleIds.map(x => ({id: x.value}))
})

const UserDeserializer = (
  from: UserScheme
): User => new User(
  new UuidIdentity(from.id),
  from.name,
  from.roles.map(x => new UuidIdentity(x.id)) || []
)

export class UsersService {
  _usersRepository = new RestRepository<User, UserScheme>(
    'http://localhost:3000/users', UserSerializer, UserDeserializer)

  async getUser(userId: UserIdentity): Promise<User|undefined> {
    return this._usersRepository.get(userId)
  }

  async getTeamMembers(): Promise<readonly User[]> {
    const response = await this._usersRepository.all()
    return response.entities
  }

  async saveUser(user: User) {
    await this._usersRepository.save(user)
  }
}