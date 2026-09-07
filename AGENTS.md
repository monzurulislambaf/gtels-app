<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

# GTELS CORPORATE WEBSITE — COMPLETE OPENCODE CLI PROMPT

## PROJECT

Create a modern, professional, responsive corporate website for:

**GlobalTech Engineering & Logistic Solutions (GTELS)**

The website must be based primarily on the uploaded document:

`Updated-Wash-Company Profile-GTELS(1).docx`

The uploaded DOCX is the **single source of truth for company information, project data, manpower, equipment, locations, capabilities, financial information, and images**.

Do not invent company facts, clients, certifications, projects, addresses, employees, statistics, awards, or credentials that are not supported by the source document.

---

# 1. PRIMARY OBJECTIVE

Build a premium corporate website presenting GTELS as a:

* Engineering company
* WASH infrastructure provider
* Deep Tubewell contractor
* Civil engineering service provider
* Logistics and supply-chain company
* Procurement partner
* Community-development/WASH implementation organization
* Project-management and technical-services provider

The website should look suitable for:

* NGO clients
* International organizations
* Government organizations
* Donor agencies
* Development partners
* Corporate clients
* Institutional procurement
* Engineering tenders
* WASH projects
* Infrastructure projects

The design should communicate:

**Trust + Engineering Capability + Technical Expertise + National Coverage + Professionalism + Evidence + Reliability**

---

# 2. TECHNOLOGY STACK

Use:

* Next.js latest stable
* TypeScript
* React
* Tailwind CSS
* shadcn/ui or another high-quality accessible component system
* Lucide React icons
* Framer Motion for animations
* Next/Image for optimized images
* Responsive CSS
* Modern semantic HTML
* SEO-friendly architecture

Prefer the Next.js App Router.

Use reusable components and clean architecture.

---

# 3. SOURCE DOCUMENT PROCESSING

The OpenCode agent must inspect:

`Updated-Wash-Company Profile-GTELS(1).docx`

Extract:

1. Text
2. Headings
3. Tables
4. Company information
5. Project information
6. Employee/manpower information
7. Equipment information
8. Fleet information
9. Office locations
10. Warehouse information
11. Financial information
12. HSE information
13. Quality information
14. Client information
15. Embedded images

The DOCX contains approximately 95 embedded images.

Extract the embedded images from the DOCX and organize them into the website's public asset structure.

Example:

```text
public/
  images/
    company/
    projects/
    equipment/
    fleet/
    team/
    offices/
    warehouses/
    certificates/
    gallery/
    logos/
```

Do not simply link to images inside the DOCX.

Actually extract/copy the usable images into the project.

---

# 4. IMAGE HANDLING

Every useful image from the DOCX should be inspected and categorized.

Do not blindly display duplicate or irrelevant images.

Create meaningful categories:

### Company

* company logo
* corporate images
* office images

### WASH

* deep tubewell
* hand tubewell
* water infrastructure
* water treatment
* sanitation
* solar water systems

### Equipment

* drilling rigs
* pumps
* compressors
* generators
* construction equipment
* testing equipment

### Fleet

* pickups
* trucks
* water tankers
* trailers
* forklifts
* motorcycles

### Projects

* project implementation
* construction activities
* completed works
* field activities

### Safety

* PPE
* site safety
* HSE activities

### Gallery

* miscellaneous evidence photographs

Use `next/image`.

Add:

* meaningful alt text
* lazy loading where appropriate
* responsive sizing
* optimized formats where possible
* image preview/lightbox for gallery images

Never use generic alt text such as:

`image1`

Instead use descriptions such as:

`GTELS deep tubewell drilling project`

when the image content supports that description.

---

# 5. BRAND / DESIGN DIRECTION

Create a premium engineering and infrastructure visual identity.

Suggested visual language:

* Deep navy / blue
* Water-inspired blue
* White
* Neutral gray
* Subtle green accent for sustainability/WASH
* Clean typography
* Strong section headings
* Professional cards
* Technical statistics
* Large photography
* Minimal gradients
* Clean borders
* Soft shadows

