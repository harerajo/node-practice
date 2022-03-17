/**
 * @swagger
 * /api/queries:
 *   post:
 *     tags:
 *       - queries
 *     name: create a User query
 *     summary: a user send his/her question to the admin
 *     produces:
 *       - application/json
 *     consumes:
 *       - application/json
 *     parameters:
 *        - name: body
 *          in: body
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *              email:
 *                type: string
 *              query:
 *                type: string
 *          required:
 *            - name
 *            - email
 *            - query
 *     responses:
 *       '201':
 *             description: query sent successfully.
 *       '400':
 *             description:  can't continue this operation, check the id entered.
 * */

/**
 * @swagger
 * /api/queries/{id}:
 *   get:
 *     tags:
 *       - queries
 *     name: fetch a given question
 *     summary: fetch a specific user query
 *     produces:
 *       - application/json
 *     consumes:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *       - name: token
 *         in: header
 *     responses:
 *       '201':
 *             description: query successfully.
 *       '400':
 *             description: can't continue this operation, check the id entered.
 * */

/**
 * @swagger
 * /api/queries:
 *   get:
 *     tags:
 *       - queries
 *     name: list queries
 *     summary: views a list of all querries
 *     produces:
 *       - application/json
 *     consumes:
 *       - application/json
 *     parameters:
 *       - name: token
 *         in: header
 *     responses:
 *       '201':
 *             description: queries fetched successfully.
 *       '400':
 *             description:  can't continue this operation, check the token entered.
 * */
