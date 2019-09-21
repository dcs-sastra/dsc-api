import request from 'supertest'
import { masterKey, apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Clusters } from '.'

const app = () => express(apiRoot, routes)

let clusters

beforeEach(async () => {
  clusters = await Clusters.create({})
})

test('POST /clusters 201 (master)', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ access_token: masterKey, name: 'test', img: 'test', backgroundColor: 'test', link: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.name).toEqual('test')
  expect(body.img).toEqual('test')
  expect(body.backgroundColor).toEqual('test')
  expect(body.link).toEqual('test')
})

test('POST /clusters 401', async () => {
  const { status } = await request(app())
    .post(`${apiRoot}`)
  expect(status).toBe(401)
})

test('GET /clusters 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /clusters/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${clusters.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(clusters.id)
})

test('GET /clusters/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /clusters/:id 200 (master)', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${clusters.id}`)
    .send({ access_token: masterKey, name: 'test', img: 'test', backgroundColor: 'test', link: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(clusters.id)
  expect(body.name).toEqual('test')
  expect(body.img).toEqual('test')
  expect(body.backgroundColor).toEqual('test')
  expect(body.link).toEqual('test')
})

test('PUT /clusters/:id 401', async () => {
  const { status } = await request(app())
    .put(`${apiRoot}/${clusters.id}`)
  expect(status).toBe(401)
})

test('PUT /clusters/:id 404 (master)', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ access_token: masterKey, name: 'test', img: 'test', backgroundColor: 'test', link: 'test' })
  expect(status).toBe(404)
})

test('DELETE /clusters/:id 204 (master)', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${clusters.id}`)
    .query({ access_token: masterKey })
  expect(status).toBe(204)
})

test('DELETE /clusters/:id 401', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${clusters.id}`)
  expect(status).toBe(401)
})

test('DELETE /clusters/:id 404 (master)', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
    .query({ access_token: masterKey })
  expect(status).toBe(404)
})
