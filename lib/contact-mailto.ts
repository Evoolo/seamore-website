export type ContactDetails = {
  name: string;
  email: string;
  interest: string;
  travelStyle: string;
  timing: string;
  message: string;
};

export function buildContactMailto(recipient: string, details: ContactDetails) {
  const body = [
    "Hello Sea More,",
    "",
    details.message,
    "",
    "Journey details",
    `Name: ${details.name}`,
    `Email: ${details.email}`,
    `Wildlife or destination: ${details.interest || "Not specified"}`,
    `Travel style: ${details.travelStyle || "Not specified"}`,
    `Preferred timing: ${details.timing || "Not specified"}`,
  ].join("\r\n");
  const subject = `Sea More journey inquiry from ${details.name}`;
  return `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
