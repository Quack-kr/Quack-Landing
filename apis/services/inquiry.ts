import { fetcher } from "../fetcher";
import type { InquiryRequest, InquirySuccessResponse } from "./inquiry.types";

export async function postInquiry(
  body: InquiryRequest
): Promise<InquirySuccessResponse> {
  return await fetcher<InquirySuccessResponse>("/v1/landing/contact", {
    method: "POST",
    body: JSON.stringify(body),
  });
}
