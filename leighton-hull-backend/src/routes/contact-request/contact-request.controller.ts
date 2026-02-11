import { ContactRequestService } from "@/features/contact-request/contact-request.service";
import { Body, Controller, InternalServerErrorException, Post } from "@nestjs/common";
import { ContactRequest_APIInputDto } from "@/routes/contact-request/dtos/create-contact-request.dto";
import { UtilsService } from "@/utils/utils.service";
import { ContactRequest_APIOutputDto } from "@/routes/contact-request/dtos/contact-request.output.dto";
import { FailedToSubmitContactRequestException } from "@/features/contact-request/exceptions";
import { GoogleSheets } from "@/features/google-sheets/google-sheets.service";
import { ResendService } from "@/features/resend/resend.service";
import { getContactSubmissionEmailHtml } from "@/common/email-templates/contact-request.template";
import { getAdminNotificationEmailHtml } from "@/common/email-templates/contact-request-for-admin.template";

@Controller("/contact-requests")
export class ContactRequestController {
  constructor(
    private readonly contactRequestService: ContactRequestService,
    private readonly utilsService: UtilsService,
    private readonly googleSheetService: GoogleSheets,
    private readonly resendService: ResendService
  ) {}

  @Post()
  async createContactRequest(@Body() payload: ContactRequest_APIInputDto) {
    try {
      const adminEmail = "info@leightonhull.com";

      const request = await this.contactRequestService.createContactRequest(payload);
      const res = await this.utilsService.parseAndValidate<ContactRequest_APIOutputDto>(request, ContactRequest_APIOutputDto);

      await this.googleSheetService.saveUserToGoogleSheet([res.name, res.email, res.typeOfInquiry, res.message], "Sheet1");

      const html = getContactSubmissionEmailHtml("Leighton Hull Support", request);
      const htmlForAdmin = getAdminNotificationEmailHtml("Leighton Hull Support", request);

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
    } catch (ex: unknown) {
      console.log(ex);

      const failedException = new FailedToSubmitContactRequestException();
      throw new InternalServerErrorException({
        message: failedException.message,
        code: failedException.code
      });
    }
  }
}
