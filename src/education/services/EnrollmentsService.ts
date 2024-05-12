import type { GetEnrollmentResponse, GetEnrollmentsResponse, CreateEnrollmentRequest, UpdateEnrollmentResponse, UpdateEnrollmentRequest } from '@classroom/protocol/EnrollmentsService'
import { Service } from '@classroom/shared/services'

export class EnrollmentsService extends Service {
  async create(enrollment: CreateEnrollmentRequest) {
    return await this.post("/enrollments", enrollment)
  }

  async getOne(id: string): Promise<GetEnrollmentResponse> {
    return await this.get(`/enrollments/${id}`)
  }

  async getAll(): Promise<GetEnrollmentsResponse> {
    return await this.get("/enrollments")
  }

  async update(id: string, request: UpdateEnrollmentRequest): Promise<UpdateEnrollmentResponse> {
    return await this.patch(`/enrollments/${id}`, request)
  }

  async find(query: string): Promise<GetEnrollmentsResponse> {
    return await this.get("/enrollments", { query })
  }
}
