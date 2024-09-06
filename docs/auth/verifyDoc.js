/**
 * @swagger
 * /api/v1/auth/verify:
 *   post:
 *     summary: Verify user email with a verification code
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               verificationString:
 *                 type: string
 *                 description: The verification code sent to the user's email
 *     responses:
 *       '201':
 *         description: User verified and created successfully
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
 *                   example: "User created successfully"
 *       '400':
 *         description: Bad request due to an incorrect or missing verification code
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
 *       '401':
 *         description: Unauthorized access due to missing or invalid cookies
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
 *                   example: "Not authorized"
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