Avoid:

* childish designs
* excessive rounded cards
* excessive animations
* generic SaaS appearance
* excessive gradients
* template-looking sections
* unnecessary stock photography

The website should feel like a serious:

**Engineering + WASH + Infrastructure + Logistics organization.**

---

# 6. GLOBAL HEADER

Create a professional sticky header.

Desktop:

Logo | About | Services | WASH | Projects | Capacity | Resources | Contact | CTA

CTA:

**Request Partnership**

or

**Contact GTELS**

Mobile:

* hamburger menu
* clean mobile navigation
* sticky header

Header should change appearance slightly when scrolling.

---

# 7. HOMEPAGE

Create a high-impact homepage.

## HERO

Hero heading:

**Engineering Solutions for Water, Infrastructure & Sustainable Development**

Supporting text based on the source:

GTELS delivers integrated engineering works, WASH infrastructure, logistics, procurement, technology installation and community-development support across Bangladesh.

Primary CTA:

**Explore Our Capabilities**

Secondary CTA:

**Contact GTELS**

Use a strong image from the DOCX as the hero background or side image.

Possible hero visual:

* drilling rig
* deep tubewell
* WASH field operation
* engineering project
* logistics operation

Add subtle professional animation.

---

# 8. TRUST / STATISTICS SECTION

Create animated statistics based only on source information.

Examples:

### 30,000+

Sq. Ft. Warehouse Capacity

### 8

Field Offices

### 100

Approx. Deployment Personnel

### 24

Equipment Categories

### BDT 180+

Project Value Implemented in Last 4 Years

### 1000+

Recent Tube Wells

Use count-up animations.

Do not exaggerate or change source values.

---

# 9. COMPANY INTRODUCTION

Section:

## About GTELS

Use the company description from the source document.

Explain that GTELS is a multidisciplinary service provider delivering:

* Engineering works
* Logistics
* Supply chain operations
* Institutional procurement
* Technology installation
* Community development
* WASH infrastructure
* Construction
* Project management
* Quality assurance
* Safety management
* Last-mile logistics
* Donor-oriented documentation

Add a relevant company/project image.

CTA:

**Learn More About GTELS**

---

# 10. VISION / MISSION / VALUES

Create an elegant three-part section.

## Vision

Use the source document's exact vision.

## Mission

Use the source document's exact mission.

## Core Values

Display:

1. Integrity & Accountability
2. Quality & Reliability
3. Client-Centered Delivery
4. Safety & Sustainability
5. Innovation & Digital Systems
6. Excellence in Execution

Use icons.

---

# 11. SERVICES PAGE

Create `/services`.

Services should include:

### Construction & Civil Engineering

Building, water-supply/sanitation infrastructure, material procurement, supervision, QA and HSE.

### WASH & Water Infrastructure

* Deep tubewells
* Hand tubewells
* Solar deep tubewells
* Drinking-water systems
* Water treatment
* Sanitation
* DEWATS
* Community WASH

### Engineering & Project Management

* Planning
* Engineering
* Supervision
* QA/QC
* HSE
* Monitoring
* Reporting

### Procurement & Supply Chain

* Sourcing
* Procurement
* Warehousing
* Inventory
* Transportation
* Last-mile delivery

### Logistics

* Fleet management
* Multi-site deployment
* Emergency delivery
* Warehousing
* Material transportation

### Sustainable Energy & Infrastructure

* Solar-powered water systems
* Pumps
* Energy-efficient infrastructure
* O&M support

---

# 12. WASH PAGE

Create:

`/wash`

Hero:

**WASH & Deep Tubewell Infrastructure**

Explain GTELS's documented WASH capability.

Highlight:

* Deep tubewell drilling
* Hand tubewell installation
* Solar deep tubewells
* Water-quality testing
* Water treatment
* DEWATS
* Sanitation
* Bathing facilities
* Pump installation
* Civil/platform works
* Commissioning
* HSE
* Community coordination

