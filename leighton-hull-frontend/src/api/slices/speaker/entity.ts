export class SpeakerInfo {
  constructor(
    public name: string,
    public email: string,
    public organization: string,
    public eventType: string,
    public date: string,
    public message?: string
  ) {}

  static fromJSON(json: Record<string, unknown>) {
    return new SpeakerInfo(
      typeof json.name === "string" ? json.name : "",
      typeof json.email === "string" ? json.email : "",
      typeof json.organization === "string" ? json.organization : "",
      typeof json.eventType === "string" ? json.eventType : "",
      typeof json.date === "string" ? json.date : "",
      typeof json.message === "string" ? json.message : undefined
    );
  }
}
