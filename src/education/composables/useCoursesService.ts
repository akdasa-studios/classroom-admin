import { CoursesService } from '@classroom/education/services'

export function useCoursesService() {
  return new CoursesService()
}
