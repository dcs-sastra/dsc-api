import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { master } from '../../services/passport'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Resources, { schema } from './model'

const router = new Router()
const { name, description, resource_url, image_url} = schema.tree

/**
 * @api {post} /resources Create resource
 * @apiName CreateResource
 * @apiGroup Resources
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiParam name Resource's name.
 * @apiParam description Resources's description.
 * @apiParam resource_url Url to the resource.
 * @apiParam image_url Resource's image_url.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Resources not found.
 * @apiError 401 master access only.
 */
router.post('/',
  master(),
  body({ name, description, resource_url, image_url }),
  create)

/**
 * @api {get} /resources Retrieve resources
 * @apiName RetrieveResources
 * @apiGroup Resources
 * @apiUse listParams
 * @apiSuccess {Object[]} resources List of resources.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /resources/:id Retrieve resources
 * @apiName RetrieveResources
 * @apiGroup Resources
 * @apiSuccess {Object} resources Resources' data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Events not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /resources/:id Update resource
 * @apiName UpdateResource
 * @apiGroup Resources
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiParam name Resource's name.
 * @apiParam description Resources's description.
 * @apiParam resource_url Url to the resource.
 * @apiParam image_url Resource's image_url.
 * @apiSuccess {Object} resources Resources' data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Resources not found.
 * @apiError 401 master access only.
 */
router.put('/:id',
  master(),
  body({ name, description, resource_url, image_url }),
  update)

/**
 * @api {delete} /resources/:id Delete resources
 * @apiName DeleteResources
 * @apiGroup Resources
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Resources not found.
 * @apiError 401 master access only.
 */
router.delete('/:id',
  master(),
  destroy)

export default router