import { success, notFound } from '../../services/response/'
import { Events } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Events.create(body)
    .then((events) => events.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Events.find(query, select, cursor)
    .then((events) => events.map((events) => events.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Events.findById(params.id)
    .then(notFound(res))
    .then((events) => events ? events.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Events.findById(params.id)
    .then(notFound(res))
    .then((events) => events ? Object.assign(events, body).save() : null)
    .then((events) => events ? events.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Events.findById(params.id)
    .then(notFound(res))
    .then((events) => events ? events.remove() : null)
    .then(success(res, 204))
    .catch(next)
