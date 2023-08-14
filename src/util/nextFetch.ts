const BASE_URL = 'http://localhost:3000/api';
const BASE_HEADERS = { 'Content-Type': 'application/json' };

class NextFetch {
  private baseUrl;
  private headers;

  constructor(option: RequestConfig = { baseUrl: BASE_URL, headers: BASE_HEADERS }) {
    this.baseUrl = option.baseUrl;
    this.headers = option.headers;
  }

  private async baseRequest(path: string, method: Method, init?: RequestInit) {
    const res = await fetch(`${this.baseUrl}/${path}`, {
      method,
      headers: this.headers,
      ...init,
    });
    const result = await res.json();

    return result;
  }

  async get(path: string, options?: RequestInit) {
    const result = await this.baseRequest(path, 'GET', options);

    return result;
  }
  async post(path: string, payload: object, options?: RequestInit) {
    const result = await this.baseRequest(path, 'POST', {
      body: JSON.stringify(payload),
      ...options,
    });

    return result;
  }
  async patch(path: string, payload: object) {
    const result = await this.baseRequest(path, 'PATCH', {
      body: JSON.stringify(payload),
    });

    return result;
  }
  async put(path: string, payload: object) {
    const result = await this.baseRequest(path, 'PUT', {
      body: JSON.stringify(payload),
    });

    return result;
  }
  async delete(path: string) {
    const result = await this.baseRequest(path, 'DELETE');

    return result;
  }

  create(option: RequestConfig = { baseUrl: BASE_URL, headers: BASE_HEADERS }) {
    return new NextFetch(option);
  }
}

const nextFetch = new NextFetch();

export { nextFetch };
