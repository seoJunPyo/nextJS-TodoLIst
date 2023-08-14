const BASE_HEADERS = { 'Content-Type': 'application/json' };

class NextFetch {
  async baseRequest(url: string, method: Method = 'GET', init?: RequestInit) {
    const res = await fetch(url, {
      method,
      headers: BASE_HEADERS,
      ...init,
    });

    const result = await res.json();

    return result;
  }

  async get(path: string) {
    const result = await this.baseRequest(`${process.env.BASE_URL}/api/${path}`);

    console.log(`${process.env.BASE_URL}api/${path}`);

    return result;
  }

  async post(path: string, payload: { [key: string | number]: unknown }, options?: RequestInit) {
    const result = await this.baseRequest(`/api/${path}/`, 'POST', {
      body: JSON.stringify(payload),
      ...options,
    });

    return result;
  }

  async patch(path: string, payload: { [key: string | number]: unknown }, options?: RequestInit) {
    const result = await this.baseRequest(`/api/${path}/`, 'PATCH', {
      body: JSON.stringify(payload),
      ...options,
    });

    return result;
  }

  async put(path: string, payload: { [key: string | number]: unknown }, options?: RequestInit) {
    const result = await this.baseRequest(`/api/${path}/`, 'PUT', {
      body: JSON.stringify(payload),
      ...options,
    });

    return result;
  }

  async delete(path: string) {
    const result = await this.baseRequest(`/api/${path}/`, 'DELETE');

    return result;
  }
}

const nextFetch = new NextFetch();

export { nextFetch };
