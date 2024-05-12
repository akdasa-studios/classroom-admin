import type { GetGroupResponse, GetGroupsResponse, CreateGroupRequest, UpdateGroupResponse, UpdateGroupRequest } from '@classroom/protocol/GroupsService'
import { Service } from '@classroom/shared/services'

export class GroupsService extends Service {
  async create(course: CreateGroupRequest) {
    return await this.post("/groups", course)
  }

  async getOne(id: string): Promise<GetGroupResponse> {
    return await this.get(`/groups/${id}`)
  }

  async getAll(): Promise<GetGroupsResponse> {
    return await this.get("/groups")
  }

  async update(id: string, request: UpdateGroupRequest): Promise<UpdateGroupResponse> {
    return await this.patch(`/groups/${id}`, request)
  }

  async findByNameAndCourse(query: string, courseId: string): Promise<GetGroupsResponse> {
    return await this.get("/groups", { query, courseId })
  }
}
