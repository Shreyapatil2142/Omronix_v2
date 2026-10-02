// Static hardcoded filesystem tree — mirrors the real Desktop storage structure.
// In the original frontend, this data was fetched from the Phoenix backend.
// In this static version, it is used directly with no network calls.

export interface FileNode {
  name: string;
  type: 'directory' | 'file' | 'unknown';
  path: string;
  size_bytes?: number;
  children?: FileNode[];
  /**
   * Served URL for documents that ship with the prototype, so the viewer can
   * render the real file. Nodes without one are path-only placeholders.
   */
  url?: string;
}

const BASE = '/Users/ashutosh/Desktop/ProcurementPortal_Storage';

export const staticFilesystemTree: FileNode[] = [
  {
    name: 'Tender_7700853_1.5T_MRI_System',
    type: 'directory',
    path: `${BASE}/Tender_7700853_1.5T_MRI_System`,
    children: [
      {
        name: 'GeM_Bidding_Document_7700853.pdf',
        type: 'file',
        path: `${BASE}/Tender_7700853_1.5T_MRI_System/GeM_Bidding_Document_7700853.pdf`,
        size_bytes: 160221,
        url: `${import.meta.env.BASE_URL}documents/GeM_Bidding_Document_7700853.pdf`,
      },
      {
        name: 'ATC_Technical_Specifications.pdf',
        type: 'file',
        path: `${BASE}/Tender_7700853_1.5T_MRI_System/ATC_Technical_Specifications.pdf`,
        size_bytes: 439068,
      },
      {
        name: 'Technical_Evaluation_Sheet_MRI.docx',
        type: 'file',
        path: `${BASE}/Tender_7700853_1.5T_MRI_System/Technical_Evaluation_Sheet_MRI.docx`,
        size_bytes: 26389,
      },
      {
        name: 'Bidders',
        type: 'directory',
        path: `${BASE}/Tender_7700853_1.5T_MRI_System/Bidders`,
        children: [
          {
            name: 'Philips_India_Limited',
            type: 'directory',
            path: `${BASE}/Tender_7700853_1.5T_MRI_System/Bidders/Philips_India_Limited`,
            children: [
              { name: '25MS1046TD_India_Philips_Specifications[1].pdf', type: 'file', path: `${BASE}/Tender_7700853_1.5T_MRI_System/Bidders/Philips_India_Limited/25MS1046TD_India_Philips_Specifications[1].pdf`, size_bytes: 537134 },
              { name: 'Brochure_ScanTools Pro.pdf', type: 'file', path: `${BASE}/Tender_7700853_1.5T_MRI_System/Bidders/Philips_India_Limited/Brochure_ScanTools Pro.pdf`, size_bytes: 1113465 },
              { name: 'Certificate and Technical Offer Sheet.pdf', type: 'file', path: `${BASE}/Tender_7700853_1.5T_MRI_System/Bidders/Philips_India_Limited/Certificate and Technical Offer Sheet.pdf`, size_bytes: 3304899 },
              { name: 'Compliance and offer Sheet.pdf', type: 'file', path: `${BASE}/Tender_7700853_1.5T_MRI_System/Bidders/Philips_India_Limited/Compliance and offer Sheet.pdf`, size_bytes: 8603519 },
              { name: 'Manufacturer Authorization_PO Copy_Data Sheet.pdf', type: 'file', path: `${BASE}/Tender_7700853_1.5T_MRI_System/Bidders/Philips_India_Limited/Manufacturer Authorization_PO Copy_Data Sheet.pdf`, size_bytes: 4703679 },
              { name: 'PO Copies and User Certificate_2.pdf', type: 'file', path: `${BASE}/Tender_7700853_1.5T_MRI_System/Bidders/Philips_India_Limited/PO Copies and User Certificate_2.pdf`, size_bytes: 7876385 },
              { name: 'PO Copy and User certificate_1.pdf', type: 'file', path: `${BASE}/Tender_7700853_1.5T_MRI_System/Bidders/Philips_India_Limited/PO Copy and User certificate_1.pdf`, size_bytes: 7876385 },
              { name: 'Product Specification.pdf', type: 'file', path: `${BASE}/Tender_7700853_1.5T_MRI_System/Bidders/Philips_India_Limited/Product Specification.pdf`, size_bytes: 1012327 },
              { name: 'Technical Datasheet.pdf', type: 'file', path: `${BASE}/Tender_7700853_1.5T_MRI_System/Bidders/Philips_India_Limited/Technical Datasheet.pdf`, size_bytes: 333804 },
              { name: 'Turnover.pdf', type: 'file', path: `${BASE}/Tender_7700853_1.5T_MRI_System/Bidders/Philips_India_Limited/Turnover.pdf`, size_bytes: 8601695 },
            ],
          },
          {
            name: 'Siemens_Healthcare_Private_Limited',
            type: 'directory',
            path: `${BASE}/Tender_7700853_1.5T_MRI_System/Bidders/Siemens_Healthcare_Private_Limited`,
            children: [
              { name: 'Compliance and Technical Offer Sheet.pdf', type: 'file', path: `${BASE}/Tender_7700853_1.5T_MRI_System/Bidders/Siemens_Healthcare_Private_Limited/Compliance and Technical Offer Sheet.pdf`, size_bytes: 5691373 },
              { name: 'Compliance.pdf', type: 'file', path: `${BASE}/Tender_7700853_1.5T_MRI_System/Bidders/Siemens_Healthcare_Private_Limited/Compliance.pdf`, size_bytes: 6863296 },
              { name: 'EMD Exemption_Certificate.pdf', type: 'file', path: `${BASE}/Tender_7700853_1.5T_MRI_System/Bidders/Siemens_Healthcare_Private_Limited/EMD Exemption_Certificate.pdf`, size_bytes: 5934948 },
              { name: 'Manufacturer Authorization_Data Sheet_1.pdf', type: 'file', path: `${BASE}/Tender_7700853_1.5T_MRI_System/Bidders/Siemens_Healthcare_Private_Limited/Manufacturer Authorization_Data Sheet_1.pdf`, size_bytes: 4825870 },
              { name: 'Performance Installation base.pdf', type: 'file', path: `${BASE}/Tender_7700853_1.5T_MRI_System/Bidders/Siemens_Healthcare_Private_Limited/Performance Installation base.pdf`, size_bytes: 9380642 },
              { name: 'Performance_Data Sheet_2.pdf', type: 'file', path: `${BASE}/Tender_7700853_1.5T_MRI_System/Bidders/Siemens_Healthcare_Private_Limited/Performance_Data Sheet_2.pdf`, size_bytes: 7867938 },
              { name: 'Turnover.pdf', type: 'file', path: `${BASE}/Tender_7700853_1.5T_MRI_System/Bidders/Siemens_Healthcare_Private_Limited/Turnover.pdf`, size_bytes: 2970444 },
            ],
          },
          {
            name: 'Wipro_GE_Healthcare_Private_Limited',
            type: 'directory',
            path: `${BASE}/Tender_7700853_1.5T_MRI_System/Bidders/Wipro_GE_Healthcare_Private_Limited`,
            children: [
              { name: '17492060964865.pdf', type: 'file', path: `${BASE}/Tender_7700853_1.5T_MRI_System/Bidders/Wipro_GE_Healthcare_Private_Limited/17492060964865.pdf`, size_bytes: 7735088 },
              { name: 'Descriptive Quotation and Compliance.pdf', type: 'file', path: `${BASE}/Tender_7700853_1.5T_MRI_System/Bidders/Wipro_GE_Healthcare_Private_Limited/Descriptive Quotation and Compliance.pdf`, size_bytes: 6849545 },
              { name: 'Past Performance and MAF.pdf', type: 'file', path: `${BASE}/Tender_7700853_1.5T_MRI_System/Bidders/Wipro_GE_Healthcare_Private_Limited/Past Performance and MAF.pdf`, size_bytes: 8591574 },
              { name: 'Past Performance_1.pdf', type: 'file', path: `${BASE}/Tender_7700853_1.5T_MRI_System/Bidders/Wipro_GE_Healthcare_Private_Limited/Past Performance_1.pdf`, size_bytes: 8701454 },
              { name: 'Technical Data Sheet_Quality Certificate.pdf', type: 'file', path: `${BASE}/Tender_7700853_1.5T_MRI_System/Bidders/Wipro_GE_Healthcare_Private_Limited/Technical Data Sheet_Quality Certificate.pdf`, size_bytes: 8845077 },
              { name: 'Turnover Document.pdf', type: 'file', path: `${BASE}/Tender_7700853_1.5T_MRI_System/Bidders/Wipro_GE_Healthcare_Private_Limited/Turnover Document.pdf`, size_bytes: 6731980 },
            ],
          },
        ],
      },
    ],
  },
  {
    name: 'Tender_014_Essential_Drugs',
    type: 'directory',
    path: `${BASE}/Tender_014_Essential_Drugs`,
    children: [
      { name: 'NIT_Tender_Document_014.pdf', type: 'file', path: `${BASE}/Tender_014_Essential_Drugs/NIT_Tender_Document_014.pdf`, size_bytes: 1670 },
      { name: 'Technical_Specifications_Schedule.pdf', type: 'file', path: `${BASE}/Tender_014_Essential_Drugs/Technical_Specifications_Schedule.pdf`, size_bytes: 80 },
      { name: 'Financial_BOQ_Template.xlsx', type: 'file', path: `${BASE}/Tender_014_Essential_Drugs/Financial_BOQ_Template.xlsx`, size_bytes: 52 },
      {
        name: 'Bidders',
        type: 'directory',
        path: `${BASE}/Tender_014_Essential_Drugs/Bidders`,
        children: [
          {
            name: 'Avantika_Pharma_Ltd',
            type: 'directory',
            path: `${BASE}/Tender_014_Essential_Drugs/Bidders/Avantika_Pharma_Ltd`,
            children: [
              { name: 'Drug_Manufacturing_Licence_2026.pdf', type: 'file', path: `${BASE}/Tender_014_Essential_Drugs/Bidders/Avantika_Pharma_Ltd/Drug_Manufacturing_Licence_2026.pdf`, size_bytes: 1477 },
              { name: 'CA_Audited_Turnover_Certificate_3Yrs.pdf', type: 'file', path: `${BASE}/Tender_014_Essential_Drugs/Bidders/Avantika_Pharma_Ltd/CA_Audited_Turnover_Certificate_3Yrs.pdf`, size_bytes: 1476 },
              { name: 'WHO_GMP_Quality_Certificate.pdf', type: 'file', path: `${BASE}/Tender_014_Essential_Drugs/Bidders/Avantika_Pharma_Ltd/WHO_GMP_Quality_Certificate.pdf`, size_bytes: 1346 },
              { name: 'Government_Supply_Orders_Experience.pdf', type: 'file', path: `${BASE}/Tender_014_Essential_Drugs/Bidders/Avantika_Pharma_Ltd/Government_Supply_Orders_Experience.pdf`, size_bytes: 61 },
              { name: 'Sealed_Financial_BOQ_Cover.enc', type: 'file', path: `${BASE}/Tender_014_Essential_Drugs/Bidders/Avantika_Pharma_Ltd/Sealed_Financial_BOQ_Cover.enc`, size_bytes: 110 },
            ],
          },
          {
            name: 'Sanjivani_Lifesciences',
            type: 'directory',
            path: `${BASE}/Tender_014_Essential_Drugs/Bidders/Sanjivani_Lifesciences`,
            children: [
              { name: 'Drug_Manufacturing_Licence.pdf', type: 'file', path: `${BASE}/Tender_014_Essential_Drugs/Bidders/Sanjivani_Lifesciences/Drug_Manufacturing_Licence.pdf`, size_bytes: 42 },
              { name: 'CA_Turnover_Certificate.pdf', type: 'file', path: `${BASE}/Tender_014_Essential_Drugs/Bidders/Sanjivani_Lifesciences/CA_Turnover_Certificate.pdf`, size_bytes: 61 },
              { name: 'Market_Standing_Certificate_Faded_P3.pdf', type: 'file', path: `${BASE}/Tender_014_Essential_Drugs/Bidders/Sanjivani_Lifesciences/Market_Standing_Certificate_Faded_P3.pdf`, size_bytes: 1373 },
              { name: 'Purchase_Orders_Page3_214.pdf', type: 'file', path: `${BASE}/Tender_014_Essential_Drugs/Bidders/Sanjivani_Lifesciences/Purchase_Orders_Page3_214.pdf`, size_bytes: 64 },
            ],
          },
          {
            name: 'Kaveri_Remedies',
            type: 'directory',
            path: `${BASE}/Tender_014_Essential_Drugs/Bidders/Kaveri_Remedies`,
            children: [
              { name: 'GMP_Certificate_Legible_Copy.pdf', type: 'file', path: `${BASE}/Tender_014_Essential_Drugs/Bidders/Kaveri_Remedies/GMP_Certificate_Legible_Copy.pdf`, size_bytes: 59 },
            ],
          },
          {
            name: 'Medisure_Healthcare',
            type: 'directory',
            path: `${BASE}/Tender_014_Essential_Drugs/Bidders/Medisure_Healthcare`,
            children: [
              { name: 'Financial_Turnover_CA_14_21Cr.pdf', type: 'file', path: `${BASE}/Tender_014_Essential_Drugs/Bidders/Medisure_Healthcare/Financial_Turnover_CA_14_21Cr.pdf`, size_bytes: 58 },
            ],
          },
        ],
      },
    ],
  },
  {
    name: 'Tender_015_ICU_Monitors',
    type: 'directory',
    path: `${BASE}/Tender_015_ICU_Monitors`,
    children: [
      { name: 'NIT_ICU_Monitors_2026.pdf', type: 'file', path: `${BASE}/Tender_015_ICU_Monitors/NIT_ICU_Monitors_2026.pdf`, size_bytes: 75 },
      {
        name: 'Bidders',
        type: 'directory',
        path: `${BASE}/Tender_015_ICU_Monitors/Bidders`,
        children: [
          {
            name: 'Avantika_Pharma_Ltd',
            type: 'directory',
            path: `${BASE}/Tender_015_ICU_Monitors/Bidders/Avantika_Pharma_Ltd`,
            children: [
              { name: 'ISO_13485_Medical_Devices_Cert.pdf', type: 'file', path: `${BASE}/Tender_015_ICU_Monitors/Bidders/Avantika_Pharma_Ltd/ISO_13485_Medical_Devices_Cert.pdf`, size_bytes: 63 },
              { name: 'Technical_Proposal_ICU_Devices.pdf', type: 'file', path: `${BASE}/Tender_015_ICU_Monitors/Bidders/Avantika_Pharma_Ltd/Technical_Proposal_ICU_Devices.pdf`, size_bytes: 80 },
            ],
          },
        ],
      },
    ],
  },
  {
    name: 'Tender_016_CT_Scanners',
    type: 'directory',
    path: `${BASE}/Tender_016_CT_Scanners`,
    children: [
      {
        name: 'Bidders',
        type: 'directory',
        path: `${BASE}/Tender_016_CT_Scanners/Bidders`,
        children: [
          {
            name: 'Kaveri_Remedies',
            type: 'directory',
            path: `${BASE}/Tender_016_CT_Scanners/Bidders/Kaveri_Remedies`,
            children: [],
          },
        ],
      },
    ],
  },
];

// Default expanded nodes for the tree view
export const defaultExpandedNodes: Record<string, boolean> = {
  [`${BASE}/Tender_7700853_1.5T_MRI_System`]: true,
  [`${BASE}/Tender_7700853_1.5T_MRI_System/Bidders`]: true,
  [`${BASE}/Tender_7700853_1.5T_MRI_System/Bidders/Philips_India_Limited`]: true,
};
