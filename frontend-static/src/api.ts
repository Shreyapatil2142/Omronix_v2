// Static mode: all data is hardcoded here — no backend calls.

export interface Tender {
  id: string;
  title: string;
  status: 'Draft' | 'Pending Approval' | 'Approved' | 'Published' | 'Tech Eval' | 'Awarded';
  value: number;
  publishedDate?: string;
  closingDate?: string;
}

export interface Persona {
  id: 'officer' | 'bidder';
  name: string;
  role: string;
}

export const personas: Record<string, Persona> = {
  officer: { id: 'officer', name: 'R. K. Verma', role: 'Tender Officer & Evaluator' },
  bidder: { id: 'bidder', name: 'Rajesh Kumar', role: 'Bidder (Wipro GE Healthcare Authorized Signatory)' }
};

const mockTenders: Tender[] = [
  {
    id: 'GEM/2026/B/7700853',
    title: '1.5T Whole Body Superconducting MRI Scanner System — 31 units',
    status: 'Tech Eval',
    value: 397000000,
    publishedDate: '2026-08-15',
    closingDate: '2026-09-15'
  },
  {
    id: 'MSC/RC/DRG/2026-27/015',
    title: 'Procurement of ICU Medical Devices & Patient Monitors',
    status: 'Published',
    value: 285000000,
    publishedDate: '2026-09-20',
    closingDate: '2026-10-20'
  },
  {
    id: 'MSC/RC/DRG/2026-27/014',
    title: 'Supply of Essential Drugs & Formulations for UPMSCL',
    status: 'Tech Eval',
    value: 452000000,
    publishedDate: '2026-09-01',
    closingDate: '2026-09-15'
  },
  {
    id: 'MSC/RC/EQP/2026-27/016',
    title: 'Procurement of Diagnostic Imaging & CT Scanners',
    status: 'Draft',
    value: 125000000
  },
  {
    id: 'MSC/RC/MED/2026-27/017',
    title: 'Annual Rate Contract for Dialysis Consumables',
    status: 'Pending Approval',
    value: 180000000
  },
  {
    id: 'MSC/RC/AMB/2026-27/018',
    title: 'Fleet Supply of Fully Equipped Advanced Life Support Ambulances',
    status: 'Awarded',
    value: 320000000,
    publishedDate: '2026-07-01',
    closingDate: '2026-08-01'
  }
];

// Static mode: return data directly — no fetch()
export const fetchTenders = async (): Promise<Tender[]> => {
  return mockTenders;
};
