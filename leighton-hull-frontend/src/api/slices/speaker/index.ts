import ApiSlice from "@/api/slice";
import { FailedResponse, SuccessResponse } from "@/api/types";
import { SpeakerFormResponse } from "./response";
import { SpeakerInfo } from "./entity";

export default class SpeakerFormSlice extends ApiSlice {
  static baseURL = ApiSlice.baseURL;

  static async SendSpeakerForm(payload: SpeakerInfo) {
    const rsp = await this.request("/speaker-requests", "POST", payload);
    if (rsp.meta.error) return rsp as FailedResponse;

    const result: SuccessResponse<SpeakerFormResponse> = {
      ...(rsp as SuccessResponse),
      data: SpeakerFormResponse.fromJSON(rsp.data as Record<string, unknown>)
    };

    return result;
  }
}
