// Mock service layer. Replace the body with a fetch() to a REST API later.
export type EnquiryPayload = { name: string; contact: string; type: string; message: string }
export async function submitEnquiry(_p: EnquiryPayload): Promise<{ ok: true }> {
  await new Promise((r) => setTimeout(r, 700))
  return { ok: true }
}
