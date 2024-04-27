import type { GetRoleResponse, GetRolesResponse, CreateRoleRequest, UpdateRoleResponse, UpdateRoleRequest } from '@classroom/protocol/RolesService'
import { Service } from './Service';

export class RolesService extends Service {
  async create(role: CreateRoleRequest) {
    return await this.post("http://localhost:3000/roles", role)
  }

  async getOne(id: string): Promise<GetRoleResponse> {
    return await this.get(`http://localhost:3000/roles/${id}`)
  }

  async getAll(): Promise<GetRolesResponse> {
    return await this.get("http://localhost:3000/roles")
  }

  async update(id: string, request: UpdateRoleRequest): Promise<UpdateRoleResponse> {
    return await this.patch(`http://localhost:3000/roles/${id}`, request)
  }
}
