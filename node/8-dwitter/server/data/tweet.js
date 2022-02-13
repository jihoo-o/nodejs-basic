let tweets = [
    {
        id: '1',
        text: 'good morning',
        createAdd: Date.now().toString(),
        name: 'Bob',
        username: 'bob',
        url: 'https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png',
    },
    {
        id: '2',
        text: 'Im gonna take a walk',
        createAdd: Date.now().toString(),
        name: 'Lose',
        username: 'Lose',
        url: 'https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png',
    },
];

export function getAll() {
    return tweets;
}

export function getAllByUsername(username) {
    return tweets.filter((t) => t.username === username);
}

export function getById(id) {
    return tweets.find((t) => t.id === id);
}

export function create(text, name, username) {
    const tweet = {
        id: Date.now().toString(),
        text,
        createdAt: Date.now().toString(),
        name,
        username,
    };
    tweets.unshift(tweet);
    return tweet;
}

export function update(id, text) {
    const tweet = tweets.find((t) => t.id === id);
    if (tweet) {
        tweet.text = text;
    }
    return tweet;
}

export function remove(id) {
    tweets = tweets.filter((t) => t.id !== id);
}
