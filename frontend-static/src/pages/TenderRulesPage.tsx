import { useState } from 'react';
import { usePersona } from '../PersonaContext';
import { Plus, X, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface Rule {
  id: string;
  name: string;
  short: string;
  clause: string;
  approved: boolean;
  text: string;
  plain: string;
  evidence: string;
  who: string;
  note?: string | null;
  isCustom?: boolean;
}

const INITIAL_RULES: Rule[] = [
  { 
    id: 'C1', 
    name: 'Manufacturer or dealer', 
    short: 'Who makes the quoted MRI', 
    clause: 'Evaluation sheet row 1 · GeM bid page 1', 
    approved: true,
    text: 'Quoted as Manufacturer or authorized dealer. If quoted as authorized dealer then name of the manufacturer.',
    plain: 'The bid must say whether the bidder makes the MRI itself or sells it as an authorised dealer. If a dealer, the manufacturer must be named.',
    evidence: 'Bid form, GeM seller details', 
    who: 'Checked automatically, a person confirms', 
    note: null 
  },
  { 
    id: 'C2', 
    name: 'OEM authorisation', 
    short: 'Manufacturer letter for this bid', 
    clause: 'GeM bid, documents required (page 1)', 
    approved: true,
    text: 'OEM Authorization Certificate.',
    plain: 'A letter from the manufacturer authorising the bidder to offer this model in this bid.',
    evidence: 'OEM authorisation certificate', 
    who: 'Checked automatically', 
    note: 'The letter must name this bid number (GEM/2026/B/7700853) and the quoted model, and be signed by the manufacturer.' 
  },
  { 
    id: 'C3', 
    name: 'Average turnover', 
    short: '₹119 crore or more over 3 years', 
    clause: 'GeM bid page 1 & clause 1 (page 3)', 
    approved: true,
    text: 'The minimum average annual financial turnover of the bidder during the last three years, ending on 31st March of the previous financial year, should be 11,900 Lakh.',
    plain: 'Add the turnover of the last three financial years and divide by three. The result must be ₹11,900 lakh (₹119 crore) or more.',
    evidence: 'CA certificate or audited balance sheets', 
    who: 'Checked automatically', 
    note: 'Your evaluation sheets use different years: the MRI sheet uses 2021-22 to 2023-24, the new sheet uses 2022-23 to 2024-25. Please confirm the window before this check runs.' 
  },
  { 
    id: 'C4', 
    name: 'Bid security (EMD)', 
    short: '₹7.94 crore, or a valid exemption', 
    clause: 'GeM bid EMD detail (page 2)', 
    approved: true,
    text: 'EMD Amount 79400000. The bidder seeking EMD exemption must submit the valid supporting document for the relevant category as per GeM GTC with the bid.',
    plain: 'Either ₹7,94,00,000 is paid (online transfer to buyer account), or a valid exemption document is attached.',
    evidence: 'Payment proof or exemption certificate', 
    who: 'Checked automatically', 
    note: null 
  },
  { 
    id: 'C5', 
    name: 'Specification compliance', 
    short: 'Every line of the MRI specification', 
    clause: 'GeM specification · ATC spec · Corrigendum 1', 
    approved: false,
    text: 'Compliance of BoQ specification and supporting document. Bidders offering must also comply with the additional specification parameters mentioned above.',
    plain: 'Every line of the specification must be met, using the values after Corrigendum 1.',
    evidence: 'Technical compliance sheet, with brochure page for each line', 
    who: 'Checked line by line, a person confirms', 
    note: 'Wide bore 70 cm · gradient ≥ 40 mT/m and ≥ 200 T/m/s · RF power 15 kW · spine coil ≥ 24 elements · head & neck ≥ 20 · 5-year warranty & 5-year CMC.' 
  },
  { 
    id: 'C6', 
    name: 'Technical data sheet', 
    short: 'Brochure of the quoted model', 
    clause: 'Evaluation sheet row 6 · Corrigendum 1 item 6', 
    approved: true,
    text: 'Technical data sheet (quoted model Brochure). Gradient Amplifier should be ≥ 1 Mega Watt. It should reflect in Data sheet of offered model of equipment (Amplifier Wattage = Voltage x Electric Current).',
    plain: 'The manufacturer’s brochure for the exact quoted model must be attached. It must show the gradient amplifier’s voltage and current so that volts × amps can be checked against 1 MW.',
    evidence: 'Manufacturer brochure or data sheet', 
    who: 'Checked automatically', 
    note: null 
  },
  { 
    id: 'C7', 
    name: 'Past performance', 
    short: '10% of 31 units to a government buyer', 
    clause: 'GeM bid clause 4 (page 3)', 
    approved: false,
    text: 'The Bidder or its OEM should have supplied same or similar Category Products for 10% of bid quantity in at least one of the last three Financial years before bid opening to any Central / State Govt Organization / PSU.',
    plain: 'In any one of the last three financial years, the bidder or its manufacturer supplied at least 10% of 31 units (3 units) of similar MRI systems.',
    evidence: 'Government supply orders or contracts', 
    who: 'A person decides what counts as similar', 
    note: '10% of 31 units is 3.1. The tender does not say whether 3 units pass or 4 are needed. Decide once, and the same rule is applied to all three bidders.' 
  },
  { 
    id: 'C8', 
    name: 'Quality certificates', 
    short: 'CE / US FDA / BIS, plus CDSCO and ISO 13485', 
    clause: 'ATC specification, certifications (page 4)', 
    approved: true,
    text: 'a. EU CE from notified body/USFDA/BIS  b. Product must be CDSCO approved  c. ISO 13485 (latest edition).',
    plain: 'All three are needed: (1) CE from a notified body, US FDA, or BIS; (2) CDSCO approval for the product; (3) a valid ISO 13485 certificate.',
    evidence: 'CE with notified body number, US FDA 510(k), BIS, CDSCO licence, ISO 13485', 
    who: 'Checked automatically, a person confirms websites', 
    note: 'CE is looked up on the NANDO list, US FDA on the 510(k) database, and CDSCO on its licence portal.' 
  }
];

export const TenderRulesPage = () => {
  const { persona } = usePersona();
  const isOfficer = persona.id === 'officer';

  const [customRules, setCustomRules] = useState<Rule[]>([]);
  const [selectedId, setSelectedId] = useState<string>('C6');
  const [approvedState, setApprovedState] = useState<Record<string, boolean>>({});

  // Modal State for Adding Custom Rule
  const [showAddModal, setShowAddModal] = useState(false);
  const [newRuleForm, setNewRuleForm] = useState({
    name: '',
    short: '',
    clause: '',
    text: '',
    plain: '',
    evidence: '',
    who: 'Checked automatically, a person confirms'
  });

  const allRulesList = [...INITIAL_RULES, ...customRules];

  const rules = allRulesList.map(r => ({
    ...r,
    approved: r.approved || !!approvedState[r.id]
  }));

  const approvedCount = rules.filter(r => r.approved).length;
  const currentRule = rules.find(r => r.id === selectedId) || rules[0];
  const isApproved = currentRule.approved;
  const isJustApproved = !!approvedState[currentRule.id];

  const handleApprove = () => {
    setApprovedState(prev => ({ ...prev, [currentRule.id]: true }));
  };

  const handleAddRuleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newRuleForm.name.trim()) return;
    
    const newId = `C${allRulesList.length + 1}`;
    const newRule: Rule = {
      id: newId,
      name: newRuleForm.name,
      short: newRuleForm.short || newRuleForm.name,
      clause: newRuleForm.clause || `ATC Custom Clause ${newId}`,
      approved: true, // Custom rule explicitly added by Officer starts approved
      text: newRuleForm.text || newRuleForm.name,
      plain: newRuleForm.plain || newRuleForm.short,
      evidence: newRuleForm.evidence || 'Submitted bidder document annexure',
      who: newRuleForm.who,
      note: 'Custom tender rule configured & approved explicitly by Tender Officer.',
      isCustom: true
    };

    setCustomRules(prev => [...prev, newRule]);
    setSelectedId(newId);
    setShowAddModal(false);
    setNewRuleForm({
      name: '',
      short: '',
      clause: '',
      text: '',
      plain: '',
      evidence: '',
      who: 'Checked automatically, a person confirms'
    });
  };

  const whoClass = currentRule.who.startsWith('Checked automatically') ? 'st s-auto' : 'st s-person';

  const footerText = isJustApproved
    ? 'Approved by you just now. The rule is locked for this tender.'
    : currentRule.approved
    ? 'Approved & locked for evaluation by Tender Officer.'
    : 'Suggested by the system. It cannot be used until an officer approves it.';

  return (
    <div className="flex-1 min-h-0 flex flex-col gap-5">
      {/* Title Bar */}
      <div className="flex items-end justify-between gap-6 shrink-0">
        <div className="flex flex-col gap-2">
          <h1 className="h1">Turning the tender into rules</h1>
          <p className="lead">
            The system read the tender document and turned each eligibility condition into a rule it can check. An officer approves every rule or adds custom rules before evaluation runs.
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          <span className="st s-pass text-xs px-3 py-1.5 font-semibold">
            {approvedCount} of {rules.length} approved
          </span>
          {isOfficer && (
            <button 
              onClick={() => setShowAddModal(true)}
              className="h-8 px-3.5 bg-[#0F6B6E] hover:bg-[#0A5558] !text-white text-[12px] font-semibold rounded-md flex items-center justify-center gap-1.5 transition-all no-underline shadow-2xs cursor-pointer whitespace-nowrap leading-none border-0 shrink-0"
            >
              <Plus size={14} /> Add Custom Rule
            </button>
          )}
        </div>
      </div>

      {/* AI Guarantee & Rule Spec Versioning Banner */}
      <div className="bg-[#FAF9F6] border border-[#E4E2DA] rounded-xl p-3.5 px-5 flex justify-between items-center text-xs shrink-0">
        <div className="flex items-center gap-2 text-[#0F6B6E] font-semibold">
          <span className="w-2 h-2 rounded-full bg-[#0F6B6E] animate-pulse"></span>
          <span>AI Evaluation Integrity: AI strictly enforces defined source-of-truth criteria ({rules.length} active rules configured).</span>
        </div>
        <span className="font-mono text-[#6B7079] bg-white border border-[#D6D3CA] px-2.5 py-1 rounded font-bold">
          Rule Snapshot v1.{customRules.length} (Frozen)
        </span>
      </div>

      {/* Main Split Content */}
      <div className="flex-1 min-h-0 grid grid-cols-[420px_1fr] gap-5">
        
        {/* Left List Pane */}
        <section className="card overflow-hidden flex flex-col">
          <div className="p-3.5 px-[22px] border-b border-[#EFEDE6] flex justify-between items-center">
            <h2 className="ct">Conditions in this tender</h2>
            {isOfficer && (
              <button 
                onClick={() => setShowAddModal(true)} 
                className="text-xs text-[#0F6B6E] font-semibold hover:underline flex items-center gap-1 cursor-pointer"
              >
                + Add Rule
              </button>
            )}
          </div>
          <div className="overflow-y-auto flex-1">
            {rules.map(r => (
              <button
                key={r.id}
                onClick={() => setSelectedId(r.id)}
                className={`w-full text-left p-3.5 px-[22px] border-b border-[#F1EFE9] flex flex-col gap-1.5 transition-colors cursor-pointer ${
                  r.id === selectedId
                    ? 'bg-[#E8F1F0] border-l-[4px] border-l-[#0F6B6E]'
                    : 'bg-white hover:bg-[#FAF9F6]'
                }`}
              >
                <div className="flex justify-between items-center gap-2">
                  <div className="flex items-center gap-2 truncate">
                    <span className="font-bold text-xs text-[#0F6B6E] bg-[#E8F1F0] px-1.5 py-0.5 rounded">{r.id}</span>
                    <span className="text-[15px] font-medium text-[#1A1D21] truncate">{r.name}</span>
                  </div>
                  <span className={`st ${r.approved ? 's-pass' : 's-check'} text-[11px]`}>
                    {r.isCustom ? 'Custom' : r.approved ? 'Approved' : 'Needs a look'}
                  </span>
                </div>
                <div className="text-[13px] text-[#6B7079] truncate">{r.short}</div>
              </button>
            ))}
          </div>
        </section>

        {/* Right Detail Pane */}
        <div className="flex flex-col gap-5 min-h-0">
          
          {/* Top Clause Box */}
          <section className="card shrink-0">
            <div className="p-3.5 px-6 border-b border-[#EFEDE6] flex justify-between items-center">
              <h2 className="ct flex items-center gap-2">
                What the tender document says
                {currentRule.isCustom && (
                  <span className="text-xs bg-amber-100 text-amber-900 font-semibold px-2 py-0.5 rounded-md">Custom Rule</span>
                )}
              </h2>
              <span className="text-[13.5px] text-[#6B7079]">Clause {currentRule.clause}</span>
            </div>
            <div className="p-5 px-6">
              <div className="font-serif text-[16px] leading-[1.65] text-[#22262B]">
                <span className="bg-[#FFF1C2] px-1 py-0.5">{currentRule.text}</span>
              </div>
            </div>
          </section>

          {/* Bottom Checked Rules Box */}
          <section className="card flex-1 min-h-0 flex flex-col">
            <div className="p-3.5 px-6 border-b border-[#EFEDE6]">
              <h2 className="ct">What the system will check</h2>
            </div>
            <div className="p-5 px-6 flex flex-col gap-[18px] flex-1">
              <div className="text-[18px] font-medium leading-[1.5] text-[#1A1D21]">
                {currentRule.plain}
              </div>

              <div className="flex gap-10">
                <div className="flex flex-col gap-2">
                  <span className="lbl">Papers it looks at</span>
                  <span className="text-[15px] text-[#1A1D21]">{currentRule.evidence}</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="lbl">Who decides</span>
                  <div>
                    <span className={whoClass}>{currentRule.who}</span>
                  </div>
                </div>
              </div>

              {currentRule.note && (
                <div className="bg-[#FDF6EA] border border-[#E8C48E] rounded-lg p-3.5 px-4 flex flex-col gap-1">
                  <span className="text-[14px] font-semibold text-[#8A4B08]">The system flagged something in the wording</span>
                  <span className="text-[15px] leading-[1.5] text-[#3D2A0E]">{currentRule.note}</span>
                </div>
              )}

              <div className="mt-auto flex items-center gap-3.5 pt-2">
                {!isApproved && isOfficer && (
                  <>
                    <button onClick={handleApprove} className="btn pri text-xs px-4 h-9">
                      Approve this rule
                    </button>
                    <button className="btn text-xs px-4 h-9">Edit</button>
                  </>
                )}
                {!isApproved && !isOfficer && (
                  <span className="st s-check font-medium">Read-only rule for Bidders</span>
                )}
                <span className="text-[14px] text-[#6B7079]">{footerText}</span>
              </div>
            </div>
          </section>

        </div>

      </div>

      {/* Add Custom Rule Modal Dialog */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center z-50 p-6 animate-in fade-in duration-150">
          <div className="bg-white rounded-xl shadow-2xl border border-[#D6D3CA] w-full max-w-lg overflow-hidden flex flex-col">
            
            {/* Modal Header */}
            <div className="h-13 px-6 bg-[#14262B] text-white flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2">
                <ShieldCheck size={20} className="text-[#E0A458]" />
                <span className="font-bold text-sm">Add Custom Tender Rule</span>
              </div>
              <button 
                onClick={() => setShowAddModal(false)}
                className="p-1 text-[#8FA3A7] hover:text-white transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Body Form */}
            <form onSubmit={handleAddRuleSubmit} className="p-6 space-y-4 text-xs font-sans">
              
              <div className="space-y-1">
                <label className="font-bold text-[#1A1D21] block">
                  Rule Name <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. In-House Calibration & Testing Facility"
                  value={newRuleForm.name}
                  onChange={(e) => setNewRuleForm(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full p-2.5 border border-[#D6D3CA] rounded-md bg-[#FAF9F6] focus:outline-none focus:border-[#0F6B6E]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-bold text-[#1A1D21] block">Short Summary</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Must possess NABL accredited lab"
                    value={newRuleForm.short}
                    onChange={(e) => setNewRuleForm(prev => ({ ...prev, short: e.target.value }))}
                    className="w-full p-2.5 border border-[#D6D3CA] rounded-md bg-[#FAF9F6] focus:outline-none focus:border-[#0F6B6E]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-bold text-[#1A1D21] block">Clause Reference</label>
                  <input 
                    type="text" 
                    placeholder="e.g. ATC Clause 8.4 • Page 19"
                    value={newRuleForm.clause}
                    onChange={(e) => setNewRuleForm(prev => ({ ...prev, clause: e.target.value }))}
                    className="w-full p-2.5 border border-[#D6D3CA] rounded-md bg-[#FAF9F6] focus:outline-none focus:border-[#0F6B6E]"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-bold text-[#1A1D21] block">Verbatim Tender Clause Text</label>
                <textarea 
                  rows={3}
                  placeholder="Paste verbatim clause text from tender specifications document..."
                  value={newRuleForm.text}
                  onChange={(e) => setNewRuleForm(prev => ({ ...prev, text: e.target.value }))}
                  className="w-full p-2.5 border border-[#D6D3CA] rounded-md bg-[#FAF9F6] focus:outline-none focus:border-[#0F6B6E] leading-relaxed"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-[#1A1D21] block">Plain English Check Logic</label>
                <textarea 
                  rows={2}
                  placeholder="Explain what the AI engine or evaluator should verify in bidder documents..."
                  value={newRuleForm.plain}
                  onChange={(e) => setNewRuleForm(prev => ({ ...prev, plain: e.target.value }))}
                  className="w-full p-2.5 border border-[#D6D3CA] rounded-md bg-[#FAF9F6] focus:outline-none focus:border-[#0F6B6E] leading-relaxed"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-bold text-[#1A1D21] block">Papers / Documents Checked</label>
                  <input 
                    type="text" 
                    placeholder="e.g. NABL Certificate, Address proof"
                    value={newRuleForm.evidence}
                    onChange={(e) => setNewRuleForm(prev => ({ ...prev, evidence: e.target.value }))}
                    className="w-full p-2.5 border border-[#D6D3CA] rounded-md bg-[#FAF9F6] focus:outline-none focus:border-[#0F6B6E]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-bold text-[#1A1D21] block">Who Decides</label>
                  <select 
                    value={newRuleForm.who}
                    onChange={(e) => setNewRuleForm(prev => ({ ...prev, who: e.target.value }))}
                    className="w-full p-2.5 border border-[#D6D3CA] rounded-md bg-[#FAF9F6] focus:outline-none focus:border-[#0F6B6E] cursor-pointer"
                  >
                    <option value="Checked automatically, a person confirms">Checked automatically, a person confirms</option>
                    <option value="Checked automatically">Checked automatically</option>
                    <option value="A person decides">A person decides</option>
                  </select>
                </div>
              </div>

              {/* Form Action Footer */}
              <div className="pt-3 border-t border-[#E4E2DA] flex justify-end gap-3">
                <button 
                  type="button" 
                  onClick={() => setShowAddModal(false)}
                  className="btn text-xs px-4 h-9 cursor-pointer"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="btn pri text-xs px-5 h-9 flex items-center gap-1.5 cursor-pointer shadow-2xs !text-white"
                >
                  <CheckCircle2 size={15} /> Add Rule to Tender
                </button>
              </div>

            </form>

          </div>
        </div>
      )}

    </div>
  );
};
