let db = {
    users: [
        {
            userId: 'ZNXGbzavTPgwIKOhWDkqrHItmO43',
            email: 'user@email.com',
            handle: 'user',
            createdAt: '2019-10-11T07:07:13.047Z',
            imageUrl: 'image/dskslslslsls/dkdkdkdkd',
            bio: 'Hello, my name is user, nice to meet you',
            website: 'https://user.com',
            location: 'Kathmandu, Nepal'
        }
    ],
    screams: [
        {
            userHandle: 'user',
            body: 'this is the scream body',
            createdAt: '2019-10-06T08:21:44.523Z',
            likeCount: 5,
            commentCount: 2
        }
    ],
    comments: [
        {
            userHandle: 'user',
            screamId: 'hjdhhgkhkdkgkhkdljls',
            body: 'nice one mate!',
            createdAt: '2019-10-11T07:07:13.047Z'
        }
    ]
};
const userDetails = {
    // Redux data
    credentials: {
        userId: 'ZNXGbzavTPgwIKOhWDkqrHItmO43',
        email: 'user@email.com',
        handle: 'user',
        createdAt: '2019-10-11T07:07:13.047Z',
        imageUrl: 'image/dskslslslsls/dkdkdkdkd',
        bio: 'Hello, my name is user, nice to meet you',
        website: 'https://user.com',
        location: 'Kathmandu, Nepal'
    },
    likes: [
        {
            userHandle: 'user',
            screamId: 'hjdhhgkhkdkgkhkdljls'
        },
        {
            userHandle: 'user',
            screamId: 'uoguohgohaoeoeojfowe'
        }
    ]
}