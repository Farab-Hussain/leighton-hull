export class ContactInfo {
  constructor(
    public name: string,
    public email: string,
    public typeOfInquiry: string,
    public message: string
  ) {}

  static fromJSON(json: Record<string, unknown>) {
    return new ContactInfo(
      typeof json.name === "string" ? json.name : "",
      typeof json.email === "string" ? json.email : "",
      typeof json.typeOfInquiry === "string" ? json.typeOfInquiry : "",
      typeof json.message === "string" ? json.message : ""
    );
  }
}
