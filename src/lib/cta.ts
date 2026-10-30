import { contact, links } from '../data/contact';
import type { Dict } from '../i18n/vi';

export type Channel = {
  key: 'zalo' | 'whatsapp' | 'messenger' | 'call' | 'email';
  label: string;
  href: string;
  icon: 'zalo' | 'whatsapp' | 'messenger' | 'phone' | 'mail';
  external: boolean;
};

// Kênh liên hệ, kênh chính của từng ngôn ngữ đứng đầu (VI: Zalo, còn lại: WhatsApp)
export const channels = (t: Dict): Channel[] => {
  const zalo: Channel = { key: 'zalo', label: t.contact.zalo, href: links.zalo, icon: 'zalo', external: true };
  const whatsapp: Channel = {
    key: 'whatsapp',
    label: t.contact.whatsapp,
    href: links.whatsapp(t.contact.whatsappText),
    icon: 'whatsapp',
    external: true,
  };
  const messaging = t.primaryChannel === 'zalo' ? [zalo, whatsapp] : [whatsapp, zalo];
  return [
    ...messaging,
    { key: 'messenger', label: t.contact.messenger, href: contact.messenger, icon: 'messenger', external: true },
    { key: 'call', label: t.contact.call, href: links.tel, icon: 'phone', external: false },
    { key: 'email', label: t.contact.email, href: links.email(t.contact.emailSubject), icon: 'mail', external: false },
  ];
};
