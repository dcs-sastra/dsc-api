import request from 'supertest'
import { masterKey, apiRoot } from '../../config'
import express from '../../services/express'
import routes, { MembersbyCluster } from '.'

const app = () => express(apiRoot, routes)

let membersbyCluster

beforeEach(async () => {
  membersbyCluster = await MembersbyCluster.create({})
})

test('POST /MembersbyClusters 201 (master)', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ access_token: masterKey, lead: 'test', app: 'test', flutter: 'test', web: 'test', ml: 'test', cloud: 'test', nonTech: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.lead).toEqual('test')
  expect(body.app).toEqual('test')
  expect(body.flutter).toEqual('test')
  expect(body.web).toEqual('test')
  expect(body.ml).toEqual('test')
  expect(body.cloud).toEqual('test')
  expect(body.nonTech).toEqual('test')
})

test('POST /MembersbyClusters 401', async () => {
  const { status } = await request(app())
    .post(`${apiRoot}`)
  expect(status).toBe(401)
})

test('GET /MembersbyClusters 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /MembersbyClusters/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${membersbyCluster.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(membersbyCluster.id)
})

test('GET /MembersbyClusters/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /MembersbyClusters/:id 200 (master)', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${membersbyCluster.id}`)
    .send({ access_token: masterKey, lead: 'test', app: 'test', flutter: 'test', web: 'test', ml: 'test', cloud: 'test', nonTech: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(membersbyCluster.id)
  expect(body.lead).toEqual('test')
  expect(body.app).toEqual('test')
  expect(body.flutter).toEqual('test')
  expect(body.web).toEqual('test')
  expect(body.ml).toEqual('test')
  expect(body.cloud).toEqual('test')
  expect(body.nonTech).toEqual('test')
})

test('PUT /MembersbyClusters/:id 401', async () => {
  const { status } = await request(app())
    .put(`${apiRoot}/${membersbyCluster.id}`)
  expect(status).toBe(401)
})

test('PUT /MembersbyClusters/:id 404 (master)', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ access_token: masterKey, lead: 'test', app: 'test', flutter: 'test', web: 'test', ml: 'test', cloud: 'test', nonTech: 'test' })
  expect(status).toBe(404)
})

test('DELETE /MembersbyClusters/:id 204 (master)', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${membersbyCluster.id}`)
    .query({ access_token: masterKey })
  expect(status).toBe(204)
})

test('DELETE /MembersbyClusters/:id 401', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${membersbyCluster.id}`)
  expect(status).toBe(401)
})

test('DELETE /MembersbyClusters/:id 404 (master)', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
    .query({ access_token: masterKey })
  expect(status).toBe(404)
})
