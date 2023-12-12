import { getId } from '../utils/getId'
import { FunctionsProps } from './FunctionsProps'
import { useUpdatedState } from './useUpdatedState'

export const useAddEvent = () => {
  const { setListEvents } = useUpdatedState()

  const createEvent = ({ event }: FunctionsProps) => {
    const today = new Date()
    const currentDate = event.init < today

    if (currentDate) {
      alert('Evento não cadastrado, data invalida!')
    } else {
      event.id = getId()
      setListEvents(prevList => [...prevList, event])
    }

    if (currentDate) alert('Coloque uma data valida!')
  }

  return { createEvent }
}
