/**
 * @swagger
 * /api/v1/resend-code:
 *   post:
 *     summary: Resend verification code to the user's email
 *     description: Resend a new verification code if the user is not yet verified. The request must include a valid JWT in cookies for authorization.
 *     tags:
 *       - Authentication
 *     security:
 *       - cookieAuth: []
 *     responses:
 *       200:
 *         description: Verification code resent successfully.
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
 *                   example: "Verification code is sent via email."
 *       401:
 *         description: Unauthorized or user already verified.
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
 *                   oneOf:
 *                     - example: "Not authorized"
 *                     - example: "user already verified"
 *                     - example: "user not found"
 *       500:
 *         description: Invalid cookie or internal server error.
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
 *                   example: "Invalid cookie"
 *
 * components:
 *   securitySchemes:
 *     cookieAuth:
 *       type: apiKey
 *       in: cookie
 *       name: verify
 */
