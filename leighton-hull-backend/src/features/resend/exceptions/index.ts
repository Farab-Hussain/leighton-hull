import { InternalException, RESEND_EXCEPTION_CODE_PREFIX } from "@/utils/exceptions";

export class SendEmailFailedException extends InternalException {
  constructor() {
    super("Failed to send email", RESEND_EXCEPTION_CODE_PREFIX + 1);
  }
}