Create visual process:

```text
Site Assessment
      ↓
Planning
      ↓
Drilling
      ↓
Casing & Installation
      ↓
Civil Works
      ↓
Pump Installation
      ↓
Testing
      ↓
Quality Verification
      ↓
Commissioning
      ↓
Handover
```

Use relevant images extracted from the DOCX.

---

# 13. TECHNICAL READINESS

Create cards for:

### Turnkey Delivery

Labor, materials, tools, transportation, supervision, temporary works, safety, cleaning and incidental works.

### Deep Tubewell Works

Boring/drilling, casing/filter/GI-PVC installation, platform/civil works and pump installation.

### Quality & Water Testing

Water sampling/testing through a laboratory approved or recommended by the client, with corrective action and re-testing where required.

### Permits & Coordination

Drilling/groundwater permits and coordination with relevant authorities where applicable.

---

# 14. PROJECTS PAGE

Create:

`/projects`

Display the documented projects as professional project cards.

Each project should show:

* Project title
* Client
* Year
* Contract value
* Project type
* Location if available
* Reference
* Relevant image
* Evidence status

Projects include examples such as:

* Deep Tubewells — IOM — 2023
* Hand Tube Wells — World Vision Bangladesh — 2023
* DEWATS Facilities — IOM — 2024
* Integrated WASH package — IOM — 2025
* Solar Deep Tube Wells — Dhaka Ahsania Mission — 2026
* Quality WASH Services — NGO Forum for Public Health — 2025
* Solar-Powered Water Supply Improvement — NGO Forum for Public Health — 2025
* Drinking-Water Treatment Facilities — Solidarites International — 2022

Use the exact project information from the source.

Do not modify monetary values.

---

# 15. PROJECT EXPERIENCE DASHBOARD

Create a visually impressive project statistics section.

Show:

* Total documented project value
* Number of relevant projects
* Tube wells
* WASH facilities
* DEWATS facilities
* Solar water projects
* Project years
* Client categories

Include a timeline:

2022 → 2023 → 2024 → 2025 → 2026

Use only information supported by the document.

---

# 16. PROJECT DETAIL PAGE

Create dynamic route:

`/projects/[slug]`

Each project page should include:

* Project title
* Client
* Year
* Contract value
* Reference number
* Scope
* Technical details
* Project images
* Evidence/document availability
* Related projects

Use reusable project data.

---

# 17. CLIENTS PAGE

Create:

`/clients`

Show clients mentioned in the document.

Examples include:

* IOM
* World Vision Bangladesh
* Dhaka Ahsania Mission
* NGO Forum for Public Health
* Solidarites International
* BRAC
* DPHE
* Social Aid
* Needy Foundation
* Samar Foundation
* Basmah Foundation
* Our Ummah Trust
* Muslim Welfare Organization

Use only clients actually appearing in the source document.

Do not claim endorsement.

Use:

**Selected Clients / Institutional Experience**

rather than implying formal partnerships unless supported.

---

# 18. CAPACITY PAGE

Create:

`/capacity`

Sections:

### National Coverage

8 field offices.

18 sub-offices.

Bangladesh-wide implementation capability.

### Warehousing

30,000+ sq. ft. total stated capacity.

Show the 8 warehouse zones in cards/table:

* Dhaka
* Chattogram
* Khulna
* Rajshahi
* Rangpur
* Sylhet
* Barishal
* Mymensingh

Show:

* approximate warehouse area
* coverage
* key advantage

Use an interactive Bangladesh coverage visualization if practical.

Do not fabricate GPS coordinates.

---

# 19. OFFICE LOCATIONS

Create:

`/locations`

Show:

### Dhaka Zone

Head Office:
623, West Nakhalpara, Tejgaon, Dhaka-1215

Sub-offices:

* Narayanganj
* Tangail

### Chattogram Zone

