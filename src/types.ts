export const WHATSAPP_GROUP_URL =
  'https://chat.whatsapp.com/IKmfvq14rNy7woxeibYQGa?s=sw&p=i&mlu=4&ilr=4&iam=2';

export interface WinnerTestimonial {
  id: string;
  name: string;
  city: string;
  prize: string;
  number: string;
  drawDate: string;
  concursoFederal: string;
  quote: string;
  amount: string;
}

export interface RaffleEdition {
  id: string;
  title: string;
  status: 'aberta' | 'ultimas_cotas' | 'finalizada';
  pricePerNumber: string;
  totalNumbers: number;
  availableNumbers: number;
  prizeDescription: string;
  extraPrize?: string;
  drawDateEstimate: string;
  highlight?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}
