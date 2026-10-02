import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import { personas } from './api';
import type { Persona } from './api';

export interface Tender {
  id: string;
  code: string;
  title: string;
  dept: string;
  value: string;
  bidsReceived: number;
  status: 'published' | 'evaluation' | 'committee' | 'awarded';
  publishedDate: string;
  method: 'QCBS' | 'L1';
  qcbsRatio: string;
}

export const activeTenders: Tender[] = [
  {
    id: 'GEM/2026/B/7700853',
    code: 'Tender 7700853',
    title: '1.5T Whole Body Superconducting MRI Scanner System — 31 units',
    dept: 'Medical Health & Family Welfare Department, UP',
    value: '₹397,00,00,000',
    bidsReceived: 3,
    status: 'evaluation',
    publishedDate: '15 Jan 2026',
    method: 'QCBS',
    qcbsRatio: '70:30'
  },
  {
    id: 'MSC/RC/DRG/2026-27/015',
    code: 'Tender 015',
    title: 'Procurement of ICU Medical Devices & Patient Monitors',
    dept: 'Department of Health & Family Welfare',
    value: '₹28,50,00,000',
    bidsReceived: 14,
    status: 'published',
    publishedDate: '15 Aug 2026',
    method: 'QCBS',
    qcbsRatio: '70:30'
  },
  {
    id: 'MSC/RC/EQP/2026-27/016',
    code: 'Tender 016',
    title: 'Procurement of Diagnostic Imaging & CT Scanners',
    dept: 'King George’s Medical University (KGMU)',
    value: '₹62,00,00,000',
    bidsReceived: 8,
    status: 'committee',
    publishedDate: '20 Jul 2026',
    method: 'L1',
    qcbsRatio: 'L1 Rate'
  },
  {
    id: 'MSC/RC/INF/2026-27/017',
    code: 'Tender 017',
    title: 'Hospital Oxygen Plant & Pipeline Infrastructure',
    dept: 'Directorate of Medical Education (DGME UP)',
    value: '₹18,40,00,000',
    bidsReceived: 11,
    status: 'awarded',
    publishedDate: '10 Jun 2026',
    method: 'QCBS',
    qcbsRatio: '80:20'
  }
];

interface PersonaContextType {
  persona: Persona;
  setPersona: (p: Persona) => void;
  selectedTender: Tender;
  setSelectedTender: (t: Tender) => void;
}

const PersonaContext = createContext<PersonaContextType | undefined>(undefined);

export const PersonaProvider = ({ children }: { children: ReactNode }) => {
  const [persona, setPersona] = useState<Persona>(personas.officer);
  const [selectedTender, setSelectedTender] = useState<Tender>(activeTenders[0]);
  
  return (
    <PersonaContext.Provider value={{ persona, setPersona, selectedTender, setSelectedTender }}>
      {children}
    </PersonaContext.Provider>
  );
};

export const usePersona = () => {
  const ctx = useContext(PersonaContext);
  if (!ctx) throw new Error('usePersona must be used within PersonaProvider');
  return ctx;
};