* Chattogram Sadar
* Cox's Bazar

### Rajshahi Zone

* Rajshahi Sadar
* Bogura

### Rangpur Zone

* Rangpur Sadar
* Nilphamari
* Dinajpur

### Khulna Zone

* Khulna Sadar
* Jashore
* Satkhira
* Bagerhat
* Gopalganj

### Barishal Zone

* Barishal Sadar

### Sylhet Zone

* Sylhet Sadar

### Mymensingh Zone

* Mymensingh Sadar
* Netrokona

Use the addresses exactly as supplied.

---

# 20. LOGISTICS & FLEET PAGE

Create:

`/logistics`

Sections:

* Logistics capability
* Transportation
* Fleet
* Warehousing
* Procurement
* Inventory
* Last-mile delivery
* Emergency response

Create a searchable/filterable fleet table.

Fields:

* Vehicle type
* Model
* Registration
* Ownership
* Condition
* Maintenance status

Use source data.

Do not expose chassis/engine information publicly unless the administrator intentionally enables it.

---

# 21. EQUIPMENT PAGE

Create:

`/equipment`

Create a professional equipment inventory.

Equipment from the source includes:

* Drilling rigs
* Borehole drilling tools
* Mud pumps / air compressors
* Test pumps
* Tubewell installation tools
* Water-level measurement tools
* Pipe cutting/threading tools
* Concrete mixers/vibrators
* Generators
* Welding equipment
* Transport vehicles
* PPE
* Excavators
* Wheel loaders
* Road rollers
* Plate compactors
* Power trowels
* Bar cutting machines
* Bar bending machines
* Scaffolding
* Water pumps
* Earth rammers
* Concrete cutters
* Laser/survey equipment

Show:

* quantity
* ownership
* model
* condition
* maintenance status

Use equipment images extracted from the DOCX where available.

---

# 22. MANPOWER PAGE

Create:

`/team`

Show professional team structure.

Central team examples:

* Project Manager
* HR Manager
* HR Officer
* Administrative Officer
* Civil Engineer
* Drilling Engineer/Technician
* M&E Officer
* WASH Specialist
* HSE Officer
* QA/QC Engineer
* Procurement & Logistics Officer
* Finance & Accounts Officer
* Documentation & Reporting Officer
* Environmental Officer
* Community Mobilization Officer

Also show the 8 zonal coordinators.

Create workforce statistics:

* Corporate personnel: 15
* Zonal coordinators: 8
* Civil/site engineers: 8
* Site supervisors: 16
* Drilling technicians: 16
* Pump/test technicians: 9
* Electrical/mechanical technicians: 8
* Plumbers/pipe fitters: 17
* Masons/civil artisans: 26
* Store/warehouse keepers: 8
* Drivers/transport operators: 17
* Skilled/general labour: 93
* Approximate deployment: 100

Use exact source wording.

---

# 23. WASH IMPLEMENTATION TEAM

Create a dedicated page or section.

Display the implementation structure:

Project Manager
↓
WASH Specialist
↓
Civil Engineer + Drilling Team
↓
QA/QC + HSE + Environmental
↓
M&E
↓
Zonal Coordinators
↓
Site Engineers/Supervisors
↓
Technical & Skilled Field Teams

Use professional organization diagrams.

---

# 24. QUALITY / HSE PAGE

Create:

`/quality-hse`

Include:

### Quality Management

The source states:

ISO 9001:2015 — Certified

### Environmental Management

ISO 14001:2015 — Certified

### Occupational Health & Safety

OHSAS 18001:2007 — Certified

Do NOT present these as completed certifications.

Clearly display:

**Certification Status: On Process**

Also show:

* Third-party testing and inspection
* Regular audits
* Continuous improvement
* Risk assessment
* PPE
* Public safety
* Environmental controls
* Water-quality testing
* Ethical conduct
* Safeguarding
* Permit compliance
* Information security

---

