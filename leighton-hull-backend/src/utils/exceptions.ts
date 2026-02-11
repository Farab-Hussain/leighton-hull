export const AUTH_EXCEPTION_CODE_PREFIX = 1000;
export const CONTACT_REQUEST_EXCEPTION_CODE_PREFIX = 2000;
export const RESEND_EXCEPTION_CODE_PREFIX = 3000;
export const SPEAKER_REQUEST_EXCEPTION_CODE_PREFIX = 4000;

export class InternalException extends Error {
  constructor(
    public message: string,
    public code: number
  ) {
    super(message);
  }
}
