import { success, notFound } from '../../services/response/'
import { MembersbyCluster } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  MembersbyCluster.create(body)
    .then((membersbyCluster) => membersbyCluster.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  MembersbyCluster.find(query, select, cursor)
    .then((membersbyClusters) => membersbyClusters.map((membersbyCluster) => membersbyCluster.view(true)))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  MembersbyCluster.findById(params.id)
    .then(notFound(res))
    .then((membersbyCluster) => membersbyCluster ? membersbyCluster.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  MembersbyCluster.findById(params.id)
    .then(notFound(res))
    .then((membersbyCluster) => membersbyCluster ? Object.assign(membersbyCluster, body).save() : null)
    .then((membersbyCluster) => membersbyCluster ? membersbyCluster.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  MembersbyCluster.findById(params.id)
    .then(notFound(res))
    .then((membersbyCluster) => membersbyCluster ? membersbyCluster.remove() : null)
    .then(success(res, 204))
    .catch(next)
