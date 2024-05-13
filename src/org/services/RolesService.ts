import type { GetRoleResponse, GetRolesResponse, CreateRoleRequest, UpdateRoleResponse, UpdateRoleRequest } from '@classroom/protocol/RolesService'
import { Service } from '@classroom/shared/services'

export class RolesService extends Service {
  async create(role: CreateRoleRequest) {
    return await this.post("/roles", role)
  }

  async getOne(id: string): Promise<GetRoleResponse> {
    return await this.get(`/roles/${id}`)
  }

  async getAll(): Promise<GetRolesResponse> {
    return await this.get("/roles")
  }

  async update(id: string, request: UpdateRoleRequest): Promise<UpdateRoleResponse> {
    return await this.patch(`/roles/${id}`, request)
  }
}
