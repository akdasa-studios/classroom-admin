import type { GetGroupResponse, GetGroupsResponse, CreateGroupRequest, UpdateGroupResponse, UpdateGroupRequest } from '@classroom/protocol/GroupsService'
import { Service } from '@classroom/shared/services'

export class GroupsService extends Service {
  async create(course: CreateGroupRequest) {
    return await this.post("http://localhost:3000/groups", course)
  }

  async getOne(id: string): Promise<GetGroupResponse> {
    return await this.get(`http://localhost:3000/groups/${id}`)
  }

  async getAll(): Promise<GetGroupsResponse> {
    return await this.get("http://localhost:3000/groups")
  }

  async update(id: string, request: UpdateGroupRequest): Promise<UpdateGroupResponse> {
    return await this.patch(`http://localhost:3000/groups/${id}`, request)
  }
}
