// Count of all messages
const messageCount = await client.lLen('messages');

// Visit count from App 1
const visitCount = parseInt(await client.get('visit_count') || '0');

// Last 5 messages to preview
const recent = await client.lRange('messages', 0, 4);

<meta http-equiv="refresh" content="10">
...
<div class="metric-card">
<div class="value">{messageCount}</div>
<div class="label">Total Messages</div>
</div>