# 25. QUALITY & COMPLIANCE STATEMENT

Use the source document's Quality, HSE & Compliance Statement.

Display it in a professional legal/compliance section.

Do not rewrite it into claims that are stronger than the source.

---

# 26. FINANCIAL CAPACITY

Create:

`/financial-capacity`

Because this information is potentially sensitive, create two modes:

### Public Summary

Show only high-level information such as:

* Recent financial growth
* Audited financial statements available
* Banking capacity
* Insurance coverage
* Bid/performance guarantee capacity

### Restricted / Tender Information

Sensitive details should NOT be placed in publicly accessible pages by default.

Examples:

* Bank account numbers
* Routing numbers
* SWIFT details
* Detailed insurance policy numbers
* Confidential financial records

Store these in a protected/downloadable tender section only if explicitly required.

Never expose confidential information in page source metadata, JSON-LD, sitemap, public API responses or client-side JavaScript.

---

# 27. RESOURCES PAGE

Create:

`/resources`

Possible resources:

* Company Profile
* Capability Statement
* Project Portfolio
* Equipment Register
* Manpower Profile
* WASH Capability
* HSE & Quality Statement
* Tender Documents

Where documents are not actually available, show:

**Document available upon request**

Do not create fake PDF documents.

---

# 28. PHOTO GALLERY

Create:

`/gallery`

Use extracted DOCX images.

Categories:

* WASH
* Deep Tubewell
* Construction
* Equipment
* Fleet
* Logistics
* Field Operations
* Safety
* Projects

Features:

* masonry/grid layout
* filtering
* lightbox
* fullscreen preview
* keyboard navigation
* mobile swipe
* lazy loading

Use image captions only when supported by the source.

---

# 29. CONTACT PAGE

Create:

`/contact`

Use:

**GlobalTech Engineering & Logistic Solutions (GTELS)**

Address:

623, West Nakhalpara, Tejgaon, Dhaka-1215

Phone:

+88 01678614488

Email:

[globaltechess@gmail.com](mailto:globaltechess@gmail.com)

Create:

* contact form
* name
* organization
* email
* phone
* subject
* message

Form should have:

* client-side validation
* accessible labels
* success state
* error state
* spam protection placeholder

Do not pretend messages are actually sent unless a backend/email service is configured.

---

# 30. FOOTER

Footer should include:

### GTELS

GlobalTech Engineering & Logistic Solutions

### Quick Links

* Home
* About
* Services
* WASH
* Projects
* Capacity
* Equipment
* Team
* Gallery
* Contact

### Contact

623, West Nakhalpara, Tejgaon, Dhaka-1215

+88 01678614488

[globaltechess@gmail.com](mailto:globaltechess@gmail.com)

### Footer statement

Engineering • WASH • Logistics • Infrastructure

Include copyright.

---

# 31. ABOUT PAGE

Create:

`/about`

Sections:

1. Company Overview
2. Vision
3. Mission
4. Core Values
5. Relevant Areas of Work
6. Organizational Structure
7. National Reach
8. Technical Capability
9. Logistics Capability
10. Quality & HSE

Use images from the source document.

---

# 32. ORGANIZATIONAL STRUCTURE PAGE

Create a visual organization chart.

Top:

**Proprietor & Managing Director**

Then:

### Engineering & Projects

### Quality, HSE & Compliance

### Procurement & Logistics

### Finance & Administration

### Monitoring & Reporting

Display names and responsibilities exactly from the source where appropriate.

---

# 33. TENDER / COMPANY PROFILE SECTION

Create:

`/company-profile`

This page should provide a web-friendly version of the uploaded company profile.

Use sections corresponding to the document:

01 Evaluator Quick Index
02 Company at a Glance
03 Vision, Mission & Core Values
04 Organizational Structure
05 Licenses & Legal Records
06 Headquarters, Logistics & Geographic Reach
07 WASH & Deep Tubewell Capability
08 Similar Project Experience
09 Financial & Technical Capability
10 Manpower
11 WASH Project Implementation Team
12 Equipment & Resource Register
13 Quality, HSE & Compliance
14 Financial Capacity, Banking & Insurance
15 Dedicated Photo Section

