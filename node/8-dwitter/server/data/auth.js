let users = [
    {
        id: '1',
        username: 'bob',
        // abcd1234
        password:
            '$2b$10$yrgFjMgBg4evcvUroI42M.WvlC34OedKmpmtVmKtXym6V5.F/pHa2',
        name: 'Bob',
        email: 'bob@gmail.com',
    },
    {
        id: '2',
        username: 'seonhwa',
        // 12345
        password:
            '$2b$12$/oXrjLvglzFCcgaN1pm/AOtSugsREXWkCPCktnyFhg8ThkSpLsFuC',
        name: 'Seonhwa',
        email: 'seonhwa@gmail.com',
    },
];

export async function findByUsername(username) {
    return users.find((user) => user.username === username);
}

export async function findById(id) {
    return users.find((user) => user.id === id);
}

export async function createUser(user) {
    const created = { ...user, id: Date.now().toString() };
    users.push(created);
    return created.id;
}
