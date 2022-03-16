/**
 * @swagger
 * /api/subscription/subscribe:
 *   post:
 *     tags:
 *       - Subscriber
 *     name: Subscribe
 *     summary: Subscribe to our newsletter
 *     produces:
 *       - application/json
 *     consumes:
 *       - application/json
 *     parameters:
 *       - name: body
 *         in: body
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *             email:
 *               type: string
 *         required:
 *           - name
 *           - email
 *     responses:
 *       '201':
 *             description: Subscription added successfully
 *       '409':
 *             description: You have already subscribed.
 * */

/**
 * @swagger
 * /api/subscription/unsubscribe:
 *   delete:
 *     tags:
 *       - Subscriber
 *     name: Unsubscribe
 *     summary: Unsubscribe to our newsletter
 *     produces:
 *       - application/json
 *     consumes:
 *       - application/json
 *     parameters:
 *       - name: token
 *         in: header
 *     responses:
 *       '200':
 *             description: subscriber removed successfully
 *       '400':
 *             description: Token must be provided and valid
 *       '404':
 *             description: subsciber was not found
 * */



/**
 * @swagger
 * /api/subscription/subscribers:
 *   get:
 *     tags:
 *       - Subscriber
 *     name: subscribers
 *     summary: list of subscribers
 *     produces:
 *       - application/json
 *     consumes:
 *       - application/json
 *     parameters:
 *       - name: token
 *         in: header
 *     responses:
 *       '201':
 *             description: successfully fetched subscriber.
 *       '409':
 *             description: User already exist.
 *       '400':
 *             description : token must pe provided and valid
 * */
