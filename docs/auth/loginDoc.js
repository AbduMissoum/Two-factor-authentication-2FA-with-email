
/**
 * @swagger
 * /api/v1/auth/login:
 *   post:
 *     summary: Authenticate user and log them into their profile
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               mail:
 *                 type: string
 *                 description: The user's email address
 *               password:
 *                 type: string
 *                 description: The user's password
 *     responses:
 *       '200':
 *         description: User authenticated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "User is authenticated"
 *       '401':
 *         description: Bad request due to missing email or password
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: boolean
 *                   example: true
 *                 errorMessage:
 *                   type: string
 *                   example: "Bad request"
 *       '404':
 *         description: User not found or needs email verification
 *         content:
 *           application/json:
 *             schema:
 *               oneOf:
 *                 - type: object
 *                   properties:
 *                     error:
 *                       type: boolean
 *                       example: true
 *                     errorMessage:
 *                       type: string
 *                       example: "User Not found"
 *                 - type: object
 *                   properties:
 *                     error:
 *                       type: boolean
 *                       example: false
 *                     message:
 *                       type: string
 *                       example: "Verification code is sent via email"
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: boolean
 *                   example: true
 *                 errorMessage:
 *                   type: string
 *                   example: "Internal server error"
 */

