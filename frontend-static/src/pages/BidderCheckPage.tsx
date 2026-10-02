import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

interface Condition {
  id: string;
  short: string;
  name: string;
}

const CONDITIONS: Condition[] = [
  { id: 'C1', short: 'Manufacturer/Dealer', name: 'Manufacturer or authorised dealer status' },
  { id: 'C2', short: 'OEM Authorisation', name: 'OEM Authorization Certificate' },
  { id: 'C3', short: 'Turnover (₹119 Cr)', name: 'Average turnover of ₹11,900 Lakh (₹119 Crores)' },
  { id: 'C4', short: 'EMD (₹7.94 Cr)', name: 'EMD ₹7.94 Crore or valid exemption' },
  { id: 'C5', short: 'Specification', name: 'Compliance of BOQ specification' },
  { id: 'C6', short: 'Technical Datasheet', name: 'Technical data sheet & brochure (1 MW Amplifier)' },
  { id: 'C7', short: 'Past Performance', name: '10% of bid quantity (3 units) to Govt/PSU' },
  { id: 'C8', short: 'Quality Certificates', name: 'CE/USFDA/BIS, CDSCO licence, ISO 13485' }
];

interface BidderRow {
  id: string;
  name: string;
  codes: string[]; // 'P' | 'C' | 'F'
}

const BIDDERS: BidderRow[] = [
  { id: 'B01', name: 'Philips India Limited', codes: ['P', 'P', 'C', 'P', 'P', 'P', 'C', 'C'] },
  { id: 'B02', name: 'Siemens Healthcare Private Limited', codes: ['P', 'P', 'P', 'C', 'P', 'P', 'C', 'P'] },
  { id: 'B03', name: 'Wipro GE Healthcare Private Limited', codes: ['P', 'C', 'P', 'C', 'P', 'P', 'C', 'C'] }
];

const STATUS_MAP: Record<string, { label: string; class: string }> = {
  P: { label: 'Pass', class: 'st s-pass' },
  C: { label: 'Needs check', class: 'st s-check' },
  F: { label: 'Fails', class: 'st s-fail' }
};

const SPECIFIC_TEXTS: Record<string, [string, string, string]> = {
  'B01-C3': [
    'Turnover in FY 2021-22 (₹1,412 Cr), FY 2022-23 (₹1,580 Cr), FY 2023-24 (₹1,710 Cr) averages ₹1,567.3 Cr against ₹119 Cr requirement. However, your evaluation sheets conflict on whether FY 2024-25 is required.',
    'Turnover Certificate, page 3',
    'System draft · awaiting officer confirmation on FY window'
  ],
  'B01-C7': [
    'Submitted supply orders for 4 units to Govt Hospitals (AIIMS Delhi, PGIMER Chandigarh). Requires officer confirmation whether AIIMS counts as central Govt PSU.',
    'PO Copies and User Certificate, page 12',
    'Awaiting officer decision'
  ],
  'B02-C4': [
    'Submitted valid EMD Exemption Certificate under GeM GTC (Class 1 Local Supplier / OEM). Officer confirmation needed for exemption applicability.',
    'EMD Exemption Certificate, page 1',
    'Awaiting officer decision'
  ],
  'B02-C7': [
    'Installed 3 units at Government Medical Colleges (KGMU Lucknow, SGPGIMS). 10% of 31 units equals 3.1 units. Decide whether 3 units meet the threshold.',
    'Performance Installation base, page 5',
    'Awaiting officer decision'
  ],
  'B03-C2': [
    'OEM Authorisation letter attached. Signatory designation is Regional Sales Manager rather than Company Secretary. Requires officer confirmation.',
    'Past Performance and MAF, page 4',
    'Awaiting officer decision'
  ],
  'B03-C4': [
    'Submitted EMD Exemption claim under MSE category. Proof of manufacturing unit attached. Requires officer verification.',
    'Turnover Document, page 2',
    'Awaiting officer decision'
  ]
};

const DEFAULT_TEXTS: Record<string, [string, string]> = {
  P: ['Every part of this condition is met by the papers in the bid, so the rule settled it. You can still reopen it.', 'Settled by rule on 2 Sep'],
  F: ['The papers do not meet this condition, and the rule is not a matter of judgement.', 'Settled by rule on 2 Sep']
};

