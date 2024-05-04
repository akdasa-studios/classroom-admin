import { GroupsService } from '@classroom/education/services'

export function useGroupsService() {
  return new GroupsService()
}
