const client = redis.createClient({
socket: { host: 'redis', port: 6379 }
});

// On page load: increment visit counter
await client.incr('visit_count');

// On form submit: add message to list
await client.lPush('messages', message);