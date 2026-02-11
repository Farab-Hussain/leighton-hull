import { CONTACT_REQUEST_EXCEPTION_CODE_PREFIX, InternalException } from "@/utils/exceptions";

export class FailedToSubmitContactRequestException extends InternalException {
  constructor() {
    super("Failed to submit your contact request. Please try again.", CONTACT_REQUEST_EXCEPTION_CODE_PREFIX + 1);
  }
}
