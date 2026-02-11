import ApiSlice from "@/api/slice";
import ContactFormSlice from "./slices/contact";
import SpeakerFormSlice from "./slices/speaker";

class Api extends ApiSlice {
  static contact = ContactFormSlice;
  static speaker = SpeakerFormSlice;
}

export default Api;
