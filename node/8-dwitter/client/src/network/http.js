export default class HttpClient {
    constructor(baseUrl, authErrorEventBus) {
        this.baseUrl = baseUrl;
        this.authErrorEventBus = authErrorEventBus;
    }

    async fetch(url, options) {
        const res = await fetch(`${this.baseUrl}${url}`, {
            ...options,
            headers: {
                'Content-Type': 'application/json',
                ...options.headers,
            },
        });

        let data;
        try {
            data = await res.json();
        } catch (error) {
            // body가 없는 경우
            console.error(error);
        }

        if (res.status > 299 || res.status < 200) {
            const message =
                data && data.message ? data.message : 'response problem!';
            const error = new Error(message);
            if (res.status === 401) {
                // Anauthorize -> 자동로그아웃
                this.authErrorEventBus.notify(error);
            }
            throw error;
        }

        return data;
    }
}
