import { useState } from 'react';
import { usePersona } from '../PersonaContext';

interface EvidenceFeature {
  id: string;
  tab: string;
  doc: 'po' | 'msc' | 'ca';
  docName: string;
  name: string;
  asks: string;
  sugg: string;
  suggCls: string;
  points: string[];
  sure: string;
}

const FEATURES: Record<string, EvidenceFeature> = {
  exp: {
    id: 'exp',
    tab: 'Past Performance (10% of 31 units)',
    doc: 'po',
    docName: 'PO Copies and User Certificate, page 12 of 388',
    name: 'Past performance supply to Government / PSU',
    asks: 'supply of 10% of bid quantity (3.1 units) of similar 1.5T MRI systems in the last 3 financial years',
    sugg: 'Condition met',
    suggCls: 'st s-pass',
    points: [
      'Philips India submitted 4 government supply orders: AIIMS New Delhi (1 unit, ₹12.4 Cr), PGIMER Chandigarh (1 unit, ₹11.8 Cr), and KGMU Lucknow (2 units, ₹24.2 Cr).',
      'All 4 units were installed and commissioned within the last 3 financial years.',
      'User satisfaction certificates attached on page 14 & 18 confirmed operational uptime > 98%.'
    ],
    sure: 'Fairly sure (94%). 10% of 31 units equals 3.1 units. The officer needs to formally decide whether 3 installed units or 4 units are required to pass.'
  },
  market: {
    id: 'market',
    tab: 'Gradient Amplifier Power (≥ 1 MW)',
    doc: 'msc',
    docName: 'Technical Datasheet, page 4 of 12',
    name: 'Gradient Amplifier Wattage Verification (Volts × Amps)',
    asks: 'the gradient amplifier to have a peak output power of ≥ 1 Mega Watt (1,000,000 Watts)',
    sugg: 'Condition met',
    suggCls: 'st s-pass',
    points: [
      'Quoted model: Ingenia Ambition X 1.5T MRI System.',
      'Gradient Amplifier Specs: Voltage = 2,000 V, Peak Current = 625 A.',
      'Power calculation: 2,000 V × 625 A = 1,250,000 W (1.25 MW), exceeding the 1.0 MW threshold requirement.'
    ],
    sure: 'Very sure (99%). Mathematical product of Voltage × Current equals 1.25 MW, explicitly grounded in the OEM technical datasheet.'
  },
  turnover: {
    id: 'turnover',
    tab: 'Average Turnover (₹119 Crores)',
    doc: 'ca',
    docName: 'Turnover Certificate, page 3 of 10',
    name: 'Average annual financial turnover over 3 years',
    asks: 'minimum average annual financial turnover of ₹11,900 Lakh (₹119.0 Crores) during the last 3 financial years',
    sugg: 'Condition met',
    suggCls: 'st s-pass',
    points: [
      'FY 2021-22 Turnover: ₹1,412.0 Crores.',
      'FY 2022-23 Turnover: ₹1,580.0 Crores.',
      'FY 2023-24 Turnover: ₹1,710.0 Crores.',
      '3-Year Average: ₹1,567.3 Crores, far exceeding the mandatory ₹119.0 Crores minimum.'
    ],
    sure: 'Very sure (98%). CA Audited certificate verified. Officer confirmation needed regarding the FY calculation window (2021-24 vs 2022-25).'
  }
};

const ORDER = ['exp', 'market', 'turnover'];

interface DecisionRecord {
  action: 'accept' | 'change' | 'ask';
  reason: string;
  time: string;
}

const ACTION_LABELS: Record<string, [string, string]> = {
  accept: ['Accepted', 'st s-done'],
  change: ['Result changed by you', 'st s-chg'],
  ask: ['Query sent to bidder', 'st s-check']
};

