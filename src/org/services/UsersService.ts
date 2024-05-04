import type { GetUserResponse, GetUsersResponse, CreateUserRequest, UpdateUserResponse, UpdateUserRequest } from '@classroom/protocol/UsersService'
import { Service } from '@classroom/shared/services'

export class UsersService extends Service {
  async create(user: CreateUserRequest) {
    return await this.post("http://localhost:3000/users", user)
  }

  async getOne(id: string): Promise<GetUserResponse> {
    return await this.get(`http://localhost:3000/users/${id}`)
  }

  async getAll(): Promise<GetUsersResponse> {
    return await this.get("http://localhost:3000/users")
  }

  async update(id: string, request: UpdateUserRequest): Promise<UpdateUserResponse> {
    return await this.patch(`http://localhost:3000/users/${id}`, request)
  }

  async find(query: string): Promise<GetUsersResponse> {
    return await this.get("http://localhost:3000/users", { query })
  }
}
