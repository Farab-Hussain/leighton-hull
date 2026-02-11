export class SpeakerFormResponse {
  constructor(
    public id: number,
    public name: string,
    public email: string,
    public eventType: string,
    public organization: string,
    public date: string,
    public message?: string
  ) {}

  static fromJSON(json: Record<string, unknown>) {
    return new SpeakerFormResponse(
      typeof json.id === "number" ? json.id : 0,
      typeof json.name === "string" ? json.name : "",
      typeof json.email === "string" ? json.email : "",
      typeof json.eventType === "string" ? json.eventType : "",
      typeof json.organization === "string" ? json.organization : "",
      typeof json.date === "string" ? json.date : "",
      typeof json.message === "string" ? json.message : undefined
    );
  }
}
