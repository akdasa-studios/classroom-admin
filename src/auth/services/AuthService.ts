import type { AuthRequest, AuthResponse, RefreshTokenRequest, RefreshTokenResponse } from '@classroom/protocol/AuthService'
import { Service } from '@classroom/shared/services'

/**
 * Service responsible for handling authentication related operations.
 */
export class AuthService extends Service {
  /**
   * Signs in the user with the provided authentication request.
   * @param request The authentication request with email and code.
   * @returns A promise that resolves to the authentication response.
   */
  async signIn(request: AuthRequest): Promise<AuthResponse> {
    return await this.post("http://localhost:3000/auth/email", request)
  }

  /**
   * Refreshes the user's token with the provided refresh token.
   * @param request The refresh token request with the refresh token.
   * @returns A promise that resolves to the refresh token response.
   */
  async refreshToken(
    request: RefreshTokenRequest
  ): Promise<RefreshTokenResponse> {
    return await this.post("http://localhost:3000/auth/refresh", request)
  }
}
