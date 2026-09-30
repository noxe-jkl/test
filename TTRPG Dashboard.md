
> [!summary]+ 🎲 The Master Ledger
> Welcome to your TTRPG Dashboard. Use the command palette or your mobile toolbar to log new sessions or prep for upcoming games.
> 
> ```dataview
> TABLE WITHOUT ID
>   (sum(default(rows.hours_played, 0)) + sum(default(rows.historical_hours, 0))) AS "Grand Total Hours Played"
> WHERE campaign AND !contains(file.name, "Template")
> GROUP BY true
> ```

---
## Recent Adventures
> [!fyi] The last 5 sessions across all games.
```dataview
TABLE WITHOUT ID
  link(file.name) AS "Session File",
  campaign as "Campaign", 
  date as "Date", 
  hours_played as "Hours"
WHERE type = "session" AND hours_played > 0 AND !contains(file.name, "Template")
SORT date DESC
LIMIT 5
```

## Campaign Leaderboard
> [!info] Active & Past Campaigns
> This automatically links to your Home notes and tallies both your QuickAdd sessions and your manual historical catch-up hours.
```dataview
TABLE WITHOUT ID 
  link(key + " Campaign Home", key) AS "Campaign",
  sum(default(rows.hours_played, 0)) as "Tracked", 
  sum(default(rows.historical_hours, 0)) as "Historical", 
  (sum(default(rows.hours_played, 0)) + sum(default(rows.historical_hours, 0))) as "Total Hours"
WHERE campaign AND !contains(file.name, "Template")
GROUP BY campaign
SORT (sum(default(rows.hours_played, 0)) + sum(default(rows.historical_hours, 0))) DESC
```
