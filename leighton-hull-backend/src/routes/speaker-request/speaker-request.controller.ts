import { SpeakerRequestService } from "@/features/speaker-request/speaker-request.service";
import { Body, Controller, InternalServerErrorException, Post } from "@nestjs/common";
import { SpeakerRequest_APIInputDTO } from "@/routes/speaker-request/dtos/speaker-request.input.dto";
import { UtilsService } from "@/utils/utils.service";
import { SpeakerRequest_APIOutputDTO } from "./dtos/speaker-request.output.dto";
import { FailedToRequestSpeakerException } from "@/features/speaker-request/exceptions";
import { GoogleSheets } from "@/features/google-sheets/google-sheets.service";
import { ResendService } from "@/features/resend/resend.service";
import { getSpeakerRequestEmailHtml } from "@/common/email-templates/speaker-request.template";
import { getAdminSpeakerRequestEmailHtml } from "@/common/email-templates/speaker-request-for-admin.template";

@Controller("speaker-requests")
export class SpeakerRequestController {
  constructor(
    private readonly speakerRequestService: SpeakerRequestService,
    private readonly utilsService: UtilsService,
    private readonly googleSheetService: GoogleSheets,
    private readonly resendService: ResendService
  ) {}

  @Post()
  async requestSpeaker(@Body() input: SpeakerRequest_APIInputDTO) {
    try {
      const adminEmail = "ummi342606@gmail.com";

      const request = await this.speakerRequestService.requestSpeaker(input);
      const res = await this.utilsService.parseAndValidate<SpeakerRequest_APIOutputDTO>(request, SpeakerRequest_APIOutputDTO);

      const html = getSpeakerRequestEmailHtml("Leighton Hull Support", request);
      const htmlForAdmin = getAdminSpeakerRequestEmailHtml("Leighton Hull Support", request);

      await this.googleSheetService.saveUserToGoogleSheet(
        [res.name, res.email, res.organization, res.date, res.eventType, res.message ? res.message : ""],
        "Sheet2"
      );

      await Promise.all([
        this.resendService.sendEmail({
          receiver: res.email,
          subject: "Your request has been received",
          content: html
        }),

        this.resendService.sendEmail({
          receiver: adminEmail,
          subject: "New Speaker Request",
          content: htmlForAdmin
        })
      ]);

      return res;
    } catch {
      const failedException = new FailedToRequestSpeakerException();
      throw new InternalServerErrorException({
        message: failedException.message,
        code: failedException.code
      });
    }
  }
}
