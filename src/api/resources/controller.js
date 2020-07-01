import { success, notFound } from '../../services/response/'
import { Resources } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Resources.create(body)
    .then((events) => events.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Resources.find(query, select, cursor)
    .then((resources) => resources.map((resource) => resource.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Resources.findById(params.id)
    .then(notFound(res))
    .then((resource) => resource ? resource.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Resources.findById(params.id)
    .then(notFound(res))
    .then((resource) => resource ? Object.assign(resource, body).save() : null)
    .then((resource) => resource ? resource.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Resources.findById(params.id)
    .then(notFound(res))
    .then((resource) => resource ? resource.remove() : null)
    .then(success(res, 204))
    .catch(next)
