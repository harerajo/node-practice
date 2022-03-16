/**
 * @swagger
 * /api/articles:
 *   get:
 *     tags:
 *       - Articles
 *     name: list articles
 *     summary: views a list of all articlesssss
 *     produces:
 *       - application/json
 *     consumes:
 *       - application/json
 *     parameters:
 *       - name: token
 *         in: header
 *         required:
 *           -token
 *     responses:
 *       '201':
 *             description: articles fetched successfully.
 *       '400':
 *             description:  can't continue this operation, check the token entered.
 * */

/**
 * @swagger
 * /api/articles/{id}:
 *   get:
 *     tags:
 *       - Articles
 *     name: views a
 *     summary: views details of specific article
 *     produces:
 *       - application/json
 *     consumes:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *     responses:
 *       '201':
 *             description: article fetched successfully.
 *       '400':
 *             description:  can't continue this operation, check the id entered.
 * */

/**
 * @swagger
 * /api/articles/{id}:
 *   put:
 *     tags:
 *       - Articles
 *     name: update an article
 *     summary: updates a specific article
 *     produces:
 *       - application/json
 *     consumes:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *       - name: token
 *         in: header
 *       - name: body
 *         in: body
 *         schema:
 *           type: object
 *           properties:
 *             title:
 *               type: string
 *             author:
 *               type: string
 *             content:
 *               type: string
 *     responses:
 *       '201':
 *             description: updated successfully.
 *       '400':
 *             description: server error.
 *       '401':
 *             description: unauthorized to perform this action.
 * */

/**
 * @swagger
 * /api/articles:
 *   post:
 *     tags:
 *       - Articles
 *     name: create an articles
 *     summary: creates a specific article with details
 *     produces:
 *       - application/json
 *     consumes:
 *       - application/json
 *     parameters:
 *       - name: token
 *         in: header
 *       - name: body
 *         in: body
 *         schema:
 *           type: object
 *           properties:
 *             title:
 *               type: string
 *             author:
 *               type: string
 *             content:
 *               type: string
 *     responses:
 *       '201':
 *             description: you have created an article successfully.
 *       '400':
 *             description:  can't continue this operation, check the token.
 * */




/**
 * @swagger
 * /api/articles/{id}/comment:
 *   put:
 *     tags:
 *       - Articles
 *     name: post a comment on a request
 *     summary: post your comment on 
 *     produces:
 *       - application/json
 *     consumes:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *       - name: body
 *         in: body
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *             comment:
 *               type: string
 *     responses:
 *       '200':
 *             description: Comment is successfully posted.
 *       '404':
 *             description: article not found.
 * */

/**
 * @swagger
 * /api/articles/{id}:
 *   delete:
 *     tags:
 *       - Articles
 *     name: delete article
 *     summary: delete an article
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
 *             description: article deleted successfully.
 *       '404':
 *             description: article not found .
 * */
