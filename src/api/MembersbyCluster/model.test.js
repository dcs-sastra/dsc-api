import { MembersbyCluster } from '.'

let membersbyCluster

beforeEach(async () => {
  membersbyCluster = await MembersbyCluster.create({ lead: 'test', app: 'test', flutter: 'test', web: 'test', ml: 'test', cloud: 'test', nonTech: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = membersbyCluster.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(membersbyCluster.id)
    expect(view.lead).toBe(membersbyCluster.lead)
    expect(view.app).toBe(membersbyCluster.app)
    expect(view.flutter).toBe(membersbyCluster.flutter)
    expect(view.web).toBe(membersbyCluster.web)
    expect(view.ml).toBe(membersbyCluster.ml)
    expect(view.cloud).toBe(membersbyCluster.cloud)
    expect(view.nonTech).toBe(membersbyCluster.nonTech)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = membersbyCluster.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(membersbyCluster.id)
    expect(view.lead).toBe(membersbyCluster.lead)
    expect(view.app).toBe(membersbyCluster.app)
    expect(view.flutter).toBe(membersbyCluster.flutter)
    expect(view.web).toBe(membersbyCluster.web)
    expect(view.ml).toBe(membersbyCluster.ml)
    expect(view.cloud).toBe(membersbyCluster.cloud)
    expect(view.nonTech).toBe(membersbyCluster.nonTech)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
