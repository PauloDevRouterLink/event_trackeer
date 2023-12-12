import { useSetRecoilState } from 'recoil'
import { EventProps } from '../types/Event'
import { listEventState } from '../state/atom'
import { FunctionsProps } from './FunctionsProps'

export const useUpdatedState = () => {
  const setListEvents = useSetRecoilState<EventProps[]>(listEventState)

  const handleUpdatedSetState = ({ event }: FunctionsProps) => {
    setListEvents(prev => {
      const index = prev.findIndex(item => item.id === event.id)

      return [...prev.slice(0, index), event, ...prev.slice(index + 1)]
    })
  }

  return { setListEvents, handleUpdatedSetState }
}
