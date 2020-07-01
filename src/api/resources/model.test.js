import { Resources } from '.'

let resources

beforeEach(async () => {
  resources = await Resources.create({ name: 'test', name: 'test', description: 'test', resource_url: 'test', image_url: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = resources.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(resources.id)
    expect(view.name).toBe(resources.name)
    expect(view.description).toBe(resources.description)
    expect(view.resource_url).toBe(resources.resource_url)
    expect(view.image_url).toBe(resources.image_url)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = resources.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(resources.id)
    expect(view.name).toBe(resources.name)
    expect(view.description).toBe(resources.description)
    expect(view.resource_url).toBe(resources.resource_url)
    expect(view.image_url).toBe(resources.image_url)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
