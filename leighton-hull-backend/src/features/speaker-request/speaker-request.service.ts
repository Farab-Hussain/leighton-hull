import { DbService } from "@/db/db.service";
import { Injectable } from "@nestjs/common";
import { SpeakerRequestInput } from "@/features/speaker-request/speaker-request.service.types";
import { FailedToRequestSpeakerException } from "@/features/speaker-request/exceptions";

@Injectable()
export class SpeakerRequestService {
  constructor(private readonly dbService: DbService) {}

  async requestSpeaker(input: SpeakerRequestInput) {
    try {
      // Try to save to database if available
      if (process.env.DATABASE_URL) {
        const res = await this.dbService.requestAsSpeaker.create({
          data: {
            ...input,
            date: new Date(input.date)
          }
        });
        return res;
      } else {
        // Return mock data when no database is configured
        const mockRequest = {
          id: Math.floor(Math.random() * 1000),
          ...input,
          date: new Date(input.date),
          createdAt: new Date(),
          message: input.message || null
        };
        return mockRequest;
      }
    } catch {
      throw new FailedToRequestSpeakerException();
    }
  }
}