This should preserve the document's organization.

---

# 34. LEGAL / DOCUMENT STATUS

Important:

Some information in the source document appears to be tender-specific and may contain placeholders.

Examples:

* empty registration fields
* empty authorized-signatory information
* evidence references
* document attachment status
* certification status
* bank information

Do not invent missing information.

Display:

**Information to be finalized**

where appropriate.

---

# 35. DATA ARCHITECTURE

Do not hard-code huge datasets directly into JSX.

Create structured data files:

```text
src/
  data/
    company.ts
    services.ts
    projects.ts
    clients.ts
    offices.ts
    warehouses.ts
    fleet.ts
    equipment.ts
    team.ts
    financial.ts
    gallery.ts
```

Use TypeScript types.

Example:

```ts
export interface Project {
  id: string;
  title: string;
  client: string;
  year: number;
  contractValue?: string;
  reference?: string;
  description?: string;
  images?: string[];
}
```

---

# 36. COMPONENT ARCHITECTURE

Create reusable components:

```text
components/
  layout/
    Header.tsx
    Footer.tsx
    MobileMenu.tsx

  ui/
    Button.tsx
    SectionHeading.tsx
    StatCard.tsx
    ImageCard.tsx
    Modal.tsx

  company/
    CompanyOverview.tsx
    VisionMission.tsx
    Values.tsx
    OrganizationChart.tsx

  projects/
    ProjectCard.tsx
    ProjectGrid.tsx
    ProjectTimeline.tsx

  wash/
    WashCapabilities.tsx
    WashProcess.tsx

  capacity/
    OfficeCard.tsx
    WarehouseCard.tsx
    CapacityStats.tsx

  equipment/
    EquipmentCard.tsx
    EquipmentTable.tsx

  team/
    TeamCard.tsx
    TeamStats.tsx

  gallery/
    GalleryGrid.tsx
    GalleryLightbox.tsx
```

---

# 37. RESPONSIVENESS

The website must work perfectly on:

* 320px mobile
* 375px
* 390px
* 414px
* tablets
* laptops
* desktop
* large screens

Pay special attention to:

* tables
* fleet data
* equipment data
* manpower data
* project cards
* organization charts

On mobile, large tables should become:

* cards
* horizontal scrolling
* collapsible rows

Do not allow horizontal page overflow.

---

# 38. ACCESSIBILITY

Implement:

* semantic HTML
* keyboard navigation
* visible focus states
* proper heading hierarchy
* ARIA labels where needed
* accessible modals
* accessible mobile navigation
* sufficient contrast
* alt text
* form labels
* reduced-motion support

---

# 39. SEO

Implement complete technical SEO.

Each page should have:

* unique title
* unique meta description
* canonical URL
* Open Graph metadata
* Twitter/X metadata
* structured data where appropriate
* sitemap
* robots.txt
* semantic headings

Suggested organization schema:

`Organization`

Company:

GlobalTech Engineering & Logistic Solutions

Acronym:

GTELS

Address:

623, West Nakhalpara, Tejgaon, Dhaka-1215

Phone:

+88 01678614488

Email:

[globaltechess@gmail.com](mailto:globaltechess@gmail.com)

Do not invent social media URLs.

---

# 40. PERFORMANCE

Optimize for excellent Lighthouse performance.

Use:

* Next/Image
* lazy loading
* responsive images
* dynamic imports where useful
* minimal JavaScript
* optimized fonts
* compressed assets
* no unnecessary libraries

Do not load all 95 images on the homepage.

Only load images required by each page.

---

# 41. ANIMATIONS

Use Framer Motion carefully.

Animations:

* hero fade/slide
* section reveal
* statistics count-up
* card hover
* image zoom
* timeline reveal
* mobile menu
* gallery transitions

