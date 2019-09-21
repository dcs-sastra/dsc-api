import request from 'supertest'
import { masterKey, apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Events } from '.'

const app = () => express(apiRoot, routes)

let events

beforeEach(async () => {
  events = await Events.create({})
})

test('POST /events 201 (master)', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ access_token: masterKey, name: 'test', date: 'test', description: 'test', main: 'test', venue: 'test', speakers: 'test', poster: 'test', register_link: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.name).toEqual('test')
  expect(body.date).toEqual('test')
  expect(body.description).toEqual('test')
  expect(body.main).toEqual('test')
  expect(body.venue).toEqual('test')
  expect(body.speakers).toEqual('test')
  expect(body.poster).toEqual('test')
  expect(body.register_link).toEqual('test')
})

test('POST /events 401', async () => {
  const { status } = await request(app())
    .post(`${apiRoot}`)
  expect(status).toBe(401)
})

test('GET /events 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /events/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${events.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(events.id)
})

test('GET /events/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /events/:id 200 (master)', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${events.id}`)
    .send({ access_token: masterKey, name: 'test', date: 'test', description: 'test', main: 'test', venue: 'test', speakers: 'test', poster: 'test', register_link: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(events.id)
  expect(body.name).toEqual('test')
  expect(body.date).toEqual('test')
  expect(body.description).toEqual('test')
  expect(body.main).toEqual('test')
  expect(body.venue).toEqual('test')
  expect(body.speakers).toEqual('test')
  expect(body.poster).toEqual('test')
  expect(body.register_link).toEqual('test')
})

test('PUT /events/:id 401', async () => {
  const { status } = await request(app())
    .put(`${apiRoot}/${events.id}`)
  expect(status).toBe(401)
})

test('PUT /events/:id 404 (master)', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ access_token: masterKey, name: 'test', date: 'test', description: 'test', main: 'test', venue: 'test', speakers: 'test', poster: 'test', register_link: 'test' })
  expect(status).toBe(404)
})

test('DELETE /events/:id 204 (master)', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${events.id}`)
    .query({ access_token: masterKey })
  expect(status).toBe(204)
})

test('DELETE /events/:id 401', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${events.id}`)
  expect(status).toBe(401)
})

test('DELETE /events/:id 404 (master)', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
    .query({ access_token: masterKey })
  expect(status).toBe(404)
})
