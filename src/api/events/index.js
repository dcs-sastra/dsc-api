import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { master } from '../../services/passport'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Events, { schema } from './model'

const router = new Router()
const { name, date, description, main, venue, speakers, poster, register_link } = schema.tree

/**
 * @api {post} /events Create events
 * @apiName CreateEvents
 * @apiGroup Events
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiParam name Events's name.
 * @apiParam date Events's date.
 * @apiParam description Events's description.
 * @apiParam main Events's main.
 * @apiParam venue Events's venue.
 * @apiParam speakers Events's speakers.
 * @apiParam poster Events's poster.
 * @apiParam register_link Events's register_link.
 * @apiSuccess {Object} events Events's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Events not found.
 * @apiError 401 master access only.
 */
router.post('/',
  master(),
  body({ name, date, description, main, venue, speakers, poster, register_link }),
  create)

/**
 * @api {get} /events Retrieve events
 * @apiName RetrieveEvents
 * @apiGroup Events
 * @apiUse listParams
 * @apiSuccess {Object[]} events List of events.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /events/:id Retrieve events
 * @apiName RetrieveEvents
 * @apiGroup Events
 * @apiSuccess {Object} events Events's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Events not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /events/:id Update events
 * @apiName UpdateEvents
 * @apiGroup Events
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiParam name Events's name.
 * @apiParam date Events's date.
 * @apiParam description Events's description.
 * @apiParam main Events's main.
 * @apiParam venue Events's venue.
 * @apiParam speakers Events's speakers.
 * @apiParam poster Events's poster.
 * @apiParam register_link Events's register_link.
 * @apiSuccess {Object} events Events's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Events not found.
 * @apiError 401 master access only.
 */
router.put('/:id',
  master(),
  body({ name, date, description, main, venue, speakers, poster, register_link }),
  update)

/**
 * @api {delete} /events/:id Delete events
 * @apiName DeleteEvents
 * @apiGroup Events
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Events not found.
 * @apiError 401 master access only.
 */
router.delete('/:id',
  master(),
  destroy)

export default router