Keep animations subtle and professional.

Respect:

`prefers-reduced-motion`

---

# 42. SEARCH

Implement site search if practical.

Search across:

* projects
* services
* equipment
* offices
* team
* WASH capabilities

Search results should show the relevant category.

---

# 43. FILTERING

Projects:

Filter by:

* year
* client
* project type

Equipment:

Filter by:

* category
* ownership
* condition

Gallery:

Filter by:

* WASH
* Equipment
* Fleet
* Projects
* Safety
* Logistics

---

# 44. SECURITY

Never expose:

* private bank account details
* passwords
* API keys
* private documents
* confidential credentials

Use environment variables.

Create:

`.env.example`

Do not commit `.env`.

If an admin/tender portal is added later, use authentication and authorization.

---

# 45. CONTENT RULE

VERY IMPORTANT:

Use the uploaded DOCX as the primary content source.

Do not invent:

* achievements
* awards
* certifications
* project clients
* project values
* employee credentials
* office locations
* equipment
* fleet
* financial figures
* partnerships
* government approvals

If information is missing:

Use:

**Information to be updated**

instead of guessing.

---

# 46. SOURCE CONTENT ACCURACY

Preserve terminology from the source document.

Examples:

* Deep Tubewell
* DTW
* WASH
* DEWATS
* QA/QC
* HSE
* M&E
* Procurement
* Last-mile delivery
* Water-quality testing
* Community development

Correct obvious formatting issues only when necessary for web presentation.

Do not silently change factual values.

---

# 47. IMAGE-TO-CONTENT MAPPING

After extracting images, create an image manifest:

```text
src/data/image-manifest.ts
```

Example:

```ts
export const galleryImages = [
  {
    src: "/images/wash/deep-tubewell-01.jpg",
    category: "WASH",
    alt: "GTELS deep tubewell field operation",
  },
];
```

If an image's context cannot be confidently determined, place it under:

`Uncategorized`

instead of guessing.

---

# 48. ADMIN-FRIENDLY CONTENT STRUCTURE

Although an admin panel is not required initially, structure the content so that it can later be moved to:

* MongoDB
* PostgreSQL
* CMS
* Sanity
* Strapi
* WordPress
* custom admin panel

Avoid architecture that makes future content management difficult.

---

# 49. DOWNLOAD COMPANY PROFILE

Add a prominent button:

**Download Company Profile**

If the original DOCX/PDF is available in the project, provide it.

Otherwise do not generate a fake download.

The web page itself should act as the online company profile.

---

# 50. HOMEPAGE SECTION ORDER

Use this order:

1. Header
2. Hero
3. Trust statistics
4. Company overview
5. Core capabilities
6. WASH/deep tubewell capability
7. Why GTELS
8. Project experience
9. National coverage
10. Equipment & logistics
11. Team
12. Quality/HSE
13. Photo gallery
14. CTA
15. Footer

---

# 51. "WHY GTELS" SECTION

Create a strong section based on the document's repeated "GTELS EDGE" content.

Use evidence-based points:

### Evidence-First Delivery

Structured documentation and project evidence.

### Multidisciplinary Capability

Engineering + WASH + procurement + logistics.

### National Reach

8 zones and 18 sub-offices.

### Logistics Strength

30,000+ sq. ft. stated warehouse capacity.

### Technical Workforce

Approx. 100 personnel deployment capacity.

### Relevant WASH Experience

Deep tubewells, solar tubewells, sanitation, DEWATS and water treatment.

### Quality & HSE

Dedicated QA/QC, HSE and environmental roles.

### Project Experience

Documented WASH contracts/awards from 2022–2026.

---

# 52. CALL-TO-ACTION SECTIONS

Use professional CTA sections:

### Need a Reliable WASH & Engineering Partner?

Talk to GTELS about your next infrastructure, water, logistics or community-development requirement.

Buttons:

**Contact GTELS**

**Explore Projects**

