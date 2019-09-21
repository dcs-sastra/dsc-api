import { success, notFound } from '../../services/response/'
import { Clusters } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Clusters.create(body)
    .then((clusters) => clusters.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Clusters.find(query, select, cursor)
    .then((clusters) => clusters.map((clusters) => clusters.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Clusters.findById(params.id)
    .then(notFound(res))
    .then((clusters) => clusters ? clusters.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Clusters.findById(params.id)
    .then(notFound(res))
    .then((clusters) => clusters ? Object.assign(clusters, body).save() : null)
    .then((clusters) => clusters ? clusters.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Clusters.findById(params.id)
    .then(notFound(res))
    .then((clusters) => clusters ? clusters.remove() : null)
    .then(success(res, 204))
    .catch(next)
