import { RestRepository } from '@akd-studios/framework-persistence-rest/repository'
import { UuidIdentity } from '@akd-studios/framework/domain'
import { User, type UserIdentity } from '@classroom/core/aggregates'
import { type UserScheme } from '@classroom/protocol/user'


const UserSerializer = (
  from: User
): UserScheme => ({
  id: from.id.value,
  name: from.name,
  email: from.email,
  roles: from.roleIds.map(x => ({id: x.value})),
  status: from.status,
  title: from.title,
  department: from.department,
  avatarUrl: from.avatarUrl
})

const UserDeserializer = (
  from: UserScheme
): User => new User(
  new UuidIdentity(from.id),
  from.name,
  from.email,
  from.roles.map(x => new UuidIdentity(x.id)) || [],
  from.status,
  from.title,
  from.department,
  from.avatarUrl
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