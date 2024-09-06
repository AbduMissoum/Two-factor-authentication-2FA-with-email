/**
 * @swagger
 * /api/v1/auth/register:
 *   post:
 *     summary: Register a new user and send a verification code
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: The user's chosen username
 *               password:
 *                 type: string
 *                 description: The user's chosen password
 *               verificationPassword:
 *                 type: string
 *                 description: The user's password verification
 *               mail:
 *                 type: string
 *                 description: The user's email address
 *               fullName:
 *                 type: string
 *                 description: The user's full name
 *     responses:
 *       '200':
 *         description: Verification code sent successfully
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
 *                   example: "verification code sent"
 *       '400':
 *         description: Bad request due to missing fields or mismatched passwords
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
 *                   example: "internal server error"
 */

