import { Clusters } from '.'

let clusters

beforeEach(async () => {
  clusters = await Clusters.create({ name: 'test', img: 'test', backgroundColor: 'test', link: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = clusters.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(clusters.id)
    expect(view.name).toBe(clusters.name)
    expect(view.img).toBe(clusters.img)
    expect(view.backgroundColor).toBe(clusters.backgroundColor)
    expect(view.link).toBe(clusters.link)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = clusters.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(clusters.id)
    expect(view.name).toBe(clusters.name)
    expect(view.img).toBe(clusters.img)
    expect(view.backgroundColor).toBe(clusters.backgroundColor)
    expect(view.link).toBe(clusters.link)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
