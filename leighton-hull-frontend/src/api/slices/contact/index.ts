import ApiSlice from "@/api/slice";
import { FailedResponse, SuccessResponse } from "@/api/types";
import { ContactInfoResponse } from "./response";
import { ContactInfo } from "./entity";

export default class ContactFormSlice extends ApiSlice {
  static baseURL = ApiSlice.baseURL;

  static async SendContactForm(payload: ContactInfo) {
    const rsp = await this.request("/contact-requests", "POST", payload);
    if (rsp.meta.error) return rsp as FailedResponse;

    const result: SuccessResponse<ContactInfoResponse> = {
      ...(rsp as SuccessResponse),
      data: ContactInfoResponse.fromJSON(rsp.data as Record<string, unknown>)
    };

    return result;
  }
}
