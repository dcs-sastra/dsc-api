import { Events } from '.'

let events

beforeEach(async () => {
  events = await Events.create({ name: 'test', date: 'test', description: 'test', main: 'test', venue: 'test', speakers: 'test', poster: 'test', register_link: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = events.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(events.id)
    expect(view.name).toBe(events.name)
    expect(view.date).toBe(events.date)
    expect(view.description).toBe(events.description)
    expect(view.main).toBe(events.main)
    expect(view.venue).toBe(events.venue)
    expect(view.speakers).toBe(events.speakers)
    expect(view.poster).toBe(events.poster)
    expect(view.register_link).toBe(events.register_link)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = events.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(events.id)
    expect(view.name).toBe(events.name)
    expect(view.date).toBe(events.date)
    expect(view.description).toBe(events.description)
    expect(view.main).toBe(events.main)
    expect(view.venue).toBe(events.venue)
    expect(view.speakers).toBe(events.speakers)
    expect(view.poster).toBe(events.poster)
    expect(view.register_link).toBe(events.register_link)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
