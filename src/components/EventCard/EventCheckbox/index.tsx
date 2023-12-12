import { FC } from 'react'
import { EventProps } from '../../../types/Event'
import { useUpdatedState } from '../../../hooks/useUpdatedState'

type EventCheckBoxProps = { event: EventProps }

const EventCheckbox: FC<EventCheckBoxProps> = ({ event }) => {
  const { handleUpdatedSetState } = useUpdatedState()

  const handleChangeStatus = () => {
    const changeEvent = {
      ...event,
    }

    changeEvent.completed = !changeEvent.completed

    handleUpdatedSetState({ event: changeEvent })
  }

  const style = [
    'far',
    'fa-2x',
    event.completed ? 'fa-check-square' : 'fa-square',
  ]

  return <i className={style.join(' ')} onClick={handleChangeStatus}></i>
}

export default EventCheckbox
