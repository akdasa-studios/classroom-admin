import type { GetEnrollmentResponse, GetEnrollmentsResponse, CreateEnrollmentRequest, UpdateEnrollmentResponse, UpdateEnrollmentRequest } from '@classroom/protocol/EnrollmentsService'
import { Service } from '@classroom/shared/services'

export class EnrollmentsService extends Service {
  async create(enrollment: CreateEnrollmentRequest) {
    return await this.post("http://localhost:3000/enrollments", enrollment)
  }

  async getOne(id: string): Promise<GetEnrollmentResponse> {
    return await this.get(`http://localhost:3000/enrollments/${id}`)
  }

  async getAll(): Promise<GetEnrollmentsResponse> {
    return await this.get("http://localhost:3000/enrollments")
  }

  async update(id: string, request: UpdateEnrollmentRequest): Promise<UpdateEnrollmentResponse> {
    return await this.patch(`http://localhost:3000/enrollments/${id}`, request)
  }

  async find(query: string): Promise<GetEnrollmentsResponse> {
    return await this.get("http://localhost:3000/enrollments", { query })
  }
}
