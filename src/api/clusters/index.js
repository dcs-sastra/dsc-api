import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { master } from '../../services/passport'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Clusters, { schema } from './model'

const router = new Router()
const { name, img, backgroundColor, link } = schema.tree

/**
 * @api {post} /clusters Create clusters
 * @apiName CreateClusters
 * @apiGroup Clusters
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiParam name Clusters's name.
 * @apiParam img Clusters's img.
 * @apiParam backgroundColor Clusters's backgroundColor.
 * @apiParam link Clusters's link.
 * @apiSuccess {Object} clusters Clusters's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Clusters not found.
 * @apiError 401 master access only.
 */
router.post('/',
  master(),
  body({ name, img, backgroundColor, link }),
  create)

/**
 * @api {get} /clusters Retrieve clusters
 * @apiName RetrieveClusters
 * @apiGroup Clusters
 * @apiUse listParams
 * @apiSuccess {Object[]} clusters List of clusters.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /clusters/:id Retrieve clusters
 * @apiName RetrieveClusters
 * @apiGroup Clusters
 * @apiSuccess {Object} clusters Clusters's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Clusters not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /clusters/:id Update clusters
 * @apiName UpdateClusters
 * @apiGroup Clusters
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiParam name Clusters's name.
 * @apiParam img Clusters's img.
 * @apiParam backgroundColor Clusters's backgroundColor.
 * @apiParam link Clusters's link.
 * @apiSuccess {Object} clusters Clusters's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Clusters not found.
 * @apiError 401 master access only.
 */
router.put('/:id',
  master(),
  body({ name, img, backgroundColor, link }),
  update)

/**
 * @api {delete} /clusters/:id Delete clusters
 * @apiName DeleteClusters
 * @apiGroup Clusters
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Clusters not found.
 * @apiError 401 master access only.
 */
router.delete('/:id',
  master(),
  destroy)

export default router
