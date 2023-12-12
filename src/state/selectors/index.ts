import { selector } from "recoil";
import { filteredEvent, listEventState } from "../atom";
import { EventProps } from "../../types/Event";

export const filterEventState = selector({
  key: 'filterEventState',
  get: ({ get }) => {
    const filter = get(filteredEvent)
    const allEvents = get(listEventState)

    const events = allEvents.filter(event => {
      if (!filter.date) {
        return true
      }

      const isCurrentDay =
        filter.date.toISOString().slice(0, 10) ===
        event.init.toISOString().slice(0, 10)

      return isCurrentDay
    })

    return events
  }
})

export const eventAsync = selector({
  key: 'eventAsync',
  get: async () => {
    const response = await fetch('http://localhost:3333/events')
    const data: EventProps[] = await response.json()

    const eventList = data.map(event => ({
      ...event,
      init: new Date(event.init),
      end: new Date(event.end)
    }))


    return eventList
  }
})