export interface SendEmailInput {
  subject: string;
  content: string;
  receiver: string | string[];
}
