import { EnrollmentsService } from '@classroom/education/services'

export function useEnrollmentsService() {
  return new EnrollmentsService()
}
