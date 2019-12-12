import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { master } from '../../services/passport'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export MembersbyCluster, { schema } from './model'

const router = new Router()
const { lead, app, flutter, web, ml, cloud, arvr, graphic, content, marketing, eventcoverage } = schema.tree

/**
 * @api {post} /MembersbyCluster Create membersby cluster
 * @apiName CreateMembersbyCluster
 * @apiGroup MembersbyCluster
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiParam lead Membersby cluster's lead.
 * @apiParam app Membersby cluster's app.
 * @apiParam flutter Membersby cluster's flutter.
 * @apiParam web Membersby cluster's web.
 * @apiParam ml Membersby cluster's ml.
 * @apiParam cloud Membersby cluster's cloud.
 * @apiParam graphic Membersby cluster's graphic.
 * @apiParam content Membersby cluster's content.
 * @apiParam marketing Membersby cluster's marketing.
 * @apiSuccess {Object} membersbyCluster Membersby cluster's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Membersby cluster not found.
 * @apiError 401 master access only.
 */
router.post('/',
  master(),
  body({ lead, app, flutter, web, ml, cloud, arvr, graphic, content, marketing, eventcoverage}),
  create)

/**
 * @api {get} /MembersbyCluster Retrieve membersby clusters
 * @apiName RetrieveMembersbyCluster
 * @apiGroup MembersbyCluster
 * @apiUse listParams
 * @apiSuccess {Object[]} MembersbyCluster List of membersby clusters.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /MembersbyCluster/:id Retrieve membersby cluster
 * @apiName RetrieveMembersbyCluster
 * @apiGroup MembersbyCluster
 * @apiSuccess {Object} membersbyCluster Membersby cluster's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Membersby cluster not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /MembersbyCluster/:id Update membersby cluster
 * @apiName UpdateMembersbyCluster
 * @apiGroup MembersbyCluster
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiParam lead Membersby cluster's lead.
 * @apiParam app Membersby cluster's app.
 * @apiParam flutter Membersby cluster's flutter.
 * @apiParam web Membersby cluster's web.
 * @apiParam ml Membersby cluster's ml.
 * @apiParam cloud Membersby cluster's cloud.
 * @apiParam nonTech Membersby cluster's nonTech.
 * @apiSuccess {Object} membersbyCluster Membersby cluster's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Membersby cluster not found.
 * @apiError 401 master access only.
 */
router.put('/:id',
  master(),
  body({ lead, app, flutter, web, ml, cloud, arvr, graphic, content, marketing, eventcoverage }),
  update)

/**
 * @api {delete} /MembersbyCluster/:id Delete membersby cluster
 * @apiName DeleteMembersbyCluster
 * @apiGroup MembersbyCluster
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Membersby cluster not found.
 * @apiError 401 master access only.
 */
router.delete('/:id',
  master(),
  destroy)

export default router
