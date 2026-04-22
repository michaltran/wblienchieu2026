export interface MailboxMessage {
  id: string;
  name: string;
  phoneOrEmail: string;
  subject: string;
  content: string;
  createdAt: string;
  images: { name: string; dataUrl: string; size: number; type: string }[];
}

const STORAGE_KEY = "ttytlc_mailbox_messages_v1";
const MAX_STORED_MESSAGES = 30;

export function getMailboxMessages(): MailboxMessage[] {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error("Failed to load mailbox messages", error);
    return [];
  }
}

export function addMailboxMessage(msg: MailboxMessage): void {
  try {
    const current = getMailboxMessages();
    const updated = [msg, ...current].slice(0, MAX_STORED_MESSAGES);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (error) {
    console.error("Failed to save mailbox message", error);
  }
}

export function clearMailboxMessages(): void {
  localStorage.removeItem(STORAGE_KEY);
}
