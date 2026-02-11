import { SPEAKER_REQUEST_EXCEPTION_CODE_PREFIX, InternalException } from "@/utils/exceptions";

export class FailedToRequestSpeakerException extends InternalException {
  constructor() {
    super("Failed to send your speaker request. Please try again.", SPEAKER_REQUEST_EXCEPTION_CODE_PREFIX + 1);
  }
}
