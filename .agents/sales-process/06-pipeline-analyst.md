# Pipeline Health & Revenue Analytics — Autoflow Solutions

## Overview

Pipeline management is not a "big company" problem. For a solo founder or small agency like Autoflow Solutions, it is the difference between knowing where next month's revenue is coming from and guessing. Most small agencies fail not because of bad delivery but because of bad pipeline visibility — they close a deal, celebrate, head down into delivery, and look up six weeks later to find an empty pipeline.

The goal of this playbook is to turn the Autoflow pipeline from a list of names into a decision-making tool. Every number here has a specific action attached to it. If the number is off, you know what to do. If the number is on target, you know to keep doing what you are doing.

### The Weekly 30-Minute Pipeline Review Habit

The single most important practice in this playbook is a 30-minute pipeline review every Monday morning. Not a vague look at your CRM. Not scrolling through your inbox. A structured, agenda-driven session where you score every deal, update your forecast, and set your priority actions for the week.

Thirty minutes is not a lot of time. Skipping it costs you weeks of compounding blind spots. If your pipeline has fewer than 20 deals (likely at Autoflow's current stage), 30 minutes is more than enough to cover everything once you know the format. The agenda is in a dedicated section below.

### Pipeline as a Vanity Metric vs. Pipeline as a Decision Tool

A vanity pipeline is a long list of deals with dollar amounts attached. It feels good to look at. It does not tell you anything useful. You can have a $150,000 pipeline and close $0 next month if none of those deals are real, moving, or at the right stage.

A decision-tool pipeline answers four questions:

1. Do I have enough coverage to hit my close target this month?
2. Which deals are at risk right now and what is the specific action to save them?
3. What is my realistic new MRR forecast for the next 30 and 60 days?
4. Where should I spend my limited selling time this week?

Every section in this playbook is designed to answer one or more of those four questions. If a metric does not connect to a decision, it does not belong in this system.

---

## 8 Core Pipeline Metrics

### 1. Pipeline Coverage Ratio

**Definition:** The ratio of total pipeline value to your close target for a given period.

**How to calculate:**

```
Pipeline Coverage Ratio = Total Pipeline Value / Close Target for the Period
```

For Autoflow, total pipeline value should include both setup fees and first-year retainer value so you are comparing apples to apples. If your monthly close target is $5,000 in new MRR (plus associated setup fees), convert everything to first-year value first.

Example: Close target is $10,000 in first-year revenue this month. Pipeline contains deals worth $42,000 in first-year value. Coverage ratio = 42,000 / 10,000 = 4.2x.

**Target range:** 4x to 5x

**What it tells you:** This is a leading indicator of whether you will hit your close target. A 4-5x ratio accounts for the reality that not every deal will close. If your win rate is 30%, you need roughly 3.3x pipeline just to cover that loss rate, plus buffer for deals that slip to the next month.

**What to do if it is off:**

- Below 3x: You are under-piped. This is a prospecting emergency. Stop optimizing existing deals and spend 60-70% of your week on top-of-funnel activity. Every hour in delivery that can be delegated or deferred should be.
- Above 6x: Your pipeline quality may be low, or you are not qualifying out dead deals. Run a deal health audit (see the Deal Health Scorecard section) and remove any Red deals older than 30 days with no activity.

---

### 2. Signal-to-Outreach Time

**Definition:** The elapsed time between a buying signal occurring and your first personalized outreach to that prospect.

**How to calculate:**

```
Signal-to-Outreach Time = Timestamp of First Outreach - Timestamp of Signal
```

Log both timestamps in your CRM. Track the average across all signal-triggered outreaches each week.

Signals include: LinkedIn profile views from target accounts, content engagement, inbound form fills, referral mentions, job postings indicating relevant pain, or trigger events like a hiring freeze announcement or new funding round.

**Target range:** Under 30 minutes

**What it tells you:** Speed is a competitive advantage at the top of funnel. Research consistently shows that reply rates drop sharply when first contact is delayed beyond the first hour after a signal. For Autoflow, where you are pursuing SME owners with genuine operational pain, reaching out while that pain is top of mind produces dramatically better conversations than reaching out three days later.

**What to do if it is off:**

- Over 30 minutes average: Build a signal monitoring routine into your morning. Set up LinkedIn Sales Navigator alerts, Google Alerts for target accounts, and a dedicated Slack channel or email filter for inbound notifications. The goal is never to be surprised by a signal -- you see it and act within the window.
- If you are consistently missing signals entirely: Your signal sources need expansion. Review your ICP and identify 3-5 additional signal types you are not currently tracking.

---

### 3. Outbound Reply Rate

**Definition:** The percentage of outbound sequences that generate at least one substantive reply (not unsubscribes or auto-replies).

**How to calculate:**

```
Outbound Reply Rate = (Sequences with at Least One Reply / Total Sequences Sent) × 100
```

Measure this at the sequence level, not the individual email or message level. A sequence is a complete multi-touch cadence to one prospect.

**Target range:** 12% to 25%

**What it tells you:** This metric is the clearest signal of messaging quality and targeting accuracy. A reply rate below 12% means one of three things: you are reaching the wrong people, your message is not connecting to real pain, or your format/channel is wrong. A reply rate above 25% usually means your targeting is very tight and your messaging is genuinely specific.

**What to do if it is off:**

- Below 12%: Run a message audit. Pull your last 20 outreach messages and score each one: Does it name a specific pain? Does it reference something specific about this company or this person? Does it have a clear, low-friction next step? If more than half of them are generic, rewrite the templates. Also review your list quality -- are you reaching verified decision-makers?
- If reply rate is good but replies are negative: The pain hypothesis is wrong. You are reaching the right people but pitching the wrong problem. Update your messaging to test a different angle.

---

### 4. Friction Audit Show Rate

**Definition:** The percentage of booked Friction Audit calls where the prospect actually shows up.

**How to calculate:**

```
Friction Audit Show Rate = (Calls Where Prospect Showed / Total Calls Booked) × 100
```

Count no-shows and last-minute cancellations (less than 2 hours before the call) as no-shows for this metric. Track over a rolling 30-day window.

**Target range:** 70% to 85%

**What it tells you:** Show rate is a proxy for the quality of your booking process and how real the prospect's pain is. A low show rate usually means one of two things: the call was booked too far out, or the prospect did not feel enough urgency when they booked. It can also signal that your confirmation and reminder sequence is weak.

**What to do if it is off:**

- Below 70%: Implement a three-touch confirmation sequence: a confirmation email immediately after booking, a reminder 24 hours before, and a final reminder 1 hour before. Each reminder should re-anchor the pain the prospect mentioned when they booked. Also review your booking window -- calls booked more than 5 days out have significantly lower show rates.
- If show rate is above 85% but audit-to-proposal rate is low: You are getting the right people on the call but not converting them. The issue is in the call itself, not the booking process.

---

### 5. Friction Audit-to-Proposal Rate

**Definition:** The percentage of completed Friction Audit calls that result in a proposal being sent within 48 hours.

**How to calculate:**

```
Friction Audit-to-Proposal Rate = (Proposals Sent / Friction Audits Completed) × 100
```

Only count completed calls (both parties showed, call ran at least 20 minutes). Track proposals sent within 48 hours of the call.

**Target range:** 50% to 70%

**What it tells you:** This metric measures how well your discovery process qualifies opportunities and whether you are sending proposals to prospects who deserve them. A rate below 50% means either your calls are not uncovering real, qualified pain (so you have nothing to propose) or you are consistently losing momentum between the call and the follow-up.

A rate above 70% is possible but warrants scrutiny -- are you sending proposals to every call regardless of fit? If so, your proposal-to-close rate will suffer downstream.

**What to do if it is off:**

- Below 50% (proposals not going out): Review your call structure. You should be able to confirm the qualifying criteria by minute 25 of the call. If you are ending calls unsure whether to propose, you need a clearer qualification framework.
- Below 50% (proposals going out late): Build a 48-hour proposal rule. If you have not sent a proposal within 48 hours of a qualified call, the deal is already cooling. Use a template that can be customized in under 30 minutes so speed is not an excuse.

---

### 6. Proposal-to-Close Rate

**Definition:** The percentage of sent proposals that convert to signed agreements and paid setup fees.

**How to calculate:**

```
Proposal-to-Close Rate = (Deals Closed / Proposals Sent) × 100
```

Measure over a rolling 90-day window to account for deal cycle length. Count a deal as closed when both the agreement is signed and the setup fee is received.

**Target range:** 25% to 40%

**What it tells you:** This is your bottom-of-funnel conversion rate. A rate below 25% usually means one of three things: your pricing is disconnected from perceived value, your proposals are not tailored enough to the prospect's specific pain, or you are not handling objections effectively during the closing conversation.

**What to do if it is off:**

- Below 25%: Do a close-loss analysis on the last 10 proposals that did not close. For each one, identify the stated reason and the likely real reason. Look for patterns. If 6 out of 10 said "budget," the issue might be pricing presentation. If 6 out of 10 went silent, the issue might be follow-up cadence.
- If close rate is high (above 40%) but proposal volume is low: You may be under-qualifying on the call. You are closing a high percentage of a small number of proposals because only highly qualified prospects make it to proposal. That is not bad, but if pipeline coverage is a problem, you may need to cast a wider net earlier.

---

### 7. Average Deal Cycle

**Definition:** The average number of days from first contact (first outreach or first inbound inquiry) to a signed agreement and received setup fee.

**How to calculate:**

```
Average Deal Cycle = Sum of (Close Date - First Contact Date) for All Closed Deals / Number of Closed Deals
```

Track this as a rolling 90-day average. Exclude any deals that were clearly anomalous (e.g., a deal that sat dormant for 6 months before closing).

**Target range:** 14 to 35 days

**What it tells you:** Deal cycle length is a measure of your process efficiency and deal quality. Long deal cycles drain your selling time and create forecasting uncertainty. For Autoflow, where you are selling to SME owners who have real pain and limited bandwidth for long evaluation processes, a 14-35 day cycle is achievable and appropriate.

**What to do if it is off:**

- Above 35 days: Identify where deals are stalling. Run a stage-by-stage time analysis. If deals are stalling between Stage 2 and Stage 3 (proposal to close), your proposal follow-up cadence may be too passive. If deals are stalling at Stage 1 (Friction Audit booked but not completed), your show rate issue is compounding.
- Below 14 days: This is not necessarily a problem, but verify that short-cycle deals are not churning faster. If a deal closes in 5 days and cancels in 90, you optimized for the wrong thing.

---

### 8. Win Rate from Stage 3+

**Definition:** The percentage of deals that close once they have reached Stage 3 (demo or Friction Audit completed and proposal sent).

**How to calculate:**

```
Win Rate from Stage 3+ = (Deals Closed from Stage 3+ / Total Deals That Entered Stage 3+) × 100
```

Track this separately from your overall win rate. It is a more forward-looking indicator because you can calculate it for deals still in pipeline.

**Target range:** 30% to 45%

**What it tells you:** This is your "qualified pipeline" win rate. Once a prospect has shown up for a call, had their friction points identified, and received a tailored proposal, they are a significantly higher-quality opportunity than a raw name in your outreach list. A win rate below 30% from Stage 3+ suggests either proposal quality issues, pricing issues, or a misidentified decision-maker.

**What to do if it is off:**

- Below 30%: Implement the Deal Health Scorecard (below) for every Stage 3+ deal. Run MEDDPICC on each one. The most common culprit is an unconfirmed economic buyer -- you are proposing to a champion who cannot actually approve the spend.
- Above 45%: This is a strong signal. Analyze what these winning deals have in common and use those characteristics to improve your Stage 1 and Stage 2 qualifying process so you build more of these deals.

---

## Pipeline Velocity Model

Pipeline velocity is the single most useful number for forecasting. It compresses four variables into one number that tells you how fast money is moving through your pipeline.

### Formula

```
Pipeline Velocity = (Number of Deals × Win Rate × Average Deal Value) / Average Sales Cycle (in days)
```

This gives you revenue per day. Multiply by 30 to get your expected monthly new revenue.

### How to Use It for Forecasting

Run this calculation every Monday. Compare it to your monthly close target. If your velocity number (multiplied by 30) is below your target, you know immediately that you need to either add more deals to the pipeline, improve your win rate, increase deal value, or shorten your sales cycle.

The velocity formula is useful not just as a forecast but as a diagnostic. If your velocity drops, you can identify exactly which variable changed and address that specific problem rather than guessing.

### Worked Example with Autoflow Numbers

Assumptions:
- 10 deals in active pipeline
- 35% win rate (from Stage 3+)
- Average first-year deal value: $2,200 (based on Engagement Engine: $899 setup + $150/mo × 12 months = $2,699; but blending with prospects who may take Operations at $1,699 + $170 × 12 = $3,739 and those who close on Engagement only, a blended first-year value of $2,200 is reasonable for early-stage pipeline)
- Average sales cycle: 21 days

```
Pipeline Velocity = (10 × 0.35 × $2,200) / 21
Pipeline Velocity = $7,700 / 21
Pipeline Velocity = $366.67 per day
Monthly Velocity = $366.67 × 30 = $11,000
```

So with these numbers, the pipeline is expected to generate roughly $11,000 in new revenue over the next 30 days. That includes both setup fees and first-month retainer value.

If your monthly target is $8,000 in new first-year revenue, you are in good shape. If your target is $15,000, you have a gap and need to act.

### What Levers to Pull When Velocity Is Too Low

You have four levers. Pull the right one based on your diagnosis:

**Lever 1: Add more deals (increase deal count)**
Use this when: Pipeline coverage is below 4x. The fix is purely prospecting -- more outreach, more referral asks, more signal-based activity. Do not touch your close process until the top of funnel is healthy.

**Lever 2: Improve win rate**
Use this when: You have enough pipeline but deals are not closing. The fix is proposal quality, follow-up cadence, objection handling, or economic buyer confirmation. Review your close-loss data.

**Lever 3: Increase deal value**
Use this when: You are winning deals but the numbers are smaller than expected. This often means clients are choosing the Engagement Engine when Operations or Voice might be more appropriate. Review your discovery process -- are you asking enough questions to surface the fuller scope of automation opportunity?

**Lever 4: Shorten sales cycle**
Use this when: Deals are in pipeline but moving slowly. The fix is more aggressive follow-up, tighter next-step booking during every call, and removing friction from the agreement and payment process.

---

## Deal Health Scorecard (Red / Yellow / Green)

Use this rubric to score every deal in your pipeline at least once per week. The goal is never to be surprised by a deal dying. The scorecard surfaces risk early.

### Scoring Rubric

**Green Deal**
All of the following are true:
- Economic buyer is confirmed and has been on at least one call
- Pain is specific, quantified, and documented
- Timeline is confirmed (they have given a date or a reason for urgency)
- At least 4 of 7 MEDDPICC elements are confirmed
- A next step is booked (not just agreed to -- actually on the calendar)
- Deal has moved forward in the last 7 days

**Yellow Deal**
One or more of the following is true:
- One or two MEDDPICC elements are missing or unconfirmed
- No specific timeline from the prospect
- Next step is agreed to but not on the calendar
- Deal has not moved forward in the last 7 days
- Prospect is slow to respond (2-4 day reply windows)

**Red Deal**
One or more of the following is true:
- Economic buyer has not been confirmed or is someone other than who you have been talking to
- Pain has been stated but not quantified (no cost, no time, no specific impact)
- Deal has been stalled in the same stage for more than 14 days
- Last response from prospect was more than 5 days ago
- Prospect said "let us think about it" without committing to a specific follow-up date

### Deal Health Review Table Template

Use this table in your CRM or a simple spreadsheet. Update it every Monday during your pipeline review.

| Deal Name | Stage | Days in Stage | MEDDPICC Score | Health | Next Action | Owner |
|-----------|-------|---------------|----------------|--------|-------------|-------|
| [Company] | 1 / 2 / 3 / 4 | [#] | [0-7] | Red / Yellow / Green | [Specific action + date] | [Name] |

**MEDDPICC Score** is the count of confirmed elements out of 7 (Metrics, Economic Buyer, Decision Criteria, Decision Process, Paper Process, Identify Pain, Champion). A score of 5 or higher is typically enough to advance a deal confidently.

**Stage Key:**
- Stage 1: Outreach sent, reply received, call not yet booked
- Stage 2: Friction Audit booked or completed, proposal not yet sent
- Stage 3: Proposal sent, in negotiation
- Stage 4: Agreement sent, awaiting signature and payment

### Sample Populated Table

| Deal Name | Stage | Days in Stage | MEDDPICC Score | Health | Next Action | Owner |
|-----------|-------|---------------|----------------|--------|-------------|-------|
| Riverton Dental | 3 | 4 | 5 | Green | Follow up Friday re: contract questions | Andrea |
| Summit HVAC | 2 | 9 | 3 | Yellow | Re-engage: send ROI summary, book proposal call | Andrea |
| Bloom & Leaf Cafe | 3 | 16 | 2 | Red | Last-chance check-in: break-up message if no reply | Andrea |
| Harbor Law Group | 1 | 2 | 4 | Green | Friction Audit booked for Tuesday | Andrea |
| Clearpath Logistics | 2 | 6 | 4 | Green | Proposal drafted, send Monday | Andrea |

---

## Forecast Methodology

### Three Forecast Categories

**Commit (90%+ confidence)**
These are deals where you would bet your mortgage on them closing in the current period. All of the following must be true:
- Economic buyer is confirmed and enthusiastic
- Proposal has been sent and discussed
- Agreement is drafted or in review
- No open objections (all objections have been addressed)
- Prospect has given a specific close date or close signal

**Best Case (60%+ confidence)**
These are deals that could close in the current period with good execution. They are Yellow or Green on the Deal Health Scorecard, proposal is sent or imminent, and there are no major blockers -- but something is not fully locked down.

**Pipeline (any open deal)**
Everything else that is active and has not been disqualified. These are included in pipeline coverage calculations but not in revenue forecasts.

### How to Build a Weekly Forecast for a Small Pipeline

For a pipeline with fewer than 20 deals, forecast at the deal level, not statistically. This means for each deal you have individually decided its category rather than applying a probability percentage to a large data set.

Each Monday:

1. Review every Stage 3 and Stage 4 deal and assign it to Commit or Best Case based on the criteria above.
2. Sum the Commit deals to get your floor forecast.
3. Sum the Commit + Best Case deals to get your ceiling forecast.
4. Compare both to your monthly close target.
5. Identify the gap and what specific actions this week can move Best Case deals to Commit.

### The "Would You Bet Your Mortgage on It" Test

Before placing a deal in Commit, ask: if someone offered to pay you $10,000 if this deal closes this month and charged you $10,000 if it does not, would you accept the bet?

If you hesitate, the deal is Best Case, not Commit. This simple gut check prevents over-forecasting, which is the most common forecasting error in small agencies.

### Monthly Rolling Forecast Template

Review and update this at the end of each week. Share it with yourself as a record of forecast accuracy over time.

| Week | Commit Forecast | Best Case Forecast | Actual Closed | Forecast Accuracy |
|------|-----------------|--------------------|---------------|-------------------|
| Week 1 (Month open) | $[amount] | $[amount] | $0 | -- |
| Week 2 | $[amount] | $[amount] | $[amount] | -- |
| Week 3 | $[amount] | $[amount] | $[amount] | -- |
| Week 4 (Month close) | $[amount] | $[amount] | $[amount] | Commit: [%] / Best Case: [%] |

Track forecast accuracy over 90 days. If your Commit forecasts are accurate within 10%, your pipeline health is strong. If Commit accuracy is below 80%, your qualification criteria for Commit need to be tighter.

---

## Revenue Metrics (Setup + MRR Model)

Autoflow operates a hybrid revenue model: one-time setup fees that are paid upfront plus recurring monthly retainers. These two streams behave differently and must be tracked separately.

### New MRR vs. Setup Revenue

**New MRR** is the recurring monthly retainer added when a new client activates an engine:
- Engagement Engine: $150/month
- Operations Engine: $170/month
- Voice Engine: $200/month

**Setup Revenue** is the one-time payment collected at contract signing:
- Engagement Engine: $899
- Operations Engine: $1,699
- Voice Engine: $1,999

Track these on separate lines. Setup revenue is non-recurring -- it helps fund your delivery costs and initial CAC but does not contribute to your recurring revenue base. MRR is the number that compounds and determines the long-term health of the business.

### MRR Run Rate

```
MRR Run Rate = Total Active Monthly Retainers Across All Clients
```

This is the baseline. If you have 8 clients on the Engagement Engine and 3 on the Operations Engine:

```
MRR Run Rate = (8 × $150) + (3 × $170) = $1,200 + $510 = $1,710/month
```

Annualized: $1,710 × 12 = $20,520 ARR

Track this number every month and compare it month-over-month. Consistent MRR growth with low churn is the health signal you are building toward.

### Expansion MRR

Expansion MRR is new recurring revenue from existing clients who add a second or third engine. This is tracked separately from new logo MRR because the sales motion, cost, and win rate are all different.

```
Expansion MRR = Sum of New Monthly Retainer Added from Existing Clients
```

Example: An existing client on the Engagement Engine ($150/mo) adds the Operations Engine ($170/mo). Expansion MRR for that month = $170.

The Expansion as a percentage of new MRR target is 30% or more once you have 10+ clients. This means that at scale, roughly one-third of your monthly MRR growth comes from existing clients, which is a far more efficient revenue channel than new logo acquisition.

### Churn Tracking

Churn is an engine cancellation. Track it at the engine level, not just the client level.

```
Churned MRR = Sum of Monthly Retainer for All Engines Cancelled in the Period
```

A client cancelling the Operations Engine while keeping the Engagement Engine is a partial churn. Track the actual lost MRR, not just the client count.

```
MRR Churn Rate = (Churned MRR / MRR at Start of Period) × 100
```

Target: Below 5% monthly MRR churn. Above 5% is a delivery or expectation-alignment problem that needs immediate investigation.

### NRR Calculation

Net Revenue Retention measures whether your existing client base is growing in revenue even without adding new clients. Target: 110%+

```
NRR = ((MRR at Start of Period + Expansion MRR - Churned MRR - Contraction MRR) / MRR at Start of Period) × 100
```

Contraction MRR is revenue lost from clients downgrading (e.g., from Operations to Engagement). Autoflow does not currently have a downgrade path, so this is likely zero, but track it as a line item anyway.

Example:
- MRR at start of month: $3,000
- Expansion MRR added: $500 (3 clients each added one engine)
- Churned MRR: $150 (one Engagement Engine cancelled)
- Contraction MRR: $0

```
NRR = (($3,000 + $500 - $150 - $0) / $3,000) × 100
NRR = ($3,350 / $3,000) × 100
NRR = 111.7%
```

This is above the 110% target, meaning the existing client base is growing revenue even before counting new logos.

### LTV Calculation and LTV:CAC Model

**LTV (Lifetime Value):**

```
LTV = Average MRR per Client / Monthly Churn Rate
```

If average MRR per client is $165 (blended across engine mix) and monthly churn rate is 3%:

```
LTV = $165 / 0.03 = $5,500
```

Add average setup revenue per client (say $1,200 blended) for total LTV:

```
Total LTV = $5,500 + $1,200 = $6,700
```

**CAC (Customer Acquisition Cost):**

```
CAC = Total Sales and Marketing Spend / Number of New Clients Acquired
```

For a solo founder, CAC includes your time cost for sales activities. Estimate your hourly rate and track hours spent on sales per new client acquired.

**LTV:CAC Ratio Target: 5:1 or better**

```
LTV:CAC = $6,700 / $1,340 = 5:1
```

If your LTV:CAC is below 3:1, you are acquiring clients at a cost that the retainer cannot justify. Review your sales time investment and identify which outreach channels are producing the cheapest-to-acquire clients.

### The Expansion Pipeline

The expansion pipeline is a separate list of existing clients who are candidates for adding a second engine. It lives alongside your new logo pipeline in your CRM and gets reviewed every week.

For each existing client, track:
- Which engine they are currently on
- Month they went live
- Whether they are getting measurable ROI (required before expansion conversation)
- Logical next engine based on their business
- Estimated new MRR if they expand

A client on the Engagement Engine (social media, inbox, basic outreach automation) who is generating leads and seeing results is a natural candidate for the Operations Engine (internal workflow automation) in months 2 or 3. Do not attempt the expansion conversation before they have seen concrete results from the first engine -- you will damage trust and reduce the likelihood of expansion.

---

## Weekly Pipeline Review Agenda (30 Minutes)

Run this every Monday morning. Block it on your calendar. Do not combine it with other meetings.

### Minutes 0-5: Last Week's Wins and New Entries

Review:
- Any deals closed last week (celebrate, then log the win data)
- Any new deals entered (how did they come in? referral, outbound, inbound?)
- Update MRR run rate if any new clients activated

### Minutes 5-10: Backward Movement and Stalled Deals

Pull any deal that:
- Moved backward in stage (rare but important to catch)
- Has not moved forward in 7+ days
- Has a Red health score from last week that has not been addressed

For each stalled deal, make a decision now: specific action to re-engage, or remove from pipeline. Do not let stalled deals sit and distort your coverage ratio.

### Minutes 10-20: Stage 3+ Deal Review (Demo Done, Proposal Sent)

Walk every Stage 3 and Stage 4 deal. For each one, answer the 5 deal review questions:

**5 Questions to Ask for Every Deal in Review:**

1. Has the economic buyer been confirmed and engaged directly?
2. Has the prospect's pain been quantified in their terms (time lost, revenue at risk, headcount cost)?
3. What is the specific next action and is it on both calendars?
4. What is the one thing most likely to kill this deal, and what are you doing about it?
5. What is the realistic close date, and does that fit this month's forecast?

Assign each deal a Green / Yellow / Red health score and update the forecast category (Commit / Best Case / Pipeline).

### Minutes 20-25: Stage 2 Review (Friction Audit Complete, No Proposal Sent)

For each Stage 2 deal:
- Is the proposal drafted? If yes, what is blocking it from going out?
- Is there enough qualifying information to write a specific, tailored proposal?
- If the call was more than 5 days ago and no proposal has gone out, what happened?

Any Stage 2 deal where the Friction Audit was completed more than 5 days ago with no proposal sent should be flagged. If the deal is qualified, send the proposal today, not next week. If it is not qualified, remove it from the pipeline.

### Minutes 25-30: Forecast Update and Priority Actions

With the deal-level review complete:

1. Recalculate your pipeline coverage ratio.
2. Update your weekly forecast (Commit total, Best Case total).
3. Write down your top 3 deal-level priority actions for the week with specific owners and deadlines.
4. Write down your prospecting target for the week (how many new outreaches, follow-ups, or referral asks).

The 30 minutes ends with a written list of priority actions. Without that list, the review is analysis without execution.

---

## Early Warning System

These are the five signals that a deal is dying. The sooner you recognize them, the more options you have.

### Signal 1: No Response for 5+ Days After a Warm Conversation

A prospect who was engaged on the call goes quiet after you send the proposal or follow-up.

**What is happening:** They are either overwhelmed, have deprioritized your solution, or received an internal objection they did not surface to you.

**Recovery action:** Send a direct, short message. Do not send another long follow-up. Try: "Quick check-in -- I want to make sure the proposal I sent addressed everything you mentioned about [specific pain they named]. Is there a part of it you want to walk through together?" If no response in 48 hours, send a break-up message: "I do not want to keep reaching out if the timing has changed. Happy to reconnect whenever it makes sense." This either unlocks a response or lets you free the deal from your pipeline.

---

### Signal 2: Prospect Adds New Decision-Makers Late in the Process

You are at Stage 3 or Stage 4 and suddenly they say "I need to run this by my accountant / partner / operations manager."

**What is happening:** Either you did not identify the full buying committee in discovery, or the prospect is using a new stakeholder as a delay mechanism.

**Recovery action:** Do not let the proposal sit with someone you have not spoken to. Ask for an introduction: "Absolutely -- can we set up a quick 20-minute call with them so I can answer any questions directly and make sure the numbers make sense for their view of the business?" If they refuse the introduction meeting, the new decision-maker may be a ghost objection. Probe for the real concern.

---

### Signal 3: "We Need to Think About It" Without a Specific Date

The call ends without a committed next step. They say they want to think it over.

**What is happening:** An unresolved objection is controlling the conversation from the background. Most "we need to think about it" responses are actually "I am not convinced yet on [specific thing] and I do not want to say so directly."

**Recovery action:** Name the concern explicitly: "That makes sense. In my experience, when someone needs time to think it over, there is usually one specific thing that is not fully resolved yet. What is the main thing you are wrestling with?" This surfaces the real objection and gives you something to address. Then book a specific follow-up before the call ends: "Let us put 15 minutes on the calendar for Thursday -- that gives you two days to think it over and we can answer any questions then."

---

### Signal 4: They Start Asking About Zapier or Make Pricing

Mid-process, the prospect starts referencing competitor tools or asking you to compare your pricing to a DIY automation platform.

**What is happening:** They are conducting parallel evaluation. They may be trying to determine if they can solve the problem themselves more cheaply.

**Recovery action:** Do not get defensive. Acknowledge the comparison and redirect to outcomes: "Zapier is a good tool for connecting apps. What I build is different -- it is a managed system that includes the strategy, the build, and ongoing optimization. The question is not really about the platform cost but about what your time is worth and what happens if the automation breaks at 2am and you are the one who has to fix it." Then anchor back to the specific pain they named and quantify the cost of solving it with DIY vs. a managed engine.

---

### Signal 5: They Reschedule the Proposal Call Twice

Two consecutive reschedules of the proposal review meeting.

**What is happening:** The deal has deprioritized in their world. This can be a capacity issue (genuine) or a priority shift (the pain is no longer urgent enough to act on).

**Recovery action:** Do not book a third call without understanding why the first two moved. Send a message: "I noticed we have had to move this twice -- no problem at all, but I want to make sure the timing is actually right for you. Are you still looking to get this moving in the next 30 days, or has something shifted?" If they confirm interest, book the call with a shorter lead time (2-3 days instead of 5-7). If they hedge, treat this as a Yellow or Red deal and adjust your forecast accordingly.

---

## Expansion Pipeline Tracking

### Tracking Upsell Opportunities Within Existing Clients

Maintain a separate expansion pipeline view in your CRM with the following fields for each existing client:

| Client | Current Engine(s) | Monthly Retainer | Months Active | ROI Confirmed | Expansion Engine | Est. New MRR | Expansion Health | Target Conversation Date |
|--------|-------------------|------------------|---------------|---------------|-----------------|--------------|------------------|--------------------------|
| [Client A] | Engagement | $150 | 3 | Yes | Operations | $170 | Green | [Date] |
| [Client B] | Engagement | $150 | 1 | Partial | -- | -- | Yellow | Month 3 |
| [Client C] | Operations | $170 | 5 | Yes | Voice | $200 | Green | This month |

### The Expansion Health Indicator

A client is ready for an expansion conversation when all three of the following are true:

1. They have been active for at least 60 days (two full billing cycles)
2. They can articulate at least one specific result the engine has produced (time saved, leads generated, tasks removed)
3. There is a logical adjacent problem that a second engine addresses

If any of these three conditions is not met, do not start the expansion conversation. Premature expansion conversations undermine trust and often lead to churn.

### Timing: When to Bring Up Expansion

The ideal expansion conversation happens in Month 2 or 3 after the initial engine is live and producing results. The script is simple: "Based on what you are seeing with [Engine 1], I have been thinking about where the next bottleneck is for you. I noticed [specific observation from their results or onboarding notes]. Would it make sense to take 20 minutes to look at whether that is worth addressing next?"

Never frame expansion as selling them something new. Frame it as the next logical step in their automation roadmap. You are the architect, not the vendor.

### Expansion Win Rate and Cycle

- Target expansion win rate: 60% to 75% (versus 25-40% for new logo deals)
- Target expansion deal cycle: 7 to 14 days (versus 14-35 days for new logo)

The reason expansion win rates and close speeds are much higher:
- You have established trust through delivery
- You already understand their business and their pain
- The economic buyer knows you and has already made a buy decision once
- The onboarding process is faster (you are already integrated)

This means expansion deals are your most efficient revenue. Treat the expansion pipeline with the same rigor as the new logo pipeline, but recognize it requires different skills: delivery excellence, relationship depth, and timing awareness rather than outbound prospecting and cold qualification.

### How Expansion Deals Differ from New Logo Deals

| Factor | New Logo | Expansion |
|--------|----------|-----------|
| Outreach method | Cold / warm outbound, referrals | Proactive check-in from existing relationship |
| Economic buyer familiarity | Unknown | Already known and trusted |
| Discovery required | Full Friction Audit | Abbreviated review of new problem area |
| Proposal complexity | Full tailored proposal | One-page engine add-on scope |
| Objection type | "What is this? Can I trust you?" | "Is this the right time? Do I need it?" |
| Close timeline | 14-35 days | 7-14 days |
| Win rate | 25-40% | 60-75% |

Manage expansion deals with a lighter touch. A formal proposal is often not required -- a clear Loom walkthrough of the new engine scope and a one-page summary is frequently enough to close an expansion in a single follow-up conversation.

---

## Monthly Health Dashboard

Review these numbers on the last business day of every month. The goal is not just to record them but to identify the one or two things that most need to change in the coming month.

### Key Metrics to Review

1. **New MRR added:** Total new monthly retainer from clients who activated this month
2. **Setup revenue collected:** Total one-time fees received this month
3. **Expansion MRR:** New retainer from existing clients adding engines
4. **Churned MRR:** Retainer lost from engine cancellations
5. **NRR:** Calculated as shown above
6. **MRR Run Rate (end of month):** Total active recurring retainer at month close
7. **Pipeline coverage for next month:** Total pipeline value / next month close target
8. **Win rate (rolling 90 days):** Deals closed / proposals sent over the last 90 days
9. **Deal cycle (rolling 90 days):** Average days from first contact to close over the last 90 days
10. **Show rate (rolling 30 days):** Calls completed / calls booked over the last 30 days

### Monthly Dashboard Template

| Metric | Target | This Month | Last Month | 90-Day Avg | Status |
|--------|--------|------------|------------|------------|--------|
| New MRR Added | [goal] | $[amount] | $[amount] | $[amount] | Green / Yellow / Red |
| Setup Revenue | [goal] | $[amount] | $[amount] | $[amount] | Green / Yellow / Red |
| Expansion MRR | 30%+ of new MRR | $[amount] | $[amount] | $[amount] | Green / Yellow / Red |
| Churned MRR | < 5% of MRR | $[amount] | $[amount] | $[amount] | Green / Yellow / Red |
| NRR | 110%+ | [%] | [%] | [%] | Green / Yellow / Red |
| MRR Run Rate | [growing] | $[amount] | $[amount] | -- | Green / Yellow / Red |
| Pipeline Coverage (next month) | 4-5x | [x] | [x] | [x] | Green / Yellow / Red |
| Win Rate (rolling 90d) | 25-40% | [%] | [%] | [%] | Green / Yellow / Red |
| Deal Cycle (rolling 90d) | 14-35 days | [days] | [days] | [days] | Green / Yellow / Red |
| Show Rate (rolling 30d) | 70-85% | [%] | [%] | [%] | Green / Yellow / Red |

### How to Use the Dashboard

Do not just fill it in and move on. For every metric marked Red, write one specific action you will take in the coming month to address it. For every metric marked Green, write one note on why it is working so you can replicate that behavior.

The dashboard is most powerful when reviewed as a trend over 3-4 months. A single month of low win rate may be noise. Three months of declining win rate is a signal requiring significant investigation and change.

---

## Common Pipeline Problems and Fixes

### Problem 1: Pipeline Looks Full but Nothing Is Closing

**Diagnosis:** This is almost always a deal quality problem masked by a large pipeline. The pipeline is full of deals that are not actually qualified -- no confirmed economic buyer, no quantified pain, no real timeline. They feel real because they had conversations with you, but they have not actually committed to evaluating your solution seriously.

**Fix:**
Run the Deal Health Scorecard on every deal in the pipeline today. Remove any deal that is Red and has been Red for more than 21 days without improvement. Recalculate your pipeline coverage after removing dead deals -- you will likely find coverage drops significantly, which is actually useful information because now your pipeline reflects reality.

Going forward, add a qualification gate before any deal moves from Stage 1 to Stage 2: you must have confirmed the prospect's specific pain, identified the economic buyer, and established that they have budget authority or a budget approval process. If you cannot confirm these three things, the deal stays at Stage 1 until you can.

---

### Problem 2: Win Rate Is Low but Proposals Keep Going Out

**Diagnosis:** You are proposing too early or to unqualified prospects. A low win rate on a high volume of proposals means your Stage 2 qualification process is not filtering effectively. You are treating the proposal as a brochure rather than a commitment.

**Fix:**
Add a proposal readiness checklist that must be completed before any proposal is generated:

- [ ] Economic buyer has been on at least one call
- [ ] Pain has been stated in the prospect's own words and quantified
- [ ] Prospect has confirmed they have budget available or a process to get it
- [ ] Prospect has given a timeline ("we want to move on this by [date]")
- [ ] At least 4 MEDDPICC elements are confirmed

If a deal fails three or more items on this checklist, do not send a proposal. Instead, schedule a follow-up conversation to fill those gaps. This will reduce proposal volume in the short term but significantly improve close rate.

---

### Problem 3: Show Rate Is Dropping Below 70%

**Diagnosis:** There are three common causes: calls are being booked too far out (more than 5 days), your confirmation sequence is weak or absent, or the prospect's urgency was low when they booked and has not been sustained.

**Fix:**

First, implement a three-touch confirmation sequence if you have not already:
- Immediate confirmation email: Confirms the time, includes a one-sentence reminder of what you will cover and why it matters to them specifically.
- 24-hour reminder: Short and direct. Includes a calendar file attachment and a one-line re-anchor on their pain.
- 1-hour reminder: A simple text message or brief email with the meeting link. No extra content needed.

Second, review your booking window. If your scheduling link defaults to showing availability 7-10 days out, change it to a maximum of 5 days. The urgency that drives a booking decays quickly.

Third, on the booking confirmation, include a short video or voice note (60 seconds or less) where you reference the specific thing they told you triggered the booking. This makes the call feel personal and worth showing up for.

---

### Problem 4: Deal Cycle Is Stretching Beyond 35 Days

**Diagnosis:** Long deal cycles usually have one of four causes: (1) the economic buyer is not engaged and decisions require approval you are not part of, (2) there is no urgency -- the prospect is evaluating but has no forcing function to decide, (3) your follow-up is too passive, or (4) the proposal was not specific enough and the prospect is still figuring out what they are buying.

**Fix:**

For each deal over 35 days, run this diagnosis:
- Is the economic buyer in active conversation with you? If no, get them on a call this week.
- Has the prospect articulated a reason they need this solved by a specific date? If no, surface one. Ask: "Is there a reason the timing matters to you right now, or is this more of a longer-term thing?" If it is longer-term with no urgency, the deal should move to nurture status and be removed from your active pipeline.
- Is your follow-up cadence creating momentum? Every interaction should end with a specific next step booked. If calls end with "I will follow up next week," you are running a passive sales process. Transition to "let us put 15 minutes on Thursday to go over your questions."

---

### Problem 5: All Deals Are Stuck at Stage 2 (Friction Audit Done, No Proposal Sent)

**Diagnosis:** This is a common trap for agency founders who are uncomfortable with writing proposals or who over-customize every proposal to the point of paralysis. It can also signal a qualification issue -- you completed audits with people who are not ready to buy.

**Fix:**

Build a proposal template that covers 80% of what every Autoflow proposal needs. The template should include:
- A "Current State" section that summarizes the pain they described in their words
- A "Recommended Engine" section with one specific engine recommendation (not a menu)
- A "What This Looks Like" section with 3-4 bullet points on deliverables
- A "Your Investment" section with the specific setup fee and monthly retainer
- A "Next Steps" section with a clear call to action

With a template like this, a fully customized proposal should take 20-30 minutes to write. If it is taking more than 45 minutes, the template is not tight enough.

Set a rule: proposals must go out within 48 hours of the qualifying call. If you cannot write it in time, schedule a 30-minute proposal block the day after every Friction Audit automatically.

---

### Problem 6: Expansion Is Not Happening (Clients Staying on One Engine)

**Diagnosis:** Expansion requires three things that may be missing: (1) you are not tracking which clients are ready for expansion conversations, (2) you are not having the conversation at the right time, or (3) the first engine is not producing visible results that make the client confident in investing further.

**Fix:**

First, build the expansion pipeline view described in the Expansion Pipeline Tracking section above and review it every week. Make it a standing item in your Monday review.

Second, audit your delivery process. If clients are not able to articulate a result from the first engine by Month 2, you have a delivery or expectation-alignment problem. The expansion conversation cannot happen until the client believes in the value of what they already have.

Third, make expansion conversations a part of your standard client check-in rhythm. At the Month 2 check-in, include an "automation roadmap" conversation as a standard agenda item. This normalizes expansion as an expected part of the relationship rather than a surprise sales conversation.

Finally, track your expansion win rate. If you are having the conversations and the win rate is below 60%, review your expansion timing (too early?), your framing (are you selling or advising?), and whether you are going back to the economic buyer or trying to expand through a contact who does not have spending authority.

---

*This playbook is a living document. Review and update the metric targets and templates quarterly as Autoflow adds clients, refines its sales process, and accumulates real performance data to replace the initial benchmarks.*
