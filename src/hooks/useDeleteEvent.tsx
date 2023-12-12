import { useUpdatedState } from './useUpdatedState'
import { FunctionsProps } from './FunctionsProps'

export const useDeleteEvent = () => {
  const { setListEvents } = useUpdatedState()

  const deleteEventAction = ({ event }: FunctionsProps) => {
    setListEvents(prevList => prevList.filter(props => props.id !== event.id))
  }

  return { deleteEventAction }
}