Do not make unsupported claims such as "No.1 company" or "best contractor".

---

# 53. FOOTER CTA

Final CTA:

**Engineering. Water. Infrastructure. Logistics.**

**GlobalTech Engineering & Logistic Solutions (GTELS)**

623, West Nakhalpara, Tejgaon, Dhaka-1215

+88 01678614488

[globaltechess@gmail.com](mailto:globaltechess@gmail.com)

---

# 54. PROJECT STRUCTURE

Recommended:

```text
app/
  page.tsx
  about/
    page.tsx
  services/
    page.tsx
  wash/
    page.tsx
  projects/
    page.tsx
    [slug]/
      page.tsx
  clients/
    page.tsx
  capacity/
    page.tsx
  locations/
    page.tsx
  logistics/
    page.tsx
  equipment/
    page.tsx
  team/
    page.tsx
  quality-hse/
    page.tsx
  financial-capacity/
    page.tsx
  gallery/
    page.tsx
  company-profile/
    page.tsx
  resources/
    page.tsx
  contact/
    page.tsx
```

---

# 55. DEVELOPMENT WORKFLOW

Follow this workflow:

### Step 1

Inspect the DOCX.

### Step 2

Extract all images.

### Step 3

Categorize images.

### Step 4

Extract structured data.

### Step 5

Create TypeScript data files.

### Step 6

Create layout.

### Step 7

Create reusable components.

### Step 8

Build homepage.

### Step 9

Build internal pages.

### Step 10

Add responsive behavior.

### Step 11

Add SEO.

### Step 12

Add accessibility.

### Step 13

Optimize images.

### Step 14

Run lint.

### Step 15

Run TypeScript checks.

### Step 16

Run production build.

### Step 17

Fix all errors.

---

# 56. QUALITY CHECKLIST

Before finishing, verify:

* [ ] All important DOCX content has been incorporated.
* [ ] Embedded images have been extracted.
* [ ] Images are properly categorized.
* [ ] No broken images.
* [ ] No invented facts.
* [ ] No placeholder Lorem Ipsum.
* [ ] No fake testimonials.
* [ ] No fake awards.
* [ ] No fake certifications.
* [ ] ISO statuses remain "On process".
* [ ] Financial information is handled securely.
* [ ] Mobile navigation works.
* [ ] All pages are responsive.
* [ ] Tables work on mobile.
* [ ] Gallery works.
* [ ] Project filtering works.
* [ ] Search works if implemented.
* [ ] Contact form validates.
* [ ] SEO metadata exists.
* [ ] Sitemap works.
* [ ] Robots.txt works.
* [ ] Images have alt text.
* [ ] TypeScript passes.
* [ ] ESLint passes.
* [ ] Production build succeeds.

---

# 57. FINAL DESIGN REQUIREMENT

The final website should NOT look like a generic AI-generated website.

It should look like a professionally designed:

**International Engineering + WASH + Infrastructure + Logistics Corporate Website**

Visual priorities:

1. Strong photography
2. Clear information hierarchy
3. Evidence-based statistics
4. Technical credibility
5. Professional typography
6. Clean engineering aesthetic
7. Excellent mobile experience
8. Fast performance
9. Strong SEO
10. Easy future content management

Use the actual content and images from:

`Updated-Wash-Company Profile-GTELS(1).docx`

as the foundation of the entire website.

---

# 58. IMPORTANT IMPLEMENTATION INSTRUCTION FOR OPENCODE

Do not stop after generating the initial homepage.

Build the complete website.

First inspect the source document and assets, then implement the entire architecture.

When finished, run:

```bash
npm install
npm run lint
npx tsc --noEmit
npm run build
```

Fix every error before completion.

The final application must be production-ready, responsive, accessible, SEO-friendly and visually polished.

Do not ask unnecessary questions.

Make reasonable UI/UX decisions while strictly preserving the factual content of the uploaded GTELS company profile.
<!-- END:nextjs-agent-rules -->