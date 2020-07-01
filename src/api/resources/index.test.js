import request from 'supertest'
import { masterKey, apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Resources } from '.'

const app = () => express(apiRoot, routes)

let resources

beforeEach(async () => {
  resources = await Resources.create({})
})

test('POST /resources 201 (master)', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ access_token: masterKey, name: 'test', description: 'test', resource_url: 'test', image_url: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.name).toEqual('test')
  expect(body.description).toEqual('test')
  expect(body.resource_url).toEqual('test')
  expect(body.image_url).toEqual('test')
})

test('POST /resources 401', async () => {
  const { status } = await request(app())
    .post(`${apiRoot}`)
  expect(status).toBe(401)
})

test('GET /resources 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /resources/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${resources.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(resources.id)
})

test('GET /resources/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /resources/:id 200 (master)', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${resources.id}`)
    .send({ access_token: masterKey, name: 'test', description: 'test', resource_url: 'test', image_url: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(resources.id)
  expect(body.name).toEqual('test')
  expect(body.description).toEqual('test')
  expect(body.resource_url).toEqual('test')
  expect(body.image_url).toEqual('test')
})

test('PUT /resources/:id 401', async () => {
  const { status } = await request(app())
    .put(`${apiRoot}/${resources.id}`)
  expect(status).toBe(401)
})

test('PUT /resources/:id 404 (master)', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ access_token: masterKey, name: 'test', description: 'test', resource_url: 'test', image_url: 'test' })
  expect(status).toBe(404)
})

test('DELETE /resources/:id 204 (master)', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${resources.id}`)
    .query({ access_token: masterKey })
  expect(status).toBe(204)
})

test('DELETE /resources/:id 401', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${resources.id}`)
  expect(status).toBe(401)
})

test('DELETE /resources/:id 404 (master)', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
    .query({ access_token: masterKey })
  expect(status).toBe(404)
})
