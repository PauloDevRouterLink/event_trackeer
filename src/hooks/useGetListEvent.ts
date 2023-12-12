import { useRecoilValue } from "recoil"
import { filterEventState } from "../state/selectors"

export const useGetListEvent = () => {
  const events = useRecoilValue(filterEventState)

  return events
}
