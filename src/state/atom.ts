import { atom } from 'recoil'
import { EventProps } from '../types/Event'
import { FilterEventProps } from '../components/Filter/FilterEventProps'
import { eventAsync } from './selectors'

export const listEventState = atom<EventProps[]>({
  key: 'listEventState',
  default: eventAsync,
})

export const filteredEvent = atom<FilterEventProps>({
  key: 'filteredEvent',
  default: {}
})
