import { FC } from 'react'
import Kalend, { CalendarEvent, CalendarView, OnEventDragFinish } from 'kalend'
import { useUpdatedState } from '../../hooks/useUpdatedState'
import ptBR from './location/ptBR.json'
import style from './Calendar.module.scss'
import 'kalend/dist/styles/index.css'
import { useGetListEvent } from '../../hooks/useGetListEvent'

type KalendEventProps = {
  id?: number
  startAt: string
  endAt: string
  summary: string
  color: string
}

const Calendar: FC = () => {
  const eventsKalend = new Map<string, KalendEventProps[]>()
  const events = useGetListEvent()
  const { handleUpdatedSetState } = useUpdatedState()

  events.forEach(event => {
    const key = event.init.toISOString().slice(0, 10)

    if (!eventsKalend.has(key)) {
      eventsKalend.set(key, [])
    }

    eventsKalend.get(key)?.push({
      id: event.id,
      startAt: event.init.toISOString(),
      endAt: event.end.toISOString(),
      summary: event.description,
      color: 'blue',
    })
  })

  const handleOnEventDragFinish: OnEventDragFinish = (
    kalendEventUnchanged: CalendarEvent,
    kalendEventUpdated: CalendarEvent
  ) => {
    const event = events.find(
      item => item.description === kalendEventUpdated.summary
    )

    if (event) {
      const eventUpdated = {
        ...event,
      }

      eventUpdated.init = new Date(kalendEventUpdated.startAt)
      eventUpdated.end = new Date(kalendEventUpdated.endAt)

      handleUpdatedSetState({ event: eventUpdated })
    }
  }

  return (
    <div className={style.Container}>
      <Kalend
        events={Object.fromEntries(eventsKalend)}
        initialDate={new Date().toISOString()}
        hourHeight={60}
        initialView={CalendarView.WEEK}
        timeFormat={'24'}
        weekDayStart={'Monday'}
        calendarIDsHidden={['work']}
        language={'customLanguage'}
        customLanguage={ptBR}
        onEventDragFinish={handleOnEventDragFinish}
      />
    </div>
  )
}

export default Calendar