export const BidderCheckPage = () => {
  const [searchParams] = useSearchParams();
  const initialSel = searchParams.get('sel') || 'B02-C6';

  const [selectedCell, setSelectedCell] = useState<string>(initialSel);
  const [filter, setFilter] = useState<'ALL' | 'P' | 'C' | 'F'>('ALL');

  // Counts
  let passCount = 0;
  let checkCount = 0;
  let failCount = 0;

  BIDDERS.forEach(b => {
    b.codes.forEach(c => {
      if (c === 'P') passCount++;
      else if (c === 'C') checkCount++;
      else if (c === 'F') failCount++;
    });
  });

  const filteredBidders = BIDDERS.filter(b => {
    if (filter === 'ALL') return true;
    return b.codes.includes(filter);
  });

  // Selected cell breakdown
  const [bidderCode, condCode] = selectedCell.split('-');
  const selectedBidder = BIDDERS.find(b => b.id === bidderCode) || BIDDERS[1];
  const condIndex = CONDITIONS.findIndex(c => c.id === condCode);
  const selectedCondition = CONDITIONS[condIndex >= 0 ? condIndex : 5];
  const statusCode = selectedBidder.codes[condIndex >= 0 ? condIndex : 5];
  const statusInfo = STATUS_MAP[statusCode];

  const detailText = SPECIFIC_TEXTS[selectedCell] || [
    DEFAULT_TEXTS[statusCode]?.[0] || 'Condition details verified.',
    `${selectedCondition.name} papers in the bid`,
    DEFAULT_TEXTS[statusCode]?.[1] || 'Settled by rule'
  ];

  return (
    <div className="flex-1 min-h-0 flex flex-col gap-5">
      {/* Title */}
      <div className="flex flex-col gap-2 shrink-0">
        <h1 className="h1">Every bidder against every condition</h1>
        <p className="lead">
          Green is settled by a rule. Amber means the system was unsure and needs you. Red means a condition is clearly not met. Click any box to see why.
        </p>
      </div>

      {/* Summary Filter Pills */}
      <div className="flex items-center gap-2.5 shrink-0">
        <button 
          onClick={() => setFilter('ALL')} 
          className={`st cursor-pointer transition-all ${filter === 'ALL' ? 'bg-[#14262B] text-white font-bold' : 'bg-gray-100 text-gray-700'}`}
        >
          All Bidders · 6
        </button>
        <button 
          onClick={() => setFilter('P')} 
          className={`st s-pass cursor-pointer transition-all ${filter === 'P' ? 'ring-2 ring-emerald-600 font-bold' : ''}`}
        >
          Pass · {passCount}
        </button>
        <button 
          onClick={() => setFilter('C')} 
          className={`st s-check cursor-pointer transition-all ${filter === 'C' ? 'ring-2 ring-amber-600 font-bold' : ''}`}
        >
          Needs check · {checkCount}
        </button>
        <button 
          onClick={() => setFilter('F')} 
          className={`st s-fail cursor-pointer transition-all ${filter === 'F' ? 'ring-2 ring-red-600 font-bold' : ''}`}
        >
          Fails · {failCount}
        </button>
        <span className="ml-auto text-[14px] text-[#6B7079]">Showing {filteredBidders.length} of 6 bidders</span>
      </div>

      {/* Main Grid & Right Summary Split */}
      <div className="flex-1 min-h-0 grid grid-cols-[1fr_360px] gap-5">
        
        {/* Left Matrix Grid */}
        <section className="card overflow-hidden flex flex-col">
          {/* Header Row */}
          <div className="grow-grid bg-[#FAF9F6]">
            <div className="p-3.5 px-4.5 flex items-end font-semibold text-[14px] text-[#4A4F57]">
              Bidder
            </div>
            {CONDITIONS.map(c => (
              <div
                key={c.id}
                className="p-3 px-2 border-l border-[#F1EFE9] flex items-end justify-center text-center font-semibold text-[13.5px] text-[#4A4F57] leading-snug"
              >
                {c.short}
              </div>
            ))}
          </div>

          {/* Bidder Rows */}
          <div className="overflow-y-auto flex-1">
            {filteredBidders.map(b => {
              let open = 0;
              let fail = false;
              b.codes.forEach(c => {
                if (c === 'C') open++;
                if (c === 'F') fail = true;
              });
              const summaryText = fail ? 'Does not qualify' : open > 0 ? `${open} to check` : 'Qualifies';

              return (
                <div key={b.id} className="grow-grid">
                  <div className="p-2.5 px-4.5 flex flex-col justify-center gap-1">
                    <span className="text-[15.5px] font-medium text-[#1A1D21]">{b.name}</span>
                    <span className="text-[13.5px] text-[#6B7079]">{summaryText}</span>
                  </div>

                  {b.codes.map((code, j) => {
                    const key = `${b.id}-${CONDITIONS[j].id}`;
                    const isSelected = key === selectedCell;
                    const st = STATUS_MAP[code];

                    return (
                      <button
                        key={CONDITIONS[j].id}
                        onClick={() => setSelectedCell(key)}
                        className={`cell-box ${isSelected ? 'on' : ''}`}
                      >
                        <span className={st.class}>{st.label}</span>
                      </button>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </section>

        {/* Right Summary Sidecard */}
        <section className="card flex flex-col overflow-hidden">
          <div className="p-4 px-5 border-b border-[#EFEDE6] flex flex-col gap-1.5 shrink-0">
            <h2 className="ct">{selectedBidder.name}</h2>
            <span className="text-[14px] text-[#6B7079]">{selectedCondition.name}</span>
          </div>

          <div className="flex-1 overflow-y-auto p-4.5 px-5 flex flex-col gap-4">
            <div>
              <span className={statusInfo.class}>{statusInfo.label}</span>
            </div>

            <div className="text-[15.5px] leading-relaxed text-[#2F343B]">
              {detailText[0]}
            </div>

            <div className="flex flex-col gap-1.5">
              <span className="lbl">Where it comes from</span>
              <span className="text-[14.5px] text-[#2F343B]">{detailText[1]}</span>
            </div>

            <div className="flex flex-col gap-1.5">
              <span className="lbl">Who settled it</span>
              <span className="text-[14.5px] text-[#2F343B]">{detailText[2]}</span>
            </div>
          </div>

          <div className="p-4 px-5 border-t border-[#EFEDE6] shrink-0">
            <Link to="/evidence" className="btn pri w-full text-center">
              Open the evidence
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
};