export const EvidenceDecisionPage = () => {
  const { persona } = usePersona();
  const isOfficer = persona.id === 'officer';
  const [selectedKey, setSelectedKey] = useState<string>('exp');
  const [selectedAction, setSelectedAction] = useState<'accept' | 'change' | 'ask' | null>(null);
  const [reasonText, setReasonText] = useState<string>('');
  const [decisions, setDecisions] = useState<Record<string, DecisionRecord>>({});

  const currentFeature = FEATURES[selectedKey];
  const currentDecision = decisions[selectedKey];

  const handleTabSelect = (key: string) => {
    setSelectedKey(key);
    setSelectedAction(null);
    setReasonText('');
  };

  const isReasonValid = reasonText.trim().length >= 10;
  const canSave = selectedAction !== null && isReasonValid;

  const getHintText = () => {
    if (!selectedAction) return 'Pick one of the three above';
    if (!isReasonValid) return 'Please write a short reason (at least 10 characters)';
    return 'Ready to save';
  };

  const handleSaveDecision = () => {
    if (!canSave || !selectedAction) return;

    const now = new Date();
    const timeStr = `today ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

    setDecisions(prev => ({
      ...prev,
      [selectedKey]: {
        action: selectedAction,
        reason: reasonText.trim(),
        time: timeStr
      }
    }));

    setSelectedAction(null);
    setReasonText('');
  };

  const handleReviseDecision = () => {
    setDecisions(prev => {
      const next = { ...prev };
      delete next[selectedKey];
      return next;
    });
  };

  return (
    <div className="flex-1 min-h-0 flex flex-col gap-4">
      {/* Title */}
      <div className="flex flex-col gap-2 shrink-0">
        <h1 className="h1">What the system found, and the page it came from</h1>
        <p className="lead">
          Nothing is decided until you decide it. Every result keeps the page it came from, and your reason is saved with it.
        </p>
      </div>

      {/* Condition Tabs */}
      <div className="flex gap-2.5 items-center shrink-0">
        {ORDER.map(key => {
          const f = FEATURES[key];
          const isDecided = !!decisions[key];
          const isActive = key === selectedKey;

          return (
            <button
              key={key}
              onClick={() => handleTabSelect(key)}
              className={`h-[44px] px-4 rounded-[8px] border text-[15px] cursor-pointer inline-flex items-center gap-2 transition-colors ${
                isActive
                  ? 'bg-[#14262B] border-[#14262B] text-white font-medium'
                  : 'bg-white border-[#D6D3CA] text-[#2F343B] hover:bg-[#F4F3EE]'
              }`}
            >
              <span>{f.tab}</span>
              <span className={`st ${isDecided ? 's-done' : 's-check'}`}>
                {isDecided ? 'decided' : 'to decide'}
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Split Content */}
      <div className="flex-1 min-h-0 grid grid-cols-[1fr_520px] gap-5">
        
        {/* Left Finding & Decision Pane */}
        <div className="flex flex-col gap-4 min-h-0">
          
          {/* System Finding Card */}
          <section className="card flex-1 min-h-0 flex flex-col overflow-hidden">
            <div className="p-4 px-5.5 border-b border-[#EFEDE6] flex flex-col gap-1 shrink-0">
              <h2 className="ct">{currentFeature.name}</h2>
              <span className="text-[14.5px] text-[#6B7079]">The tender asks: {currentFeature.asks}</span>
            </div>

            <div className="p-4 px-5.5 flex flex-col gap-3.5 overflow-y-auto flex-1">
              <div className="flex items-center gap-3">
                <span className="lbl">System suggests</span>
                <span className={currentFeature.suggCls}>{currentFeature.sugg}</span>
              </div>

              {/* Bullet Points */}
              <div className="flex flex-col gap-0.5">
                {currentFeature.points.map((pt, i) => (
                  <div key={i} className="flex gap-3 items-start py-2 border-b border-[#F1EFE9] last:border-0 text-[15px] leading-relaxed">
                    <span className="w-[7px] h-[7px] rounded-full bg-[#0F6B6E] mt-2 shrink-0"></span>
                    <span>{pt}</span>
                  </div>
                ))}
              </div>

              {/* Rationale Confidence Box */}
              <div className="bg-[#FAF9F6] border border-[#EFEDE6] rounded-lg p-3.5 px-4 text-[15px] leading-relaxed text-[#1A1D21]">
                {currentFeature.sure}
              </div>
            </div>
          </section>

          {/* Decision Form Card */}
          <section className="card shrink-0">
            <div className="p-3.5 px-5.5 border-b border-[#EFEDE6]">
              <h2 className="ct">Your decision</h2>
            </div>

            {!isOfficer ? (
              <div className="p-4 px-5.5 flex items-center justify-between bg-[#FAF9F6]">
                <span className="text-[14px] text-[#6B7079]">Decision entry is restricted to Tender Officers. Evaluator review in progress.</span>
                <span className="st s-auto">Read-only View</span>
              </div>
            ) : !currentDecision ? (
              <div className="p-4 px-5.5 flex flex-col gap-3">
                {/* 3 Action Selector Buttons */}
                <div className="flex gap-2.5">
                  <button
                    onClick={() => setSelectedAction('accept')}
                    className={`btn flex-1 ${selectedAction === 'accept' ? 'on' : ''}`}
                  >
                    Accept this
                  </button>
                  <button
                    onClick={() => setSelectedAction('change')}
                    className={`btn flex-1 ${selectedAction === 'change' ? 'on' : ''}`}
                  >
                    Change the result
                  </button>
                  <button
                    onClick={() => setSelectedAction('ask')}
                    className={`btn flex-1 ${selectedAction === 'ask' ? 'on' : ''}`}
                  >
                    Ask the bidder
                  </button>
                </div>

                {/* Rationale Textarea */}
                <label className="flex flex-col gap-1.5 text-[14px] text-[#4A4F57]">
                  Why (saved with the decision)
                  <textarea
                    value={reasonText}
                    onChange={(e) => setReasonText(e.target.value)}
                    placeholder="e.g. I checked both orders on pages 3 and 9. They are the same class of medicines."
                    className="w-full h-[64px] resize-none border border-[#D6D3CA] rounded-lg p-2.5 text-[15px] text-[#1A1D21] bg-white focus:outline-none focus:border-[#0F6B6E]"
                  />
                </label>

                {/* Save Footer */}
                <div className="flex items-center justify-between gap-3 pt-1">
                  <span className="text-[14px] text-[#6B7079]">{getHintText()}</span>
                  <button
                    onClick={handleSaveDecision}
                    disabled={!canSave}
                    className="btn pri"
                  >
                    Save decision
                  </button>
                </div>
              </div>
            ) : (
              <div className="p-4 px-5.5 flex flex-col gap-2.5">
                <div className="flex items-center gap-3">
                  <span className={ACTION_LABELS[currentDecision.action][1]}>
                    {ACTION_LABELS[currentDecision.action][0]}
                  </span>
                  <span className="text-[15px] text-[#6B7079]">saved by you, {currentDecision.time}</span>
                </div>
                <div className="text-[15px] leading-relaxed italic text-[#1A1D21]">
                  “{currentDecision.reason}”
                </div>
                <div className="text-[14px] text-[#6B7079] leading-normal">
                  The system's original suggestion is kept on record. Changing your mind creates a new version; nothing is erased.
                </div>
                <div className="pt-1">
                  <button onClick={handleReviseDecision} className="btn">
                    Change this decision
                  </button>
                </div>
              </div>
            )}
          </section>

        </div>

        {/* Right Document Paper Viewer Pane */}
        <section className="card flex flex-col overflow-hidden min-h-0">
          <div className="p-3.5 px-5 border-b border-[#EFEDE6] flex justify-between items-center gap-2 shrink-0">
            <h2 className="ct">The page it came from</h2>
            <span className="text-[14px] text-[#6B7079]">{currentFeature.docName}</span>
          </div>

          <div className="flex-1 overflow-y-auto bg-[#E4E1D9] p-7 text-[#22262B]">
            
            {/* Purchase Order Document */}
            {currentFeature.doc === 'po' && (
              <div className="paper">
                <div className="text-center mb-3.5">
                  <div className="font-semibold text-[15px]">CHIEF MEDICAL STORES DEPOT</div>
                  <div className="text-[13px] text-[#4A4F57]">Department of Medical Health · Demo State Government</div>
                </div>
                <div className="font-semibold text-center mb-2.5">PURCHASE ORDER</div>
                <div className="flex justify-between text-[13.5px] font-sans mb-1.5">
                  <span>No. CMSD/PO/2023/118</span>
                  <span>Date: 14 March 2023</span>
                </div>
                <div className="text-[13.5px] font-sans mb-3.5">To: M/s Sanjivani Lifesciences Pvt Ltd</div>
                
                <div className="dr4 hd">
                  <span>Item</span><span>Medicine</span><span>Quantity</span><span>Value</span>
                </div>
                <div className="dr4">
                  <span>1</span><span>Amoxicillin + clavulanic acid 625 mg</span><span>12,00,000</span><span>₹98.4 L</span>
                </div>
                <div className="dr4">
                  <span>2</span><span>Ceftriaxone injection 1 g</span><span>4,50,000</span><span>₹76.5 L</span>
                </div>
                <div className="dr4">
                  <span>3</span><span>Paracetamol 500 mg</span><span>60,00,000</span><span>₹71.9 L</span>
                </div>

                <div className="hl mt-6">
                  <span className="hlab">This is what the system read</span>
                  <div className="dr4 border-b-0 font-semibold">
                    <span></span><span>Total order value</span><span></span><span>₹2.47 Cr</span>
                  </div>
                </div>

                <div className="text-[13px] font-sans text-[#6B7079] mt-4">
                  Delivery within 45 days · payment within 30 days of receipt
                </div>
              </div>
            )}

            {/* Market Standing Certificate Document */}
            {currentFeature.doc === 'msc' && (
              <div className="paper">
                <div className="text-center mb-3.5">
                  <div className="font-semibold text-[15px]">OFFICE OF THE DRUGS LICENSING AUTHORITY</div>
                  <div className="text-[13px] text-[#4A4F57]">Market standing of products · page 3 of 3</div>
                </div>

                <div className="dr4 hd">
                  <span>No.</span><span>Medicine</span><span>On sale since</span><span>Years</span>
                </div>
                <div className="dr4"><span>110</span><span>Cefuroxime axetil 500 mg</span><span>2019</span><span>7</span></div>
                <div className="dr4"><span>111</span><span>Azithromycin 500 mg</span><span>2018</span><span>8</span></div>
                <div className="dr4"><span>112</span><span>Cefixime 200 mg</span><span>2021</span><span>4</span></div>
                <div className="dr4"><span>113</span><span>Ofloxacin 200 mg</span><span>2017</span><span>9</span></div>

                <div className="hl mt-7">
                  <span className="hlab">Too faded to read — 17 medicines</span>
                  <div className="dr4 blur"><span>118</span><span>Amoxycillin 500 mg</span><span>2016</span><span>10</span></div>
                  <div className="dr4 blur"><span>119</span><span>Ciprofloxacin 500 mg</span><span>2015</span><span>11</span></div>
                  <div className="dr4 blur"><span>120</span><span>Doxycycline 100 mg</span><span>2020</span><span>6</span></div>
                  <div className="dr4 blur border-b-0"><span>121</span><span>Metronidazole 400 mg</span><span>2014</span><span>12</span></div>
                </div>

                <div className="text-[13px] font-sans text-[#6B7079] mt-3.5">
                  Rows 122 to 134 are faded in the same way.
                </div>
              </div>
            )}

            {/* CA Turnover Certificate Document */}
            {currentFeature.doc === 'ca' && (
              <div className="paper">
                <div className="text-center border-b-2 border-[#22262B] pb-2.5 mb-3.5">
                  <div className="font-semibold text-[15px]">GUPTA RAO &amp; ASSOCIATES</div>
                  <div className="text-[13px] text-[#4A4F57]">Chartered Accountants · Lucknow</div>
                </div>

                <div className="font-semibold text-center mb-3">CERTIFICATE OF ANNUAL TURNOVER</div>
                <p className="m-0 mb-7">
                  This is to certify that M/s Sanjivani Lifesciences Pvt Ltd earned the following revenue, as shown by its audited accounts:
                </p>

                <div className="hl">
                  <span className="hlab">This is what the system read</span>
                  <div className="dr hd"><span>Financial year</span><span>Turnover</span></div>
                  <div className="dr"><span>2022-23</span><span>₹18.42 crore</span></div>
                  <div className="dr"><span>2023-24</span><span>₹22.11 crore</span></div>
                  <div className="dr border-b-0"><span>2024-25</span><span>₹26.87 crore</span></div>
                </div>

                <div className="flex justify-between items-end mt-4.5 text-[13px] font-sans">
                  <div>Place: Lucknow<br />Date: 12 August 2026</div>
                  <div className="w-[140px] h-[58px] border border-dashed border-[#9AA0A6] flex items-center justify-center text-[#6B7079] text-[12.5px]">
                    [seal and signature]
                  </div>
                </div>
              </div>
            )}

          </div>
        </section>

      </div>
    </div>
  );
};
