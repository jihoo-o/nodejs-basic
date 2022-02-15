// abcd1234: $2b$12$oEaMUepUM36p.JSRtpsH4.arZQ8L12AMIaLq8TKnFmoZ2xM3Nh0sS

let users = [
    {
        id: '1',
        username: 'bob',
        password:
            '$2b$10$yrgFjMgBg4evcvUroI42M.WvlC34OedKmpmtVmKtXym6V5.F/pHa2',
        name: 'Bob',
        email: 'bob@gmail.com',
    },
];

export async function findByUsername(username) {
    return users.find((user) => user.username === username);
}

export async function createUser(user) {
    const created = { ...user, id: Date.now().toString() };
    users.push(created);
    return created.id;
}
