/**
 * @swagger
 * /api/auth/signup:
 *   post:
 *     tags:
 *       - Authentication
 *     name: Signup
 *     summary: Signup a user in a system
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
 *             role:
 *               type: string
 *             email:
 *               type: string
 *             password:
 *               type: string
 *               format: password
 *         required:
 *           - name
 *           - role
 *           - email
 *           - password
 *     responses:
 *       '201':
 *             description: User created.
 *       '400':
 *             description: Bad request.
 *       '409':
 *             description: User already exist.
 * */

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     tags:
 *       - Authentication
 *     name: Login
 *     summary: Logs in a user in a system
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
 *             email:
 *               type: string
 *             password:
 *               type: string
 *               format: password
 *         required:
 *           - email
 *           - password
 *     responses:
 *       '201':
 *             description: User created.
 *       '400':
 *             description: Bad request.
 *       '409':
 *             description: User already exist.
 * */

/**
 * @swagger
 * /api/auth/all-users:
 *   get:
 *     tags:
 *       - Authentication
 *     name: list users
 *     summary: views a list of all users
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
 *             description: User created.
 *       '400':
 *             description:  can't continue this operation, check the token entered.
 * */


/**
 * @swagger
 * /api/auth/profile:
 *   put:
 *     tags:
 *       - Authentication
 *     name: update profile
 *     summary: should fetch and update profile of a specific user
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
 *             name:
 *               type: string
 *             experience:
 *               type: string
 *             skills:
 *               type: string
 *         
 *     responses:
 *       '201':
 *             description: User profile updated successfully.
 *       '400':
 *             description: can't continue this operation, check the token entered.
 *       '404':
 *             description: user not found csfafdfaf
 * */
