# Eavesdrop Plan

## Setup
- **project_id**: 614125
- **region**: US (https://us.i.posthog.com)
- **site_url**: https://autoflow-solutions.com
- **install_method**: astro-snippet (posthog-js cookieless)
- **tracking_mode**: cookieless / memory tracking (persistence: 'memory')
- **conversion_definition**: conversion_completed (Cal.com discovery booking & SEO Report submission)
- **install_date**: 2026-09-18
- **internal_filtering**: Configured on PostHog cohort 576087 (rossiandrea18@gmail.com, info@rjwoodtrading.com, $internal_or_test_user = true)
- **verification_status**: Verified in live test (pageviews, autocaptured clicks, and conversion hooks confirmed in PostHog)

## Archetypes

### 14-Day Maturation Check (2026-10-23)
- **Status**: Analyzed (35 days elapsed since install on 2026-09-18)
- **14-Day Window**: 2026-10-09 to 2026-10-23
- **Unique Visitors**: 159
- **Conversions**: 0
- **Threshold Check (>= 20 visitors per archetype)**: 0 groups met the 20-visitor threshold.
  - *Proof & Case Study Seekers*: 16 visitors (0 conversions) — Clicked "Case Studies" or specific case study cards (/case-studies/yap-chan-kor, /case-studies/raci-kenya, /case-studies/stem-agro)
  - *Self-Assessment & Tool Users*: 10 visitors (0 conversions) — Clicked "Initialize Assessment", "ROI Calculator", "Start Free AI Audit"
  - *Services & Capabilities Evaluators*: 8 visitors (0 conversions) — Clicked "Services", workflow automation, lead handling
  - *Company & Careers Explorers*: 8 visitors (0 conversions) — Clicked "Careers", "About"
  - *Landing Page Only / Bounced*: 92 visitors — Viewed /my or / without clicking navigation or feature links
- **Recommendation**: In accordance with Rule 5, no individual group has cleared the 20-visitor threshold yet (Case Studies is closest at 16 visitors). Wait an additional week or increase traffic before locking permanent archetype IDs (1, 2, 3).

| id | name | trigger_links | visitors | conversions | what_they_engage_with | status |
|---|---|---|---|---|---|---|
| *pending* | *Awaiting >= 20 visitors per group* | — | — | — | — | gathering_signal |

## Pages

## Live
