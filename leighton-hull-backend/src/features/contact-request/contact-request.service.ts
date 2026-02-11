import { Injectable } from "@nestjs/common";
import { ContactRequestInput } from "@/features/contact-request/contact-request.service.types";
import { DbService } from "@/db/db.service";
import { FailedToSubmitContactRequestException } from "@/features/contact-request/exceptions";

@Injectable()
export class ContactRequestService {
  constructor(private readonly dbService: DbService) {}

  async createContactRequest(input: ContactRequestInput) {
    try {
      // Try to save to database if available
      if (process.env.DATABASE_URL) {
        const request = await this.dbService.contactRequest.create({
          data: input
        });
        return request;
      } else {
        // Return mock data when no database is configured
        const mockRequest = {
          id: Math.floor(Math.random() * 1000),
          ...input,
          createdAt: new Date()
        };
        return mockRequest;
      }
    } catch {
      throw new FailedToSubmitContactRequestException();
    }
  }
}
